<template>
    <!-- component -->
    <div class="flex min-h-screen flex-col justify-center bg-gray-100 sm:py-12">
        <div class="xs:p-0 mx-auto p-10 md:w-full md:max-w-md">
            <h1 class="mb-5 text-center text-2xl font-bold">Your Logo</h1>
            <div
                class="w-full divide-y divide-gray-200 rounded-lg bg-white shadow"
            >
                <form method="POST" @submit.prevent="login">
                    <input type="hidden" name="remember" value="true" />
                    <div class="px-5 py-7">
                        <label
                            class="block pb-1 text-sm font-semibold text-gray-600"
                            >E-mail</label
                        >
                        <input
                            v-model="user.email"
                            type="text"
                            class="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-sm"
                        />
                        <label
                            class="block pb-1 text-sm font-semibold text-gray-600"
                            >Passwort</label
                        >
                        <input
                            v-model="user.password"
                            type="password"
                            class="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-sm"
                        />
                        <div class="mb-6 ml-2 flex items-center">
                            <input
                                id="remember-me"
                                v-model="user.remember"
                                name="remember-me"
                                type="checkbox"
                            />
                            <label for="remember-me" class="ml-4 text-sm"
                                >Angemeldet bleiben</label
                            >
                        </div>

                        <button
                            type="submit"
                            :disabled="loading"
                            class="inline-block w-full rounded-lg bg-blue-500 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-600 hover:shadow-md focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                            :class="{
                                'cursor-not-allowed': loading,
                                'hover:bg-blue-200': loading,
                            }"
                        >
                            <span class="mr-2 inline-block">Login</span>
                        </button>
                    </div>
                </form>
                <div>
                    <div
                        v-if="errorMsg"
                        class="m-3 flex justify-between px-4 text-center text-red-500"
                    >
                        {{ errorMsg }}
                    </div>
                    <div class="whitespace-nowrap text-center">
                        <RouterLink :to="{ name: 'ForgotPassword' }">
                            <button
                                class="mx-5 cursor-pointer rounded-lg px-5 py-4 text-sm font-normal text-gray-500 ring-inset transition duration-200 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                            >
                                <LockOpenIcon
                                    class="align-text-center inline-block h-3 w-3"
                                />
                                <span class="ml-1 inline-block"
                                    >Passwort vergessen</span
                                >
                            </button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import LockOpenIcon from "@/assets/icons/LockOpenIcon.vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const loading = ref(false);
const errorMsg = ref("");
const user = {
    email: "",
    password: "",
    remember: false,
};
function login() {
    loading.value = true;
    userStore
        .login(user)
        .then(() => {
            loading.value = false;
            console.log(userStore.user.data.email);
            console.log(userStore.user.token);
            router.push({ name: "Layout" });
        })
        .catch(({ response }) => {
            loading.value = false;
            errorMsg.value = response.data.message;
        });
}
</script>
