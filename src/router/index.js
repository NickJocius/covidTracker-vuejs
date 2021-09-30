   
import { defineAsyncComponent } from "@vue/runtime-core";
import { createRouter, createWebHistory } from "vue-router";
const Home = defineAsyncComponent(() => import('../views/Home.vue')) ;


const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;