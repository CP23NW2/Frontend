<template>
  <div class="w-full">
    <form @submit.prevent="submit">
      <label
        for="product_status"
        class="block text-sm font-medium text-gray-900 md:mb-2 md:text-3xl dark:text-white"
        >Search product status</label
      >
      <div
        class="flex items-center justify-between gap-1 pt-2 md:pt-2 md:gap-2"
      >
        <div class="relative w-full">
          <input
            v-model.lazy="searchOrderID"
            type="text"
            id="voice-search"
            class="block w-full md:p-5 p-2 text-xs md:text-base text-gray-900 border border-gray-300 md:rounded-2xl rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 md:ps-10 ps-4 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-[#AAAAAA] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Put order number for 10 characters ex. 4759093895"
            required
          />
          <button
            type="button"
            @click="clearSearch"
            class="absolute z-10 flex items-center end-2 md:pe-5 md:inset-y-8 inset-y-4"
          >
            <Icon
              icon="carbon:close-filled"
              class="md:w-8 md:h-8 w-5 h-5 text-[#808080]"
            />
          </button>
        </div>
        <button
          @click="showPopup"
          type="submit"
          class="inline-flex items-center py-2 px-4 md:p-5 md:px-10 text-xs md:text-base font-medium text-white bg-[#2B2B2B] rounded-lg md:rounded-2xl border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
        <div
          class="popup"
          @click.stop
          v-if="isPopupVisible"
          @close="closePopup"
        >
          <div class="bg-white rounded-lg md:w-[500px] md:h-[449px]">
            <div class="flex items-center justify-center mt-3">
              <div class="items-center justify-center text-center">
                <div class="flex justify-center py-5">
                  <div
                    class="bg-primary-color rounded-full w-[80px] h-[80px] flex items-center justify-center"
                  >
                    <Icon icon="la:vr-cardboard" color="white" width="60" />
                  </div>
                </div>
                <p class="text-xl font-bold">Input your last 4 Phone Number</p>
                <div class="mt-5">
                  <input
                    type="text"
                    class="text-center text-lg w-[70px] h-[70px] rounded-full shadow-xl border-b-2 border-gray-300 mx-3"
                    v-model="inputNumber1"
                    @input="() => handleInput(1)"
                    ref="inputNumber1"
                    maxlength="1"
                  />

                  <input
                    type="text"
                    class="text-center text-lg w-[70px] h-[70px] rounded-full shadow-xl border-b-2 border-gray-300 mx-3"
                    v-model="inputNumber2"
                    @input="() => handleInput(2)"
                    ref="inputNumber2"
                    maxlength="1"
                  />

                  <input
                    type="text"
                    class="text-center text-lg w-[70px] h-[70px] rounded-full shadow-xl border-b-2 border-gray-300 mx-3"
                    v-model="inputNumber3"
                    @input="() => handleInput(3)"
                    ref="inputNumber3"
                    maxlength="1"
                  />

                  <input
                    type="text"
                    class="text-center text-lg w-[70px] h-[70px] rounded-full shadow-xl border-b-2 border-gray-300 mx-3"
                    v-model="inputNumber4"
                    @input="() => handleInput(4)"
                    ref="inputNumber4"
                    maxlength="1"
                  />
                </div>

                <div class="flex justify-center mt-6">
                  <button
                    @click="submitForm"
                    class="bg-blue-800 md:text-base font-medium rounded-full md:w-[177px] md:h-[51px] text-white"
                  >
                    OK
                  </button>
                </div>
                <div class="flex justify-center mt-2">
                  <button
                    @click="closePopup"
                    class="bg-red-600 md:text-base font-medium rounded-full md:w-[177px] md:h-[51px] text-white"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div
      class="justify-between w-full md:gap-10 gap-2 md:my-[40px] mt-4"
      v-if="showResults"
    >
      <div class="flex items-stretch w-full gap-4 pb-4">
        <div class="self-center text-xl whitespace-nowrap">
          Result of Order number
        </div>
        <div
          class="text-center self-center rounded-3xl py-[12px] bg-white px-[60px] border-2 border-[#F5821F] text-[#F5821F]"
        >
          {{ orderStatus.orderID }}
        </div>
        <div class="self-center w-full text-[#808080]">
          <p class="w-full">
            {{ customer.customerName }} {{ customer.customerLastName }}
          </p>
          <p class="w-full">{{ customer.customerTel }}</p>
        </div>

        <div>
          <p class="pb-1 text-[#808080]">{{ orderStatus.delivery }}</p>
          <div class="px-8 py-2 bg-white rounded-xl whitespace-nowrap">
            <span class="text-[#808080]whitespace-pre"
              >{{ orderStatus.shippingName }} :
            </span>
            <span>{{ orderStatus.tracking }} </span>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="flex flex-col gap-8">
          <div
            class="container p-8 bg-white rounded-md"
            id="tableContainer"
            v-for="(eyewear, index) in orderStatus.Eyewears"
            :key="index"
          >
            <p class="text-3xl font-semibold text-[#F59F54] pb-4">
              #{{ eyewear.eyewearID }} {{ eyewear.eyewearName }}
            </p>
            <div class="flex justify-between gap-8 overflow-hidden">
              <table class="w-full bg-white border border-black">
                <thead>
                  <tr class="bg-[#F59F54] text-white w-full">
                    <th class="px-4 py-6 border border-black">Eyesight</th>
                    <th class="px-4 py-6 border border-black">SPH</th>
                    <th class="px-4 py-6 border border-black">CYL</th>
                    <th class="px-4 py-6 border border-black">AXIS</th>
                    <th class="px-4 py-6 border border-black">ADD</th>
                    <th class="px-4 py-6 border border-black">PD</th>
                    <th class="px-4 py-6 border border-black">SH</th>
                    <th class="px-4 py-6 border border-black">Up KT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      class="px-4 py-6 border border-black bg-[#FFCA9C] text-center"
                    >
                      Left
                    </td>
                    <td class="px-4 py-6 text-center border border-black">
                      {{ eyewear.leftSPH }}
                    </td>
                    <td class="px-4 py-6 text-center border border-black">
                      {{ eyewear.leftCYL }}
                    </td>
                    <td class="px-4 py-6 text-center border border-black">
                      {{ eyewear.leftAXIS }}
                    </td>
                    <td class="px-4 py-6 text-center border border-black">
                      {{ eyewear.leftADD }}
                    </td>
                    <td class="px-4 py-6 text-center border border-black">
                      {{ eyewear.leftPD }}
                    </td>
                    <td class="px-4 py-6 text-center border border-black">
                      {{ eyewear.leftSH }}
                    </td>
                    <td class="px-4 py-6 text-center border border-black">
                      {{ eyewear.leftUpKT }}
                    </td>
                  </tr>

                  <tr>
                    <td
                      class="px-4 py-6 border border-black bg-[#FFCA9C] text-center"
                    >
                      Right
                    </td>
                    <td class="px-4 py-6 text-center border border-black">
                      {{ eyewear.rightSPH }}
                    </td>
                    <td class="px-4 py-6 text-center border border-black">
                      {{ eyewear.rightCYL }}
                    </td>
                    <td class="px-4 py-6 text-center border border-black">
                      {{ eyewear.rightAXIS }}
                    </td>
                    <td class="px-4 py-6 text-center border border-black">
                      {{ eyewear.rightADD }}
                    </td>
                    <td class="px-4 py-6 text-center border border-black">
                      {{ eyewear.rightPD }}
                    </td>
                    <td class="px-4 py-6 text-center border border-black">
                      {{ eyewear.rightSH }}
                    </td>
                    <td class="px-4 py-6 text-center border border-black">
                      {{ eyewear.rightUpKT }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="flex flex-col justify-between py-4">
                <div class="flex gap-8">
                  <div class="bg-[#F59F54] w-10 h-10 rounded-full"></div>
                  <div class="whitespace-nowrap">
                    <p>{{ eyewear.orderStatus }}</p>
                    <p class="text-[#808080]">
                      {{ formatDate(eyewear.datePreparing) }}
                    </p>
                  </div>
                </div>
                <div class="flex gap-8">
                  <div class="bg-[#F59F54] w-10 h-10 rounded-full"></div>
                  <div>
                    <p>{{ eyewear.orderStatus }}</p>
                    <p class="text-[#808080]">
                      {{ formatDate(eyewear.dateProcessing) }}
                    </p>
                  </div>
                </div>
                <div class="flex gap-8">
                  <div class="bg-[#F59F54] w-10 h-10 rounded-full"></div>
                  <div>
                    <p>{{ eyewear.orderStatus }}</p>
                    <p class="text-[#808080]">
                      {{ formatDate(eyewear.dateComplete) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      class="inline-flex items-center w-full justify-center md:gap-10 gap-2 md:my-[40px] px-7 my-4"
    >
      <img src="/Public/images/found.png" class="w-52 md:min-w-fit md:h-fit" />
      <div class="inline-flex flex-col items-start justify-start md:gap-4">
        <div class="text-base font-medium text-orange-400 md:text-3xl">
          Buddy Glasses
        </div>
        <div
          class="md:text-4xl font-semibold md:leading-10 text-xl text-[#2B2B2B]"
        >
          Oops!
        </div>
        <div class="md:text-base font-medium text-xs text-[#808080]">
          No found this search, Try to search again for status orders and you
          <br />
          could put order number in search input :)
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      searchOrderID: '',
      orderStatus: [],
      inputNumber1: '',
      inputNumber2: '',
      inputNumber3: '',
      inputNumber4: '',
      showResults: false,
      isPopupVisible: false,
      customer: null
    }
  },
  methods: {
    async fetchCustomer(customerID) {
      try {
        const response = await axios.get(
          `http://localhost:3000/customers/${customerID}`
        )
        this.customer = response.data
        console.log('customer data', this.customer)
      } catch (error) {
        console.error('Error fetching customer data:', error)
      }
    },
    async fetchData() {
      try {
        // Fetch order status data
        const requestData = {
          orderID: this.searchOrderID,
          lastFourDigits:
            this.inputNumber1 +
            this.inputNumber2 +
            this.inputNumber3 +
            this.inputNumber4
        }
        const searchStatus = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/validate`,
          requestData
        )
        if (searchStatus.data) {
          this.orderStatus = searchStatus.data
          this.showResults = true

          // Fetch customer data if order status data is successfully fetched
          await this.fetchCustomer(searchStatus.data.customerID)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async showPopup() {
      this.isPopupVisible = true
    },
    handleInput(index) {
      const nextIndex = index + 1
      const nextInputRef = `inputNumber${nextIndex}`
      const prevIndex = index - 1
      const prevInputRef = `inputNumber${prevIndex}`

      if (this.$refs[nextInputRef]) {
        if (this[`inputNumber${index}`].length === 0) {
          this.$refs[prevInputRef].focus()
        } else if (this[`inputNumber${index}`].length === 1) {
          this.$refs[nextInputRef].focus()
        }
      }
    },
    closePopup() {
      this.isPopupVisible = false
    },
    clearSearch() {
      if (this.searchOrderID) {
        window.location.reload()
      } else {
        this.searchOrderID = ''
      }
    },
    submitForm() {
      this.showResults = false
      this.isPopupVisible = false
      if (
        this.inputNumber1 &&
        this.inputNumber2 &&
        this.inputNumber3 &&
        this.inputNumber4
      ) {
        // If all input fields are filled, fetch data
        this.fetchData()

        this.inputNumber1 = ''
        this.inputNumber2 = ''
        this.inputNumber3 = ''
        this.inputNumber4 = ''
      } else {
        console.error('Please fill in all input fields.')
      }
    },
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

<style scoped>
/* สไตล์ CSS สำหรับ Popup นี้ */
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
