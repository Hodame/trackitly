<script setup lang="ts">
export type BoardCardProps = {
  id: number;
  task: string;
  title: string;
  userName: string;
  userAvatar?: string | null;
};

defineProps<BoardCardProps>();
</script>

<template>
  <div
    class="my-2 flex w-full cursor-pointer select-none flex-col gap-2 rounded-lg border border-gray-200 bg-white p-3 shadow-md"
  >
    <h1 class="text-lg font-medium text-gray-500">{{ task }}</h1>
    <p class="line-clamp-3 text-lg text-blue-500">{{ title }}</p>

    <div class="flex items-center gap-2">
      <div class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
        <img v-if="userAvatar" :src="userAvatar" alt="user" />
        <Icon v-else name="ph:user" size="1.25rem" />
      </div>
      <span class="font-medium">{{ userName }}</span>
    </div>
  </div>
</template>
