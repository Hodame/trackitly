<script setup lang="ts">
const isSidebar = useSidebar();
const selected = useProject();
const options = ref([
  { id: 1, title: 'EX' },
  { id: 2, title: 'MoM' }
]);
</script>

<template>
  <div class="relative h-screen bg-gray-100 p-5 shadow-xl">
    <SidebarUser avatar="" name="Sergey Bondar" />
    <BaseSelect v-if="isSidebar" v-model="selected" label="Project" :options="options" />

    <div class="mt-2 flex-auto">
      <SidebarTile to="/" text="Dashboard" icon="ph:house" />
      <SidebarTile to="tasks" text="Tasks" icon="ph:list-bullets">
        <template #nestedLinks>
          <SidebarTile to="/" text="Dashboard" icon="ph:house">
            <template #nestedLinks>
              <SidebarTile to="users" text="Users" icon="ph:users" />
            </template>
          </SidebarTile>
        </template>
      </SidebarTile>
      <SidebarTile to="users" text="Users" icon="ph:users" />
    </div>

    <button
      @click="isSidebar = !isSidebar"
      class="absolute right-0 top-5 flex h-8 w-8 translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-white"
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
