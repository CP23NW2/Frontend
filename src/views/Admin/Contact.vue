<template>
<Navbar/>
<Contact/>
<Footer/>
</template>
<script>
import Contact from '../../components/Contact.vue';
import Navbar from '../../components/Admin/Navbar.vue';
import Footer from '../../components/Footer.vue';
export default {
  components: {
    Contact,
    Navbar,
    Footer
}
}
</script>