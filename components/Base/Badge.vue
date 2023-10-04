<script setup lang="ts">
import { cva } from 'class-variance-authority';

const props = withDefaults(defineProps<{ text: string; intent?: 'blue' | 'red'; size?: 'medium' }>(), {
  intent: "blue",
  size: "medium"
});

const badge = cva('rounded-full whitespace-nowrap', {
  variants: {
    intent: {
      blue: 'bg-blue-100 text-blue-600',
      red: "bg-red-100 text-red-600"
    },
    size: {
      medium: 'py-1 px-2 text-sm'
    }
  }
})(props);
</script>

<template>
  <span :class="badge">{{ text }}</span>
</template>
