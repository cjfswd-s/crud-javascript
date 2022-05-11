<template>
  <MoleculeContainer v-bind="{ title: 'Messages' }">
    <container-read
      v-if="store.state.value.dataList.length > 0"
      v-for="(data, index) in store.state.value.dataList"
      :key="index"
    >
      <AtomData v-bind="{ data }" />
      <container-read-menu>
        <AtomButton @click="updateData(index)">✏️ update</AtomButton>
        <AtomButton @click="store.excludeData(index)">🗑️ delete</AtomButton>
      </container-read-menu>
      <AtomDivisor v-if="store.state.value.dataList.length - 1 > index" />
    </container-read>
    <div class="w-full text-center text-xs text-[#979797]" v-else>
      not found any message
    </div>
  </MoleculeContainer>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const store = useStore()

if (route.params.crud == "offline") {
  store.getDataFromLocalStorage();
}

if (route.params.crud == "online") {
  store.getDataFromHttpStorage();
}

function updateData(index: number) {
  store.clearData();
  router.push(`/${route.params.crud}/update/${index}`);
}
</script>

<style scoped>
container-read {
  @apply w-full flex flex-col gap-2;
}

container-read-menu {
  @apply w-full grid grid-cols-2 gap-2;
}
</style>
