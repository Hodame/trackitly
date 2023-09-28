<script setup lang="ts" generic="T extends string | Record<string, any>">
type Props = {
  options: T[];
  label?: string;
  placeholder?: string;
  titleField?: keyof T;
};

const props = withDefaults(defineProps<Props>(), { placeholder: 'Select' });
const modelValue = defineModel<T>();

const selectRef = ref<HTMLDivElement>();
const [isSelectOpened, toggleSelect] = useToggle(false);

const select = (opt: T) => ((modelValue.value = opt), toggleSelect(false));

function defineTitle(opt: T) {
  if (typeof opt === 'object') {
    if (props.titleField) return opt[props.titleField];
    if ('title' in opt) return opt.title as string;
  }

  return opt;
}

function checkSelected(opt: T) {
  if (!modelValue) return false;

  if (typeof opt === 'object') {
    return JSON.stringify(opt) === JSON.stringify(modelValue.value);
  }

  return opt === modelValue.value;
}

onClickOutside(selectRef, () => toggleSelect(false));
</script>

<template>
  <input class="invisible h-0 absolute" type="text" v-model="modelValue" />

  <div ref="selectRef" class="relative">
    <p v-if="label" class="mb-1 ml-1 text-sm font-medium">{{ label }}</p>

    <div
      class="flex cursor-pointer items-center justify-between rounded-md bg-gray-200 p-2 pl-5"
      @click="toggleSelect()"
    >
      <span v-if="modelValue">{{ defineTitle(modelValue) }}</span>
      <span v-else class="text-gray-500">{{ placeholder }}</span>

      <Icon
        class="transition-all"
        :class="{ '-rotate-180 text-blue-500': isSelectOpened }"
        name="ph:caret-down-bold"
      />
    </div>

    <Transition>
      <div
        v-if="isSelectOpened"
        class="absolute z-50 mt-1 w-full overflow-hidden rounded-md bg-gray-200"
      >
        <p
          v-for="(option, idx) in options"
          class="cursor-pointer p-2 pl-5 hover:bg-gray-300"
          :class="{ 'font-bold': checkSelected(option) }"
          :key="idx"
          @click="select(option)"
        >
          {{ defineTitle(option) }}
        </p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 150ms ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.v-leave-from,
.v-enter-to {
  transform: translateY(0px);
  opacity: 1;
}
</style>
