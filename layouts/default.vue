<script setup lang="ts">
const sidebarOpened = ref(true);
</script>

<template>
  <div
    class="grid h-screen"
    :class="sidebarOpened ? 'grid-cols-[270px,1fr]' : 'grid-cols-[70px,1fr]'"
  >
    <Sidebar />
    <div>
      <slot/>
    </div>
  </div>
</template>
