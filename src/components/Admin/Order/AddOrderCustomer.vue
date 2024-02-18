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
                    v-model="customerData.customerName"
                    id="inputConfirm"
                    class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">LastName</p>
                  <input
                    v-model="customerData.customerLastName"
                    class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Date</p>
                  <input
                    v-model="newOrder.dateOrder"
                    type="date"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
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
                    v-model="customerData.customerTel"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
              </div>
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-3 md:flex-row"
              >
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Delivery</p>
                  <select
                    v-model="newOrder.delivery"
                    class="bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 px-5 w-full inline-flex items-center justify-between"
                  >
                    <option disabled value="">Please select one</option>
                    <option>Delivery</option>
                    <option>Pickup</option>
                  </select>
                  <!-- <button
                      id="dropdownDelayButton"
                      @click="toggleDropdown"
                      class="bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 px-5 py-2.5 w-full text-center inline-flex items-center justify-between"
                      type="button"
                    >
                      Dropdown hover
                      <svg
                        class="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button> -->
                  <!-- Dropdown menu -->
                  <div
                    id="dropdownDelay"
                    v-show="isDropdownVisible"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDelayButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Dashboard</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Settings</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Earnings</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Sign out</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Shipping Name</p>
                  <select
                    v-model="newOrder.shippingName"
                    class="bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 px-5 w-full inline-flex items-center justify-between"
                  >
                    <option disabled value="">Please select one</option>
                    <option>Flash</option>
                    <option>EMS</option>
                    <option>J&T</option>
                  </select>
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Tracking Number</p>
                  <input
                    required
                    v-model="newOrder.tracking"
                    maxlength="15"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
              </div>
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-2 md:flex-row"
              >
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Order Name</p>
                  <input
                    v-model="newOrder.orderName"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg text-primary-color">
                    Total Price
                  </p>
                  <div
                    class="w-full text-sm bg-[#D4D4D433] border-primary-color border rounded-md md:text-lg md:px-5 flex items-center h-10"
                  >
                    {{ newEyewear.price }}
                  </div>
                </div>
              </div>

              <div id="EyewearTable">
                <div
                  v-for="eyewearIndex in eyewearTables"
                  :key="eyewearIndex"
                  :id="'EyewearTable' + eyewearIndex"
                >
                  <div class="w-full h-px mt-4 border border-neutral-300"></div>
                  <div class="flex py-5">
                    <div class="w-full p-4 md:p-0">
                      <p class="text-primary-color md:text-2xl">
                        Order detail {{ eyewearIndex }}
                      </p>
                      <div
                        class="justify-between gap-4 mt-4 md:grid md:grid-cols-3 md:flex-row"
                      >
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Product</p>
                          <input
                            v-model="newEyewear.eyewearName"
                            id="inputConfirm"
                            class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                          />
                        </div>
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Lens</p>
                          <input
                            v-model="newEyewear.lens"
                            class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                          />
                        </div>
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Price</p>
                          <input
                            v-model="newEyewear.price"
                            class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                            @input="handlePriceInput(newEyewear.price)"
                          />
                        </div>
                      </div>
                      <div
                        class="justify-between gap-4 mt-4 md:grid md:grid-cols-2 md:flex-row"
                      >
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Detail</p>
                          <input
                            v-model="newEyewear.detail"
                            class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                          />
                        </div>
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Status</p>
                          <select
                            v-model="newEyewear.orderStatus"
                            class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                          >
                            <option value="Preparing">Preparing</option>
                            <option value="Processing">Processing</option>
                            <option value="Complete">Complete</option>
                          </select>
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
                                    v-model="newEyewear.leftSPH"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="newEyewear.leftCYL"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="newEyewear.leftAXIS"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="newEyewear.leftADD"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="newEyewear.leftPD"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="newEyewear.leftSH"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="newEyewear.leftUpKT"
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
                                    v-model="newEyewear.rightSPH"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="newEyewear.rightCYL"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="newEyewear.rightAXIS"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="newEyewear.rightADD"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="newEyewear.rightPD"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="newEyewear.rightSH"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    v-model="newEyewear.rightUpKT"
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
              </div>

              <div class="py-2">
                <button
                  @click="showNextTable"
                  class="h-10 w-full rounded-2xl border border-[#F59F54] text-[#F59F54] md:h-[60px] md:text-xl cursor-pointer hover:bg-[#F59F54] hover:text-white"
                >
                  Add New Eyewear +
                </button>
              </div>

              <div class="flex justify-end mt-5">
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
</template>
<script>
import axios from 'axios'
import VueHtmlToPaper from 'vue-html-to-paper'
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      customerID: null,
      customerData: {
        customerID: 3
      },
      output: null,
      isDropdownVisible: false,
      eyewearTables: 1,
      newOrder: {
        orderName: 'Order',
        price: '',
        dateOrder: new Date().toISOString().split('T')[0],
        delivery: '',
        shippingName: '',
        tracking: '',
        customerID: '',
        eyewearList: []
      },
      newEyewear: {
        eyewearID: 10,
        eyewearName: '',
        lens: '',
        price: '',
        detail: '',
        orderStatus: '',
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
    }
  },
  computed: {
    confirm: function () {
      this.$router.push('/order')
      return alert('Order complete!')
    }
  },
  mounted() {
    // Retrieve customerTel from the route parameters
    this.customerID = this.$route.params.customerID

    // Fetch customer data using customerTel
    this.fetchData()
  },
  methods: {
    addOrderAndEyewear() {
      this.addOrder()
      this.addEyewear()
    },
    handlePriceInput(price) {
      // กำหนดค่า newEyewear.price ตาม input ที่ผู้ใช้ป้อน
      this.newEyewear.price = price

      // ให้ newOrder.price มีค่าเท่ากับ newEyewear.price
      this.newOrder.price = this.newEyewear.price
    },

    addEyewear(orderID) {
      for (
        let eyewearIndex = 1;
        eyewearIndex <= this.eyewearTables;
        eyewearIndex++
      ) {
        // สร้าง array เพื่อเก็บ eyewear แต่ละรายการ
        const eyewearArray = []

        const newEyewear = {
          eyewearID: 10,
          eyewearName: this.newEyewear.eyewearName,
          lens: this.newEyewear.lens,
          price: this.newEyewear.price,
          detail: this.newEyewear.detail,
          orderStatus: this.newEyewear.orderStatus,
          datePreparing: new Date().toISOString().split('T')[0],
          dateProcessing: new Date().toISOString().split('T')[0],
          dateComplete: new Date().toISOString().split('T')[0],
          leftSPH: this.newEyewear.leftSPH,
          leftCYL: this.newEyewear.leftCYL,
          leftAXIS: this.newEyewear.leftAXIS,
          leftADD: this.newEyewear.leftADD,
          leftPD: this.newEyewear.leftPD,
          leftSH: this.newEyewear.leftSH,
          leftUpKT: this.newEyewear.leftUpKT,
          rightSPH: this.newEyewear.rightSPH,
          rightCYL: this.newEyewear.rightCYL,
          rightAXIS: this.newEyewear.rightAXIS,
          rightADD: this.newEyewear.rightADD,
          rightPD: this.newEyewear.rightPD,
          rightSH: this.newEyewear.rightSH,
          rightUpKT: this.newEyewear.rightUpKT,
          orderID: orderID
        }

        // เพิ่ม newEyewear เข้าไปใน array ของ eyewearArray
        eyewearArray.push({ ...newEyewear })

        // เพิ่ม eyewearArray ลงใน eyewearList
        this.newOrder.eyewearList.push(eyewearArray)
      }

      // Reset newEyewear
      this.newEyewear = {
        eyewearID: 10,
        eyewearName: '',
        lens: '',
        price: '',
        detail: '',
        orderStatus: '',
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
    async fetchEyewear() {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/eyewears`
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
    async confirmOrder() {
      console.log('hi')
      try {
        await this.addOrder()
        await this.addEyewear()
        // Proceed with other confirmation actions if needed
      } catch (error) {
        console.error('Error confirming order:', error)
      }
    },
    async addOrder() {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/orders`,
          this.newOrder
        )
        if (response.status == 200) {
          console.log('Order added successfully')
          this.fetchOrder()
          this.showSuccessMessage()
          // Call addEyewear() to add eyewear after successfully adding the order
          this.addEyewear(response.data.orderID)
        } else {
          console.error('Failed to add order:', response.data)
        }
      } catch (error) {
        console.error('Error adding order:', error)
        if (error.response && error.response.data) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data.error
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred while adding the order.'
          })
        }
      }
    },
    async addEyewear(orderID) {
      try {
        // Set the orderID for the newEyewear
        this.newEyewear.orderID = orderID

        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/eyewears`,
          this.newEyewear
        )
        if (response.status == 200) {
          console.log('Eyewear added successfully')
          this.fetchEyewear()
        } else {
          console.error('Failed to add eyewear:', response.data)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred while adding the eyewear.'
          })
        }
      } catch (error) {
        console.error('Error adding eyewear:', error)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while adding the eyewear.'
        })
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
    async print() {
      await this.$htmlToPaper('printMe', {
        name: '_blank',
        specs: ['fullscreen=yes', 'titlebar=yes', 'scrollbars=yes'],
        styles: [
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
          'https://unpkg.com/kidlat-css/css/kidlat.css'
        ],
        data: {
          userInformation: this.userInformation,
          eyesightData: this.eyesightData
        }
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
    }
  },
  directives: {
    'html-to-paper': VueHtmlToPaper
  }
}
</script>
