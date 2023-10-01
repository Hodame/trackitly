<script setup lang="ts">
import { useBoards } from '~/composables/states';
import { Boards } from '~/pages/boards.vue';

export type BoardCardProps = {
  id: number;
  task: string;
  title: string;
  userName: string;
  userAvatar?: string | null;
};

type Position = {
  x: number;
  y: number;
};

const props = defineProps<{ boardTop: number } & BoardCardProps>();

const card = ref<HTMLDivElement>();
const cardBody = ref<HTMLDivElement>();
const position = ref<Position>({ x: 0, y: 0 });
const pressedDelta = ref<Position>();

const boards = useBoards();
const selectedBoard = useSelectedBoard();
const draggedElement = useDraggedElement();

const { isOutside } = useMouseInElement(cardBody);
const { left, top, width, height } = useElementBounding(card);

const topOfBoard = computed(() => top.value - props.boardTop);
const stylePos = computed(() => `left:${position.value.x}px; top:${position.value.y}px`);

onMounted(() => {
  function start(e: PointerEvent) {
    draggedElement.value = props.id;
    pressedDelta.value = {
      x: e.clientX - left.value,
      y: e.clientY - top.value - topOfBoard.value
    };

    card.value?.classList.add('absolute', 'z-50', 'cursor-grabbing');
    position.value = {
      x: e.clientX - left.value - pressedDelta.value.x,
      y: e.clientY - top.value - pressedDelta.value.y
    };
  }

  function move(e: PointerEvent) {
    e.stopPropagation();
    e.preventDefault();
    if (draggedElement.value !== props.id || !pressedDelta.value) return;

    let { x, y } = position.value;

    x = e.clientX - left.value - pressedDelta.value.x;
    y = e.clientY - top.value - pressedDelta.value.y;

    position.value = { x, y };
  }

  function end(e: PointerEvent) {
    if (draggedElement.value !== props.id || !pressedDelta.value) return;

    const draggedItem = boards.value.find((item) => item.id === props.id);

    if(selectedBoard.value) {
      if(!draggedItem) return
      boards.value.filter((item) => item.id === props.id)
      
    }

    pressedDelta.value = undefined;
    draggedElement.value = undefined;
    position.value = { x: 0, y: 0 };
    card.value?.classList.remove('absolute', 'z-50', 'cursor-grabbing');
  }

  useEventListener(card, 'pointerdown', start);
  useEventListener(card, 'pointermove', move);
  useEventListener(card, 'pointerup', end);
  useEventListener(card, 'pointerleave', end);
});
</script>

<template>
  <div ref="cardBody">
    <div
      v-if="draggedElement && !isOutside"
      :style="{ height: `${height}px`, width: `${width}px` }"
    ></div>
    <div
      ref="card"
      class="flex w-full cursor-pointer select-none flex-col gap-2 rounded-lg border border-gray-200 bg-white p-3 shadow-md"
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
  </div>
</template>
