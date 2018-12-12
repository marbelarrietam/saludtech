import Search from './components/Search.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'
import Secure from './components/Secure.vue'
import Register from './components/Signup.vue'

const routes = [
    { path: '/', component: Search, name: 'search' },
    { path: '/about', component: About, name: 'about' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/signup', component: Register, name: 'register' },
    { path: '/secure', component: Secure, name: 'secure' }
]

export default routes