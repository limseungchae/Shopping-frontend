import Main from "@/components/Main.vue";
import Login from "@/components/Login.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path:'/', component: Main},
    {path:'/login', component: Login}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;