<template>
    <input-container>
        <label>{{ label }}</label>
        <input type="text" :placeholder="label" v-model="state.value">
    </input-container>
</template>
<script setup lang="ts">
import { Ref } from 'vue'

defineProps<{ label: string, state: Ref<string> }>()
</script>

<style scoped>
input-container {
    @apply w-full flex flex-col items-start gap-[4px]
}

label {
    @apply text-xs
}

input {
    @apply w-full px-[0.25em] py-[0.5em] border-[1px] border-[#373737] bg-[#121212] text-sm
}
</style>