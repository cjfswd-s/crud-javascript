<template>
    <div>
        <AtomInput v-bind="{ label: 'Title', state: toRef(store.state.value.data, 'title') }" />
        <AtomInput v-bind="{ label: 'Message', state: toRef(store.state.value.data, 'message') }" />
    </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
const store = useStore()
</script>

<style scoped>
div {
    @apply w-full flex flex-col items-start gap-[8px]
}
</style>