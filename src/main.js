import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Main from "@/components/Main.vue";
import Login from "@/components/Login.vue";

const routes = [
    {path:'/', component: Main},
    {path:'/login', component: Login}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
