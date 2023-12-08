<template>
<NavbarCustomer/>
<Contact/>
<Footer/>
</template>
<script>
import Contact from '../../components/Contact.vue';
import Footer from '../../components/Footer.vue';
import NavbarCustomer from '../../components/ForCustomer/NavbarCustomer.vue';
export default {
  components: {
    Contact,
    Footer,
    NavbarCustomer
}
}
</script>