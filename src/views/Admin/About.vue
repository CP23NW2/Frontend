<template>
  <Navbar/>
  <About/>
  </template>
  <script>
 import About from '../../components/About.vue';
import Navbar from '../../components/Admin/Navbar.vue';
  export default {
    components: {
      Navbar,
      About
  }
  }
  </script>