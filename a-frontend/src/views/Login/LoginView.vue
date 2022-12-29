<template>
    <!-- component -->
    <div class="flex min-h-screen flex-col justify-center bg-gray-100 sm:py-12">
        <div class="xs:p-0 mx-auto p-10 md:w-full md:max-w-md">
            <h1 class="mb-5 text-center text-2xl font-bold">Your Logo</h1>
            <div
                class="w-full divide-y divide-gray-200 rounded-lg bg-white shadow"
            >
                <div class="px-5 py-7">
                    <label
                        class="block pb-1 text-sm font-semibold text-gray-600"
                        >E-mail</label
                    >
                    <input
                        type="text"
                        class="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-sm"
                    />
                    <label
                        class="block pb-1 text-sm font-semibold text-gray-600"
                        >Passwort</label
                    >
                    <input
                        type="text"
                        class="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-sm"
                    />
                    <button
                        type="button"
                        class="inline-block w-full rounded-lg bg-blue-500 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-600 hover:shadow-md focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        <span class="mr-2 inline-block">Login</span>
                    </button>
                </div>
                <div class="py-5">
                    <div class="whitespace-nowrap text-center">
                        <RouterLink to="/login/forgot-password">
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
import LockOpenIcon from "@/assets/icons/LockOpenIcon.vue";
</script>
