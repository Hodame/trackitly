<script setup lang="ts">
import { BoardCardProps } from '~/components/Boards/Card.vue';
import { useBoards } from '~/composables/states';

export type Boards = {
  id: number;
  title: string;
  icon: string;
  cards: BoardCardProps[];
};

const boards = useBoards();

watch(boards, () => console.log(boards.value));
</script>

<template>
  <div class="flex h-full flex-col">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-xl font-medium">Tasks board</h1>
        <p class="text-lg text-gray-500">Create and complete tasks using boards</p>
      </div>

      <BaseButton inline text="Create board" right-icon="ph:plus-bold" />
    </div>

    <div class="flex-auto">
      <div class="mt-6 flex h-full gap-4 overflow-x-auto">
        <BoardsBase
          v-for="(board, idx) in boards"
          class="flex-[0_0_300px] w-full"
          :key="idx"
          :id="board.id"
          :title="board.title"
          :icon="board.icon"
          :cards="board.cards"
        />
      </div>
    </div>
  </div>
</template>
