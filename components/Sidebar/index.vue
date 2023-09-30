<script setup lang="ts">
const isSidebar = useSidebar();
const selected = useProject();
const options = ref([
  { id: 1, title: 'EX' },
  { id: 2, title: 'MoM' }
]);
</script>

<template>
  <div class="relative h-screen bg-gray-100 p-5">
    <SidebarUser class="mb-2" avatar="" name="Sergey Bondar" />
    <BaseSelect v-if="isSidebar" v-model="selected" label="Project" :options="options" />

    <div class="mt-2 flex-auto">
      <SidebarTile to="/" text="Dashboard" icon="ph:chart-line" />
      <SidebarTile to="/boards" text="Boards" icon="ph:stack" />
      <SidebarTile to="tasks" text="Tasks" icon="ph:list-bullets"/>
      <SidebarTile to="team" text="Team" icon="ph:users" />
    </div>

    <button
      @click="isSidebar = !isSidebar"
      class="absolute -right-10 top-3.5 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white"
    >
      <Icon
        name="ph:arrow-right-bold"
        size="1rem"
        class="transition-all"
        :class="{ 'rotate-180': isSidebar }"
      />
    </button>
  </div>
</template>
