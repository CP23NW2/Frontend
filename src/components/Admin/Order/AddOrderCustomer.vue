<template>
  <div id="printMe">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    />
    <div class="w-full h-full mt-4 bg-gray-200 md:mt-12">
      <div class="flex items-center justify-center p-4 py-10 md:py-20 md:p-10">
        <div class="w-full h-auto mt-4 bg-white rounded-md shadow md:mt-0">
          <!-- Header  -->
          <div
            class="bg-[#f59f546e] w-full h-12 md:h-16 flex items-center px-2.5 rounded-t-md"
          >
            <p class="text-xl md:px-10 md:text-3xl">Add Order</p>
          </div>

          <div class="flex py-5 md:px-12">
            <div class="w-full p-4 md:p-0">
              <p class="text-primary-color md:text-2xl">
                Customer ID : {{ customerData.customerID }}
              </p>
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-3 md:flex-row"
              >
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Name</p>
                  <input
                    required
                    v-model="customerData.customerName"
                    class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                  />
                  <p
                    class="invisible text-sm text-red-500 peer-invalid:visible"
                  >
                    Please enter your name
                  </p>
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">LastName</p>
                  <input
                    required
                    v-model="customerData.customerLastName"
                    class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                  />
                  <p
                    class="invisible text-sm text-red-500 peer-invalid:visible"
                  >
                    Please enter your last name
                  </p>
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Date</p>
                  <input
                    required
                    v-model="newOrder.dateOrder"
                    type="date"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                  />
                  <p
                    class="invisible text-sm text-red-500 peer-invalid:visible"
                  >
                    Please enter date
                  </p>
                </div>
              </div>
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-2 md:flex-row"
              >
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Address</p>
                  <input
                    v-model="customerData.address"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Phone number</p>
                  <input
                    required
                    v-model="customerData.customerTel"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                  />
                  <p
                    class="invisible text-sm text-red-500 peer-invalid:visible"
                  >
                    Please enter phone number
                  </p>
                </div>
              </div>
              <!-- Order -->
              <div class="w-full h-px border border-neutral-300"></div>
              <p class="py-4 text-primary-color md:text-2xl">Order Details</p>
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-2 md:flex-row"
              >
                <div class="w-full pb-4 md:col-span-3">
                  <p class="pb-2 text-sm md:text-lg">Delivery</p>
                  <select
                    required
                    v-model="newOrder.delivery"
                    :class="{
                      'error-input': deliveryError,
                      'border-red-500': deliveryError && !newOrder.delivery
                    }"
                    class="bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 px-5 w-full inline-flex items-center justify-between peer border border-slate-400"
                  >
                    <option disabled value="">Please select one</option>
                    <option>Delivery</option>
                    <option>Pickup</option>
                  </select>
                  <p
                    v-if="deliveryError"
                    class="invisible text-sm text-red-500 peer-invalid:visible"
                  >
                    Please select one!
                  </p>
                </div>

                <div
                  class="w-full pb-4 md:col-span-3"
                  v-if="newOrder.delivery === 'Delivery'"
                >
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <p class="pb-2 text-sm md:text-lg">Shipping Name</p>
                      <select
                        v-model="newOrder.shippingName"
                        class="bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 w-full inline-flex items-center justify-between peer border border-slate-400"
                      >
                        <option disabled>Please select one</option>
                        <option>Flash</option>
                        <option>EMS</option>
                        <option>J&T</option>
                      </select>
                    </div>
                    <div>
                      <p class="pb-2 text-sm md:text-lg">Tracking Number</p>
                      <input
                        v-model="newOrder.tracking"
                        maxlength="15"
                        class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- Eyewear -->
              <div id="EyewearTable">
                <div v-for="item in newOrder.eyewearItems" :key="item.id">
                  <div class="w-full h-px mt-4 border border-neutral-300"></div>
                  <div class="flex py-5">
                    <div class="w-full p-4 md:p-0">
                      <p class="text-primary-color md:text-2xl">
                        Eyewear details {{ item.id }}
                      </p>
                      <div
                        class="justify-between gap-4 mt-4 md:grid md:grid-cols-3 md:flex-row"
                      >
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Brand</p>
                          <input
                            required
                            v-model="item.eyewearName"
                            :class="{
                              'error-input': eyewearError,
                              'border-red-500':
                                eyewearError && !newEyewear.eyewearName
                            }"
                            class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                          />
                          <p
                            v-if="eyewearError"
                            class="invisible text-sm text-red-500 peer-invalid:visible"
                          >
                            Please enter brand!
                          </p>
                        </div>
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Lens</p>
                          <input
                            required
                            v-model="item.lens"
                            :class="{
                              'error-input': lensError,
                              'border-red-500': lensError && !newEyewear.lens
                            }"
                            class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                          />
                          <p
                            v-if="lensError"
                            class="invisible text-sm text-red-500 peer-invalid:visible"
                          >
                            Please enter lens!
                          </p>
                        </div>
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Price</p>
                          <input
                            required
                            v-model="item.price"
                            type="number"
                            :class="{
                              'error-input': priceError,
                              'border-red-500': priceError && !newEyewear.price
                            }"
                            class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                          />
                          <p
                            v-if="priceError"
                            class="invisible text-sm text-red-500 peer-invalid:visible"
                          >
                            Please enter price!
                          </p>
                        </div>
                      </div>
                      <div class="justify-between gap-4 mt-4 md:flex-row">
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Detail</p>
                          <input
                            v-model="item.detail"
                            placeholder="ถ้ามี"
                            class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div id="tableContainer">
                      <div class="container pb-4 mx-auto">
                        <div class="w-full overflow-hidden rounded">
                          <table class="bg-white border border-black">
                            <thead>
                              <tr class="bg-[#F59F54] text-white">
                                <th class="px-6 py-8 border border-black">
                                  Eyesight
                                </th>
                                <th class="px-6 py-8 border border-black">
                                  SPH
                                </th>
                                <th class="px-6 py-8 border border-black">
                                  CYL
                                </th>
                                <th class="px-6 py-8 border border-black">
                                  AXIS
                                </th>
                                <th class="px-6 py-8 border border-black">
                                  ADD
                                </th>
                                <th class="px-6 py-8 border border-black">
                                  PD
                                </th>
                                <th class="px-6 py-8 border border-black">
                                  SH
                                </th>
                                <th class="px-6 py-8 border border-black">
                                  Up KT
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td
                                  class="px-6 py-8 border border-black bg-[#FFCA9C] text-center"
                                >
                                  Left
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="item.leftSPH"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="item.leftCYL"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="item.leftAXIS"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="item.leftADD"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="item.leftPD"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="item.leftSH"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="item.leftUpKT"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                              </tr>

                              <tr>
                                <td
                                  class="px-6 py-8 border border-black bg-[#FFCA9C] text-center"
                                >
                                  Right
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="item.rightSPH"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="item.rightCYL"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="item.rightAXIS"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="item.rightADD"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="item.rightPD"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="item.rightSH"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="item.rightUpKT"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- footer -->
                <div class="py-2">
                  <button
                    @click="addEyewearTable"
                    class="h-10 w-full rounded-2xl border border-[#F59F54] text-[#F59F54] md:h-[60px] md:text-xl cursor-pointer hover:bg-[#F59F54] hover:text-white"
                  >
                    Add New Eyewear +
                  </button>
                </div>

                <div class="flex justify-end mt-5">
                  <div class="flex items-center w-full gap-2">
                    <p
                      class="text-sm md:text-lg text-primary-color whitespace-nowrap"
                    >
                      Total Price:
                    </p>
                    <p
                      class="text-sm text-center rounded-md md:text-lg text-primary-color"
                    >
                      {{ totalPrice() }}
                    </p>
                  </div>
                  <div class="mx-2">
                    <button
                      @click="addOrderAndEyewear()"
                      class="bg-blue-700 h-10 w-24 rounded-xl text-white md:h-[60px] md:w-[130px] md:text-xl cursor-pointer hover:bg-blue-800"
                    >
                      Confirm
                    </button>
                  </div>
                  <div>
                    <button
                      @click="print"
                      class="bg-green-500 h-10 w-24 rounded-xl text-white md:h-[60px] md:w-[130px] md:text-xl cursor-pointer hover:bg-green-600"
                    >
                      Print
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import VueHtmlToPaper from 'vue-html-to-paper'
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      newOrder: {
        orderName: 'Order',
        price: 0,
        dateOrder: new Date().toISOString().split('T')[0],
        delivery: '',
        tracking: '',
        customerID: '',
        eyewearItems: [
          {
            id: '1',
            eyewearID: '',
            eyewearName: '',
            lens: '',
            price: '',
            detail: '',
            orderStatus: 'Preparing',
            datePreparing: new Date().toISOString().split('T')[0],
            dateProcessing: new Date().toISOString().split('T')[0],
            dateComplete: new Date().toISOString().split('T')[0],
            leftSPH: '',
            leftCYL: '',
            leftAXIS: '',
            leftADD: '',
            leftPD: '',
            leftSH: '',
            leftUpKT: '',
            rightSPH: '',
            rightCYL: '',
            rightAXIS: '',
            rightADD: '',
            rightPD: '',
            rightSH: '',
            rightUpKT: '',
            orderID: ''
          }
        ]
      },
      newEyewear: [],
      eyewearTablesCount: 1,
      deliveryError: false,
      eyewearError: false,
      lensError: false,
      priceError: false,
      customerID: null,
      customerData: {
        customerID: 3
      },
      output: null,
      isDropdownVisible: false,
      eyewearTables: 1
    }
  },
  mounted() {
    this.customerID = this.$route.params.customerID
    this.fetchData()
    this.newOrder.price = this.totalPrice()
  },
  methods: {
    addEyewearTable() {
      this.eyewearTablesCount++
      const newObject = {
        id: `${this.eyewearTablesCount}`,
        eyewearID: '',
        eyewearName: '',
        lens: '',
        price: '',
        detail: '',
        orderStatus: 'Preparing',
        datePreparing: new Date().toISOString().split('T')[0],
        dateProcessing: new Date().toISOString().split('T')[0],
        dateComplete: new Date().toISOString().split('T')[0],
        leftSPH: '',
        leftCYL: '',
        leftAXIS: '',
        leftADD: '',
        leftPD: '',
        leftSH: '',
        leftUpKT: '',
        rightSPH: '',
        rightCYL: '',
        rightAXIS: '',
        rightADD: '',
        rightPD: '',
        rightSH: '',
        rightUpKT: '',
        orderID: ''
      }
      this.newOrder.eyewearItems.push(newObject)
    },
    button() {
      console.log(this.isError)
    },
    async addOrderAndEyewear() {
      console.log('data', this.newOrder.eyewearItems)
      await this.addOrder()
      this.showSuccessMessage()
    },
    fetchData() {
      const url = `${import.meta.env.VITE_BASE_URL}/customers/${
        this.customerID
      }`
      axios
        .get(url)
        .then((response) => {
          this.customerData = response.data
          this.newOrder.customerID = this.customerData.customerID
        })
        .catch((error) => {
          console.error('Error fetching customer data:', error)
        })
    },
    async fetchOrder() {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/orders`
        )
        if (result.status == 200) {
          console.log('Data updated successfully')
        } else {
          console.error('Failed to update data:', result.data.error)
        }
      } catch (error) {
        console.error('Error updating data:', error)
      }
    },
    async addOrder() {
      try {
        console.log('Adding order:', this.newOrder)

        // Extract eyewearItems from items array
        const eyewearItems = this.newOrder.eyewearItems.map((item) => {
          return {
            eyewearName: item.eyewearName,
            orderStatus: item.orderStatus,
            datePreparing: item.datePreparing,
            dateProcessing: item.dateProcessing,
            dateComplete: item.dateComplete,
            lens: item.lens,
            detail: item.detail,
            price: item.price,
            leftSPH: item.leftSPH,
            leftCYL: item.leftCYL,
            leftAXIS: item.leftAXIS,
            leftADD: item.leftADD,
            leftPD: item.leftPD,
            leftSH: item.leftSH,
            leftUpKT: item.leftUpKT,
            rightSPH: item.rightSPH,
            rightCYL: item.rightCYL,
            rightAXIS: item.rightAXIS,
            rightADD: item.rightADD,
            rightPD: item.rightPD,
            rightSH: item.rightSH,
            rightUpKT: item.rightUpKT
          }
        })

        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/orderEyewear`,
          {
            orderName: this.newOrder.orderName,
            price: this.newOrder.price,
            dateOrder: this.newOrder.dateOrder,
            delivery: this.newOrder.delivery,
            tracking: this.newOrder.tracking,
            customerID: this.newOrder.customerID,
            eyewearItems: eyewearItems
          }
        )

        console.log('Response from Backend:', response)

        if (response.status === 201) {
          console.log('Order added successfully', response.data)
          this.newEyewear.orderID = response.data.orderID
          this.fetchOrder()
          return response.data.orderID
        } else {
          console.error('Failed to add order:', response.status, response.data)
          this.deliveryError = true
          this.eyewearError = true
          this.lensError = true
          this.priceError = true
        }
      } catch (error) {
        console.error('Error adding order', error)
        if (error.response && error.response.status === 400) {
          this.deliveryError = true
          this.eyewearError = true
          this.lensError = true
          this.priceError = true
        }
        throw error
      }
    },
    showSuccessMessage() {
      Swal.fire({
        icon: 'success',
        title: 'Add New Order Success!',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.$router.push('/order')
      })
    },
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible
    },
    showNextTable() {
      this.eyewearTables++
    },
    cancel() {
      this.$router.push('/order')
    },
    totalPrice() {
      if (!Array.isArray(this.newOrder.eyewearItems)) {
        return 0
      }
      return this.newOrder.eyewearItems.reduce((acc, item) => {
        if (typeof item.price !== 'number') {
          return acc
        }
        return acc + item.price
      }, 0)
    }
  },
  watch: {
    'newOrder.eyewearItems': {
      handler: function () {
        this.newOrder.price = this.totalPrice()
      },
      deep: true
    }
  },
  computed: {
    isPickup() {
      return this.newOrder.delivery === 'Pickup'
    }
  }
}
</script>

<style scoped></style>
