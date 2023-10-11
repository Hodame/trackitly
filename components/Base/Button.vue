<script setup lang="ts">
import { cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'nuxt/dist/app/compat/capi';

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  text?: string;
  inline?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  intent?: 'primary' | 'secondary';
  size?: 'default';
}

const props = withDefaults(defineProps<Props>(), {
  intent: 'primary',
  size: 'default'
});

const styles = computed(() => {
  return cva('rounded-md flex items-center gap-1 transition-all font-medium', {
    variants: {
      intent: {
        primary: 'bg-blue-700 text-white hover:bg-blue-800 active:bg-blue-900',
        secondary: 'bg-gray-100 text-blue-600 hover:bg-gray-200 active:bg-gray-300'
      },
      size: {
        default: 'py-2 px-3'
      }
    },
    compoundVariants: [
      {
        intent: ['primary', 'secondary'],
        class: 'disabled:bg-gray-100 disabled:text-gray-500'
      }
    ]
  })(props);
});
</script>

<template>
  <button :class="[inline ? 'inline' : 'block w-full', styles]">
    <Icon v-if="leftIcon" :name="leftIcon" size="1.25rem"/>
    <span>{{ text }}</span>
    <Icon v-if="rightIcon" :name="rightIcon" size="1.25rem" />
  </button>
</template>
