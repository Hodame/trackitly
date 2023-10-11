<script setup lang="ts">
const data = [
  { label: 'Completed tasks', value: '10.2K', icon: 'ph:file' },
  { label: 'Assigned tasks', value: '3.4K', icon: 'ph:at' },
  { label: 'All boards', value: '410', icon: 'ph:stack' },
  { label: 'Schedueld tasks', value: '52', icon: 'ph:calendar' }
];
</script>

<template>
  <BaseBox>
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-xl">Hi, Sergey! here is you all time statistic.</h2>
        <p class="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, accusantium?
        </p>
      </div>
      <BaseButton inline intent="secondary" text="Setup account" right-icon="ph:caret-right" />
    </div>

    <BaseDevider class="my-5" />

    <ul class="flex items-center justify-around">
      <li v-for="(item, idx) in data" class="flex gap-3" :key="idx">
        <div
          class="flex aspect-square w-16 items-center justify-center rounded-full border border-blue-600 bg-blue-50"
        >
          <Icon class="text-blue-600" size="2rem" :name="item.icon" />
        </div>
        <div>
          <span class="whitespace-nowrap text-lg text-gray-500">{{ item.label }}</span>
          <h1 class="text-2xl font-medium">{{ item.value }}</h1>
        </div>
      </li>
    </ul>
  </BaseBox>
</template>
