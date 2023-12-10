<template>
  <div>
    <div class="w-full h-screen mt-4 bg-gray-200 md:mt-12">
      <div class="flex items-center justify-center p-4 py-10 md:py-20 md:p-10">
        <div
          id="printMe"
          class="w-full h-auto mt-4 bg-white rounded-md shadow md:mt-0"
        >
          <!-- Header  -->
          <div
            class="bg-[#f59f546e] w-full h-12 md:h-16 flex items-center px-2.5 rounded-t-md"
          >
            <p class="text-xl md:px-10 md:text-3xl">Edit Customer</p>
          </div>

          <form
            @submit.prevent=""
            ref="customerForm"
            class="flex p-4 py-5 md:px-12"
          >
            <div class="w-full pb-4">
              <label class="text-primary-color md:text-2xl">
                User Information
              </label>
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-2 md:flex-row"
              >
                <div class="w-full pb-4">
                  <label class="pb-2 text-sm md:text-lg">Name</label>
                  <input
                    v-model="customerData.customerName"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <label class="pb-2 text-sm md:text-lg">Last Name</label>
                  <input
                    v-model="customerData.customerLastName"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <label class="pb-2 text-sm md:text-lg">Phone number</label>
                  <input
                    v-model="formattedTel"
                    class="w-full text-sm bg-[#D4D4D433] text-gray-500 border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                    disabled
                  />
                </div>
                <div class="w-full">
                  <label class="pb-2 text-sm md:text-lg">Address</label>
                  <input
                    v-model="customerData.address"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
              </div>
              <div class="flex justify-end mt-5">
                <div class="mx-2">
                  <button
                    @click="updateCustomer"
                    type="submit"
                    class="bg-blue-700 h-10 w-24 rounded-xl text-white md:h-[60px] md:w-[130px] md:text-xl cursor-pointer hover:bg-blue-800"
                  >
                    Confirm
                  </button>
                </div>
                <div class="mx-2">
                  <button
                    @click="cancel"
                    class="bg-red-500 h-10 w-24 rounded-xl text-white md:h-[60px] md:w-[130px] md:text-xl cursor-pointer hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      customerTel: null, // Initialize customerTel in data
      customerData: {
        customerTel: "",
      }, // To store customer data
    };
  },
  methods: {
    fetchData() {
      // Use this.customerTel to fetch data for a specific customer
      const url = `http://20.255.59.8:3000/customers/${this.customerTel}`;
      axios
        .get(url)
        .then((response) => {
          this.customerData = response.data;
        })
        .catch((error) => {
          console.error("Error fetching customer data:", error);
        });
    },
    updateCustomer() {
      const url = `http://20.255.59.8:3000/customers/${this.customerTel}`;
      console.log(url);
      console.log(this.customerData.customerTel);

      axios
        .put(url, this.customerData)
        .then((response) => {
          if (response.status === 200) {
            console.log("Customer updated successfully");
            Swal.fire({
              icon: "success",
              title: "Editing Success!",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              this.$router.push(`/customer`);
            });
          } else {
            console.error("Failed to update customer:", response.data.error);
            Swal.fire({
              icon: "error",
              title: "Update Failed",
              text: response.data.error, // Display the error message from the server
            });
          }
        })
        .catch((error) => {
          console.error("Error updating customer:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please check Name and Last Name again!", // Display a generic error message
          });
        });
    },
    cancel() {
      this.$router.push(`/customer`);
    },
  },
  mounted() {
    // Retrieve customerTel from the route parameters
    this.customerTel = this.$route.params.customerTel;

    // Fetch customer data using customerTel
    this.fetchData();
  },
  computed: {
    formattedTel: {
      get() {
        return this.customerData.customerTel
          ? "0" + this.customerData.customerTel
          : "0";
      },
      set(value) {
        // Handle the case if you need to update the tel in customerData
        this.customerData.Tel = value.substring(1); // Remove the leading '0'
      },
    },
  },
};
</script>
