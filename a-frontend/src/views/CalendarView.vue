<template>
    <div class="ml-4 flex">
        <button class="rounded-md bg-gray-800 px-3 py-2 hover:bg-gray-700">
            <ChevronLeft class="fill-gray-300 stroke-none" />
        </button>
        <span class="mx-4 py-2 text-gray-300">KW 44</span>
        <button class="rounded-md bg-gray-800 px-3 py-2 hover:bg-gray-700">
            <ChevronRight class="fill-gray-300 stroke-none" />
        </button>
    </div>
    <section class="mt-10 grid grid-cols-9">
        <!-- TABLE-HEADER -->
        <div
            class="col-span-2 col-start-1 m-1 h-20 rounded-md bg-indigo-800 text-center"
        ></div>
        <div v-for="day in days" :key="day">
            <div class="m-1 h-20 rounded-md bg-indigo-800 text-center">
                <span>{{ day }}</span>
            </div>
        </div>
        <!-- USER -->
    </section>
    <div v-for="user in users" :key="user" class="grid grid-cols-9">
        <div
            class="col-span-2 col-start-1 m-1 h-20 rounded-md bg-indigo-800 pt-2 pl-3"
        >
            <span class="align-middle">{{ user }}</span>
        </div>
        <div
            :id="user"
            class="m-1 h-20 rounded-md bg-indigo-800 text-center"
        ></div>
        <div class="m-1 h-20 rounded-md bg-indigo-800 text-center"></div>
        <div class="m-1 h-20 rounded-md bg-indigo-800 text-center"></div>
        <div class="m-1 h-20 rounded-md bg-indigo-800 text-center"></div>
        <div class="m-1 h-20 rounded-md bg-indigo-800 text-center"></div>
        <div class="m-1 h-20 rounded-md bg-indigo-800 text-center"></div>
        <div class="m-1 h-20 rounded-md bg-indigo-800 text-center"></div>
    </div>
</template>

<script setup>
import ChevronLeft from "../assets/icons/ChevronLeft.vue";
import ChevronRight from "../assets/icons/ChevronRight.vue";
import { Calendar } from "@/utils/calendar";

const users = ["Adrian", "Christian", "Lara", "Matthias"];
const days = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
];

const calendar = new Calendar();
calendar.setup();
</script>
