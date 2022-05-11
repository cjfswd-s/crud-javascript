<template>
    <button>
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
</script>

<style scoped>
button {
    @apply p-[0.25em] rounded-[8px] border-[1px] border-[#676767] bg-[#313131] cursor-pointer
}
button:hover {
    @apply border-[1px] border-white
}
</style>