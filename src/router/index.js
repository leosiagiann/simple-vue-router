import { createRouter, createWebHistory } from 'vue-router'
// import About from '../pages/about/index.vue'
// import User from '../pages/user/index.vue'
import routes from '~pages'

// const routes = [
//     { path: '/about', component: About, name: 'about.index' },
//     { path: '/user', component: User, name: 'user.index' },
// ]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router