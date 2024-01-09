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
            <p class="text-xl md:px-10 md:text-3xl">New Customer</p>
          </div>

          <form @submit.prevent="addCustomer" class="flex p-4 py-5 md:px-12">
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
                    v-model="newCustomer.customerName"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <label class="pb-2 text-sm md:text-lg">Last Name</label>
                  <input
                    v-model="newCustomer.customerLastName"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <label class="pb-2 text-sm md:text-lg">Phone number</label>
                  <input
                    v-model="newCustomer.customerTel"
                    @input="validateTelNumber"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                  <p
                    v-show="!isValidTelNumber || telNumberErrorMessage !== ''"
                    style="color: red"
                  >
                    {{ validationErrorMessage || telNumberErrorMessage }}
                  </p>
                </div>
                <div class="w-full">
                  <label class="pb-2 text-sm md:text-lg">Address</label>
                  <input
                    v-model="newCustomer.address"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
              </div>
              <div class="flex justify-end mt-5">
                <div class="mx-2">
                  <button
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
import axios from 'axios'
import Swal from 'sweetalert2'

const API_BASE_URL = 'http://localhost:3000'

const CustomerForm = {
  data() {
    return {
      newCustomer: {
        customerName: '',
        customerLastName: '',
        customerTel: '',
        address: ''
      },
      isTelNumberUnique: true,
      telNumberErrorMessage: '',
      isLoading: false
    }
  },
  methods: {
    async addCustomer() {
      try {
        this.isLoading = true

        const response = await axios.post(
          `${API_BASE_URL}/customers`,
          this.newCustomer
        )

        if (response.status == 200) {
          console.log('Customer added successfully')
          this.fetchData()
          this.showSuccessMessage()
        } else {
          console.error('Failed to add customer:', response.data)
        }
      } catch (error) {
        console.error('Error adding customer:', error)
        Swal.fire({
          icon: "error", 
          title: "Error",
          text: "Please check Name, Last Name and Phone Number again!"
        });
        // Handle specific error scenarios
      } finally {
        this.isLoading = false
      }
    },

    async validateTelNumber() {
      this.telNumberErrorMessage = ''
      if (this.newCustomer.customerTel.length > 10) {
        this.newCustomer.customerTel = this.newCustomer.customerTel.slice(0, 10)
        // console.log(this.newCustomer.customerTel)
      }

      if (this.newCustomer.customerTel.length == 10) {
        try {
          console.log(this.newCustomer.customerTel)
          const response = await axios.post(
            'http://localhost:3000/customers/validateTel',
            {
              customerTel: this.newCustomer.customerTel
            }
          )
        } catch (error) {
          if (error.response && error.response.status === 404) {
            console.error('Endpoint not found:', error.response.data.error)
            // Handle the 404 error here, display an error message or take appropriate action.
          } else {
            this.telNumberErrorMessage = 'The Phone Number Must Be Unique.'
            console.error('Error validating customer tel:', error)
          }
        }
      }
    },

    cancel() {
      this.$router.push('/customer')
    },

    async fetchData() {
      try {
        const result = await axios.get(`${API_BASE_URL}/customers`)
        if (result.status == 200) {
          console.log('Data updated successfully')
        } else {
          console.error('Failed to update data:', result.data.error)
        }
      } catch (error) {
        console.error('Error updating data:', error)
      }
    },
    // validate unique number
    showSuccessMessage() {
      Swal.fire({
        icon: 'success',
        title: 'Add New Customer Success!',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.$router.push('/customer')
      })
    }
  },

  computed: {
    numericTelNumber() {
      return this.newCustomer.customerTel
    },

    isValidTelNumber() {
      return this.numericTelNumber.length === 10 && this.isValidPrefix
    },

    isValidPrefix() {
      const prefixes = ['08', '09', '06']
      return prefixes.some((prefix) =>
        this.newCustomer.customerTel.startsWith(prefix)
      )
    },

    validationErrorMessage() {
      if (this.numericTelNumber.length !== 10) {
        return 'Please enter a valid telephone number with exactly 10 digits.'
      } else if (!this.isValidPrefix) {
        return 'Please enter a valid telephone number starting with 08, 09, or 06.'
      } else {
        return this.telNumberErrorMessage
      }
    }
  }
}

export default CustomerForm
</script>