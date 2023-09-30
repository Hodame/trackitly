<template>
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-xl font-medium">Tasks board</h1>
      <p class="text-lg text-gray-500">Create and complete tasks using boards</p>
    </div>

    <BaseButton inline text="Create board" right-icon="ph:plus-bold" />
  </div>

  <div class="grid mt-6 grid-cols-5">
    <BoardsHeader icon="ph:timer" title="In progress" />
  </div>
</template>
