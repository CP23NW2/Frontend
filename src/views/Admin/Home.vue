<template>
  <NavBar />
  <Home />
  <div class=" bg-primary-color">
  <div data-aos="fade-right" data-aos-duration="1000" class="-mt-16 md:-mt-12"><About /></div>
</div>
  <div data-aos="fade-left" data-aos-duration="2000" class="-mt-24 md:-mt-12"><Contact /></div>
  <Footer />
</template>

<script>
import NavBar from "../../components/Admin/Navbar.vue";
import Home from "../../components/Admin/Home.vue";
import Contact from "../../components/Contact.vue";
import About from "../../components/About.vue";
import Footer from "../../components/Footer.vue";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  components: {
    NavBar,
    Home,
    Contact,
    About,
    Footer,
  },
};
</script>
