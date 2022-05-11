<template>
  <MoleculeContainer v-bind="{ title: 'Select type of CRUD' }">
    <container-menu-menu>
      <AtomButton @click="() => router.push('/offline')">💻 offline</AtomButton>
      <AtomButton @click="() => router.push('/online')">🌐 online</AtomButton>
    </container-menu-menu>
  </MoleculeContainer>
</template>
<script setup lang="ts">
const router = useRouter()
</script>
<style>
container-menu-menu {
    @apply w-full grid grid-cols-2 gap-2
}
</style>
