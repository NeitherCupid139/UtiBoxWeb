import {createRouter, createWebHistory} from 'vue-router';
import HomeView from "../views/HomeView.vue";
import PricingView from "../views/PricingView.vue";
import AboutView from "../views/AboutView.vue";

// 路由列表
const routes = [
    {
        path: '/',
        name: 'home',
        component:HomeView
    },
    {
        path: '/',
        name: 'pricing',
        component:PricingView
    },
    {
        path: '/',
        name: 'about',
        component:AboutView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

