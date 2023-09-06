
import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/Login.vue'
// import Home from '@/views/home/Home.vue'
const routes = [
    {
        path: '/',
        component: HelloWorld,
        name: "hello",
        // children: [{ path: '', component: HelloWorld }],
    },
    {
        path: '/login',
        component: Login,
        children: [{ path: '', component: Login }]
    },
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
