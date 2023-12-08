<template>
    <NavBar/>
    <EditCustomer/>
</template>
<script>
import NavBar from '../../components/Admin/Navbar.vue'
import EditCustomer from '../../components/Admin/Customer/EditCustomer.vue'
import { Icon } from '@iconify/vue'
export default {
  components: {
    NavBar,
    EditCustomer,
    Icon
  }
}
</script>