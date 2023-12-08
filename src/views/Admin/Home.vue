<template>
  <NavBar />
  <Home/>
  <div class="-mt-16 md:-mt-12"><About/></div>
  <div class="-mt-24 md:-mt-12 "><Contact/></div>
  <Footer/>
  </template>
  
  <script>
  import NavBar from '../../components/Admin/Navbar.vue'
  import Home from '../../components/Admin/Home.vue'
  import Contact from '../../components/Contact.vue'
  import About from '../../components/About.vue'
  import Footer from '../../components/Footer.vue'
  export default {
    components: {
    NavBar,
    Home,
    Contact,
    About,
    Footer
}
  }
  </script>
  