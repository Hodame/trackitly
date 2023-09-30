<script setup lang="ts"></script>

<template>
  <div class="flex w-full items-center justify-between bg-gray-100 pl-14 pr-5">
    <h1 class="text-xl font-medium">Title</h1>
    <div class="w-full max-w-xs">
      <BaseInput placeholder="Search for tasks" right-icon="ph:magnifying-glass" />
    </div>
    <button class="rounded-full p-1.5 hover:bg-blue-600 hover:text-white">
      <Icon name="ph:bell" size="1.5rem" />
    </button>
  </div>
</template>
