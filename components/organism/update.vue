<template>
  <MoleculeContainer
    v-bind="{
      title: 'Editar dados',
      observations: ['Deixe em branco os campos que você não quer alterar'],
    }"
  >
    <p>Valores originais</p>
    <AtomData v-bind="{ data: { title, message } }" />
    <AtomDivisor />
    <p>Novos valores</p>
    <MoleculeForm />
    <container-menu-update>
      <AtomButton @click="update(index)">💾 Update</AtomButton>
      <AtomButton @click="cancel()">❌ Cancel</AtomButton>
    </container-menu-update>
  </MoleculeContainer>
</template>

<script setup lang="ts">
const router = useRouter();
const store = useStore();

const properties = defineProps<{ index: number }>();

const { title, message } = store.state.value.dataList[properties.index];

const update = async (index: number) => {
  await store.updateData(index).then(() => {
    router.go(-1);
  });
};

const cancel = () => {
  store.clearData();
  router.go(-1);
};
</script>

<style scoped>
container-menu-update {
  @apply w-full grid grid-cols-2 gap-2;
}
</style>
