<template>
  <!-- @click.stop v-if="isPopupVisible" @close="closePopup" -->
  <div class="popup" @click.stop v-if="isPopupVisible" @close="closePopup">
    <div class="bg-white rounded-lg md:w-[700px] md:h-[500px]">
      <div class="flex items-center justify-center mt-3">
        <div class="items-center justify-center text-center">
          <div class="flex justify-center py-5">
            <div
              class="bg-primary-color rounded-full w-[80px] h-[80px] flex items-center justify-center"
            >
              <Icon icon="la:vr-cardboard" color="white" width="60" />
            </div>
          </div>
          <p class="text-xl font-bold">Verify OTP</p>
          <p class="text-sm font-bold">Please check your email</p>
          <div class="mt-5">
            <input
              v-model="otp"
              :class="{ 'border-red-500 border-2': otpError, 'shake': otpError }"
              class="h-10 text-lg w-36"
              maxlength="6"
              type="number"
            />
          </div>

          <div class="flex justify-center mt-6">
            <button
              @click="submitForm"
              class="bg-blue-800 md:text-base font-medium rounded-full md:w-[177px] md:h-[51px] text-white"
            >
              OK
            </button>
          </div>
          <div class="flex justify-center mt-2">
            <button
              @click="closePopup"
              class="bg-red-600 md:text-base font-medium rounded-full md:w-[177px] md:h-[51px] text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div
        class="hidden h-screen bg-orange-100 md:flex md:justify-center md:items-center"
      >
        <div class="flex flex-col items-center">
          <img
            class="flex w-full h-full mx-10"
            src="../../../Public/images/login.png"
            alt="Success Image"
          />
          <h1 class="mt-10 font-sans text-5xl font-semibold">
            Buddy Glasses Website
          </h1>
          <div class="mt-5 text-lg text-center">
            <p>
              Buddy Glasses provides eyeglass cutting services.<br />
              Accepting prescription glasses ordered online.
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center h-full bg-orange-100">
        <div
          class="bg-almost-white md:w-[700px] md:h-[1000px] opacity-100 rounded-3xl shadow-2xl"
        >
          <div class="flex px-10 py-12">
            <div class="grid w-full grid-cols-1">
              <div class="flex">
                <div
                  class="w-10 h-10 rounded-full md:w-24 md:h-24 bg-primary-color"
                >
                  <div
                    class="flex items-center justify-center w-10 h-10 text-center md:w-24 md:h-24"
                  >
                    <Icon icon="la:vr-cardboard" color="white" width="60" />
                  </div>
                </div>
                <h1 class="mx-4 mt-8 font-sans text-2xl font-semibold">Buddy Glasses</h1>
              </div>
              <div class="flex pt-8">
                <h2 class="font-sans text-5xl font-semibold">Log in</h2>
              </div>
              <div class="pt-8">
                <p>Email Address</p>
                <input
                  v-model="login.email"
                  type="email"
                  placeholder="Email Address"
                  :class="{ 'border-red-500 border-2': emailError }"
                  class="flex items-center w-full px-5 py-4 mt-2 mr-2 text-sm font-medium border border-gray-300 rounded-lg outline-none md:text-lg focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900"
                />
              </div>
              <div>
                <p>Password</p>
                <input
                  v-model="login.password"
                  type="password"
                  placeholder="Enter a password"
                  :class="{ 'border-red-500 border-2': passwordError }"
                  class="flex items-center w-full px-5 py-4 mt-2 mb-5 mr-2 text-sm font-medium border border-gray-300 rounded-lg outline-none md:text-lg focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900"
                />
              </div>
              <div class="pt-8">
                <button
                  @click="loginAdmin()"
                  class="items-center w-full px-5 py-4 mb-5 mr-2 text-lg font-bold text-center text-white rounded-lg outline-none md:text-xl bg-primary-color"
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
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import axios from "axios";

export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      otp: "",
      isPopupVisible: false,
      showPassword: false,
      emailError: false,
      passwordError: false,
      otpError: false
    };
  },
  methods: {
    toggleShowPassword() {
        this.showPassword = !this.showPassword;
    },
    async loginAdmin() {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/admins/login`,
          this.login
        );
        if (response.status === 200) {
          this.isPopupVisible = true;
          console.log("isPopupVisible : ", this.isPopupVisible);
          // Login successful, redirect or perform other actions
          console.log("Login successful");
          
        } else {
          // Login failed
          console.error("Login failed:", response.data.error);
        }
      } catch (error) {
        // Handle network errors or other exceptions
        console.error("Error logging in:", error);
        this.clearLoginForm();
        this.emailError = true,
        this.passwordError= true
        Swal.fire({
          icon: "error",
          title: "The email address or Password not correct!",
          timer: 1500,
        });
      }
    },
    clearLoginForm() {
      // Reset the login object's properties to empty strings
      this.login.email = "";
      this.login.password = "";
    },
    async submitForm() {
      try {
        const verifyOTP = {
          email: this.login.email, // Include the email from the login form
          otp: this.otp,
        };
        console.log("OTP : ", this.login.email, this.otp);
        // Call the API to verify OTP
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/admins/verify-otp`,
          verifyOTP
        );

        // If OTP verification is successful, show the popup
        if (response.status === 200) {
          this.isPopupVisible = false;
          const token = response.data.token; // Access token directly from response.data
          localStorage.setItem("token", token);
          console.log(token); // Log the token for debugging
          this.$router.push('/');
          console.log("OTP verification successful.");
          this.otpError = false;
        } else {
          // OTP verification failed
          
          console.error("OTP verification failed:", response.data.error);
          this.otpError = true;
          this.clearotp()
          Swal.fire({
            icon: "error",
            title: "OTP verification failed",
            text: response.data.error,
            timer: 1500,
          });
        }
      } catch (error) {
        // Handle network errors or other exceptions
        console.error("Error during OTP verification:", error);
        this.otpError = true;
        this.clearotp()
      }
    },
    clearotp(){
      this.otp = ''
    },
    closePopup() {
      this.otpError = false;
      this.clearotp()
      this.isPopupVisible = false;
    },
  },
};
</script>

<style scoped>
/* สไตล์ CSS สำหรับ Popup นี้ */
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}

.shake {
  animation: shake 0.2s ease-in-out;
}
</style>