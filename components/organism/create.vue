<template>
    <MoleculeContainer v-bind="{ title: 'Add message' }">
        <MoleculeForm />
        <container-menu-create>
            <AtomButton @click="save()">💾 save</AtomButton>
            <AtomButton @click="store.clearData()">❌ clear</AtomButton>
        </container-menu-create>
    </MoleculeContainer>
</template>

<script setup lang="ts">
const store = useStore()

const save = () => {
    if (!store.isEmptyData()) {
        store.createData()
        return
    }
    window.alert('You need fulfilled every inputs of the form.')
}
</script>

<style scoped>
container-menu-create {
    @apply w-full grid grid-cols-2 gap-2
}
</style>