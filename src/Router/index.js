import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Admin/Home.vue'
import Customer from '../views/Admin/Customer.vue'
import AddCustomer from '../views/Admin/AddCustomer.vue'
import AddOrder from '../views/Admin/AddOrder.vue'
import Order from '../views/Admin/Order.vue'
import Contact from '../views/Admin/Contact.vue'
import About from '../views/Admin/About.vue'
import ForCustomer from '../views/Customer/ForCustomer.vue'
import AboutCustomer from '../views/Customer/About.vue'
import ContactCustomer from '../views/Customer/Contact.vue'
import EditCustomer from '../views/Admin/EditCustomer.vue'
import AddOrderCustomer from '../views/Admin/AddOrderCustomer.vue'
import OrderById from '../views/Admin/OrderById.vue'
import Login from '../views/Admin/Login.vue'
import ErrorPage from '../views/error.vue'

const history=createWebHistory("/nw2"); 
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/customer',
        name: 'customer',
        component: Customer
    },
    {
        path: '/addcustomer',
        name: 'addcustomer',
        component: AddCustomer
    },
    {
        path: '/addorder',
        name: 'addorder',
        component: AddOrder
    },
    {
        path: '/order',
        name: 'order',
        component: Order
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/forcustomer',
        name: 'forcustomer',
        component: ForCustomer
    },
    {
        path: '/forcustomer/about',
        name: 'AboutCustomer',
        component: AboutCustomer
    },
    {
        path: '/forcustomer/contact',
        name: 'ContactCustomer',
        component: ContactCustomer
    },
    {
        path: '/editcustomer/:customerTel',
        name: 'EditCustomer',
        component: EditCustomer
    },
    {
        path: '/addordercustomer/:customerID',
        name: 'AddOrderCustomer',
        component: AddOrderCustomer
    },
    {
        path: '/orders/:orderID',
        name: 'OrderById',
        component: OrderById,
    },
    {
        path: '/admin/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Error',
        component: ErrorPage
    }
    
]
  
const router = createRouter({ history, routes })
export default router
