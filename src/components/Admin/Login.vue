<template>
  <div class="relative">
    <div
      class="fixed md:bg-gradient-to-t from-gradient-u to-gradient-t md:rounded-full md:w-full md:h-[2500px] md:transform -translate-y-2/4 md:opacity-30"
    ></div>
  </div>

  <div class="relative">
    <div class="justify-center">
      <div class="grid md:grid-cols-2 grid-cols-1 pt-20">
        <div class="hidden md:block">
          <h1 class="pt-20">Buddy Glasses</h1>
        </div>

        <div class="flex px-10 py-28">
          <div
            class="bg-almost-white md:w-4/6 md:h-[600px] opacity-100 rounded-2xl shadow-2xl"
          >
            <div class="flex px-10 pt-16">
                
              <div class="grid grid-cols-1 w-full">
                <div class="flex justify-center ">
                <div class="md:w-24 md:h-24 w-10 h-10 rounded-full bg-primary-color">
                <div
                  class="flex items-center justify-center md:w-24 md:h-24 w-10 h-10 text-center"
                >
                  <Icon icon="la:vr-cardboard" color="white" width="60" />
                </div>
              </div>
            </div>
                <div class="pt-8">
                <input
                v-model="login.email"
                type="email"
                  placeholder="Email"
                  class="flex md:text-lg border border-gray-300 items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-lg"
                />
            </div>
                <div>
                    <input
                    v-model="login.password"
                    type="password"
                    placeholder="Enter a password"
                    class="flex md:text-lg border border-gray-300 items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-lg"
                    />
            </div>
                <div class="pt-2">
                  <button
                  @click="loginAdmin()"
                    class="md:text-xl text-lg bg-primary-color w-full items-center px-5 py-4 mb-5 mr-2 rounded-lg font-bold outline-none text-white text-center"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import axios from 'axios'

export default {
    data(){
        return{
        login: {
            email: '',
            password: ''
        }
        }
    },
  methods: {
    async loginAdmin() {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/admins/login`, this.login);
        if (response.status === 200) {
          // Login successful, redirect or perform other actions
          console.log('Login successful');
          
        } else {
          // Login failed
          console.error('Login failed:', response.data.error);
        }
      } catch (error) {
        // Handle network errors or other exceptions
        console.error('Error logging in:', error);
        this.clearLoginForm();
        Swal.fire({
            icon: 'error',
        title: 'The email address or Password not correct!',
        timer: 1500
        })
      }
    },
    clearLoginForm() {
    // Reset the login object's properties to empty strings
    this.login.email = '';
    this.login.password = '';
  },
}}

</script>

<style scoped></style>
