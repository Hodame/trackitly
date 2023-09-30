<script setup lang="ts">
import { StyleValue } from 'nuxt/dist/app/compat/capi';

type Props = {
  text: string;
  to: string;
  icon?: string;
};

type Slots = {
  nestedLinks?(): void;
};

defineProps<Props>();
const slots = defineSlots<Slots>();

const isSidebar = useSidebar();
const isNestedOpened = ref(false);
const nestedLinks = ref<HTMLDivElement>();
const tile = ref<HTMLDivElement>();

const { height } = useElementSize(nestedLinks);
const { height: tileHeight } = useElementSize(tile);

const nestedLinksStyle = computed<StyleValue>(() => {
  if (!isSidebar.value) isNestedOpened.value = false;

  if (!isNestedOpened.value) {
    return {
      height: `${tileHeight.value}px`
    };
  }

  return {
    height: `${tileHeight.value + height.value}px`
  };
});
</script>

<template>
  <div :style="nestedLinksStyle" class="box-content overflow-hidden transition-all">
    <div ref="tile" class="flex items-center gap-2">
      <NuxtLink
        class="group my-1 flex w-full items-center gap-1.5 rounded-2xl px-4 py-3 text-left hover:bg-blue-100 [&.router-link-active]:bg-blue-700"
        :to="to"
        :class="{ 'justify-center': !isSidebar }"
        :title="!isSidebar ? text : ''"
      >
        <span v-if="icon" class="text-black group-[.router-link-active]:text-white">
          <Icon :name="icon" size="1.5rem" />
        </span>
        <span
          v-if="isSidebar"
          class="font-medium text-black group-[.router-link-active]:text-white"
        >
          {{ text }}
        </span>
      </NuxtLink>

      <button
        v-if="isSidebar && slots.nestedLinks"
        @click="isNestedOpened = !isNestedOpened"
        class="rounded-full bg-gray-200 px-2 py-1"
      >
        <Icon
          class="-translate-y-[0.1rem] transition-all"
          :class="{ 'rotate-180': isNestedOpened }"
          name="ph:caret-down"
        />
      </button>
    </div>

    <div v-if="isSidebar" ref="nestedLinks" class="ml-5">
      <slot name="nestedLinks" />
    </div>
  </div>
</template>
