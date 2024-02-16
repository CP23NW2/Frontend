<template>
    <Navbar/>
        <AddOrderCustomer/>
    </template>
    
    <script>
    import AddOrderCustomer from '../../components/Admin/Order/AddOrderCustomer.vue'
    import Navbar from '../../components/Admin/Navbar.vue'
    
    export default {
      components: {
        Navbar,
        AddOrderCustomer
      },
    };
    
    </script>
    
    <style></style>