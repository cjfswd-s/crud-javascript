<template>
    <container-section>
        <AtomTitle>{{ title }}</AtomTitle>
        <AtomDivisor />
        <slot></slot>
        <container-observation v-if="observations">
            <AtomObservation v-for="(observation, index) in observations" :key="index">{{ observation }}</AtomObservation>
        </container-observation>
    </container-section>
</template>

<script setup lang="ts">

defineProps<{ title: string, observations?: string[] }>()
</script>

<style scoped>
container-section {
    @apply w-full flex flex-col gap-[0.5em] p-[0.5em] items-start bg-[#212121] border-[1px] border-[#373737] rounded-[8px]
}

container-observation{
    @apply w-full flex flex-col
}
</style>