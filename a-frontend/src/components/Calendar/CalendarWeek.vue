<template>
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
    </section>
    <div v-for="user in users" :key="user" class="grid grid-cols-9">
        <!-- USER -->
        <div
            class="col-span-2 col-start-1 m-1 h-20 rounded-md bg-indigo-800 pt-2 pl-3"
        >
            <span class="justify-center align-middle">{{ user }}</span>
        </div>
        <div
            :id="user"
            class="m-1 h-20 rounded-md bg-indigo-800 text-center hover:bg-indigo-600"
        ></div>
        <div
            class="m-1 h-20 rounded-md bg-indigo-800 text-center hover:bg-indigo-600"
        ></div>
        <div
            class="m-1 h-20 rounded-md bg-indigo-800 text-center hover:bg-indigo-600"
        ></div>
        <div
            class="m-1 h-20 rounded-md bg-indigo-800 text-center hover:bg-indigo-600"
        ></div>
        <div
            class="m-1 h-20 rounded-md bg-indigo-800 text-center hover:bg-indigo-600"
        ></div>
        <div
            class="m-1 h-20 rounded-md bg-indigo-800 text-center hover:bg-indigo-600"
        ></div>
        <div
            class="m-1 h-20 rounded-md bg-indigo-800 text-center hover:bg-indigo-600"
        ></div>
    </div>
</template>

<script setup>
const users = ["Adrian", "Christian", "Lara", "Matthias", "Alicia", "Zizi"];
const days = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
];
</script>
