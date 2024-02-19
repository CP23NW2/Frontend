<template>
<NavBar/>
<OrderById/>
</template>
<script>
import NavBar from '../../components/Admin/Navbar.vue'
import { Icon } from '@iconify/vue'
import OrderById from '../../components/Admin/Order/OrderById.vue';
export default {
  components: {
    NavBar,
    Icon,
    OrderById
  }
}
</script>