<script setup lang="ts">
import { BoardCardProps } from './Card.vue';
import { Sortable } from 'sortablejs-vue3';
import type { SortableEvent, SortableOptions } from 'sortablejs';
import type { AutoScrollOptions } from 'sortablejs/plugins';
import { moveItemInArray } from '~/utils/moveItemInArray';

type Props = {
  id: number;
  title: string;
  cards: BoardCardProps[];
  icon?: string;
};

const key = getCurrentInstance()?.vnode.key;
const options: SortableOptions | AutoScrollOptions = {
  animation: 200,
  ghostClass: 'ghost',
  group: 'boards',
  scroll: true,
  forceFallback: true,
  scrollSensitivity: 60,
  scrollSpeed: 20,
  fallbackOnBody: false,
  bubbleScroll: true
};

const boards = useBoards();

function updateBoard(event: SortableEvent) {
  const fromBoardIdx = Number(event.from.dataset.boardIdx);
  const toBoardIdx = Number(event.to.dataset.boardIdx);
  const from = event.oldIndex;
  const to = event.newIndex;

  if (Number.isNaN(fromBoardIdx) || Number.isNaN(toBoardIdx)) return;
  if (from === undefined || to === undefined) return;

  if (fromBoardIdx == toBoardIdx) {
    moveItemInArray(boards.value[toBoardIdx].cards, from, to);
    return;
  }

  event.item.remove();
  const item = boards.value[fromBoardIdx].cards.splice(from, 1)[0];
  boards.value[toBoardIdx].cards.splice(to, 0, item);
}

defineProps<Props>();
</script>

<template>
  <div ref="board" class="relative flex h-full flex-col gap-4 transition-all">
    <BoardsHeader :icon="icon" :title="title" />
    <Sortable
      item-key="id"
      :data-board-idx="key"
      :options="options"
      :list="cards"
      @end="(e) => updateBoard(e)"
    >
      <template #item="{ element }">
        <BoardsCard
          :id="element.id"
          :task="element.task"
          :title="element.title"
          :user-name="element.userName"
          :user-avatar="element.userAvatar"
        />
      </template>
    </Sortable>
  </div>
</template>

<style scoped>
.ghost {
  @apply border border-blue-500 opacity-50;
}
</style>
