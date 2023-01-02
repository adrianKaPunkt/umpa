<template>
    <div class="flex min-h-screen flex-col justify-center bg-gray-100 sm:py-12">
        <div class="xs:p-0 mx-auto p-10 md:w-full md:max-w-md">
            <h1 class="mb-5 text-center text-2xl font-bold">Neues Passwort</h1>
            <div
                class="w-full divide-y divide-gray-200 rounded-lg bg-white shadow"
            >
                <div class="px-5 py-7">
                    <label
                        for="new-password"
                        class="block pb-1 text-sm font-semibold text-gray-600"
                        >neues Passwort</label
                    >
                    <input
                        id="new-password"
                        type="password"
                        class="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-sm"
                    />
                    <label
                        for="password-repeat"
                        class="block pb-1 text-sm font-semibold text-gray-600"
                        >Passwort wiederholen</label
                    >
                    <input
                        id="password-repeat"
                        type="password"
                        class="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-sm"
                    />
                    <button
                        type="button"
                        class="inline-block w-full rounded-lg bg-blue-500 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-600 hover:shadow-md focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        <span class="mr-2 inline-block"
                            >Passwort zurücksetzen</span
                        >
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>
