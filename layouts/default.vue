<script setup lang="ts">
const isSidebar = useSidebar();
</script>

<template>
  <div
    class="grid h-screen transition-all duration-300"
    :class="isSidebar ? 'grid-cols-[270px,1fr]' : 'grid-cols-[100px,1fr]'"
  >
    <Sidebar />
    <div>
      <NavBar />
      <slot />
    </div>
  </div>
</template>
