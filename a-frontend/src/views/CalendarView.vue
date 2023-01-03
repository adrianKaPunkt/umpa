<template>
    <div class="ml-4 flex">
        <button
            class="rounded-md bg-gray-800 px-3 py-2 hover:bg-gray-700"
            @click="prevWeek"
        >
            <ChevronLeft class="fill-gray-300 stroke-none" />
        </button>
        <span class="mx-4 py-2 text-gray-300"
            >KW {{ selectedDate.week() }} / {{ selectedDate.year() }}</span
        >
        <button
            class="rounded-md bg-gray-800 px-3 py-2 hover:bg-gray-700"
            @click="nextWeek"
        >
            <ChevronRight class="fill-gray-300 stroke-none" />
        </button>
    </div>
    <CalendarWeek :selected="selectedDate.day(1)" :current="selectedDate" />
</template>

<script setup>
import { ref } from "vue";
import CalendarWeek from "@/components/Calendar/CalendarWeek.vue";
import ChevronLeft from "../assets/icons/ChevronLeft.vue";
import ChevronRight from "../assets/icons/ChevronRight.vue";
import dayjs from "dayjs";
import de from "dayjs/locale/de";
import weekOfYear from "dayjs/plugin/weekOfYear.js";

dayjs.extend(weekOfYear);
dayjs.locale(de);

const selectedDate = ref(dayjs());
const nextWeek = () => {
    selectedDate.value = selectedDate.value.add(7, "d");
};
const prevWeek = () => {
    selectedDate.value = selectedDate.value.subtract(7, "d");
};
</script>
