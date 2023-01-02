import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/user";
import AppLayout from "@/views/AppLayout.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/Auth/LoginView.vue";
import ForgotPasswordView from "@/views/Auth/ForgotPasswordView.vue";
import ResetPasswordView from "@/views/Auth/ResetPasswordView.vue";
import NotFound from "@/views/NotFound.vue";
import UsersView from "@/views/UsersView.vue";
import CalendarView from "@/views/CalendarView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/app",
            name: "Layout",
            component: AppLayout,
            redirect: "/",
            meta: {
                requiresAuth: true,
            },
            children: [
                {
                    path: "/",
                    name: "Home",
                    component: HomeView,
                },
                {
                    path: "/users",
                    name: "Users",
                    component: UsersView,
                },
                {
                    path: "/calendar",
                    name: "Calendar",
                    component: CalendarView,
                },
            ],
        },
        {
            path: "/login",
            name: "Login",
            component: LoginView,
            meta: {
                requiresGuest: true,
            },
        },
        {
            path: "/login/forgot-password",
            name: "ForgotPassword",
            component: ForgotPasswordView,
            meta: {
                requiresGuest: true,
            },
        },
        {
            path: "/reset-password/:token",
            name: "ResetPassword",
            component: ResetPasswordView,
            meta: {
                requiresGuest: true,
            },
        },
        {
            path: "/:pathMatch(.*)",
            name: "NotFound",
            component: NotFound,
        },
    ],
});

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if (to.meta.requiresAuth && !userStore.user.token) {
        next({ name: "Login" });
    } else if (to.meta.requiresGuest && userStore.user.token) {
        next({ name: "Home" });
    } else {
        next();
    }
});

export default router;
