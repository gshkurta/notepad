import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/authentication',
            name: 'auth',
            component: AuthView
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfileView
        }
    ],
})

export default router
