<template>
  <div id="printMe">
    <div class="w-full h-full mt-4 bg-gray-200 md:mt-12">
      <div class="flex items-center justify-center p-4 py-10 md:py-20 md:p-10">
        <div class="w-full h-auto mt-4 bg-white rounded-md shadow md:mt-0">
          <!-- Header  -->
          <div class="flex py-5 md:px-12">
            <div class="w-full p-4 md:p-0">
              <div id="orderID">
                <p class="text-primary-color md:text-2xl">
                  {{ $t('orderList.orderid') }}
                  {{ groupedData.order ? groupedData.order.orderID : 'N/A' }}
                </p>
              </div>
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-3 md:flex-row"
              >
                <div class="w-full pb-4">
                  <div>
                    <p class="pb-2 text-sm md:text-lg">
                      {{ $t('customerList.name') }}
                    </p>
                  </div>
                  <div id="showName">
                    <p
                      id="inputConfirm"
                      :value="
                        groupedData.customer
                          ? groupedData.customer.customerName
                          : 'N/A'
                      "
                      disabled
                      class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10 content-center"
                    >
                      {{
                        groupedData.customer
                          ? groupedData.customer.customerName
                          : 'N/A'
                      }}
                    </p>
                  </div>
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">
                    {{ $t('customerList.last') }}
                  </p>
                  <p
                    id="showLastName"
                    disabled
                    :value="
                      groupedData.customer
                        ? groupedData.customer.customerLastName
                        : 'N/A'
                    "
                    class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10 content-center"
                  >
                    {{
                      groupedData.customer
                        ? groupedData.customer.customerLastName
                        : 'N/A'
                    }}
                  </p>
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">
                    {{ $t('eyewearList.date') }}
                  </p>
                  <input
                    :value="
                      formatDate(
                        groupedData.order ? groupedData.order.createdAt : 'N/A'
                      )
                    "
                    disabled
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
              </div>
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-2 md:flex-row"
              >
              <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">
                    {{ $t('customerList.phone') }}
                  </p>
                  <input
                    :value="
                      groupedData.customer
                        ? groupedData.customer.customerTel
                        : 'N/A'
                    "
                    disabled
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">
                    {{ $t('customerList.address') }}
                  </p>
                  <input
                    disabled
                    :value="
                      groupedData.customer
                        ? groupedData.customer.address
                        : 'N/A'
                    "
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
              </div>
              <div class="w-full h-px border border-neutral-300"></div>
              <p class="py-4 text-primary-color md:text-2xl">{{$t("eyewearList.orderDetails")}}</p>
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-2 md:flex-row"
              >
                <div class="w-full pb-4 md:col-span-3">
                  <p class="pb-2 text-sm md:text-lg">{{$t("eyewearList.delivery")}}</p>
                  <input
                    disabled
                    :value="
                      groupedData.order ? groupedData.order.delivery : 'N/A'
                    "
                    class="bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 px-5 w-full inline-flex items-center justify-between"
                  />
                </div>
                <div
                  class="w-full pb-4 md:col-span-3"
                  v-if="
                    groupedData.order &&
                    groupedData.order.delivery === 'Delivery'
                  "
                >
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <p class="pb-2 text-sm md:text-lg">{{$t("eyewearList.shippingName")}}</p>
                      <select
                      :value="
                      groupedData.order ? groupedData.order.shippingName : 'N/A'
                    "
                       v-model="groupedData.order.shippingName"
                        class="bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 w-full inline-flex items-center justify-between peer border border-slate-400"
                      >
                        <option>Please select one</option>
                        <option value="Flash">Flash</option>
                        <option value="EMS">EMS</option>
                        <option value="J&T">J&T</option>
                      </select>
                    </div>
                    <div class="w-full pb-4">
                      <p class="pb-2 text-sm md:text-lg">{{$t("eyewearList.trackingNumber")}}</p>
                      <input
                        v-model="groupedData.order.tracking"
                        maxlength="15"
                        class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- Eyewear -->
              <div id="EyewearTable">
                <div
                  v-for="(eyewear, index) in groupedData.eyewears"
                  :key="index"
                >
                  <div class="w-full h-px mt-4 border border-neutral-300"></div>
                  <div class="flex py-5">
                    <div class="w-full p-4 md:p-0">
                      <p class="text-primary-color md:text-2xl">
                        {{ $t('eyewearList.eyewearDetail') }} :
                        {{ eyewear.eyewearID }}
                      </p>
                      <div
                        class="justify-between gap-4 mt-4 md:grid md:grid-cols-3 md:flex-row"
                      >
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">
                            {{ $t('addOrder.brand') }}
                          </p>
                          <p
                            disabled
                            :value="eyewear.eyewearName"
                            class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10 content-center"
                            id="eyewearDetail"
                          >
                            {{ eyewear.eyewearName }}
                          </p>
                        </div>
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">
                            {{ $t('eyewearList.lens') }}
                          </p>
                          <input
                            :value="eyewear.lens"
                            disabled
                            class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                          />
                        </div>
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">
                            {{ $t('eyewearList.price') }}
                          </p>
                          <input
                            disabled
                            class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                            :value="eyewear.price"
                          />
                        </div>
                      </div>
                      <div class="justify-between gap-4 mt-4 md:flex-row">
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">
                            {{ $t('eyewearList.detail') }}
                          </p>
                          <input
                            disabled
                            :value="eyewear.detail"
                            class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                          />
                        </div>
                        <!--Status dropdraw-->
                        <div>
                          <p class="pb-2 text-sm md:text-lg">
                            *{{ $t('eyewearList.status') }}
                          </p>
                          <select
                            v-model="eyewear.orderStatus"
                            class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 content-center"
                          >
                            <option value="">-- Please select one --</option>
                            <option value="Preparing">Preparing</option>
                            <option value="Processing">Processing</option>
                            <option value="Complete">Complete</option>
                          </select>
                          <!--Status status-->
                          <div class="w-full px-8 pt-8">
                            <ol class="flex justify-center">
                              <li class="w-full pb-4">
                                <div
                                  class="flex items-center justify-between space-x-8"
                                >
                                  <div
                                    v-for="(status, index) in [
                                      'Preparing',
                                      'Processing',
                                      'Complete'
                                    ]"
                                    :key="index"
                                    class="flex flex-col items-center"
                                  >
                                    <div
                                      :class="{
                                        ' bg-green-400':
                                          eyewear.orderStatus === status,
                                        'bg-gray-300':
                                          eyewear.orderStatus !== status,
                                        'w-12': true,
                                        'h-12': true,
                                        'rounded-full': true,
                                        'ring-white': true,
                                        'dark:bg-blue-900': true,
                                        'sm:ring-8': true,
                                        'dark:ring-gray-900': true,
                                        'shrink-0': true
                                      }"
                                    ></div>
                                    <h3
                                      class="mt-2 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                                    >
                                      {{ status }}
                                    </h3>
                                    <p
                                      v-if="
                                        status === 'Preparing' &&
                                        eyewear.datePreparing !== null
                                      "
                                    >
                                      {{
                                        formatDateandTime(eyewear.datePreparing)
                                      }}
                                    </p>
                                    <p
                                      v-else-if="
                                        status === 'Processing' &&
                                        eyewear.dateProcessing !== null
                                      "
                                    >
                                      {{
                                        formatDateandTime(
                                          eyewear.dateProcessing
                                        )
                                      }}
                                    </p>
                                    <p
                                      v-else-if="
                                        status === 'Complete' &&
                                        eyewear.dateComplete !== null
                                      "
                                    >
                                      {{
                                        formatDateandTime(eyewear.dateComplete)
                                      }}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ol>
                          </div>
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
                                  {{ $t('searchStatus.eyesight') }}
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
                                  {{ $t('searchStatus.left') }}
                                </td>
                                <td class="border border-black">
                                  <input
                                    :value="eyewear.leftSPH"
                                    disabled
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    :value="eyewear.leftCYL"
                                    disabled
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    :value="eyewear.leftAXIS"
                                    disabled
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    :value="eyewear.leftADD"
                                    disabled
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    :value="eyewear.leftPD"
                                    disabled
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    :value="eyewear.leftSH"
                                    disabled
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    :value="eyewear.leftUpKT"
                                    disabled
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                              </tr>

                              <tr>
                                <td
                                  class="px-6 py-8 border border-black bg-[#FFCA9C] text-center"
                                >
                                  {{ $t('searchStatus.right') }}
                                </td>
                                <td class="border border-black">
                                  <input
                                    :value="eyewear.rightSPH"
                                    disabled
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    :value="eyewear.rightCYL"
                                    disabled
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    disabled
                                    :value="eyewear.rightAXIS"
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    :value="eyewear.rightADD"
                                    disabled
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    :value="eyewear.rightPD"
                                    disabled
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    :value="eyewear.rightSH"
                                    disabled
                                    class="w-full h-20 text-center"
                                  />
                                </td>
                                <td class="border border-black">
                                  <input
                                    :value="eyewear.rightUpKT"
                                    disabled
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
              <!-- footer -->

              <!--Total Price-->
              <div
                class="grid grid-cols-3 gap-4 pr-2 mt-12 text-end"
                style="grid-template-columns: auto 6fr 1fr"
              >
                <p
                  class="content-center col-start-2 text-sm text-gray-500 md:text-lg whitespace-nowrap"
                >
                  Merchandise Subtotal:
                </p>
                <p class="text-xl rounded-md md:text-lg">฿{{ subTotal() }}</p>
                <p
                  class="content-center col-start-2 text-sm text-gray-500 md:text-lg whitespace-nowrap"
                  v-show="order.delivery === 'Delivery'"
                >
                  Shipping Total:
                </p>
                <p
                  class="text-xl rounded-md md:text-lg"
                  v-show="order.delivery === 'Delivery'"
                >
                  ฿{{ shippingTotal() }}
                </p>
                <p
                  class="content-center col-start-2 text-sm text-gray-500 md:text-lg whitespace-nowrap"
                >
                  Total Payment:
                </p>
                <p
                  v-if="groupedData.order"
                  class="text-xl font-bold rounded-md md:text-4xl text-primary-color"
                >
                  ฿{{ groupedData.order.price }}
                </p>
              </div>
              <div class="flex justify-end gap-4 mt-8">
                <button
                  @click="confirmUpdate()"
                  class="bg-green-400 h-10 w-24 rounded-xl text-white md:h-[60px] md:w-[130px] md:text-xl cursor-pointer hover:bg-green-500"
                >
                  {{ $t('customerList.confirm') }}
                </button>
                <button
                  @click="cancel()"
                  class="bg-red-500 h-10 w-24 rounded-xl text-white md:h-[60px] md:w-[130px] md:text-xl cursor-pointer hover:bg-red-600"
                >
                  {{ $t('customerList.cancel') }}
                </button>
                <button
                  @click="printToDiv"
                  class="bg-gray-500 h-10 w-24 rounded-xl text-white md:h-[60px] md:w-[130px] md:text-xl cursor-pointer hover:bg-gray-600"
                >
                  {{ $t('eyewearList.print') }}
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
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  setup() {
    const order = ref({})
    const eyewear = ref({})
    const customer = ref({})
    const groupedData = ref([])
    const eyewearData = ref({})

    const fetchData = async () => {
      try {
        const orderID = window.location.pathname.split('/').pop()

        const orderResponse = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/orders/${orderID}`
        )
        if (orderResponse.data) {
          order.value = orderResponse.data
        }

        const customersResponse = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/customers`
        )
        if (customersResponse.data) {
          customer.value = customersResponse.data
        }

        const eyewearResponse = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/eyewears`
        )
        if (eyewearResponse.data) {
          eyewear.value = eyewearResponse.data
          groupData() // Call the groupData() function to group the eyewear data
        }
      } catch (error) {}
    }

    const groupData = () => {
      const matchedCustomer = customer.value.find(
        (c) => c.customerID === order.value.customerID
      )

      const matchedEyewears = eyewear.value.filter(
        (e) => e.orderID === order.value.orderID
      )

      groupedData.value = {
        order: order.value,
        customer: matchedCustomer,
        eyewears: matchedEyewears
      }
    }

    onMounted(() => {
      fetchData()
    })

    const formatDate = (dateString) => {
      const inputDate = new Date(dateString)

      const day = String(inputDate.getDate()).padStart(2, '0')
      const month = String(inputDate.getMonth() + 1).padStart(2, '0')
      const year = String(inputDate.getFullYear()).slice(0)

      return `${day}/${month}/${year}`
    }

    const formatDateandTime = (dateString) => {
      const inputDate = new Date(dateString)

      const day = String(inputDate.getDate()).padStart(2, '0')
      const month = String(inputDate.getMonth() + 1).padStart(2, '0')
      const year = String(inputDate.getFullYear())
      const hours = String(inputDate.getHours()).padStart(2, '0')
      const minutes = String(inputDate.getMinutes()).padStart(2, '0')

      return `${day}/${month}/${year} ${hours}:${minutes}`
    }

    const updateStatus = async () => {
      try {
        const currentDate = new Date() // Get the current date

        // Map over the eyewears and create an array of objects containing eyewearID, orderStatus, and date fields
        const updatedEyewears = groupedData.value.eyewears.map((eyewear) => ({
          eyewearID: eyewear.eyewearID,
          orderStatus: eyewear.orderStatus,
          // Add date fields based on the logic you described
          dateProcessing:
            eyewear.orderStatus === 'Processing' ? currentDate : null,
          dateComplete: eyewear.orderStatus === 'Complete' ? currentDate : null
        }))

        // Call the backend API to update the order status and dates for all eyewears
        await axios.put(
          `${import.meta.env.VITE_BASE_URL}/eyewears/manyStatus/${
            groupedData.value.order.orderID
          }`,
          updatedEyewears
        )
      } catch (error) {
        // Optionally, you can show an error message to the user
        console.error('Error updating eyewear status:', error)
      }
    }

    onMounted(() => {
      fetchData()
    })

    const updateEyewear = async (orderID, shippingName, tracking, eyewear) => {
      try {
        // อัพเดทข้อมูลการจัดส่งของคำสั่งซื้อ
        const updateOrder = await axios.put(
          `${import.meta.env.VITE_BASE_URL}/orders/${orderID}`,
          {
            shippingName: shippingName,
            tracking: tracking
          }
        )

        // ส่งข้อมูลรายการ eyewear แต่ละรายการในอาร์เรย์เพื่ออัพเดท
        await Promise.all(
          eyewear.map(async (item) => {
            const updatedEyewearResponse = await axios.put(
              `${import.meta.env.VITE_BASE_URL}/eyewears/${item.eyewearID}`,
              {
                orderID: orderID
                // อาจต้องการอัพเดทข้อมูลอื่นๆ ใน eyewear ด้วย
              }
            )
          })
        )
      } catch (error) {}
    }

    // ต่อไปนี้เป็นการเพิ่ม methods ใหม่ updateStatus และ updateEyewear
    const router = useRouter()

    const confirmUpdate = async () => {
      await updateStatus()
      await updateEyewear(
        groupedData.value.order.orderID,
        groupedData.value.order.shippingName,
        groupedData.value.order.tracking
      )
      Swal.fire({
        icon: 'success',
        title: 'Edit order Success!',
        timer: 1500
      }).then(() => {
        router.push('/order')
      })
    }
    const subTotal = () => {
      if (groupedData.value && groupedData.value.eyewears) {
        console.log(groupedData.value)
        return groupedData.value.eyewears.reduce(
          (total, eyewear) => total + eyewear.price,
          0
        )
      } else {
      }
    }

    const shippingTotal = () => {
      if (groupedData.value && groupedData.value.order) {
        const selectedDelivery = groupedData.value.order.delivery
        let shippingPrice = 0
        if (selectedDelivery === 'Delivery') {
          shippingPrice = 50
        }
        return shippingPrice
      } else {
        return 0
      }
    }

    return {
      order,
      eyewear,
      customer,
      groupedData,
      eyewearData,
      formatDate,
      formatDateandTime,
      confirmUpdate,
      subTotal,
      shippingTotal
    }
  },
  methods: {
    cancel() {
      this.$router.push(`/order`)
    },
    printToDiv() {
      // Select each div by their IDs
      var orderIDDiv = document.getElementById('orderID')
      var eyewearDetailDiv = document.getElementById('eyewearDetail')
      var customerNameDiv = document.getElementById('showName')
      var customerNameHTML = customerNameDiv.innerHTML
      var customerLastNameDiv = document.getElementById('showLastName')
      var customerLastNameHTML = customerLastNameDiv.innerHTML

      // Create a string to hold the concatenated HTML content for each data item
      var orderIDHTML = orderIDDiv.innerHTML
      var eyewearDetailHTML =
        '<div style="padding: 10px; margin-bottom: 10px;">'

      // Loop through each eyewear and add its name to the HTML content
      for (var i = 0; i < this.groupedData.eyewears.length; i++) {
        eyewearDetailHTML +=
          '<p>' + this.groupedData.eyewears[i].eyewearName + '</p>'
      }

      eyewearDetailHTML += '</div>'

      // Open a new window for printing
      var newWin = window.open('', 'Print-Window')

      // Write the HTML content for each data item to the new window
      newWin.document.open()
      newWin.document.write(`
        <html>
            <head>
                <title>BuddyGlasses_Receipt</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                    }
                    .receipt {
                        margin: 20px;
                        padding: 20px;
                        border: 2px solid #000;
                    }
                    h1 {
                        text-align: center;
                        font-size: 24px;
                        font-weight: bold;
                    }
                    h2 {
                      font-size: 16px;
                        font-weight: bold;
                    }
                    p {
                        font-size: 16px;
                    }
                </style>
            </head>
            <body>
                <div class="receipt">
                    <h1>Buddy Glasses</h1>
                    <p>${orderIDHTML}</p>
                    <p><strong>Customer Name:</strong> ${customerNameHTML} ${customerLastNameHTML}</p>
                    <h2>Product Names : </h2>
                    <p>${eyewearDetailHTML}</p>
                    <p>Check Status and Tracking Number in website: <a href="http://localhost:5173/nw2/forcustomer">http://localhost:5173/nw2/forcustomer</a></p>
                </div>
            </body>
        </html>
    `)
      newWin.document.close()

      // Print the new window
      newWin.print()
    }
  }
}
</script>
