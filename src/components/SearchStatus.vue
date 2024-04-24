<template>
  <div class="w-full">
    <form @submit.prevent="submit">
      <label
        for="product_status"
        class="block text-sm font-medium text-gray-900 md:mb-2 md:text-3xl dark:text-white"
        >{{ $t('searchStatus.searchProduct') }}</label
      >
      <div
        class="flex items-center justify-between gap-1 pt-2 md:pt-2 md:gap-2"
      >
        <div class="flex w-full ">
          <input
            v-model="searchOrderID"
            :class="{ 'border-red-500 border-2': isError, 'shake': isError }"
            type="text"
            id="voice-search"
            class="block w-full md:p-5 p-2 text-xs md:text-base text-gray-900 border border-gray-300 md:rounded-2xl rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 md:ps-10 ps-4 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-[#AAAAAA] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Put order ID for 10 characters ex. 4759093895"
            required
          />
          <button
            type="button"
            @click="clearSearch"
          >
          <Icon
              icon="carbon:close-filled"
              class="md:w-8 md:h-8  text-[#808080] absolute end-64 hidden md:block -mt-3.5"
            />
          </button>
        </div>
        <button
          @click="checkOrder"
          type="submit"
          class="inline-flex items-center py-2 px-4 md:p-5 md:px-10 text-xs md:text-base font-medium text-white bg-[#2B2B2B] rounded-lg md:rounded-2xl border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          {{ $t('searchStatus.search') }}
        </button>
        <div class="popup" @click.stop v-if="isPopupVisible">
          <div class="bg-white rounded-lg md:w-[500px] md:h-[449px]">
            <div class="flex items-center justify-center my-10">
              <div class="items-center justify-center text-center">
                <div class="flex justify-center ">
                  <div
                    class="bg-primary-color rounded-full w-[80px] h-[80px] flex items-center justify-center"
                  >
                    <Icon icon="la:vr-cardboard" color="white" width="60" />
                  </div>
                </div>
                <p class="mt-4 text-xl font-bold">
                  {{ $t('searchStatus.inputPhone') }}
                </p>
                <div class="p-4">
                  <input
                    type="text"
                    class="text-center text-lg md:w-[70px] md:h-[70px] rounded-full shadow-xl border-b-2 border-gray-300 md:mx-3 h-20 w-20 mx-2 ml-8"
                    v-model="inputNumber1"
                    :class="{ 'border-red-500 border-2': phoneNotFound, 'shake': phoneNotFound }"
                    @input="() => handleInput(1)"
                    ref="inputNumber1"
                    maxlength="1"
                  />

                  <input
                    type="text"
                    class="text-center text-lg md:w-[70px] md:h-[70px] rounded-full shadow-xl border-b-2 border-gray-300 md:mx-3 h-20 w-20 mx-2"
                    v-model="inputNumber2"
                    :class="{ 'border-red-500 border-2': phoneNotFound, 'shake': phoneNotFound }"
                    @input="() => handleInput(2)"
                    ref="inputNumber2"
                    maxlength="1"
                  />

                  <input
                    type="text"
                    class="text-center text-lg md:w-[70px] md:h-[70px] rounded-full shadow-xl border-b-2 border-gray-300 md:mx-3 h-20 w-20 mx-2 "
                    v-model="inputNumber3"
                    @input="() => handleInput(3)"
                    :class="{ 'border-red-500 border-2': phoneNotFound, 'shake': phoneNotFound }"
                    ref="inputNumber3"
                    maxlength="1"
                  />

                  <input
                    type="text"
                    class="text-center text-lg md:w-[70px] md:h-[70px] rounded-full shadow-xl border-b-2 border-gray-300 mx-3 h-20 w-20 mx-2 mr-8"
                    v-model="inputNumber4"
                    @input="() => handleInput(4)"
                    :class="{ 'border-red-500 border-2': phoneNotFound, 'shake': phoneNotFound }"
                    ref="inputNumber4"
                    maxlength="1"
                  />
                </div>
                <div class="gap-4">
                <div class="flex justify-center mt-6">
                  <button
                    @click="submitForm"
                    class="px-16 py-2 font-medium text-white bg-blue-800 rounded-full md:text-base "
                  >
                    {{ $t('searchStatus.ok') }}
                  </button>
                </div>
                <div class="flex justify-center mt-2">
                  <button
                    @click="closePopup"
                    class="px-12 py-2 font-medium text-white bg-red-600 rounded-full md:text-base"
                  >
                    {{ $t('searchStatus.cancel') }}
                  </button>
                </div>
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
      <div class="flex items-stretch w-full gap-1 pb-4 md:gap-4">
        <div class="self-center text-[10px] md:text-xl whitespace-nowrap">
          {{ $t('searchStatus.result') }}
        </div>
        <div
          class="text-center self-center rounded-3xl md:py-[12px] bg-white md:px-[60px] border-2 border-[#F5821F] text-[#F5821F] text-xs md:text-base px-3 py-1"
        >
          {{ orderStatus.orderID }}
        </div>
        <div class="self-center w-full text-[#808080] md:text-base text-xs">
          <p class="w-full text-xs md:text-base">
            {{ hiddenCustomerName }}
          </p>
          <p class="w-full text-xs md:text-base">{{ hiddenCustomerTel }}</p>
        </div>

        <div>
          <p class="pb-1 text-[#808080] md:text-base text-xs">{{ orderStatus.delivery }}</p>
          <a
            v-if="orderStatus.shippingName === 'EMS'"
            href="https://track.thailandpost.co.th/"
            target="_blank"
            class="block px-4 py-1 bg-white border-2 md:py-2 md:px-8 rounded-xl whitespace-nowrap hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 border-dark-blue"
          >
            <div class="whitespace-pre ">
              <span class="text-xs md:text-base">EMS : </span>

              <span>{{ orderStatus.tracking }}</span>
            </div>
          </a>
          <a
            v-else-if="orderStatus.shippingName === 'Flash'"
            href="https://flashexpress.com/fle/tracking"
            target="_blank"
            class="block px-4 py-1 bg-white border-2 border-yellow-300 md:py-2 md:px-8 rounded-xl whitespace-nowrap hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
          >
            <div class="whitespace-pre ">
              <span class="text-xs md:text-base">Flash : </span>

              <span>{{ orderStatus.tracking }}</span>
            </div>
          </a>
          <a
            v-else-if="orderStatus.shippingName === 'J&T'"
            href="https://www.jtexpress.co.th/service/track"
            target="_blank"
            class="block px-4 py-1 bg-white border-2 rounded-xl border-x-red-600 whitespace-nowrap hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
          >
            >
            <div class="whitespace-pre ">
              <span class="text-xs md:text-base">J&T : </span>
              <span>{{ orderStatus.tracking }}</span>
            </div>
          </a>
          <a
            v-else
            class="block px-4 py-1 bg-white md:py-2 md:px-8 rounded-xl whitespace-nowrap hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
          >
            <div class="whitespace-pre ">
              <span class="text-xs md:text-base">Pick Up</span>
            </div>
          </a>
        </div>
      </div>
      <div class="w-full">
        <div class="flex flex-col gap-0 pb-6 md:gap-8 md:pb-0">
          <div
            class="container p-4 mb-2 bg-white rounded-md md:p-8"
            id="tableContainer"
            v-for="(eyewear, index) in orderStatus.Eyewears"
            :key="index"
          >
            <p class="md:text-3xl font-semibold text-[#F59F54] md:pb-4 pb-2 text-lg ">
              #{{ eyewear.eyewearID }} {{ eyewear.eyewearName }}
            </p>
            <div class="justify-between gap-8 overflow-hidden md:flex">
              <table class="w-full bg-white border border-black">
                <thead>
                  <tr class="bg-[#F59F54] text-white w-full ">
                    <th class="p-1 text-xs border border-black md:py-6 md:px-4 md:text-base">
                      {{ $t('searchStatus.eyesight') }}
                    </th>
                    <th class="p-1 text-xs border border-black md:py-6 md:px-4 md:text-base">SPH</th>
                    <th class="p-1 text-xs border border-black md:py-6 md:px-4 md:text-base" >CYL</th>
                    <th class="p-1 text-xs border border-black md:py-6 md:px-4 md:text-base">AXIS</th>
                    <th class="p-1 text-xs border border-black md:py-6 md:px-4 md:text-base">ADD</th>
                    <th class="p-1 text-xs border border-black md:py-6 md:px-4 md:text-base" >PD</th>
                    <th class="p-1 text-xs border border-black md:py-6 md:px-4 md:text-base">SH</th>
                    <th class="p-1 text-xs border border-black md:py-6 md:px-4 md:text-base">Up KT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      class="md:px-4 md:py-6 border border-black bg-[#FFCA9C] text-center p-1 md:text-base text-xs"
                    >
                      {{ $t('searchStatus.left') }}
                    </td>
                    <td class="p-1 text-xs text-center border border-black md:py-6 md:px-4 md:text-base">
                      {{ eyewear.leftSPH }}
                    </td>
                    <td class="p-1 text-xs text-center border border-black md:py-6 md:px-4 md:text-base">
                      {{ eyewear.leftCYL }}
                    </td>
                    <td class="p-1 text-xs text-center border border-black md:py-6 md:px-4 md:text-base">
                      {{ eyewear.leftAXIS }}
                    </td>
                    <td class="p-1 text-xs text-center border border-black md:py-6 md:px-4 md:text-base">
                      {{ eyewear.leftADD }}
                    </td>
                    <td class="p-1 text-xs text-center border border-black md:py-6 md:px-4 md:text-base">
                      {{ eyewear.leftPD }}
                    </td>
                    <td class="p-1 text-xs text-center border border-black md:py-6 md:px-4 md:text-base">
                      {{ eyewear.leftSH }}
                    </td>
                    <td class="p-1 text-xs text-center border border-black md:py-6 md:px-4 md:text-base">
                      {{ eyewear.leftUpKT }}
                    </td>
                  </tr>

                  <tr>
                    <td
                      class="p-1 md:px-4 md:py-6 border border-black bg-[#FFCA9C] text-center md:text-base text-xs"
                    >
                      {{ $t('searchStatus.right') }}
                    </td>
                    <td class="p-1 text-xs text-center border border-black md:py-6 md:px-4 md:text-base">
                      {{ eyewear.rightSPH }}
                    </td>
                    <td class="p-1 text-xs text-center border border-black md:py-6 md:px-4 md:text-base">
                      {{ eyewear.rightCYL }}
                    </td>
                    <td class="p-1 text-xs text-center border border-black md:py-6 md:px-4 md:text-base">
                      {{ eyewear.rightAXIS }}
                    </td>
                    <td class="p-1 text-xs text-center border border-black md:py-6 md:px-4 md:text-base">
                      {{ eyewear.rightADD }}
                    </td>
                    <td class="p-1 text-xs text-center border border-black md:py-6 md:px-4 md:text-base">
                      {{ eyewear.rightPD }}
                    </td>
                    <td class="p-1 text-xs text-center border border-black md:py-6 md:px-4 md:text-base">
                      {{ eyewear.rightSH }}
                    </td>
                    <td class="p-1 text-xs text-center border border-black md:py-6 md:px-4 md:text-base">
                      {{ eyewear.rightUpKT }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="justify-between py-2 md:flex md:flex-row md:py-4">
                <ol class="justify-center">
                  <li class="w-full md:pb-4">
                    <div class="flex flex-row justify-between md:flex-col">
                      <div
                        v-for="(status, index) in [
                          'Preparing',
                          'Processing',
                          'Complete'
                        ]"
                        :key="index"
                        class="flex items-center h-full py-2 md:py-4"
                      >
                        <div
                          :class="{
                            ' bg-green-400': eyewear.orderStatus === status,
                            'bg-gray-300': eyewear.orderStatus !== status,
                            'md:w-12': true,
                            'md:h-12': true,
                            'w-8': true,
                            'h-8': true,
                            'rounded-full': true,
                            'ring-white': true,
                            'dark:bg-blue-900': true,
                            'sm:ring-8': true,
                            'dark:ring-gray-900': true,
                            'shrink-0': true
                          }"
                        ></div>
                        <div class="flex flex-col items-start ml-4 md:ml-8">
                          <!-- Add this line -->
                          <h3
                            class="text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap md:text-base"
                          >
                            {{ status }}
                          </h3>
                          <p
                            v-if="
                              status === 'Preparing' &&
                              eyewear.datePreparing !== null
                            "
                            class="text-xs text-gray-500 whitespace-nowrap md:text-base"
                          >
                            {{ formatDateandTime(eyewear.datePreparing) }}
                          </p>
                          <p
                            v-else-if="
                              status === 'Processing' &&
                              eyewear.dateProcessing !== null
                            "
                            class="text-gray-500 whitespace-nowrap"
                          >
                            {{ formatDateandTime(eyewear.dateProcessing) }}
                          </p>
                          <p
                            v-else-if="
                              status === 'Complete' &&
                              eyewear.dateComplete !== null
                            "
                            class="text-gray-500 whitespace-nowrap"
                          >
                            {{ formatDateandTime(eyewear.dateComplete) }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a v-if="orderNotFound" :class="{ 'shake': orderNotFound }" class="flex ml-1 mt-2 text-red-500">Check Order ID again!</a>
    <div
      v-if="orderNotFound"
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
          {{ $t('searchStatus.nofound') }}
          <br />
          {{ $t('searchStatus.tryagain') }}
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
      isError: false,
      orderStatus: [],
      inputNumber1: '',
      inputNumber2: '',
      inputNumber3: '',
      inputNumber4: '',
      showResults: false,
      isPopupVisible: false,
      customer: null,
      hasError: false,
      orderNotFound: false,
      phoneNotFound: false
    }
  },
  computed: {
    hiddenCustomerName() {
      if (
        this.customer &&
        this.customer.customerName &&
        this.customer.customerLastName
      ) {
        return this.hideText(
          this.customer.customerName + this.customer.customerLastName
        )
      }
      return ''
    },
    hiddenCustomerTel() {
      if (this.customer && this.customer.customerTel) {
        return this.hideText(this.customer.customerTel)
      }
      return ''
    }
  },
  methods: {
    clearInput(){
      this.inputNumber1 = '';
      this.inputNumber2 = '';
      this.inputNumber3 = '';
      this.inputNumber4 = '';
    },
    checkOrder() {
  if (!this.searchOrderID.trim()) {
    this.isError = true;
  } else {
    this.isError = false;
    axios.get(`${import.meta.env.VITE_BASE_URL}/orders/${this.searchOrderID}`)
      .then(response => {
        if (response.status === 200) {
          this.isError = false;
          this.orderNotFound = false;
          this.showPopup();
        } else {
          this.isError = true;
          this.orderNotFound = true;
        }
      })
      .catch(error => {
        // หากเกิดข้อผิดพลาดในการส่งคำขอ
        this.isError = true;
        this.orderNotFound = true;
      });
  }
},
    async fetchCustomer(customerID) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/customers/${customerID}`
        )
        this.customer = response.data
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
        if (searchStatus.status === 200) {
          if (searchStatus.data) {
            this.orderStatus = searchStatus.data
            this.showResults = true
            this.isPopupVisible = false
            await this.fetchCustomer(searchStatus.data.customerID)
          }
        } else {
          this.hasError = true
          this.isPopupVisible = true
        }
      } catch (error) {
        this.phoneNotFound = true;
        this.isPopupVisible = true;
        this.isError = true;
        this.hasError = true;
        this.clearInput();
      }
    },
    async validateSearch() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/orders/${this.searchOrderID}`);
      if (response.status === 200) {
        console.log('Order ID found:', response.data);
      } else {
        console.log('Order ID not found');
      }
    } catch (error) {
      console.error('Error validating order ID:', error);
    }
},
    async showPopup() {
      if (this.hasError) return
      this.isPopupVisible = true
    },
    closePopup() {
      this.isPopupVisible = false
      this.hasError = false
    },
    hideText(text) {
      if (text.length <= 3) {
        return text
      }
      const visibleChars = 3
      const hiddenChars = text.length - visibleChars
      const visiblePart = text.slice(0, visibleChars)
      const hiddenPart = '*'.repeat(hiddenChars)
      const visibleEnd = text.slice(-visibleChars)
      return visiblePart + hiddenPart + visibleEnd
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
    clearSearch() {
      if (this.searchOrderID) {
        window.location.reload()
      } else {
        this.searchOrderID = ''
        this.hasError = false
      }
    },
    async submitForm() {
  try {
    if (!this.inputNumber1.trim() && !this.inputNumber2.trim() && !this.inputNumber3.trim() && !this.inputNumber4.trim()) {
      this.phoneNotFound = true;
    } else if (this.inputNumber1 && this.inputNumber2 && this.inputNumber3 && this.inputNumber4 && this.searchOrderID) {
      await this.fetchData();
    } else {
      this.phoneNotFound = true;
      this.isPopupVisible = true;
    }
  } catch (error) {
    console.error('An error occurred:', error);
    this.clearInput()
    this.phoneNotFound = true; // Set phoneNotFound to true in case of an error
  }
    },
    formatDate(dateString) {
      const inputDate = new Date(dateString)

      const day = String(inputDate.getDate()).padStart(2, '0')
      const month = String(inputDate.getMonth() + 1).padStart(2, '0')
      const year = String(inputDate.getFullYear()).slice(0)

      return `${day}/${month}/${year}`
    },
    formatDateandTime(dateString) {
      const inputDate = new Date(dateString)

      const day = String(inputDate.getDate()).padStart(2, '0')
      const month = String(inputDate.getMonth() + 1).padStart(2, '0')
      const year = String(inputDate.getFullYear())
      const hours = String(inputDate.getHours()).padStart(2, '0')
      const minutes = String(inputDate.getMinutes()).padStart(2, '0')

      return `${day}/${month}/${year} ${hours}:${minutes}`
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

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}

.shake {
  animation: shake 0.2s ease-in-out;
}
</style>
