<script setup lang="ts">
type Props = {
  name: string;
  avatar: string | undefined;
};

defineProps<Props>();

const isSidebar = useSidebar();
</script>

<template>
  <div class="flex items-center gap-3" :class="{ 'justify-center': !isSidebar }">
    <div
      class="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200"
      :title="!isSidebar ? name : ''"
    >
      <img v-if="avatar" :src="avatar" :alt="name" />
      <Icon v-else name="ph:user" size="1.5rem" />
    </div>

    <span v-if="isSidebar" class="font-medium animate-after-sidebar-delay">{{ name }}</span>
  </div>
</template>
