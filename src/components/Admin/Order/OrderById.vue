<template>
  <div id="printMe">
    <div class="w-full h-full mt-4 bg-gray-200 md:mt-12">
      <div class="flex items-center justify-center p-4 py-10 md:py-20 md:p-10">
        <div class="w-full h-auto mt-4 bg-white rounded-md shadow md:mt-0">
          <!-- Header  -->
          <div class="flex py-5 md:px-12">
            <div class="w-full p-4 md:p-0">
              <p class="text-primary-color md:text-2xl">
                Customer ID :
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
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-3 md:flex-row"
              >
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Delivery</p>
                  <input
                    disabled
                    :value="
                      groupedData.order ? groupedData.order.delivery : 'N/A'
                    "
                    class="bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 px-5 w-full inline-flex items-center justify-between"
                  />
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Shipping Name</p>
                  <input
                    disabled
                    :value="
                      groupedData.order ? groupedData.order.shippingName : 'N/A'
                    "
                    class="bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 px-5 w-full inline-flex items-center justify-between"
                  />
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Tracking Number</p>
                  <input
                    disabled
                    :value="
                      groupedData.order ? groupedData.order.tracking : 'N/A'
                    "
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
                    disabled
                    :value="
                      groupedData.order ? groupedData.order.orderName : 'N/A'
                    "
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
                    {{ groupedData.order ? groupedData.order.price : 'N/A' }}
                  </div>
                </div>
              </div>

              <div id="EyewearTable">
                <div
                  v-for="(eyewear, index) in groupedData.eyewears"
                  :key="index"
                >
                  <div class="w-full h-px mt-4 border border-neutral-300"></div>
                  <div class="flex py-5">
                    <div class="w-full p-4 md:p-0">
                      <p class="text-primary-color md:text-2xl">
                        Order detail :{{ eyewear.eyewearID }}
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
                        <p class="pb-8 text-sm md:text-lg">Status</p>

                        <ol class="flex justify-center">
                          <li class="relative w-full mb-12">
                            <div class="flex items-center">
                              <div
                                class="z-10 flex justify-center w-6 h-6 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0 bg-primary-color"
                              >
                                <div class="text-center">
                                  <h3
                                    class="mt-8 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                                  >
                                    {{ eyewear.orderStatus }}
                                  </h3>
                                  <h3 class="text-sm text-[#808080]">
                                    {{ formatDate(eyewear.datePreparing) }}
                                  </h3>
                                </div>
                              </div>
                              <div
                                class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
                              ></div>
                            </div>
                          </li>
                          <li class="relative w-full mb-6">
                            <div class="flex items-center">
                              <div
                                class="z-10 flex justify-center w-6 h-6 rounded-full bg-primary-color ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
                              >
                                <div class="text-center">
                                  <h3
                                    class="mt-8 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                                  >
                                    {{ eyewear.orderStatus }}
                                  </h3>
                                  <h3 class="text-sm text-[#808080]">
                                    {{ formatDate(eyewear.dateProcessing) }}
                                  </h3>
                                </div>
                              </div>
                              <div
                                class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
                              ></div>
                            </div>
                          </li>
                          <li class="relative mb-6">
                            <div class="flex items-center">
                              <div
                                class="z-10 flex justify-center w-6 h-6 rounded-full bg-primary-color ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
                              >
                                <div class="text-center">
                                  <h3
                                    class="mt-8 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                                  >
                                    {{ eyewear.orderStatus }}
                                  </h3>
                                  <h3 class="text-sm text-[#808080]">
                                    {{ formatDate(eyewear.dateComplete) }}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ol>
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
        }

        groupData()
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    const groupData = () => {
      // Assuming there's a one-to-one relationship between order and customer
      const matchedCustomer = customer.value.find(
        (c) => c.customerID === order.value.customerID
      )

      // Assuming there's a one-to-many relationship between order and eyewear
      const matchedEyewears = eyewear.value.filter(
        (e) => e.orderID === order.value.orderID
      )

      // Combine data into a single object
      groupedData.value = {
        order: order.value,
        customer: matchedCustomer,
        eyewears: matchedEyewears
      }

      console.log('groupedData', groupedData.value)
    }

    // Fetch data when the component is mounted
    onMounted(() => {
      fetchData()
    })

    return {
      order,
      eyewear,
      customer,
      groupedData
    }
  },
  methods: {
    formatDate(dateString) {
      const inputDate = new Date(dateString)

      const day = String(inputDate.getDate()).padStart(2, '0')
      const month = String(inputDate.getMonth() + 1).padStart(2, '0')
      const year = String(inputDate.getFullYear()).slice(0)

      return `${day}/${month}/${year}`
    }
  }
}
</script>
