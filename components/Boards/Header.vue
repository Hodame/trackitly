<script setup lang="ts">
type Props = {
  title: string;
  icon?: string;
  count?: number;
};

type Emits = {
  addEvent: []
}

defineEmits<Emits>()
defineProps<Props>();
</script>

<template>
  <div class="flex items-center justify-between rounded-md bg-gray-100 py-1 px-2">
    <div class="flex items-center gap-2 text-gray-500">
      <Icon v-if="icon" :name="icon" size="1.25rem" />
      <h1 class="font-medium">
        {{ title }} <span v-if="count">({{ count }})</span>
      </h1>
    </div>

    <div class="flex gap-1">
      <BaseIconButton @click="$emit('addEvent')" icon="ph:plus"/>
      <BaseIconButton icon="ph:dots-three"/>
    </div>
  </div>
</template>
