<template>
    <TheNavbar class="fixed top-0 left-0 w-full" />
    <main class="mx-20 mt-20">
        <RouterView />
    </main>
</template>

<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import { RouterView } from "vue-router";
</script>
