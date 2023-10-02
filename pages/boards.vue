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
const draggedCard = useDraggedElement();
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
      <div v-if="draggedCard" class="absolute transition-all">
        <BoardsCard
          class="border border-blue-500 opacity-50"
          :style="{ width: `${draggedCard.width}px`, height: `${draggedCard.height}px` }"
          :id="draggedCard.id"
          :idx="draggedCard.idx"
          :task="draggedCard.task"
          :title="draggedCard.title"
          :user-name="draggedCard.userName"
          :user-avatar="draggedCard.userAvatar"
        />
      </div>

      <div class="mt-6 grid h-full grid-cols-4 gap-4">
        <BoardsBase
          v-for="(board, idx) in boards"
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
