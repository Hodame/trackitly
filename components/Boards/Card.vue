<script setup lang="ts">
import { BoardCard, useBoards, useSelectedCard } from '~/composables/states';

export type BoardCardProps = {
  boardTop?: number;
  cardObject?: BoardCard;
  preview?: boolean;
} & BoardCard;

type Position = {
  x: number;
  y: number;
};

const props = defineProps<BoardCardProps>();

const card = ref<HTMLDivElement>();
const position = ref<Position>({ x: 0, y: 0 });
const pressedDelta = ref<Position>();

const boards = useBoards();
const selectedCard = useSelectedCard();
const selectedBoard = useSelectedBoard();
const draggedElement = useDraggedElement();

const { isOutside } = useMouseInElement(card);
const { left, top, width, height } = useElementBounding(card);

const stylePos = computed(() => `left:${position.value.x}px; top:${position.value.y}px`);

function start(e: PointerEvent) {
  if (!props.cardObject) return;

  draggedElement.value = { ...props.cardObject, width: width.value, height: height.value };

  const topOfBoard = top.value - (props.boardTop ?? 0);

  pressedDelta.value = {
    x: e.clientX - left.value,
    y: e.clientY - top.value - topOfBoard
  };

  position.value = {
    x: e.clientX - left.value - pressedDelta.value.x,
    y: e.clientY - top.value - pressedDelta.value.y
  };

  card.value?.classList.add('absolute', 'z-50', 'cursor-grabbing');
}

function move(e: PointerEvent) {
  if (!pressedDelta.value) return;

  let { x, y } = position.value;

  x = e.clientX - left.value - pressedDelta.value.x;
  y = e.clientY - top.value - pressedDelta.value.y;

  position.value = { x, y };
}

function end() {
  if (!pressedDelta.value) return;

  pressedDelta.value = undefined;
  draggedElement.value = undefined;
  position.value = { x: 0, y: 0 };
  card.value?.classList.remove('absolute', 'z-50', 'cursor-grabbing');
}

useEventListener(card, 'pointerdown', start);
useEventListener(card, 'pointermove', move);
useEventListener(card, 'pointerup', end);
useEventListener(card, 'pointerleave', end);

watch(isOutside, () => {
  if (!isOutside) selectedCard.value = props.cardObject;
});
</script>

<template>
  <div
    ref="card"
    class="flex w-full cursor-pointer select-none flex-col gap-2 rounded-lg border border-gray-200 bg-white p-3 shadow-md"
    :class="{ 'invisible opacity-0': preview }"
    :style="stylePos"
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
