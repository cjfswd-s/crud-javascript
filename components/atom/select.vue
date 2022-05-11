<template>
    <input-container>
        <label>{{ label }}</label>
        <select v-model="model">
            <option v-for="(option, index) in options" :key="index">{{ option }}</option>
        </select>
    </input-container>
</template>
<script setup lang="ts">
import { Ref } from 'vue'

defineProps<{ label: string, model: Ref<string>, options: string[] }>()
</script>

<style scoped>
input-container {
    @apply w-full flex flex-col items-start gap-[4px]
}

label {
    @apply text-xs
}

select {
    @apply w-full text-sm py-[0.5em] border-[1px] border-[#373737] bg-[#121212]
}
</style>