<template>
    <div class="ml-4 flex">
        <button
            class="rounded-md bg-gray-800 px-3 py-2 hover:bg-gray-700"
            @click="prevWeek"
        >
            <ChevronLeft class="fill-gray-300 stroke-none" />
        </button>
        <span class="mx-4 py-2 text-gray-300">KW {{ calWeek }}</span>
        <button
            class="rounded-md bg-gray-800 px-3 py-2 hover:bg-gray-700"
            @click="nextWeek"
        >
            <ChevronRight class="fill-gray-300 stroke-none" />
        </button>
    </div>
    {{ count }}
    <CalendarWeek />
</template>

<script setup>
import { computed, ref } from "vue";
import CalendarWeek from "@/components/Calendar/CalendarWeek.vue";
import ChevronLeft from "../assets/icons/ChevronLeft.vue";
import ChevronRight from "../assets/icons/ChevronRight.vue";
import dayjs from "dayjs";
import de from "dayjs/locale/de";
import weekOfYear from "dayjs/plugin/weekOfYear.js";

dayjs.extend(weekOfYear);
dayjs.locale(de);

const count = ref(0);
const calWeek = computed(() => dayjs().week() + count.value);
const nextWeek = () => count.value++;
const prevWeek = () => count.value--;
</script>
