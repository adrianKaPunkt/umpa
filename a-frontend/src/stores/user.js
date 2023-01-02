import { defineStore } from "pinia";
import axiosClient from "@/axios";
import router from "../router";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: {
            token: sessionStorage.getItem("TOKEN"),
            data: {},
        },
    }),
    actions: {
        login(data) {
            return axiosClient.post("/login", data).then(({ data }) => {
                this.user.data = data.user;
                this.user.token = data.token;
                if (data.token) {
                    sessionStorage.setItem("TOKEN", data.token);
                } else {
                    sessionStorage.removeItem("TOKEN");
                }
                return data;
            });
        },
        logout() {
            return axiosClient.post("/logout").then((response) => {
                this.user.token = null;
                router.push({ name: "Login" });
                return response;
            });
        },
    },
    watch: {},
});

export default { useUserStore };
