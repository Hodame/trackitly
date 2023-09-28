<script setup lang="ts">
const navbarRef = ref<HTMLDivElement>();
const isSidebar = useSidebar();
const navbarHeight = useElementSize(navbarRef).height;
</script>

<template>
  <div
    class="grid h-screen transition-all duration-300"
    :class="isSidebar ? 'grid-cols-[270px,1fr]' : 'grid-cols-[100px,1fr]'"
  >
    <Sidebar />
    
    <div>
      <NavBar ref="navbarRef" class="fixed" />
      <div class="my-5" :style="{ height: `${navbarHeight}px` }"></div>
      <slot />
    </div>
  </div>
</template>
