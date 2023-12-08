<template>
    <NavBar />
    <OrderList/>
</template>
    
    <script>
    import NavBar from '../../components/Admin/Navbar.vue'
    import { Icon } from '@iconify/vue'
    import OrderList from '../../components/Admin/Order/OrderList.vue'
    export default {
      components: {
    NavBar,
    Icon,
    OrderList
    }
    }
    </script>
    