<template>
    <NavBar/>
    <AddCustomer/>
</template>
<script>
import NavBar from '../../components/Admin/Navbar.vue'
import AddCustomer from '../../components/Admin/Customer/AddCustomer.vue'
import { Icon } from '@iconify/vue'
export default {
  components: {
    NavBar,
    AddCustomer,
    Icon
  }
}
</script>