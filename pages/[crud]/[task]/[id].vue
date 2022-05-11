<template>
  <container-app>
    <OrganismUpdate
      v-if="route.params.task == 'update' && route.params.id != ''"
      :index="Number(route.params.id)"
    />
  </container-app>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped></style>
