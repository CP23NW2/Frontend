<template>
  <div class="pt-10">
    <Navbar />
  </div>
  <div>
    <Login />
  </div>
</template>

<script>
import Login from "../../components/Admin/Login.vue";
import Navbar from "../../components/Admin/Navbar.vue";

export default {
  components: {
    Navbar,
    Login,
  },
};
</script>

<style></style>
