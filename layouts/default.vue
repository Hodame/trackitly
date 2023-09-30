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
    
    <div class="relative">
      <NavBar ref="navbarRef" class="absolute py-2.5" />
      <div class="my-2.5" :style="{ height: `${navbarHeight}px` }"></div>
      <div class="px-7 pt-7 m-auto max-w-screen-2xl">
        <slot />
      </div>
    </div>
  </div>
</template>
