<script setup lang="ts">
import { useBoards } from '~/composables/states';

export type Boards = {
  id: number;
  title: string;
  icon: string;
  cards: {
    id: number;
    boardId: number;
    task: string;
    title: string;
    userName: string;
    userAvatar?: string;
  }[];
};

const boards = useBoards()

</script>

<template>
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-xl font-medium">Tasks board</h1>
      <p class="text-lg text-gray-500">Create and complete tasks using boards</p>
    </div>

    <BaseButton inline text="Create board" right-icon="ph:plus-bold" />
  </div>

  <div class="mt-6 grid grid-cols-4 gap-4">
    <BoardsBase
      v-for="(board, idx) in boards"
      :key="idx"
      :id="board.id"
      :title="board.title"
      :icon="board.icon"
      :cards="board.cards"
    />
  </div>
</template>
