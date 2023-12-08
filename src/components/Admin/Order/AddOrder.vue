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
                    id="inputConfirm"
                    class="w-full text-sm bg-[#D4D4D433] rounded-md h-10"
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
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Phone number</p>
                  <input
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
                    class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">Tracking Number</p>
                  <input
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
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
import VueHtmlToPaper from 'vue-html-to-paper'

export default {
  data() {
    return {
      output: null,
      isDropdownVisible: false
    }
  },
  computed: {
    confirm: function () {
      return alert('Order complete!')
    }
  },
  methods: {
    async print() {
      // Pass the element id here
      await this.$htmlToPaper('printMe')
    },
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible
    },
    confirm() {
      alert('Order complete!')
    }
  }
}
</script>
<style></style>
