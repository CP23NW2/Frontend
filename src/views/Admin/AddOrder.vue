<template>
    <Navbar/>
        <AddOrder/>
    </template>
    
    <script>
    import AddOrder from '../../components/Admin/Order/AddOrder.vue'
    import Navbar from '../../components/Admin/Navbar.vue'
    
    export default {
      components: {
        Navbar,
        AddOrder
      },
    };
    
    </script>
    
    <style></style>
    