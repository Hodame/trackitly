<script setup lang="ts">
type Props = {
  text: string;
  to: string;
  opened?: boolean;
  icon?: string;
};

defineProps<Props>();
defineSlots()
</script>

<template>
  <NuxtLink
    :to="to"
    class="group flex w-full items-center gap-1.5 rounded-2xl px-4 py-3 text-left hover:bg-blue-100 [&.router-link-active]:bg-blue-700"
  >
    <span v-if="icon" class="text-black group-[.router-link-active]:text-white">
      <Icon :name="icon" size="1.5rem" />
    </span>
    <span class="font-medium text-black group-[.router-link-active]:text-white">{{ text }}</span>
  </NuxtLink>

  <div>
    <slot name="nestedLinks" />
  </div>
</template>
