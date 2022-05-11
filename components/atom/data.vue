<template>
  <container-data>
    <label>Title:</label>
    <p>{{ data?.title }}</p>
    <label>Message:</label>
    <p>{{ data?.message }}</p>
  </container-data>
</template>

<script setup lang="ts">
defineProps<{ data?: { title: string; message: string } }>();
</script>

<style scoped>
container-data {
  @apply flex flex-col items-start leading-tight text-sm;
}

label {
  @apply text-[#979797];
}

p {
  @apply mb-2;
}
</style>
