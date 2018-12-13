import Search from './components/Search.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'
import Secure from './components/Secure.vue'
import Register from './components/Signup.vue'
import Price from './components/Prices.vue'
import RegisterMed from './components/SignupMed.vue'
import Services from './components/Portfolio.vue'
import Med from './components/layout/Card.vue'

const routes = [
    { path: '/', component: Search, name: 'search' },
    { path: '/about', component: About, name: 'about' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/signup', component: Register, name: 'register' },
    { path: '/signupmed', component: RegisterMed, name: 'registermed' },
    { path: '/services', component: Services, name: 'services' },
    { path: '/med', component: Med, name: 'med' },
    { path: '/secure', component: Secure, name: 'secure' },
    { path: '/prices', component: Price, name: 'prices' }
]

export default routes