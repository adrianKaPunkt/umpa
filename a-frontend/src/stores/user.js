import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
    const test = ref("1234");

    const x = computed(() => test.value + "5");
    return { test, x };
});
