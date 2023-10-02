<script setup lang="ts">
import { useSelectedBoard } from '~/composables/states';
import { BoardCardProps } from './Card.vue';

type Props = {
  id: number;
  title: string;
  cards: BoardCardProps[];
  icon?: string;
};

const props = defineProps<Props>();

const hoveringBoard = useSelectedBoard();
const board = ref<HTMLDialogElement>();
const { top } = useElementBounding(board);
const { isOutside } = useMouseInElement(board);

watch(isOutside, () => {
  if (!isOutside.value) {
    hoveringBoard.value = props.id;
  }
});
</script>

<template>
  <div ref="board" class="relative flex h-full flex-col gap-4 transition-all">
    <BoardsHeader :icon="icon" :title="title" />
    <BoardsCard
      v-for="(card, idx) in cards"
      :key="idx"
      :card-object="card"
      :id="card.id"
      :idx="card.idx"
      :board-top="top"
      :task="card.task"
      :title="card.title"
      :user-name="card.userName"
      :user-avatar="card.userAvatar"
    />
  </div>
</template>
