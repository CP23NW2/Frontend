<template>
<NavBar />
<CustomerList/>
</template>

<script>
import NavBar from '../../components/Admin/Navbar.vue'
import CustomerList from '../../components/Admin/Customer/CustomerList.vue'

export default {
  components: {
    NavBar,
    CustomerList
  }
}
</script>
