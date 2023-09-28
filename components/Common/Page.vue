<script setup lang="ts">
type Props = {
  title: string;
};

defineProps<Props>();
</script>

<template>
  <div class="px-10 pt-10">
    <h1 class="text-3xl font-medium">{{ title }}</h1>

    <slot />
  </div>
</template>
