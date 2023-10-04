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
    class="my-2 flex w-full cursor-pointer select-none flex-col gap-2 rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
  >
    <p class="line-clamp-2 text-lg">{{ title }}</p>

    <div class="flex items-center justify-between gap-2">
      <div class="flex items-center ">
        <div class="flex h-7 w-7 items-center mr-3 flex-auto justify-center rounded-full bg-gray-200">
          <img v-if="userAvatar" :src="userAvatar" alt="user" />
          <Icon v-else name="ph:user" size="1rem" />
        </div>
        <span class="font-medium text-sm text-gray-500 line-clamp-1">{{ userName }}</span>
      </div>
      <BaseBadge :text="task" />
    </div>
  </div>
</template>
