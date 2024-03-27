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

const history = createWebHistory("/nw2")
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/customer',
        name: 'customer',
        component: Customer,
        meta: { requiresAuth: true }
    },
    {
        path: '/addcustomer',
        name: 'addcustomer',
        component: AddCustomer,
        meta: { requiresAuth: true }
    },
    {
        path: '/addorder',
        name: 'addorder',
        component: AddOrder,
        meta: { requiresAuth: true }
    },
    {
        path: '/order',
        name: 'order',
        component: Order,
        meta: { requiresAuth: true }
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
        meta: { requiresAuth: true }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: { requiresAuth: true }
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
  
const router = createRouter({ history, routes });

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
      const token = localStorage.getItem('token');
      if (token) {
        next();
      } else {
        next({ name: 'Login' }); // Redirect to the login page
      }
    } else {
      next();
    }
});
export default router
