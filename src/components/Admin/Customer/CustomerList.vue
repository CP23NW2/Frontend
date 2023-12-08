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
              Customer List
            </div>
            <RouterLink to="/addcustomer">
              <div class="flex-shrink-0 mb-4 md:mb-0">
                <button
                  class="flex items-center px-4 py-2 text-base font-medium text-center text-white bg-blue-800 border md:py-3 md:px-8 rounded-2xl border-neutral-300"
                >
                  Create New Customer
                </button>
              </div></RouterLink
            >
          </div>

          <!-- dropdown  -->
          <div class="flex py-5">
            <div class="">
              <select
                v-model="selectedSearch"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-48 md:px-4"
              >
                <option value="name" >Name</option>
                <option value="phoneNumber">Phone Number</option>
              </select>
            </div>
            <div class="relative">
              <div
                class="absolute py-3 left-0 flex items-center pl-3 pointer-events-none text-gray-700 opacity-80 mx-3 mt-1"
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
              class="bg-gray-50 border border-gray-300 text-gray-900 text-lg mx-3 rounded-lg md:w-96 px-10"
            />
            <input
            v-if="selectedSearch === 'phoneNumber'"
            v-model="searchPhoneNumber"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-lg mx-3 rounded-lg md:w-96 px-10"
            />
          </div>

          <div class="mt-4 text-xl font-mediumtext-black">
            {{ customerList.length }} Customers
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
                  <th scope="col" class="px-6 py-3 whitespace-nowrap">Name</th>
                  <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Phone Number
                  </th>
                  <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Address
                  </th>
                  <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="customer in filteredResult"
                  :key="customer.customerTel"
                >
                  <th
                    scope="row"
                    class="px-6 font-medium text-gray-900 md:py-4 whitespace-nowrap dark:text-white"
                  >
                    <Icon
                      icon="ph:user-circle-light"
                      class="inline-block w-10 h-10 mr-2"
                    />
                    {{ customer.customerName }} {{ customer.customerLastName }}
                  </th>
                  <td class="px-6 py-4">0{{ customer.customerTel }}</td>
                  <td class="px-6 py-4">{{ customer.address }}</td>
                  <td class="px-6 py-4">
                    <div class="flex align-items-center">
                      <button @click="EditCustomerPage(customer.customerTel)">
                        <Icon
                          icon="mdi:edit-circle"
                          class="w-10 h-10 text-[#55BA71]"
                        />
                      </button>
                      <button @click="DeleteCustomer(customer.customerTel)">
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
          <nav
            aria-label="Page navigation"
            class="flex items-center justify-center mt-4"
          >
            <ul class="flex items-center h-10 -space-x-px text-base">
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span class="sr-only">Previous</span>
                  <svg
                    class="w-3 h-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >1</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >2</a
                >
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  class="z-10 flex items-center justify-center h-10 px-4 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >3</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >4</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >5</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span class="sr-only">Next</span>
                  <svg
                    class="w-3 h-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { Icon } from "@iconify/vue";
import Swal from "sweetalert2";

const customerList = ref([]);

const fetchData = async () => {
  try {
    const result = await axios.get("http://localhost:3000/customers");
    if (result.data) {
      const sortedData = result.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      customerList.value = sortedData;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default {
  data() {
    return {
      customerList: [],
      selectedSearch: 'name',
      searchName: '',
      searchPhoneNumber: ''
    };
  },
  computed: {
  filteredResult: function() {
    if (this.selectedSearch === 'name') {
      return this.customerList.filter((customer) => {
        const fullName = `${customer.customerName} ${customer.customerLastName}`;
        return fullName.toLowerCase().includes(this.searchName.toLowerCase());
      });
    } else if (this.selectedSearch === 'phoneNumber') {
      return this.customerList.filter((customer) => {
        return customer.customerTel.toString().includes(this.searchPhoneNumber);
      });
    }
    return [];
  },
},
  methods: {
    EditCustomerPage(customerTel) {
      this.$router.push(`/editcustomer/${customerTel}`);
    },
    fetchData() {
      // Use this.customerTel to fetch data for a specific customer
      const url = `http://localhost:3000/customers/${this.customerTel}`;
      axios
        .get(url)
        .then((response) => {
          this.customerData = response.data;
        })
        .catch((error) => {
          console.error("Error fetching customer data:", error);
        });
    },
  },
  setup() {
    const DeleteCustomer = async (customerTel) => {
      const isConfirmed = await Swal.fire({
        title: "Are you sure to delete Customer : 0" + customerTel + " ?",
        text: "You cannot recover this customer!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      // ถ้าผู้ใช้กด OK (ยืนยัน)
      if (isConfirmed.isConfirmed) {
        const url = `http://localhost:3000/customers/${customerTel}`;
        try {
          await axios.delete(url);
          // Update the data without refreshing the page
          fetchData();
          // ใช้ SweetAlert2 แทน alert
          Swal.fire("Deleted!", "Customer has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting customer:", error);
          // ใช้ SweetAlert2 แทน alert
          Swal.fire("Error", "Failed to delete customer", "error");
        }
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      Icon,
      customerList,
      DeleteCustomer,
    };
  },
};
</script>
