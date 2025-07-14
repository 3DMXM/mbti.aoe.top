import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Test from '@/views/Test.vue'
import Result from '@/views/Result.vue'
import About from '@/views/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        },
        {
            path: '/result',
            name: 'Result',
            component: Result
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})

export default router
