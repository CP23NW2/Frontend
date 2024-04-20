<template>
  <div>
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
            <p class="text-xl md:px-10 md:text-3xl">
              {{ $t('orderList.addCusOr') }}
            </p>
          </div>

          <div class="flex py-5 md:px-12">
            <div class="w-full p-4 md:p-0">
              <div class="flex justify-end w-full">
                <button
                  class="flex items-center gap-2"
                  @click="showCustomerList"
                >
                  <Icon
                    icon="ri:health-book-line"
                    class="w-5 h-5 text-blue-700"
                  />
                  <p class="text-blue-700">
                    {{ $t('orderList.selectCusBook') }}
                  </p>
                </button>
              </div>
              <div class="popup" v-if="isPopupVisible">
                <div
                  class="bg-white rounded-lg md:w-[780px] md:h-[620px] border-t-8 border-primary-color"
                >
                  <div class="relative mx-8 my-4">
                    <button
                      @click="closeModal"
                      class="absolute right-0 text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <div class="items-center justify-center">
                      <div class="items-center justify-center text-center">
                        <p class="mt-8 text-sm font-bold">
                          {{ $t('orderList.selectCus') }}
                        </p>
                        <!-- dropdown  -->
                        <div class="flex py-5">
                          <div class="">
                            <select
                              v-model="selectedSearch"
                              class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-38 md:px-4"
                            >
                              <option value="name">
                                {{ $t('orderList.cusName') }}
                              </option>
                              <option value="phoneNumber">
                                {{ $t('orderList.phone') }}
                              </option>
                            </select>
                          </div>
                          <div class="relative">
                            <div
                              class="absolute left-0 flex items-center py-2.5 pl-3 mx-3 text-gray-700 pointer-events-none opacity-80"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
                                />
                              </svg>
                            </div>
                          </div>
                          <input
                            v-if="selectedSearch === 'name'"
                            v-model="searchName"
                            class="px-10 ml-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                          />
                          <input
                            v-if="selectedSearch === 'phoneNumber'"
                            type="number"
                            v-model="searchPhoneNumber"
                            class="px-10 ml-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                          />
                        </div>
                        <div class="overflow-y-auto max-h-[440px] border">
                          <table
                            class="w-full text-xs text-left text-[#2B2B2B] rtl:text-right dark:text-[##EAEAEA]"
                          >
                            <!-- Table Head -->
                            <thead
                              class="text-xs text-[##808080] bg-[#EAEAEA] dark:bg-gray-700 dark:text-[#EAEAEA] sticky top-0"
                            >
                              <tr>
                                <th
                                  scope="col"
                                  class="px-6 py-3 whitespace-nowrap"
                                >
                                  {{ $t('orderList.name') }}
                                </th>
                                <th
                                  scope="col"
                                  class="px-6 py-3 whitespace-nowrap"
                                >
                                  {{ $t('orderList.phone') }}
                                </th>
                                <th
                                  scope="col"
                                  class="px-6 py-3 whitespace-nowrap"
                                >
                                  {{ $t('customerList.address') }}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(customer, index) in filteredResult"
                                :key="index"
                                @click="populateInputFields(customer)"
                                class="hover:bg-gray-100 dark:hover:bg-gray-800"
                              >
                                <th
                                  scope="row"
                                  class="px-6 font-medium text-gray-900 md:py-4 whitespace-nowrap dark:text-white"
                                >
                                  <Icon
                                    icon="ph:user-circle-light"
                                    class="inline-block w-10 h-10 mr-2"
                                  />
                                  {{ customer.customerName }}
                                  {{ customer.customerLastName }}
                                </th>
                                <td class="px-6 py-4">
                                  {{
                                    customer.customerTel.replace(
                                      /(\d{3})(\d{3})(\d{4})/,
                                      '$1-$2-$3'
                                    )
                                  }}
                                </td>
                                <td class="px-6 py-4">
                                  {{ customer.address }}
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

              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-2 md:flex-row"
              >
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">
                    {{ $t('orderList.name') }}
                  </p>
                  <input
                    required
                    v-model="newCustomer.customerName"
                    :class="{
                      'error-input': nameError,
                      'border-red-500': nameError && !newCustomer.customerName
                    }"
                    class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                  />
                  <p
                    v-if="nameError"
                    class="invisible text-sm text-red-500 peer-invalid:visible"
                  >
                    {{ $t('orderList.enterName') }}
                  </p>
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">
                    {{ $t('customerList.last') }}
                  </p>
                  <input
                    required
                    v-model="newCustomer.customerLastName"
                    :class="{
                      'error-input': lasnameError,
                      'border-red-500':
                        lasnameError && !newCustomer.customerLastName
                    }"
                    class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                  />
                  <p
                    v-if="lasnameError"
                    class="invisible text-sm text-red-500 peer-invalid:visible"
                  >
                    {{ $t('orderList.enterLastName') }}
                  </p>
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">
                    {{ $t('orderList.phone') }}
                  </p>
                  <input
                    maxlength="10"
                    required
                    v-model="newCustomer.customerTel"
                    :class="{
                      'error-input': phoneErrorError,
                      'border-red-500': phoneError && !newCustomer.customerTel
                    }"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                  />
                  <p
                    v-if="phoneError"
                    class="invisible text-sm text-red-500 peer-invalid:visible"
                  >
                    {{ $t('orderList.enterPhone') }}
                  </p>
                </div>
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">
                    {{ $t('eyewearList.date') }}
                  </p>
                  <input
                    required
                    v-model="newOrder.dateOrder"
                    type="date"
                    :class="{
                      'error-input': dateError,
                      'border-red-500': dateError && !newOrder.dateOrder
                    }"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10 peer border border-slate-400"
                  />
                  <p
                    v-if="dateError"
                    class="invisible text-sm text-red-500 peer-invalid:visible"
                  >
                    {{ $t('orderList.enterDate') }}
                  </p>
                </div>
              </div>

              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-2 md:flex-row"
              >
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">
                    {{ $t('customerList.address') }}
                  </p>
                  <input
                    v-model="newCustomer.detailAddress"
                    maxlength="50"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="grid grid-cols-4" v-if="!closeAddress">
                    <div class="mt-9">
                      <select v-model="selectedProvince" @change="onProvinceChange" class="md:px-5 h-10 rounded-md bg-[#D4D4D433] border-gray-200">
                        <option value="">-- จังหวัด --</option>
                        <option v-for="province in provinces" :value="province">{{ province }}</option>
                      </select>
                    </div>
                    <div class="mt-9" v-if="selectedProvince">
                      <select v-model="selectedDistrict" @change="onDistrictChange"  class="md:px-5 h-10 rounded-md bg-[#D4D4D433] border-gray-200">
                        <option value="">-- อำเภอ --</option>
                        <option v-for="district in filteredDistricts" :value="district">{{ district }}</option>
                      </select>
                    </div>
                    <div class="mt-9" v-if="selectedDistrict">
                      <select v-model="selectedTambon" @change="onTambonChange"  class="md:px-5 h-10 rounded-md bg-[#D4D4D433] border-gray-200">
                        <option value="">-- ตำบล --</option>
                        <option v-for="tambon in filteredTambons" :value="tambon">{{ tambon }}</option>
                      </select>
                    </div>
                    <div class="mt-9" v-if="selectedTambon">
                      <select v-model="selectedPostCode"  class="md:px-5 h-10 rounded-md bg-[#D4D4D433] border-gray-200">
                        <option value="">-- รหัสไปรษณีย์ --</option>
                        <option v-for="postCode in filteredPostCodes" :value="postCode">{{ postCode }}</option>
                      </select>
                    </div>
                </div>

              </div>
              <!-- Order -->
              <div class="w-full h-px border border-neutral-300"></div>
              <p class="py-4 text-primary-color md:text-2xl">
                {{ $t('eyewearList.orderDetails') }}
              </p>
              <div
                class="justify-between gap-4 mt-4 md:flex-row"
              >
                <div class="w-full pb-4">
                  <p class="pb-2 text-sm md:text-lg">
                    {{ $t('eyewearList.delivery') }}
                  </p>
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
                </div>
                <div class="w-full pb-4">
                  <p
                    v-if="deliveryError"
                    class="invisible text-sm text-red-500 peer-invalid:visible"
                  >
                    {{ $t('addOrder.pleaseSelOne') }}
                  </p>
                  <p class="pb-2 text-sm md:text-lg" v-if="newOrder.delivery === 'Delivery'">
                    {{ $t('eyewearList.trackingNumber') }}
                  </p>
                  <input
                    v-model="newOrder.tracking"
                    maxlength="15"
                    v-if="newOrder.delivery === 'Delivery'"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
              </div>
              <!-- Eyewear -->
              <div id="EyewearTable">
                <div v-for="item in newOrder.eyewearItems" :key="item.id">
                  <div class="w-full h-px mt-4 border border-neutral-300"></div>
                  <div class="flex py-5">
                    <div class="w-full p-4 md:p-0">
                      <p class="text-primary-color md:text-2xl">
                        {{ $t('eyewearList.eyewearDetail') }}
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
                            {{ $t('orderList.enterBrand') }}
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
                            {{ $t('orderList.enterLens') }}
                          </p>
                        </div>
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">
                            {{ $t('eyewearList.price') }}
                          </p>
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
                            {{ $t('orderList.enterPrice') }}
                          </p>
                        </div>
                      </div>
                      <div class="justify-between gap-4 mt-4 md:flex-row">
                        <div class="w-full pb-4">
                          <p class="pb-2 text-sm md:text-lg">
                            {{ $t('eyewearList.detail') }}
                          </p>
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
                                  {{ $t('searchStatus.right') }}
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
                              <tr>
                                <td
                                  class="px-6 py-8 border border-black bg-[#FFCA9C] text-center"
                                >
                                  {{ $t('searchStatus.left') }}
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
                            </tbody>
                          </table>
                        </div>
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
                  {{ $t('orderList.addEyewear') }}
                </button>
              </div>
 <!--Total Price-->
 <div
                  class="grid grid-cols-3 gap-4 pr-2 mt-4 text-end"
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
                  >
                    Shipping Total:
                  </p>
                  <p class="text-xl rounded-md md:text-lg">
                    ฿{{ shippingTotal() }}
                  </p>
                  <p
                    class="content-center col-start-2 text-sm text-gray-500 md:text-lg whitespace-nowrap"
                  >
                    Total Payment:
                  </p>
                  <p
                    class="text-xl font-bold rounded-md md:text-4xl text-primary-color"
                  >
                    ฿{{ totalPrice() }}
                  </p>
                </div>
                <div class="flex justify-end gap-4 mt-8">
                  <button
                    @click="addCustomerAndOrderAndEyewear()"
                    class="bg-blue-700 h-10 w-24 rounded-xl text-white md:h-[60px] md:w-[130px] md:text-xl cursor-pointer hover:bg-blue-800"
                  >
                    {{ $t('customerList.confirm') }}
                  </button>
                  <button
                    @click="cancel"
                    class="bg-red-500 h-10 w-24 rounded-xl text-white md:h-[60px] md:w-[130px] md:text-xl cursor-pointer hover:bg-red-600"
                  >
                    {{ $t('customerList.cancel') }}
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
      customerList: [],
      selectedSearch: 'name',
      searchName: '',
      searchPhoneNumber: '',

      nameError: false,
      lasnameError: false,
      phoneError: false,

      dateError: false,
      deliveryError: false,

      eyewearError: false,
      lensError: false,
      priceError: false,

      isPopupVisible: false,
      closeAddress: false,

      output: null,
      isDropdownVisible: false,
      eyewearTables: 1,
      deliveryPrice: 0,

      newCustomer: {
        customerID: '',
        customerName: '',
        customerLastName: '',
        customerTel: '',
        address: ''
      },

      addresses: [], // ข้อมูลทั้งหมด
      provinces: [], // รายชื่อจังหวัดทั้งหมด
      detailAddress: '',
      selectedProvince: '', // จังหวัดที่เลือก
      selectedDistrict: '', // อำเภอที่เลือก
      selectedTambon: '', // ตำบลที่เลือก
      selectedPostCode: '', // รหัสไปรษณีย์ที่เลือก,
    }
  },
  mounted() {
    this.customerID = this.$route.params.customerID
    this.fetchCustomer()
    this.newOrder.price = this.totalPrice()

    this.$watch(
      'newOrder.eyewearItems',
      () => {
        this.newOrder.price = this.totalPrice()
      },
      { deep: true }
    )

    this.fetchDataAddress();
  },

  computed: {
    isPickup() {
      return this.newOrder.delivery === 'Pickup'
    },
    filteredResult: function () {
      if (this.selectedSearch === 'name') {
        return this.customerList.filter((customer) => {
          const fullName = `${customer.customerName} ${customer.customerLastName}`
          return fullName.toLowerCase().includes(this.searchName.toLowerCase())
        })
      } else if (this.selectedSearch === 'phoneNumber') {
        return this.customerList.filter((customer) => {
          return customer.customerTel
            .toString()
            .includes(this.searchPhoneNumber)
        })
      }
      return []
    },
     // กรองอำเภอที่เป็นไปได้ขึ้นอยู่กับจังหวัดที่เลือก
     filteredDistricts() {
      const uniqueDistricts = new Set();
      this.addresses.forEach(address => {
        if (address.ProvinceThai === this.selectedProvince) {
          uniqueDistricts.add(address.DistrictThaiShort);
        }
      });
      return Array.from(uniqueDistricts);
    },
    // กรองตำบลที่เป็นไปได้ขึ้นอยู่กับอำเภอที่เลือก
    filteredTambons() {
      return this.addresses
        .filter(address => address.DistrictThaiShort === this.selectedDistrict)
        .map(address => address.TambonThaiShort);
    },
    // กรองรหัสไปรษณีย์ที่เป็นไปได้ขึ้นอยู่กับตำบลที่เลือก
    filteredPostCodes() {
      return this.addresses
        .filter(address => address.TambonThaiShort === this.selectedTambon)
        .map(address => address.PostCode);
    }
  },
  methods: {
    closeAddressToggle() {
    this.closeAddress = true
  },
    async fetchDataAddress() {
      try {
        const response = await axios.get("public/addressOfThailand.json");
        this.addresses = response.data;
        this.provinces = Array.from(new Set(this.addresses.map(address => address.ProvinceThai)));
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    },
    onProvinceChange() {
      this.selectedDistrict = ''; // รีเซ็ตค่าอำเภอที่เลือกเมื่อเปลี่ยนจังหวัด
      this.selectedTambon = ''; // รีเซ็ตค่าตำบลที่เลือกเมื่อเปลี่ยนจังหวัด
      this.selectedPostCode = ''; // รีเซ็ตค่ารหัสไปรษณีย์เมื่อเปลี่ยนจังหวัด
    },
    onDistrictChange() {
      this.selectedTambon = ''; // รีเซ็ตค่าตำบลที่เลือกเมื่อเปลี่ยนอำเภอ
      this.selectedPostCode = ''; // รีเซ็ตค่ารหัสไปรษณีย์เมื่อเปลี่ยนอำเภอ
    },
    onTambonChange() {
      this.selectedPostCode = ''; // รีเซ็ตค่ารหัสไปรษณีย์เมื่อเปลี่ยนตำบล
    },
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
    closeModal() {
      this.isPopupVisible = false
    },
    populateInputFields(customer) {
      this.newCustomer.customerName = customer.customerName
      this.newCustomer.customerLastName = customer.customerLastName
      this.newCustomer.detailAddress = customer.address
      this.newCustomer.customerTel = customer.customerTel
      this.closeAddressToggle()

      if (
        this.customerList.some(
          (existingCustomer) =>
            existingCustomer.customerID === customer.customerID
        )
      ) {
        this.newOrder.customerID = customer.customerID
      }
      this.closeModal()
    },
    async addCustomerAndOrderAndEyewear() {
      try {
        const existingCustomer = this.customerList.find(
          (customer) => customer.customerID === this.newOrder.customerID
        )
        if (!existingCustomer) {
          await this.addCustomer()
        }
        if (existingCustomer) {
          await this.updateCustomer(existingCustomer.customerID)
        }

        await this.addOrder()
        this.showSuccessMessage()
      } catch (error) {
        console.error('Error adding customer, order, or eyewear')
      }
    },
    async fetchOrder() {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/orders`
        )
        if (result.status == 200) {
        } else {
          console.error('Failed to update data')
        }
      } catch (error) {
        console.error('Error updating data')
      }
    },
    async fetchCustomer() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/customers`
        )
        this.customerList = response.data
        console.log(this.customerList)
      } catch (error) {
        console.error('Error fetching customer data')
      }
    },
    async addCustomer() {
      try {
        // รวมข้อมูลที่เลือกจาก dropdown เข้าด้วยกัน
        const fullAddress = `${this.newCustomer.detailAddress} ${this.selectedProvince} ${this.selectedDistrict} ${this.selectedTambon} ${this.selectedPostCode}`;

        // เพิ่มข้อมูลที่เลือกจาก dropdown ลงใน newCustomer.address
        this.newCustomer.address = fullAddress;

        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/customers`,
          this.newCustomer
        )
        if (response.status === 200) {
          this.newOrder.customerID = response.data.customerID
          this.fetchCustomer()
        } else {
          console.error('Failed to add customer')
          this.nameError = true
          this.lasnameError = true
          this.phoneError = true
        }
      } catch (error) {
        console.error('Error adding order')
        if (error.response && error.response.status === 400) {
          this.nameError = true
          this.lasnameError = true
          this.phoneError = true
        }
      }
    },
    async updateCustomer(customerId) {
      try {
        if (!customerId) {
          console.error('Invalid customerID', error)
          return
        }
        const data = {
          customerTel: this.newCustomer.customerTel,
          customerName: this.newCustomer.customerName,
          customerLastName: this.newCustomer.customerLastName,
          address: this.newCustomer.detailAddress
        }
        const response = await axios.put(
          `${import.meta.env.VITE_BASE_URL}/customers/${customerId}`,
          data
        )
        if (response.status === 200) {
          console.log('Customer updated successfully')
          await this.fetchCustomer()
        } else {
          console.error('Failed to update customer')
        }
      } catch (error) {
        console.error('Error updating customer', error)
      }
    },
    async addOrder() {
      try {

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
          console.error('Failed to add order')
          this.deliveryError = true
          this.eyewearError = true
          this.lensError = true
          this.priceError = true
        }
      } catch (error) {
        console.error('Error adding order')
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
    async showCustomerList() {
      await this.fetchCustomer()
      this.isPopupVisible = true
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
    },
    totalPrice() {
      if (!Array.isArray(this.newOrder.eyewearItems)) {
        return 0
      }

      let deliveryPrice = 0

      // Add delivery price based on selected option
      if (this.newOrder.delivery === 'Delivery') {
        const selectedDelivery = this.newOrder.delivery
        if (selectedDelivery === 'Delivery') {
          deliveryPrice = 50
        }
      }
      // Calculate total price including delivery
      const totalPriceWithoutDelivery = this.newOrder.eyewearItems.reduce(
        (acc, item) => {
          if (typeof item.price !== 'number') {
            return acc
          }
          return acc + item.price
        },
        0
      )
      return totalPriceWithoutDelivery + deliveryPrice
    },
    subTotal() {
      if (!Array.isArray(this.newOrder.eyewearItems)) {
        return 0
      }
      return this.newOrder.eyewearItems.reduce((acc, item) => {
        if (typeof item.price !== 'number') {
          return acc
        }
        return acc + item.price
      }, 0)
    },
    shippingTotal() {
      if (this.newOrder.delivery === 'Delivery') {
        const selectedDelivery = this.newOrder.delivery
        let shippingPrice = 0
        if (selectedDelivery === 'Delivery') {
          shippingPrice = 50
        }
        return shippingPrice
      } else {
        return 0
      }
    }
  },
  directives: {
    'html-to-paper': VueHtmlToPaper
  }
}
</script>

<style scoped>
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