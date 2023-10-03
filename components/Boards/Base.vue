<script setup lang="ts">
import { BoardCardProps } from './Card.vue';
import { Sortable } from 'sortablejs-vue3';
import type { SortableOptions } from 'sortablejs';
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
  group: 'tasks',
  scroll: true,
  forceFallback: true,
  scrollSensitivity: 60,
  scrollSpeed: 20,
  bubbleScroll: true
};

const boards = useBoards()

function updateBoard(fromboardIdx: number, toBoardIdx: number, from: number, to: number) {
  if (fromboardIdx == toBoardIdx) {
    moveItemInArray(boards.value[toBoardIdx].cards, from, to);
    return
  }

  const item = boards.value[fromboardIdx].cards.splice(from, 1)[0]
  boards.value[toBoardIdx].cards.splice(to, 0, item)
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
      @end="
        (c) =>
          updateBoard(
            Number(c.from.dataset.boardIdx) ?? 0,
            Number(c.to.dataset.boardIdx) ?? 0,
            c.oldIndex ?? 0,
            c.newIndex ?? 0
          )
      "
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
