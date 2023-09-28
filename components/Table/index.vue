<script setup lang="ts" generic="T">
type HeaderWithSize = {
  header: string;
  /**
   * @description provide a width with percentage of a table
   * @example 10% or 60%
   */
  size?: string;
};

type Props = {
  headers?: HeaderWithSize[];
};

defineProps<Props>();
</script>

<template>
  <TableBase class="w-full">
    <TableHeader>
      <TableRow>
        <slot name="headers" />

        <TableCell
          v-for="(header, idx) in headers"
          header
          :key="idx"
          :style="{ width: header.size }"
        >
          {{ header.header }}
        </TableCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <slot />
    </TableBody>
  </TableBase>
</template>
