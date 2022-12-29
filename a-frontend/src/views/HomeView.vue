<template>
    <main>
        <p>{{ y }}</p>
        <p>{{ x }}</p>
        Hallo
    </main>
</template>

<script setup>
import { computed } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const y = computed(() => userStore.test);
</script>
