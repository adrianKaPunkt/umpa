import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/Login/LoginView.vue";
import ForgotPasswordView from "@/views/Login/ForgotPasswordView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView,
        },
        {
            path: "/login",
            name: "Login",
            component: LoginView,
        },
        {
            path: "/login/forgot-password",
            name: "ForgotPassword",
            component: ForgotPasswordView,
        },
    ],
});

export default router;
