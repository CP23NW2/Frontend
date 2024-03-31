<template>
  <div class="bg-[#F5F5F5] mt-12 py-6">
    <router-view></router-view>
    <div class="p-4 md:p-10">
      <div class="bg-white rounded-lg shadow-md">
        <div class="p-4 md:p-6">
          <div class="flex flex-row items-center justify-between md:flex-row">
            <div
              class="mb-4 text-2xl font-medium md:text-3xl text-zinc-800 md:mb-0"
            >
            {{$t("orderList.orderList")}}
            </div>
            <RouterLink to="/addorder">
              <div class="flex-shrink-0 mb-4 md:mb-0">
                <button
                  class="flex items-center px-4 py-2 text-base font-medium text-center text-white bg-blue-800 border md:py-3 md:px-8 rounded-2xl border-neutral-300"
                >
                {{$t("orderList.addOrder")}}
                </button>
              </div></RouterLink
            >
          </div>
          <div class="flex flex-wrap">
            <div class="w-full">
              <ul
                class="flex flex-row flex-wrap pt-3 mb-0 list-none border-b-[#D4D4D4] border-b-2"
              >
                <li class="flex -mb-px text-center last:mr-0">
                  <a
                    class="block px-12 py-3 leading-normal text-meduim"
                    v-on:click="toggleTabs(1)"
                    v-bind:class="{
                      'border-b-[#F5821F] border-b-4 ': openTab === 1
                    }"
                  >
                  {{$t("orderList.all")}}
                  </a>
                </li>
                <li class="flex -mb-px text-center last:mr-0">
                  <a
                    class="block px-12 py-3 leading-normal text-medium"
                    v-on:click="toggleTabs(2)"
                    v-bind:class="{
                      'border-b-[#F5821F] border-b-4 ': openTab === 2
                    }"
                  >
                  {{$t("orderList.preparing")}}
                  </a>
                </li>
                <li class="flex -mb-px text-center last:mr-0">
                  <a
                    class="block px-12 py-3 leading-normal text-medium"
                    v-on:click="toggleTabs(3)"
                    v-bind:class="{
                      'border-b-[#F5821F] border-b-4 ': openTab === 3
                    }"
                  >
                  {{$t("orderList.processing")}}
                  </a>
                </li>
                <li class="flex -mb-px text-center last:mr-0">
                  <a
                    class="block px-12 py-3 leading-normal text-medium"
                    v-on:click="toggleTabs(4)"
                    v-bind:class="{
                      'border-b-[#F5821F] border-b-4 ': openTab === 4
                    }"
                  >
                  {{$t("orderList.completed")}}
                  </a>
                </li>
              </ul>
              <div
                class="relative flex flex-col w-full min-w-0 mb-6 break-words"
              >
                <div class="flex-auto px-4 py-5">
                  <div class="tab-content tab-space">
                    <div
                      v-bind:class="{
                        hidden: openTab !== 1,
                        block: openTab === 1
                      }"
                    >
                      <div class="flex py-5">
                        <div class="">
                          <select
                            v-model="selectedSearch"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-48 md:px-4"
                          >
                            <option value="orderID">{{$t("orderList.orderid")}}</option>
                            <option value="customerName">{{$t("orderList.cusName")}}</option>
                            <option value="eyewearName">{{$t("orderList.productName")}}</option>
                          </select>
                        </div>
                        <div class="relative">
                          <div
                            class="absolute left-0 flex items-center py-3 pl-3 mx-3 mt-1 text-gray-700 pointer-events-none opacity-80"
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

                        <!-- Order list All -->
                        <input
                          v-if="selectedSearch === 'orderID'"
                          type="number"
                          v-model="searchOrderID"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <input
                          v-if="selectedSearch === 'customerName'"
                          type="text"
                          v-model="searchCustomerName"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <input
                          v-if="selectedSearch === 'eyewearName'"
                          type="text"
                          v-model="searchEyewearName"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <div class="flex gap-2 align-items-center">
                          <button
                            class="flex items-center px-4 py-2 text-base font-medium text-center text-black bg-white border rounded-lg md:py-3 md:px-8 border-[#D4D4D4]"
                            @click="reset"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                      <!-- Table Head of All Order List -->
                      <div class="mt-4 text-xl font-mediumtext-black">
                        {{ orderList.length }} {{$t("orderList.orders")}}
                      </div>
                      <div class="mt-4 overflow-x-auto">
                        <div
                          class="w-full text-sm text-left text-[#2B2B2B] rtl:text-right dark:text-[##EAEAEA]"
                        >
                          <div
                            class="text-xs text-[##808080] bg-[#EAEAEA] dark:bg-gray-700 dark:text-[#EAEAEA]"
                          >
                            <div class="flex flex-row justify-between">
                              <div
                                scope="col"
                                class="gap-3 px-6 py-3 whitespace-nowrap"
                              >
                              {{$t("orderList.name")}}
                              </div>
                              <div
                                scope="col"
                                class="gap-3 px-6 py-3 whitespace-nowrap"
                              >
                              {{$t("orderList.product")}}
                              </div>
                              <div
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                              {{$t("orderList.totalPrice")}}
                              </div>
                              <div
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                              {{$t("orderList.status")}}
                              </div>
                              <div
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                              {{$t("orderList.shipping")}}
                              </div>
                              <div
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                              {{$t("orderList.manage")}}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          v-for="(order, index) in filteredResult"
                          :key="index"
                          class="mt-2 border cursor-pointer hover:bg-sky-700"
                        >
                          <div
                            class="bg-[#EAEAEA] rounded-sm flex justify-between px-6 self-center"
                          >
                            <div
                              v-for="(customer, index) in getCustomersByOrderId(
                                order.customerID
                              )"
                              :key="index"
                              class="flex items-stretch justify-between py-2 text-[#808080]"
                            >
                            <p id="showName">
                              {{ customer.customerName }}    
                            </p>
                            <p id="showLastName" class="mx-2">{{ customer.customerLastName }}</p>
                            </div>
                            <div
                              class="self-center text-[#808080]" id="orderID"
                            >
                              {{$t("orderList.orderid")}}: {{ order.orderID }}
                            </div>
                          </div>
                          <div class="flex justify-between px-10 py-3">
                            <div class="w-full">
                              <div
                                class="flex flex-row justify-between"
                                v-for="eyewear in getEyewearForOrder(
                                  order.orderID
                                )"
                                :key="eyewear.eyewearID"
                              >
                                <div
                                  class="flex items-center"
                                >
                                  <Icon
                                    icon="ion:cart"
                                    style="color: rgb(2, 2, 2)"
                                    class="w-8 h-8 mr-2 text-primary-color"
                                  />
                                </div>
                                <div class="flex flex-col gap-2" >
                                  <p id="eyewearDetail">{{ eyewear.eyewearName }}</p>
                                  <div class="text-[#808080]">
                                    {{ formatDate(eyewear.createdAt) }}
                                  </div>
                                </div>
                                <div
                                  class="self-center"
                                >
                                  {{ eyewear.price }} {{$t("orderList.bath")}}
                                </div>
                                <div
                                  class="self-center"
                                >
                                  {{ eyewear.orderStatus }}
                                </div>

                                <div
                                  class="self-center"
                                >
                                  {{ order.delivery }}
                                </div>
                              </div>
                            </div>
                            <div class="flex items-stretch pl-16">
                              <div class="self-center">
                                <button
                                  @click="fetchOrderDetails(order.orderID)"
                                >
                                  <Icon
                                    icon="mdi:edit-circle"
                                    class="w-10 h-10 text-[#55BA71]"
                                  />
                                </button>
                              </div>
                              <div class="self-center">
                                <button @click="DeleteOrder(order.orderID)">
                                  <Icon
                                    icon="mdi:trash-can-circle"
                                    class="w-10 h-10 text-[#EB4F54]"
                                  />
                                </button>
                              </div>
                              <div class="self-center">
                                <button @click="printToDiv(order.orderID)">
                                  <Icon
                                    icon="f7:doc-circle-fill"
                                    class="w-10 h-10 text-[#808080]"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      v-bind:class="{
                        hidden: openTab !== 2,
                        block: openTab === 2
                      }"
                    >
                      <div class="flex py-5">
                        <div class="">
                          <select
                            v-model="selectedSearch"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-48 md:px-4"
                          >
                          <option value="orderID">{{$t("orderList.orderid")}}</option>
                            <option value="eyewearName">{{$t("orderList.productName")}}</option>
                          </select>
                        </div>
                        <div class="relative">
                          <div
                            class="absolute left-0 flex items-center py-3 pl-3 mx-3 mt-1 text-gray-700 pointer-events-none opacity-80"
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
                          v-if="selectedSearch === 'orderID'"
                          type="number"
                          v-model="searchOrderID"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <input
                          v-if="selectedSearch === 'customerName'"
                          type="text"
                          v-model="searchCustomerName"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <input
                          v-if="selectedSearch === 'eyewearName'"
                          type="text"
                          v-model="searchEyewearName"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <div class="flex gap-2 align-items-center">
                          <button
                            class="flex items-center px-4 py-2 text-base font-medium text-center text-black bg-white border rounded-lg md:py-3 md:px-8 border-[#D4D4D4]"
                            @click="reset"
                          >
                            Reset
                          </button>
                        </div>
                      </div>

                      <!-- Table Head of All Order List -->
                      <div class="mt-4 text-xl font-mediumtext-black">
                        {{ getPreparingOrdersCount() }} {{$t("orderList.orders")}}
                      </div>

                      <div
                        v-for="(order, index) in filteredResult"
                        :key="index"
                        :class="{
                          'mt-2 border': preparingEyewearList.some(
                            (eyewear) =>
                              eyewear.orderID === order.orderID &&
                              eyewear.orderStatus === 'Preparing'
                          )
                        }"
                      >
                        <!-- Check if there are eyewear items with status 'Preparing' for the order -->
                        <template
                          v-if="
                            preparingEyewearList.some(
                              (eyewear) =>
                                eyewear.orderID === order.orderID &&
                                eyewear.orderStatus === 'Preparing'
                            )
                          "
                        >
                          <div
                            class="bg-[#EAEAEA] rounded-sm flex justify-between px-6 self-center"
                          >
                            <div
                              v-for="(
                                customer, cIndex
                              ) in getCustomersByOrderId(order.customerID)"
                              :key="cIndex"
                              class="flex items-stretch justify-between py-2 text-[#808080]"
                            >
                            <p id="showName">
                              {{ customer.customerName }}    
                            </p>
                            <p id="showLastName" class="mx-2">{{ customer.customerLastName }}</p>
                            </div>
                            <div class="self-center text-[#808080]"  id="orderID">
                              {{$t("orderList.orderid")}}: {{ order.orderID }}
                            </div>
                          </div>
                          <div>
                            <div
                              v-for="eyewear in preparingEyewearList"
                              :key="eyewear.eyewearID"
                            >
                              <!-- Check if the eyewear item has status 'Preparing' for the current order -->
                              <div
                                v-if="
                                  eyewear.orderID === order.orderID &&
                                  eyewear.orderStatus === 'Preparing'
                                "
                                class="flex flex-row justify-between px-10 py-3"
                              >
                                <Icon
                                  icon="ion:cart"
                                  style="color: rgb(2, 2, 2)"
                                  class="self-center inline-block w-8 h-8 mr-2 text-primary-color"
                                />
                                <div class="flex flex-col gap-2" >
                                  <p id="eyewearDetail">{{ eyewear.eyewearName }}</p>
                                  <div class="text-[#808080]">
                                    {{ formatDate(eyewear.createdAt) }}
                                  </div>
                                </div>
                                <div class="self-center">
                                  {{ eyewear.price }} {{$t("orderList.bath")}}
                                </div>
                                <div class="self-center">
                                  {{ eyewear.orderStatus }}
                                </div>
                                <div class="self-center">
                                  {{ order.delivery }}
                                </div>
                                <div class="flex items-stretch">
                                  <div class="self-center">
                                    <button
                                      @click="EditCustomerPage(customerTel)"
                                    >
                                      <Icon
                                        icon="mdi:edit-circle"
                                        class="w-10 h-10 text-[#55BA71]"
                                      />
                                    </button>
                                    <button @click="DeleteOrder(order.orderID)">
                                      <Icon
                                        icon="mdi:trash-can-circle"
                                        class="w-10 h-10 text-[#EB4F54]"
                                      />
                                    </button>
                                    <button @click="printToDiv(order.orderID)">
                                      <Icon
                                        icon="f7:doc-circle-fill"
                                        class="w-10 h-10 text-[#808080]"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </template>
                      </div>
                    </div>
                    <div
                      v-bind:class="{
                        hidden: openTab !== 3,
                        block: openTab === 3
                      }"
                    >
                      <div class="flex py-5">
                        <div class="">
                          <select
                            v-model="selectedSearch"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-48 md:px-4"
                          >
                          <option value="orderID">{{$t("orderList.orderid")}}</option>
                            <option value="eyewearName">{{$t("orderList.productName")}}</option>
                          </select>
                        </div>
                        <div class="relative">
                          <div
                            class="absolute left-0 flex items-center py-3 pl-3 mx-3 mt-1 text-gray-700 pointer-events-none opacity-80"
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
                          v-if="selectedSearch === 'orderID'"
                          type="number"
                          v-model="searchOrderID"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <input
                          v-if="selectedSearch === 'customerName'"
                          type="text"
                          v-model="searchCustomerName"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <input
                          v-if="selectedSearch === 'eyewearName'"
                          type="text"
                          v-model="searchEyewearName"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <div class="flex gap-2 align-items-center">
                          <button
                            class="flex items-center px-4 py-2 text-base font-medium text-center text-black bg-white border rounded-lg md:py-3 md:px-8 border-[#D4D4D4]"
                            @click="reset"
                          >
                            Reset
                          </button>
                        </div>
                      </div>

                      <!-- Table Head of All Order List -->
                      <div class="mt-4 text-xl font-mediumtext-black">
                        {{ getProcessingOrdersCount() }} {{$t("orderList.orders")}}
                      </div>

                      <div
                        v-for="(order, index) in filteredResult"
                        :key="index"
                        :class="{
                          'mt-2 border': processingEyewearList.some(
                            (eyewear) =>
                              eyewear.orderID === order.orderID &&
                              eyewear.orderStatus === 'Processing'
                          )
                        }"
                      >
                        <!-- Check if there are eyewear items with status 'Preparing' for the order -->
                        <template
                          v-if="
                            processingEyewearList.some(
                              (eyewear) =>
                                eyewear.orderID === order.orderID &&
                                eyewear.orderStatus === 'Processing'
                            )
                          "
                        >
                          <div
                            class="bg-[#EAEAEA] rounded-sm flex justify-between px-6 self-center"
                          >
                            <div
                              v-for="(
                                customer, cIndex
                              ) in getCustomersByOrderId(order.customerID)"
                              :key="cIndex"
                              class="flex items-stretch justify-between py-2 text-[#808080]"
                            >
                            <p id="showName">
                              {{ customer.customerName }}    
                            </p>
                            <p id="showLastName" class="mx-2">{{ customer.customerLastName }}</p>
                            </div>
                            <div class="self-center text-[#808080]" id="orderID">
                              {{$t("orderList.orderid")}}: {{ order.orderID }}
                            </div>
                          </div>
                          <div>
                            <div
                              v-for="eyewear in processingEyewearList"
                              :key="eyewear.eyewearID"
                            >
                              <!-- Check if the eyewear item has status 'Preparing' for the current order -->
                              <div
                                v-if="
                                  eyewear.orderID === order.orderID &&
                                  eyewear.orderStatus === 'Processing'
                                "
                                class="flex flex-row justify-between px-10 py-3"
                              >
                                <Icon
                                  icon="ion:cart"
                                  style="color: rgb(2, 2, 2)"
                                  class="self-center inline-block w-8 h-8 mr-2 text-primary-color"
                                />
                                <div class="flex flex-col gap-2" >
                                  <p id="eyewearDetail">{{ eyewear.eyewearName }}</p>
                                  <div class="text-[#808080]">
                                    {{ formatDate(eyewear.createdAt) }}
                                  </div>
                                </div>
                                <div class="self-center">
                                  {{ eyewear.price }} {{$t("orderList.bath")}}
                                </div>
                                <div class="self-center">
                                  {{ eyewear.orderStatus }}
                                </div>
                                <div class="self-center">
                                  {{ order.delivery }}
                                </div>
                                <div class="flex items-stretch">
                                  <div class="self-center">
                                    <button
                                      @click="EditCustomerPage(customerTel)"
                                    >
                                      <Icon
                                        icon="mdi:edit-circle"
                                        class="w-10 h-10 text-[#55BA71]"
                                      />
                                    </button>
                                    <button @click="DeleteOrder(order.orderID)">
                                      <Icon
                                        icon="mdi:trash-can-circle"
                                        class="w-10 h-10 text-[#EB4F54]"
                                      />
                                    </button>
                                    <button @click="printToDiv(order.orderID)">
                                      <Icon
                                        icon="f7:doc-circle-fill"
                                        class="w-10 h-10 text-[#808080]"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </template>
                      </div>
                    </div>
                    <div
                      v-bind:class="{
                        hidden: openTab !== 4,
                        block: openTab === 4
                      }"
                    >
                      <div class="flex py-5">
                        <div class="">
                          <select
                            v-model="selectedSearch"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-48 md:px-4"
                          >
                          <option value="orderID">{{$t("orderList.orderid")}}</option>
                            <option value="eyewearName">{{$t("orderList.productName")}}</option>
                          </select>
                        </div>
                        <div class="relative">
                          <div
                            class="absolute left-0 flex items-center py-3 pl-3 mx-3 mt-1 text-gray-700 pointer-events-none opacity-80"
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
                          v-if="selectedSearch === 'orderID'"
                          type="number"
                          v-model="searchOrderID"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <input
                          v-if="selectedSearch === 'customerName'"
                          type="text"
                          v-model="searchCustomerName"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <input
                          v-if="selectedSearch === 'eyewearName'"
                          type="text"
                          v-model="searchEyewearName"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />

                        <div class="flex gap-2 align-items-center">
                          <button
                            class="flex items-center px-4 py-2 text-base font-medium text-center text-black bg-white border rounded-lg md:py-3 md:px-8 border-[#D4D4D4]"
                            @click="reset"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                      <!-- Table Head of All Order List -->
                      <div class="mt-4 text-xl font-mediumtext-black">
                        {{ getCompleteOrdersCount() }} {{$t("orderList.orders")}}
                      </div>

                      <div
                        v-for="(order, index) in filteredResult"
                        :key="index"
                        :class="{
                          'mt-2 border': completeEyewearList.some(
                            (eyewear) =>
                              eyewear.orderID === order.orderID &&
                              eyewear.orderStatus === 'Complete'
                          )
                        }"
                      >
                        <!-- Check if there are eyewear items with status 'Preparing' for the order -->
                        <template
                          v-if="
                            completeEyewearList.some(
                              (eyewear) =>
                                eyewear.orderID === order.orderID &&
                                eyewear.orderStatus === 'Complete'
                            )
                          "
                        >
                          <div
                            class="bg-[#EAEAEA] rounded-sm flex justify-between px-6 self-center"
                          >
                            <div
                              v-for="(
                                customer, cIndex
                              ) in getCustomersByOrderId(order.customerID)"
                              :key="cIndex"
                              class="flex items-stretch justify-between py-2 text-[#808080]"
                            >
                            <p id="showName">
                              {{ customer.customerName }}    
                            </p>
                            <p id="showLastName" class="mx-2">{{ customer.customerLastName }}</p>
                            </div>
                            <div class="self-center text-[#808080]" id="orderID">
                              {{$t("orderList.orderid")}}: {{ order.orderID }}
                            </div>
                          </div>
                          <div>
                            <div
                              v-for="eyewear in completeEyewearList"
                              :key="eyewear.eyewearID"
                            >
                              <!-- Check if the eyewear item has status 'Preparing' for the current order -->
                              <div
                                v-if="
                                  eyewear.orderID === order.orderID &&
                                  eyewear.orderStatus === 'Complete'
                                "
                                class="flex flex-row justify-between px-10 py-3"
                              >
                                <Icon
                                  icon="ion:cart"
                                  style="color: rgb(2, 2, 2)"
                                  class="self-center inline-block w-8 h-8 mr-2 text-primary-color"
                                />
                                <div class="flex flex-col gap-2" >
                                  <p id="eyewearDetail">{{ eyewear.eyewearName }}</p>
                                  <div class="text-[#808080]">
                                    {{ formatDate(eyewear.createdAt) }}
                                  </div>
                                </div>
                                <div class="self-center">
                                  {{ eyewear.price }} {{$t("orderList.bath")}}
                                </div>
                                <div class="self-center">
                                  {{ eyewear.orderStatus }}
                                </div>
                                <div class="self-center">
                                  {{ order.delivery }}
                                </div>
                                <div class="flex items-stretch">
                                  <div class="self-center">
                                    <button
                                      @click="
                                        UpdateStatusOrderPage(order.orderID)
                                      "
                                    >
                                      <Icon
                                        icon="mdi:edit-circle"
                                        class="w-10 h-10 text-[#55BA71]"
                                      />
                                    </button>
                                    <button @click="DeleteOrder(order.orderID)">
                                      <Icon
                                        icon="mdi:trash-can-circle"
                                        class="w-10 h-10 text-[#EB4F54]"
                                      />
                                    </button>
                                    <button @click="printToDiv(order.orderID)">
                                      <Icon
                                        icon="f7:doc-circle-fill"
                                        class="w-10 h-10 text-[#808080]"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </template>
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
import { Icon } from '@iconify/vue'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'pink-tabs',
  data() {
    return {
      openTab: 1,
      orderList: [],
      eyewearList: [],
      customerList: [],
      selectedSearch: 'orderID',
      searchOrderID: '',
      searchCustomerName: '',
      searchEyewearName: ''
    }
  },
  setup() {
    const orderList = ref([])
    const eyewearList = ref([])
    const customerList = ref([])

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/orders`
        )
        if (response.data) {
          const sortedData = response.data.sort(
            (b, a) => new Date(a.createdAt) - new Date(b.createdAt)
          )
          orderList.value = sortedData
        }
      } catch (error) {
        console.error('Error fetching customer data:', error)
      }
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/eyewears`
      )
      if (response.data) {
        eyewearList.value = response.data
      }
      const cusResponse = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/customers`
      )
      if (cusResponse.data) {
        customerList.value = cusResponse.data
      }
    }

    onMounted(() => {
      fetchData()
    })

    const DeleteOrder = async (orderID) => {
      const isConfirmed = await Swal.fire({
        title: 'Are you sure to delete OrderID : ' + orderID + ' ?',
        text: 'You cannot recover this order!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })

      // If the user clicks OK (confirmed)
      if (isConfirmed.isConfirmed) {
        const url = `${import.meta.env.VITE_BASE_URL}/orders/${orderID}`
        try {
          await axios.delete(url)
          console.log('delete order')
          // Update the data without refreshing the page
          fetchData()
          // Use SweetAlert2 instead of alert
          Swal.fire('Deleted!', 'Order has been deleted.', 'success')
        } catch (error) {
          console.error('Error deleting order:', error)
          // Use SweetAlert2 instead of alert
          Swal.fire('Error', 'Failed to delete order', 'error')
        }
      }
    }

    const getOrdersForCustomer = (customerID) => {
      return orderList.value.filter((order) => order.customerID === customerID)
    }

    const getEyewearForOrder = (orderID) => {
      return eyewearList.value.filter((eyewear) => eyewear.orderID === orderID)
    }

    const getCustomersByOrderId = (customerID) => {
      return customerList.value.filter(
        (customer) => customer.customerID === customerID
      )
    }

    return {
      orderList,
      eyewearList,
      customerList,
      getEyewearForOrder,
      getOrdersForCustomer,
      getCustomersByOrderId,
      DeleteOrder
    }
  },

  computed: {
    filteredResult: function () {
      if (this.selectedSearch === 'orderID') {
        return this.orderList.filter((order) => {
          return order.orderID.toString().includes(this.searchOrderID)
        })
      } else if (this.selectedSearch === 'customerName') {
        return this.customerList.filter((customer) => {
          return customer.customerName
            .toLowerCase()
            .includes(this.searchCustomerName.toLowerCase())
        })
      } else if (this.selectedSearch === 'eyewearName') {
        return this.eyewearList.filter((eyewear) => {
          return eyewear.eyewearName
            .toLowerCase()
            .includes(this.searchEyewearName.toLowerCase())
        })
      }
      return []
    },
    preparingEyewearList: function () {
      return this.eyewearList.filter(
        (eyewear) => eyewear.orderStatus === 'Preparing'
      )
    },
    processingEyewearList: function () {
      return this.eyewearList.filter(
        (eyewear) => eyewear.orderStatus === 'Processing'
      )
    },
    completeEyewearList: function () {
      return this.eyewearList.filter(
        (eyewear) => eyewear.orderStatus === 'Complete'
      )
    }
  },
  methods: {
    reset() {
      (this.selectedSearch = 'orderID'),
        (this.searchOrderID = ''),
        (this.searchCustomerName = ''),
        (this.searchEyewearName = '')
    },
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber
    },
    formatDate(dateString) {
      const inputDate = new Date(dateString)

      const day = String(inputDate.getDate()).padStart(2, '0')
      const month = String(inputDate.getMonth() + 1).padStart(2, '0')
      const year = String(inputDate.getFullYear()).slice(0)

      return `${day}/${month}/${year}`
    },
    getPreparingOrdersCount() {
      const uniquePreparingOrderIDs = [
        ...new Set(
          this.preparingEyewearList.map((eyewear) => eyewear.eyewearID)
        )
      ]
      return uniquePreparingOrderIDs.length
    },
    getProcessingOrdersCount() {
      const uniqueProcessingOrderIDs = [
        ...new Set(this.processingEyewearList.map((eyewear) => eyewear.orderID))
      ]
      return uniqueProcessingOrderIDs.length
    },
    getCompleteOrdersCount() {
      const uniqueCompleteOrderIDs = [
        ...new Set(this.completeEyewearList.map((eyewear) => eyewear.eyewearID))
      ]
      return uniqueCompleteOrderIDs.length
    },
    fetchOrderDetails(orderID) {
      this.$router.push({ name: 'OrderById', params: { orderID } })
    },
    async OrderDetails(orderID) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/orders/${orderID}`
        )
        console.log('Order details:', response.data)
      } catch (error) {
        console.error('Error fetching order details:', error)
      }
    },
    printToDiv(orderID, customerName) {
    // Filter eyewear list based on orderID
    const eyewearsForOrder = this.eyewearList.filter(eyewear => eyewear.orderID === orderID);
    var customerNameDiv = document.getElementById('showName');
    var customerNameHTML = customerNameDiv.innerHTML;
    var customerLastNameDiv = document.getElementById('showLastName');
    var customerLastNameHTML = customerLastNameDiv.innerHTML;
    // Generate HTML for eyewear names
    const eyewearDetailHTML = eyewearsForOrder.map(eyewear => {
        return `<p>${eyewear.eyewearName}</p>`;
    }).join('');

    // Open a new window for printing
    var newWin = window.open('', 'Print-Window');

    // Write the HTML content for each data item to the new window
    newWin.document.open();
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
                    <p><strong>Order ID:</strong> ${orderID}</p>
                    <p><strong>Customer Name:</strong> ${customerNameHTML} ${customerLastNameHTML}</p>
                    <h2>Product Name:</h2>
                    <p>${eyewearDetailHTML}</p>
                    <p>Check Status and Tracking Number in website: <a href="https://capstone23.sit.kmutt.ac.th/nw2/forcustomer">https://capstone23.sit.kmutt.ac.th/nw2/forcustomer</a></p>
                </div>
            </body>
        </html>
    `);
    newWin.document.close();

    // Print the new window
    newWin.print();
}

  },

  components: {
    Icon
  }
}
</script>

