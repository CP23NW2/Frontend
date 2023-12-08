<template>
  <NavbarCustomer/>
  <About/>
  </template>
  <script>
  import About from '../../components/About.vue'
  import NavbarCustomer from '../../components/ForCustomer/NavbarCustomer.vue';
  export default {
    components: {
      NavbarCustomer,
      About
  }
  }
  </script>