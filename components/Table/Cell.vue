<script setup lang="ts">
type Props = {
  overflow?: boolean;
  center?: boolean;
  custom?: boolean;
  header?: boolean
  /**
   * @description provide a width with percentage of a table
   * @example 10% or 60%
   */
  width?: string;
};

withDefaults(defineProps<Props>(), { overflow: true, center: false, custom: false, header: false });
</script>

<template>
  <td
    :style="{ width }"
    :class="{
      'text-ellipsis': overflow,
      'text-center': center,
      'p-3  max-w-0 overflow-hidden': custom,
      'p-3': header, 
      'overflow-hidden text-ellipsis max-w-0 whitespace-nowrap p-3': !custom && !header
    }"
  >
    <slot />
  </td>
</template>
