import axios from "axios";
import router from "./router";
import { useUserStore } from "./stores/user";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
    const userStore = useUserStore();
    config.headers.Authorization = `Bearer ${userStore.user.token}`;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            sessionStorage.removeItem("TOKEN");
            router.push({ name: "Login" });
        }
        throw error;
    }
);

export default axiosClient;
