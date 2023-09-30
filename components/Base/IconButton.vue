<script setup lang="ts">
import { cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'nuxt/dist/app/compat/capi';

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  icon: string;
  rounded?: boolean
  intent?: 'primary';
  size?: 'default';
}

const props = withDefaults(defineProps<Props>(), {
  intent: 'primary',
  size: 'default'
});

const styles = computed(() => {
  return cva('flex items-center justify-center transition-all', {
    variants: {
      intent: {
        primary: 'text-gray-600 hover:bg-gray-300 active:bg-gray-200',
      },
      size: {
        small: 'p-1',
        default: 'p-2'
      }
    },
  })(props);
});
</script>

<template>
  <button :class="[rounded ? 'rounded-full' : 'rounded-md' ,styles]">
    <Icon :name="icon" size="1.25rem" />
  </button>
</template>
