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
            <p class="text-xl md:px-10 md:text-3xl">Add Customer and Order</p>
          </div>

          <div class="flex py-5 md:px-12">
            <div class="w-full p-4 md:p-0">
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-3 md:flex-row"
              >
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Name</p>
                  <input
                    required
                    v-model="newCustomer.customerName"
                    :class="{
                      'error-input': nameError,
                      'border-red-500': nameError && !newCustomer.customerName,
                    }"
                    class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                  />
                  <p
                    v-if="nameError"
                    class="invisible text-sm text-red-500 peer-invalid:visible"
                  >
                    Please enter your name
                  </p>
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">LastName</p>
                  <input
                    required
                    v-model="newCustomer.customerLastName"
                    :class="{
                      'error-input': lasnameError,
                      'border-red-500':
                        lasnameError && !newCustomer.customerLastName,
                    }"
                    class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                  />
                  <p
                    v-if="lasnameError"
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
                    :class="{
                      'error-input': dateError,
                      'border-red-500': dateError && !newOrder.dateOrder,
                    }"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                  />
                  <p
                    v-if="dateError"
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
                    v-model="newCustomer.address"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Phone number</p>
                  <input
                    maxlength="10"
                    required
                    v-model="newCustomer.customerTel"
                    :class="{
                      'error-input': phoneErrorError,
                      'border-red-500': phoneError && !newCustomer.customerTel,
                    }"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                  />
                  <p
                    v-if="phoneError"
                    class="invisible text-sm text-red-500 peer-invalid:visible"
                  >
                    Please enter phone number
                  </p>
                </div>

                <!-- Order  -->
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Order Name</p>
                  <input
                    required
                    v-model="newOrder.orderName"
                    :class="{
                      'error-input': orderNameError,
                      'border-red-500': orderNameError && !newOrder.orderName,
                    }"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                  />
                  <p
                    v-if="orderNameError"
                    class="invisible text-sm text-red-500 peer-invalid:visible"
                  >
                    Please enter order name!
                  </p>
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg text-primary-color">
                    Total Price
                  </p>
                  <input
                    type="number"
                    v-model="newOrder.price"
                    class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10 border-primary-color border text-primary-color"
                  />
                </div>
              </div>
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-3 md:flex-row"
              >
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Delivery</p>
                  <select
                    required
                    v-model="newOrder.delivery"
                    :class="{
                      'error-input': deliveryError,
                      'border-red-500': deliveryError && !newOrder.delivery,
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

                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Shipping Name</p>
                  <select
                    v-model="newOrder.shippingName"
                    class="bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 px-5 w-full inline-flex items-center justify-between"
                  >
                    <option disabled value="">For Delivery</option>
                    <option>Flash</option>
                    <option>EMS</option>
                    <option>J&T</option>
                  </select>
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Tracking Number</p>
                  <input
                    v-model="newOrder.tracking"
                    placeholder="ถ้ามี"
                    maxlength="15"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
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
                            required
                            v-model="newEyewear.eyewearName"
                            :class="{
                              'error-input': eyewearError,
                              'border-red-500':
                                eyewearError && !newEyewear.eyewearName,
                            }"
                            class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                          />
                          <p
                            v-if="eyewearError"
                            class="invisible text-sm text-red-500 peer-invalid:visible"
                          >
                            Please enter product!
                          </p>
                        </div>
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Lens</p>
                          <input
                            required
                            v-model="newEyewear.lens"
                            :class="{
                              'error-input': lensError,
                              'border-red-500': lensError && !newEyewear.lens,
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
                            v-model="newEyewear.price"
                            type="number"
                            :class="{
                              'error-input': priceError,
                              'border-red-500': priceError && !newEyewear.price,
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
                      <div
                        class="justify-between gap-4 mt-4 md:grid md:grid-cols-2 md:flex-row"
                      >
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Detail</p>
                          <input
                            v-model="newEyewear.detail"
                            placeholder="ถ้ามี"
                            class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                          />
                        </div>
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Status</p>
                          <select
                            required
                            v-model="newEyewear.orderStatus"
                            :class="{
                              'error-input': statusError,
                              'border-red-500':
                                statusError && !newEyewear.orderStatus,
                            }"
                            class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                          >
                            <option disabled value="">Please select one</option>
                            <option value="Preparing">Preparing</option>
                            <option value="Processing">Processing</option>
                            <option value="Complete">Complete</option>
                          </select>
                          <p
                            v-if="statusError"
                            class="invisible text-sm text-red-500 peer-invalid:visible"
                          >
                            Please enter status!
                          </p>
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
                    @click="addCustomerAndOrderAndEyewear()"
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
import axios from "axios";
import VueHtmlToPaper from "vue-html-to-paper";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      nameError: false,
      lasnameError: false,
      phoneError: false,

      dateError: false,
      orderNameError: false,
      totalPriceError: false,
      deliveryError: false,

      eyewearError: false,
      lensError: false,
      statusError: false,
      priceError: false,
      output: null,
      isDropdownVisible: false,
      eyewearTables: 1,
      newCustomer: {
        customerID: "",
        customerName: "",
        customerLastName: "",
        customerTel: "",
        address: "",
      },
      newOrder: {
        orderID: "",
        orderName: "",
        price: "",
        dateOrder: new Date().toISOString().split("T")[0],
        delivery: "",
        shippingName: "",
        tracking: "",
        customerID: "",
      },
      newEyewear: {
        eyewearID: "",
        eyewearName: "",
        lens: "",
        price: "",
        detail: "",
        orderStatus: "",
        datePreparing: new Date().toISOString().split("T")[0],
        dateProcessing: new Date().toISOString().split("T")[0],
        dateComplete: new Date().toISOString().split("T")[0],
        leftSPH: "",
        leftCYL: "",
        leftAXIS: "",
        leftADD: "",
        leftPD: "",
        leftSH: "",
        leftUpKT: "",
        rightSPH: "",
        rightCYL: "",
        rightAXIS: "",
        rightADD: "",
        rightPD: "",
        rightSH: "",
        rightUpKT: "",
        orderID: "",
      },
    };
  },
  computed: {
    confirm: function () {
      this.$router.push("/order");
      return alert("Order complete!");
    },
  },
  methods: {
    button() {
      console.log(this.isError);
    },
    async addCustomerAndOrderAndEyewear() {
      try {
        await this.addCustomer(); // เพิ่มข้อมูลลูกค้า
        // เมื่อข้อมูลลูกค้าเพิ่มเสร็จสิ้น ก็เรียกใช้ addOrder และส่ง customerID ไปด้วย
        await this.addOrder(this.newCustomer.customerID);
        // this.newEyewear.orderID = this.newOrder.orderID;
        await this.addEyewear();
        // หลังจากเพิ่มข้อมูลทั้ง 3 ชุดเรียบร้อยแล้วให้เปลี่ยนเส้นทางไปยังหน้า order
        console.log('sussess')
        this.$router.push("/order");
      } catch (error) {
        console.log('fails')
        console.error("Error adding customer, order, or eyewear:", error);
        // แสดง SweetAlert เมื่อมีข้อผิดพลาด
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to add customer, order, or eyewear. Please check your input and try again.",
        });
      }
    },
    async fetchCustomer() {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/customers`
          //`http://localhost:3000/customers`
        );
        if (result.status == 200) {
          console.log("Data updated successfully");
        } else {
          console.error("Failed to update data:", result.data.error);
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    },
    async fetchOrder() {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/orders`
          //`http://localhost:3000/orders`
        );
        if (result.status == 200) {
          console.log("Data updated successfully");
        } else {
          console.error("Failed to update data:", result.data.error);
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    },
    async fetchEyewear() {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/eyewears`
          //`http://localhost:3000/eyewears`
        );
        if (result.status === 200) {
          console.log("Data updated successfully");
        } else {
          console.error("Failed to update data:", result.data.error);
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    },
    // confirmOrder() {
    //   this.addCustomer()
    // .then(() => {
    //   return this.addOrder();
    // })
    // .then(() => {
    //   return this.addEyewear();
    // })
    // .then(() => {
    //   this.$router.push('/order');
    // })
    // .catch((error) => {
    //   console.error('Error adding customer, order, or eyewear:', error);
    //   // แสดงข้อความแจ้งเตือนให้ผู้ใช้ทราบว่ามีข้อผิดพลาดเกิดขึ้น
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: 'An error occurred while adding customer, order, or eyewear. Please try again later.',
    //   });
    // });
    // },
    async addCustomer() {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/customers`,
          //`http://localhost:3000/customers`,
          this.newCustomer
        );
        if (response.status === 200) {
          console.log("Customer added successfully");
          this.newOrder.customerID = response.data.customerID;
          this.fetchCustomer();
          // return newCustomer.customerID;
        } else {
          console.error("Failed to add customer");
        }
      } catch (error) {
        console.error("Error adding customer", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.error,
        });
      }
    },
    async addOrder(customerID) {
      try {
        // ตรวจสอบความถูกต้องของข้อมูลก่อนที่จะส่ง request
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/orders`,
          // `http://localhost:3000/orders`,
          this.newOrder
        );
        if (response.status === 200) {
          console.log("Order added successfully" + this.newOrder);
          this.newEyewear.orderID = response.data.orderID;
          this.fetchOrder();
        } else {
          console.error("Failed to add order" + this.newOrder);
        }
      } catch (error) {
        console.error("Error adding order", error.response.data.error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.error,
        });
        //   if (error.response && error.response.status === 400) {
        //     this.orderNameError = false
        //     this.deliveryError = false
        //     if (!this.newOrder.orderName) {
        //       this.orderNameError = true
        //     }
        //     if (!this.newOrder.delivery) {
        //       this.deliveryError = true
        //     }
        //     if(!this.newOrder.dateOrder){
        //       this.dateError = true
        //     }
        //     if (this.orderNameError || this.deliveryError || this.dateError) {
        //       return
        //     }
        //   }
      }
    },

    async addEyewear() {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/eyewears`,
          //`http://localhost:3000/eyewears`,
          this.newEyewear
        );
        if (response.status == 200) {
          console.log("Eyewear added successfully");
          this.fetchEyewear();
          // showSuccessMessage();
        } else {
          console.error("Failed to add eyewear:", response.data);
        }
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.error,
        });
        // if (error.response && error.response.status === 400) {
        //   this.eyewearError = false
        //   this.lensError = false
        //   this.priceError = false
        //   this.statusError = false
        //   if (!this.newEyewear.eyewearName) {
        //     this.eyewearError = true
        //   }
        //   if (!this.newEyewear.lens) {
        //     this.lensError = true
        //   }
        //   if (!this.newEyewear.price) {
        //     this.priceError = true
        //   }
        //   if (!this.newEyewear.status) {
        //     this.statusError = true
        //   }
        //   if (
        //     this.eyewearError ||
        //     this.lensError ||
        //     priceError ||
        //     statusError
        //   ) {
        //     return
        //   }
        // }
      }
    },
    // showSuccessMessage() {
    //   Swal.fire({
    //     icon: "success",
    //     title: "Add New Order Success!",
    //     // text: `OrderID: ${orderID}`,
    //     // showConfirmButton: false,
    //     timer: 1500,
    //   }).then(() => {
    //     this.$router.push("/order");
    //   });
    // },
    async print() {
      await this.$htmlToPaper("printMe", {
        name: "_blank",
        specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
        styles: [
          "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
          "https://unpkg.com/kidlat-css/css/kidlat.css",
        ],
        data: {
          userInformation: this.userInformation,
          eyesightData: this.eyesightData,
        },
      });
    },
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    showNextTable() {
      this.eyewearTables++;
    },
    cancel() {
      this.$router.push("/order");
    },
  },
  directives: {
    "html-to-paper": VueHtmlToPaper,
  },
};
</script>

<style scoped></style>