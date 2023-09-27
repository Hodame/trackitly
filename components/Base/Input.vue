<script setup lang="ts">
import { InputHTMLAttributes } from 'nuxt/dist/app/compat/capi';

interface Props extends /* @vue-ignore */ InputHTMLAttributes {
  as?: 'input' | 'textarea';
  leftIcon?: string;
  rightIcon?: string;
}

withDefaults(defineProps<Props>(), { as: 'input' });

const modelValue = defineModel<string>();
</script>

<template>
  <div class="relative">
    <Icon
      v-if="leftIcon"
      class="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500"
      :name="leftIcon"
    />

    <component
      v-model="modelValue"
      v-bind="$attrs"
      class="w-full rounded-md bg-white p-1 pl-3 outline-none transition-all focus:ring-2 focus:ring-blue-600"
      :class="{
        'pl-8': leftIcon,
        'pr-8': rightIcon
      }"
      :is="as"
      :title="modelValue"
    />

    <Icon
      v-if="rightIcon"
      class="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500"
      :name="rightIcon"
    />
  </div>
</template>
