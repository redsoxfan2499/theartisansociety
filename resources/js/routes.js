import Users from "./components/Users/Index.vue"
import Dashboard from "./components/Dashboard.vue"

export default {
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: Dashboard,
            name: 'home'
        },
        {
            path: '/users',
            component: Users,
            name: 'users.index'
        }
    ]
}
