<template>
    <section class="mt-10 grid grid-cols-9">
        <!-- TABLE-HEADER -->
        <div
            class="col-span-2 col-start-1 m-1 flex h-20 items-center justify-center rounded-md bg-gray-800 text-center"
        ></div>
        <!-- HEADER -->
        <div v-for="(day, index) in 7" :key="index">
            <div
                class="text-gray-00 m-1 flex h-20 flex-col items-center justify-center rounded-md bg-gray-800 text-center text-gray-400"
            >
                <span class="flex flex-col font-semibold">{{
                    selected.add(index, "d").format("dddd")
                }}</span>
                <span>{{ selected.add(index, "d").format("DD. MMM YY") }}</span>
            </div>
        </div>
    </section>
    <!-- USER -->
    <div v-for="(user, index) in users" :key="index" class="grid grid-cols-9">
        <!-- MONTAG -->
        <div
            class="col-span-2 col-start-1 m-1 flex h-20 items-center rounded-md bg-gray-800 pl-6 text-gray-300"
        >
            <span class="justify-center align-middle">{{ user }}</span>
        </div>
        <div
            :id="user"
            :date="`${selected.format('YYYY-MM-DD')}`"
            class="m-1 h-20 rounded-md bg-gray-800 text-center hover:bg-gray-600"
        ></div>
        <!-- DIENSTAG -->
        <CalendarSlot
            :id="user"
            class="day"
            :date="`${selected.format('YYYY-MM-DD')}`"
        />
        <!-- MITTWOCH -->
        <div
            :id="user"
            :date="`${selected.format('YYYY-MM-DD')}`"
            class="m-1 h-20 rounded-md bg-gray-800 text-center hover:bg-gray-600"
        ></div>
        <!-- DONNERSTAG -->
        <div
            :id="user"
            :date="`${selected.format('YYYY-MM-DD')}`"
            class="m-1 h-20 rounded-md bg-gray-800 text-center hover:bg-gray-600"
        ></div>
        <!-- FREITAG -->
        <div
            :id="user"
            :date="`${selected.format('YYYY-MM-DD')}`"
            class="m-1 h-20 rounded-md bg-gray-800 text-center hover:bg-gray-600"
        ></div>
        <!-- SAMSTAG -->
        <div
            :id="user"
            :date="`${selected.format('YYYY-MM-DD')}`"
            class="m-1 h-20 rounded-md bg-gray-800 text-center hover:bg-gray-600"
        ></div>
        <!-- SONNTAG -->
        <div
            :id="user"
            :date="`${selected.format('YYYY-MM-DD')}`"
            class="m-1 h-20 rounded-md bg-gray-800 text-center hover:bg-gray-600"
        ></div>
    </div>
</template>

<script setup>
import CalendarSlot from "@/components/Calendar/CalendarSlot.vue";
const props = defineProps({
    selected: {
        type: Object,
        required: true,
    },
});
console.log(props);
const users = ["Adrian", "Christian", "Lara", "Matthias", "Alicia", "Zizi"];
</script>
