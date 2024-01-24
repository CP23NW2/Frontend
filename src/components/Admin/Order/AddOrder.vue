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
              <p class="text-primary-color md:text-2xl">User Information</p>
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-3 md:flex-row"
              >
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Name</p>
                  <input
                    v-model="userInformation.name"
                    id="inputConfirm"
                    class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Order ID</p>
                  <input
                    class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Date</p>
                  <input
                    v-model="userInformation.date"
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
                   v-model="userInformation.address"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Phone number</p>
                  <input
                    v-model="userInformation.phoneNumber"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
              </div>
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-3 md:flex-row"
              >
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Ship Option</p>
                  <button
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
                  </button>
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
                  <p class="pb-2 text-sm md:text-lg">Ship type</p>
                  <input
                  v-model="userInformation.shipType"
                    class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Tracking Number</p>
                  <input
                  v-model="userInformation.trackingNumber"
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
                            v-model="eyewearDetails.product"
                            id="inputConfirm"
                            class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                          />
                        </div>
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Lens</p>
                          <input
                          v-model="eyewearDetails.lens"
                            class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                          />
                        </div>
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Price</p>
                          <input
                          v-model="eyewearDetails.price"
                            class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                          />
                        </div>
                      </div>
                      <div class="justify-between gap-4 mt-4">
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">Detail</p>
                          <input
                          v-model="eyewearDetails.detail"
                            class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tableContainer">
                    <div class="container pb-4 mx-auto">
                      <div class="w-full overflow-hidden rounded">
                        <table class="bg-white border border-black">
                          <thead>
                            <tr class="bg-[#F59F54] text-white">
                              <th class="px-6 py-8 border border-black">
                                Eyesight
                              </th>
                              <th class="px-6 py-8 border border-black">SPH</th>
                              <th class="px-6 py-8 border border-black">CYL</th>
                              <th class="px-6 py-8 border border-black">
                                AXIS
                              </th>
                              <th class="px-6 py-8 border border-black">ADD</th>
                              <th class="px-6 py-8 border border-black">PD</th>
                              <th class="px-6 py-8 border border-black">SH</th>
                              <th class="px-6 py-8 border border-black">
                                Up KT
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(eyesight, index) in eyesightData"
                              :key="index"
                              class="text-center"
                            >
                              <td
                                class="px-6 py-8 border border-black bg-[#FFCA9C]"
                              >
                                {{ eyesight.label }}
                              </td>
                              <td class="px-6 py-8 border border-black">
                                <input
                                  v-model="eyesight.sph"
                                  class="w-full h-full text-center"
                                />
                              </td>
                              <td class="px-6 py-8 border border-black">
                                <input
                                  v-model="eyesight.cyl"
                                  class="w-full h-full text-center"
                                />
                              </td>
                              <td class="px-6 py-8 border border-black">
                                <input
                                  v-model="eyesight.axis"
                                  class="w-full h-full text-center"
                                />
                              </td>
                              <td class="px-6 py-8 border border-black">
                                <input
                                  v-model="eyesight.add"
                                  class="w-full h-full text-center"
                                />
                              </td>
                              <td class="px-6 py-8 border border-black">
                                <input
                                  v-model="eyesight.pd"
                                  class="w-full h-full text-center"
                                />
                              </td>
                              <td class="px-6 py-8 border border-black">
                                <input
                                  v-model="eyesight.sh"
                                  class="w-full h-full text-center"
                                />
                              </td>
                              <td class="px-6 py-8 border border-black">
                                <input
                                  v-model="eyesight.upKt"
                                  class="w-full h-full text-center"
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
                    @click="confirm"
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
import VueHtmlToPaper from 'vue-html-to-paper';

export default {
  data() {
    return {
      output: null,
      isDropdownVisible: false,
      eyewearTables: 1,
      userInformation: {
        name: '',
        orderID: '',
        date: '',
        address: '',
        phoneNumber: '',
        shipOption: '',
        shipType: '',
        trackingNumber: ''
      },
      eyewearDetails:{
        prompt:'',
        lens:'',
        price:'',
        detail:''
      },
      eyesightData: [
        {
          label: 'Left',
          sph: '',
          cyl: '',
          axis: '',
          add: '',
          pd: '',
          sh: '',
          upKt: ''
        },
        {
          label: 'Right',
          sph: '',
          cyl: '',
          axis: '',
          add: '',
          pd: '',
          sh: '',
          upKt: ''
        }
      ]
    };
  },
  computed: {
    confirm: function () {
      this.$router.push('/order')
      return alert('Order complete!');
    }
  },
  methods: {
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
      });
    },
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    showNextTable() {
      
      this.eyewearTables++;
    },
  cancel(){
  this.$router.push('/order')
  }
  },
  directives: {
    'html-to-paper': VueHtmlToPaper
  }
}
</script>
