<template>
  <NavbarCustomer />
  <ForCustomer />
  <div class="-mt-16 md:-mt-12"><About/></div>
  <div class="-mt-24 md:-mt-12 "><Contact/></div>
  <Footer/>
</template>

<script>
import ForCustomer from '../../components/ForCustomer/ForCustomer.vue'
import NavbarCustomer from '../../components/ForCustomer/NavbarCustomer.vue';
import About from '../../components/About.vue';
import Contact from '../../components/Contact.vue';
import Footer from '../../components/Footer.vue'
export default {
  components: {
    ForCustomer,
    NavbarCustomer,
    About,
    Contact,
    Footer
  }
}
</script>
