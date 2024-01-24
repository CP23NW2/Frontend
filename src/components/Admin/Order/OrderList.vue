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
              Order List
            </div>
            <RouterLink to="/addorder">
              <div class="flex-shrink-0 mb-4 md:mb-0">
                <button
                  class="flex items-center px-4 py-2 text-base font-medium text-center text-white bg-blue-800 border md:py-3 md:px-8 rounded-2xl border-neutral-300"
                >
                  Create New Order
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
                    All
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
                    Pending
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
                    Processing
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
                    Complete
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
                            <option value="name">Name</option>
                            <option value="phoneNumber">Phone Number</option>
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
                          v-if="selectedSearch === 'name'"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <input
                          v-if="selectedSearch === 'phoneNumber'"
                          placeholder="ไม่ต้องใส่เลข 0 ตัวแรก"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <input
                          placeholder="ไม่ต้องใส่เลข 0 ตัวแรก"
                          type="date"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <div class="flex gap-2 align-items-center">
                          <button
                            class="flex items-center px-4 py-2 text-base font-medium text-center text-white bg-[#2B2B2B] md:py-3 md:px-8 rounded-lg"
                          >
                            Search
                          </button>
                          <button
                            class="flex items-center px-4 py-2 text-base font-medium text-center text-black bg-white border rounded-lg md:py-3 md:px-8 border-[#D4D4D4]"
                          >
                            Reset
                          </button>
                        </div>
                      </div>

                      <div class="mt-4 text-xl font-mediumtext-black">
                        {{ orderList.length }} Orders
                      </div>
                      <div class="mt-4 overflow-x-auto">
                        <table
                          class="w-full text-sm text-left text-[#2B2B2B] rtl:text-right dark:text-[##EAEAEA] border"
                        >
                          <!-- Table Head -->
                          <thead
                            class="text-xs text-[##808080] bg-[#EAEAEA] dark:bg-gray-700 dark:text-[#EAEAEA] "
                          >
                            <tr class="">
                              <th
                                scope="col"
                                class="gap-3 px-6 py-3 whitespace-nowrap"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                                Order Total
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                                Shipping
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>
                          
                          <tbody>
                            <tr
                              v-for="(order, index) in orderList"
                              :key="index"
                            >
                              <th
                                scope="row"
                                class="px-6 font-medium text-gray-900 md:py-4 whitespace-nowrap dark:text-white"
                              >
                                <Icon
                                  icon="ph:user-circle-light"
                                  class="inline-block w-10 h-10 mr-2"
                                />
                                {{ order.orderName }} 
                              </th>
                              <td class="px-6 py-4">{{ order.price }} ฿</td>
                              <td class="px-6 py-4">{{  }} waiting eyewaer</td>
                              <td class="px-6 py-4">
                                <div class="flex align-items-center">
                                  {{ order.shippingName }}
                                </div>
                              </td>
                              <td class="px-6 py-4">
                                <div class="flex align-items-center">
                                  <button
                                    @click="EditCustomerPage(customerTel)"
                                  >
                                    <Icon
                                      icon="mdi:edit-circle"
                                      class="w-10 h-10 text-[#55BA71]"
                                    />
                                  </button>
                                  <button @click="DeleteCustomer(customerTel)">
                                    <Icon
                                      icon="mdi:trash-can-circle"
                                      class="w-10 h-10 text-[#EB4F54]"
                                    />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
                            <option value="name">Name</option>
                            <option value="phoneNumber">Phone Number</option>
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
                          v-if="selectedSearch === 'name'"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <input
                          v-if="selectedSearch === 'phoneNumber'"
                          placeholder="ไม่ต้องใส่เลข 0 ตัวแรก"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <input
                          placeholder="ไม่ต้องใส่เลข 0 ตัวแรก"
                          type="date"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <div class="flex gap-2 align-items-center">
                          <button
                            class="flex items-center px-4 py-2 text-base font-medium text-center text-white bg-[#2B2B2B] md:py-3 md:px-8 rounded-lg"
                          >
                            Search
                          </button>
                          <button
                            class="flex items-center px-4 py-2 text-base font-medium text-center text-black bg-white border rounded-lg md:py-3 md:px-8 border-[#D4D4D4]"
                          >
                            Reset
                          </button>
                        </div>
                      </div>

                      <div class="mt-4 text-xl font-mediumtext-black">
                        {{ length }} Customers
                      </div>
                      <div class="mt-4 overflow-x-auto">
                        <table
                          class="w-full text-sm text-left text-[#2B2B2B] rtl:text-right dark:text-[##EAEAEA] border"
                        >
                          <!-- Table Head -->
                          <thead
                            class="text-xs text-[##808080] bg-[#EAEAEA] dark:bg-gray-700 dark:text-[#EAEAEA]"
                          >
                            <tr>
                              <th
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                                Phone Number
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                                Address
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="customer in filteredResult"
                              :key="customerTel"
                            >
                              <th
                                scope="row"
                                class="px-6 font-medium text-gray-900 md:py-4 whitespace-nowrap dark:text-white"
                              >
                                <Icon
                                  icon="ph:user-circle-light"
                                  class="inline-block w-10 h-10 mr-2"
                                />
                                {{ customerName }} {{ customerLastName }}
                              </th>
                              <td class="px-6 py-4">0{{ customerTel }}</td>
                              <td class="px-6 py-4">{{ address }}</td>
                              <td class="px-6 py-4">
                                <div class="flex align-items-center">
                                  <button
                                    @click="EditCustomerPage(customerTel)"
                                  >
                                    <Icon
                                      icon="mdi:edit-circle"
                                      class="w-10 h-10 text-[#55BA71]"
                                    />
                                  </button>
                                  <button @click="DeleteCustomer(customerTel)">
                                    <Icon
                                      icon="mdi:trash-can-circle"
                                      class="w-10 h-10 text-[#EB4F54]"
                                    />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
                            <option value="name">Name</option>
                            <option value="phoneNumber">Phone Number</option>
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
                          v-if="selectedSearch === 'name'"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <input
                          v-if="selectedSearch === 'phoneNumber'"
                          placeholder="ไม่ต้องใส่เลข 0 ตัวแรก"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <input
                          placeholder="ไม่ต้องใส่เลข 0 ตัวแรก"
                          type="date"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <div class="flex gap-2 align-items-center">
                          <button
                            class="flex items-center px-4 py-2 text-base font-medium text-center text-white bg-[#2B2B2B] md:py-3 md:px-8 rounded-lg"
                          >
                            Search
                          </button>
                          <button
                            class="flex items-center px-4 py-2 text-base font-medium text-center text-black bg-white border rounded-lg md:py-3 md:px-8 border-[#D4D4D4]"
                          >
                            Reset
                          </button>
                        </div>
                      </div>

                      <div class="mt-4 text-xl font-mediumtext-black">
                        {{ length }} Customers
                      </div>
                      <div class="mt-4 overflow-x-auto">
                        <table
                          class="w-full text-sm text-left text-[#2B2B2B] rtl:text-right dark:text-[##EAEAEA] border"
                        >
                          <!-- Table Head -->
                          <thead
                            class="text-xs text-[##808080] bg-[#EAEAEA] dark:bg-gray-700 dark:text-[#EAEAEA]"
                          >
                            <tr>
                              <th
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                                Phone Number
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                                Address
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="customer in filteredResult"
                              :key="customerTel"
                            >
                              <th
                                scope="row"
                                class="px-6 font-medium text-gray-900 md:py-4 whitespace-nowrap dark:text-white"
                              >
                                <Icon
                                  icon="ph:user-circle-light"
                                  class="inline-block w-10 h-10 mr-2"
                                />
                                {{ customerName }} {{ customerLastName }}
                              </th>
                              <td class="px-6 py-4">0{{ customerTel }}</td>
                              <td class="px-6 py-4">{{ address }}</td>
                              <td class="px-6 py-4">
                                <div class="flex align-items-center">
                                  <button
                                    @click="EditCustomerPage(customerTel)"
                                  >
                                    <Icon
                                      icon="mdi:edit-circle"
                                      class="w-10 h-10 text-[#55BA71]"
                                    />
                                  </button>
                                  <button @click="DeleteCustomer(customerTel)">
                                    <Icon
                                      icon="mdi:trash-can-circle"
                                      class="w-10 h-10 text-[#EB4F54]"
                                    />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
                            <option value="name">Name</option>
                            <option value="phoneNumber">Phone Number</option>
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
                          v-if="selectedSearch === 'name'"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <input
                          v-if="selectedSearch === 'phoneNumber'"
                          placeholder="ไม่ต้องใส่เลข 0 ตัวแรก"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <input
                          placeholder="ไม่ต้องใส่เลข 0 ตัวแรก"
                          type="date"
                          class="px-10 mx-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 md:w-full"
                        />
                        <div class="flex gap-2 align-items-center">
                          <button
                            class="flex items-center px-4 py-2 text-base font-medium text-center text-white bg-[#2B2B2B] md:py-3 md:px-8 rounded-lg"
                          >
                            Search
                          </button>
                          <button
                            class="flex items-center px-4 py-2 text-base font-medium text-center text-black bg-white border rounded-lg md:py-3 md:px-8 border-[#D4D4D4]"
                          >
                            Reset
                          </button>
                        </div>
                      </div>

                      <div class="mt-4 text-xl font-mediumtext-black">
                        {{ length }} Customers
                      </div>
                      <div class="mt-4 overflow-x-auto">
                        <table
                          class="w-full text-sm text-left text-[#2B2B2B] rtl:text-right dark:text-[##EAEAEA] border"
                        >
                          <!-- Table Head -->
                          <thead
                            class="text-xs text-[##808080] bg-[#EAEAEA] dark:bg-gray-700 dark:text-[#EAEAEA]"
                          >
                            <tr>
                              <th
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                                Phone Number
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                                Address
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 whitespace-nowrap"
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="customer in filteredResult"
                              :key="customerTel"
                            >
                              <th
                                scope="row"
                                class="px-6 font-medium text-gray-900 md:py-4 whitespace-nowrap dark:text-white"
                              >
                                <Icon
                                  icon="ph:user-circle-light"
                                  class="inline-block w-10 h-10 mr-2"
                                />
                                {{ customerName }} {{ customerLastName }}
                              </th>
                              <td class="px-6 py-4">0{{ customerTel }}</td>
                              <td class="px-6 py-4">{{ address }}</td>
                              <td class="px-6 py-4">
                                <div class="flex align-items-center">
                                  <button
                                    @click="EditCustomerPage(customerTel)"
                                  >
                                    <Icon
                                      icon="mdi:edit-circle"
                                      class="w-10 h-10 text-[#55BA71]"
                                    />
                                  </button>
                                  <button @click="DeleteCustomer(customerTel)">
                                    <Icon
                                      icon="mdi:trash-can-circle"
                                      class="w-10 h-10 text-[#EB4F54]"
                                    />
                                  </button>
                                </div>
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

          <!-- <nav aria-label="Page navigation" class="flex items-center justify-center mt-4">
    <ul class="flex items-center h-10 -space-x-px text-base">
      <li>
        <a href="#" class="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span class="sr-only">Previous</span>
          <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
          </svg>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
      </li>
      <li>
        <a href="#" aria-current="page" class="z-10 flex items-center justify-center h-10 px-4 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
      </li>
      <li>
        <a href="#" class="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span class="sr-only">Next</span>
          <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
        </a>
      </li>
    </ul>
  </nav>  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue'
import axios from 'axios'

export default {
  name: 'pink-tabs',
  data() {
    return {
      openTab: 1,
      orderList:[]
    }
  },
  mounted(){
    this.fetchData();
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber
    },
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/orders');
        this.orderList = response.data;
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    }
  },
  components: {
    Icon
  }
}
</script>
