<template>
  <div id="printMe">
    <div class="w-full h-full mt-4 bg-gray-200 md:mt-12">
      <div class="flex items-center justify-center p-4 py-10 md:py-20 md:p-10">
        <div class="w-full h-auto mt-4 bg-white rounded-md shadow md:mt-0">
          <!-- Header  -->
          <div class="flex py-5 md:px-12">
            <div class="w-full p-4 md:p-0">
              <p class="text-primary-color md:text-2xl">
                Order ID :
                {{ groupedData.order ? groupedData.order.orderID : 'N/A' }}
              </p>
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-3 md:flex-row"
              >
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Name</p>
                  <input
                    id="inputConfirm"
                    disabled
                    :value="
                      groupedData.customer
                        ? groupedData.customer.customerName
                        : 'N/A'
                    "
                    class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">LastName</p>
                  <input
                    disabled
                    :value="
                      groupedData.customer
                        ? groupedData.customer.customerLastName
                        : 'N/A'
                    "
                    class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Date</p>
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
                  <p class="pb-2 text-sm md:text-lg">Address</p>
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
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Phone number</p>
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
              </div>
              <div class="w-full h-px border border-neutral-300"></div>
              <p class="py-4 text-primary-color md:text-2xl">Order Details</p>
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-2 md:flex-row"
              >
                <div class="w-full pb-4 md:col-span-3">
                  <p class="pb-2 text-sm md:text-lg">Delivery</p>
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
                      <p class="pb-2 text-sm md:text-lg">Shipping Name</p>
                      <input
                        disabled
                        :value="
                          groupedData.order
                            ? groupedData.order.shippingName
                            : 'N/A'
                        "
                        class="bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 px-5 w-full inline-flex items-center justify-between"
                      />
                    </div>
                    <div class="w-full pb-4">
                      <p class="pb-2 text-sm md:text-lg">Tracking Number</p>
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
                        Order detail : {{ eyewear.eyewearID }}
                      </p>
                      <div
                        class="justify-between gap-4 mt-4 md:grid md:grid-cols-3 md:flex-row"
                      >
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Product</p>
                          <input
                            disabled
                            :value="eyewear.eyewearName"
                            id="inputConfirm"
                            class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                          />
                        </div>
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Lens</p>
                          <input
                            :value="eyewear.lens"
                            disabled
                            class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                          />
                        </div>
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Price</p>
                          <input
                            disabled
                            class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                            :value="eyewear.price"
                          />
                        </div>
                      </div>
                      <div class="justify-between gap-4 mt-4 md:flex-row">
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Detail</p>
                          <input
                            disabled
                            :value="eyewear.detail"
                            class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                          />
                        </div>
                        <!--Status dropdraw-->
                        <div>
                          <p class="pb-2 text-sm md:text-lg">Status</p>
                          <select
                            v-model="eyewear.orderStatus"
                            class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                          >
                            <option value="">-- Select Status --</option>
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
                                    <p v-if="status === 'Preparing'">
                                      {{
                                        formatDateandTime(eyewear.datePreparing)
                                      }}
                                    </p>
                                    <p v-else-if="status === 'Processing'">
                                      {{
                                        formatDateandTime(
                                          eyewear.dateProcessing
                                        )
                                      }}
                                    </p>
                                    <p v-else>
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
                                  Right
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

              <div class="flex justify-end mt-5">
                <div class="flex items-center w-full gap-2">
                  <p
                    class="text-sm md:text-lg text-primary-color whitespace-nowrap"
                  >
                    Total Price: {{ totalPrice() }}
                  </p>
                  <p
                    class="text-sm text-center rounded-md md:text-lg text-primary-color"
                  ></p>
                </div>
                <div class="mx-2">
                  <button
                    @click="
                      updateEyewear(
                        groupedData.order.orderID,
                        groupedData.order.tracking,
                        groupedData.eyewears
                      )
                    "
                    class="bg-green-400 h-10 w-24 rounded-xl text-white md:h-[60px] md:w-[130px] md:text-xl cursor-pointer hover:bg-green-500"
                  >
                    Confirm
                  </button>
                </div>
                <div class="mx-2">
                  <button
                    @click="cancel()"
                    class="bg-red-500 h-10 w-24 rounded-xl text-white md:h-[60px] md:w-[130px] md:text-xl cursor-pointer hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </div>
                <div class="mx-2">
                  <button
                    class="bg-gray-500 h-10 w-24 rounded-xl text-white md:h-[60px] md:w-[130px] md:text-xl cursor-pointer hover:bg-gray-600"
                  >
                    Print
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
import { ref, onMounted } from 'vue'
import axios from 'axios'

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
          console.log('eyewear', eyewear.value) // Check the eyewear value
        }

        console.log('eyewear', eyewear.value) // Check the eyewear value
      } catch (error) {
        console.error('Error fetching data:', error)
      }
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
      console.log('test', matchedEyewears)
      console.log('groupedData', groupedData.value)
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

    const totalPrice = () => {
      if (
        !groupedData.value ||
        !groupedData.value.order ||
        !Array.isArray(groupedData.value.eyewears)
      ) {
        return 0
      }
      return groupedData.value.eyewears.reduce((acc, item) => {
        if (typeof item.price !== 'number') {
          return acc
        }
        return acc + item.price
      }, 0)
    }

    const updateEyewear = async (orderID, tracking, eyewear) => {
      try {
        const updateOrder = await axios.put(
          `${import.meta.env.VITE_BASE_URL}/orders/${orderID}`,
          {
            tracking: tracking
          }
        )
        const updatedEyewear = await axios.put(
          `${import.meta.env.VITE_BASE_URL}/orders/${orderID}/eyewears`,
          eyewear
        )
        console.log('Updated eyewear:', updatedEyewear.data)
      } catch (error) {
        console.error('Error updating eyewear:', error)
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
      totalPrice,
      updateEyewear
    }
  },
  methods: {
    cancel() {
      this.$router.push(`/order`)
    }
  }
}
</script>
