<template>
  <div id="app">
    <div
      class="fixed top-0 z-50 inline-flex items-center justify-between w-full h-6 px-4 overflow-hidden md:w-full md:h-10 md:px-10 bg-primary-color"
    >
      <div class="justify-start items-center gap-2.5 flex">
        <div class="relative w-3 text-white md:w-4">
          <Icon icon="iconoir:map-pin" />
        </div>
        <div class="text-[8px] md:text-sm font-normal leading-snug text-white">
          {{ $t('navbar.address') }}
        </div>
      </div>
      <div class="flex items-center justify-start gap-5">
        <div class="justify-start items-center gap-2.5 flex">
          <div class="relative w-3 text-white md:w-4">
            <Icon icon="mynaui:telephone" :horizontalFlip="true" />
          </div>
          <div
            class="text-[8px] md:text-sm font-normal leading-snug text-right text-white"
          >
            064-256-5523
          </div>
        </div>
        <div class="justify-start items-center gap-2.5 flex">
          <div class="relative w-3 text-white md:w-4">
            <Icon icon="ion:mail-outline" />
          </div>
          <div
            class="text-[8px] md:text-sm font-normal leading-snug text-right text-white"
          >
            BuddyGlassesOfficial@gmail.com
          </div>
        </div>
      </div>
    </div>
    <div class="fixed z-50 w-full -mt-10 overflow-auto md:w-full md:-mt-2">
      <nav class="h-16 py-2.5 bg-white border-b-2 md:-ml-20 md:py-0">
        <div class="container flex flex-wrap justify-between mx-auto">
          <a class="flex items-center">
            <!-- Desktop  -->
            <div class="hidden md:block">
              <div class="w-10 h-10 rounded-full bg-primary-color">
                <div
                  class="flex items-center justify-center w-10 h-10 text-center"
                >
                  <Icon icon="la:vr-cardboard" color="white" width="30" />
                </div>
              </div>
            </div>
            <!-- Mobile -->
            <div class="block md:hidden">
              <div class="w-10 h-10 ml-4 rounded-full bg-primary-color">
                <div
                  class="flex items-center justify-center w-10 h-10 text-center"
                >
                  <Icon icon="la:vr-cardboard" color="white" width="24" />
                </div>
              </div>
            </div>
            <h2 class="px-2 text-2xl font-semibold">Buddy Glasses</h2>
          </a>
          <div class="relative flex items-center">
            <button
              tabindex="0"
              @click="toggleDropdown()"
              class="p-2 mr-2 font-bold rounded-md md:hidden focus:outline-none"
            >
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <!-- Web application  -->
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            >
              <ul
                class="flex flex-col p-2 mt-4 border border-gray-100 rounded-lg peer bg-gray-50 md:flex-row md:space-x-2 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700"
              >
                <router-link
                  to="/"
                  :class="{
                    'bg-[#F5821F4D]  items-center inline-flex gap-1 rounded-xl':
                      $route.path === '/',
                    'bg-white': $route.path !== '/'
                  }"
                  ><div
                    class="cursor-pointer hover:bg-[#F5821F4D] md:px-4 md:py-1.5 items-center inline-flex gap-1 rounded-xl whitespace-nowrap"
                  >
                    {{ $t('navbar.home') }}
                  </div></router-link
                >
                <router-link
                  to="/customer"
                  :class="{
                    'bg-[#F5821F4D] items-center inline-flex gap-1 rounded-xl':
                      $route.path === '/customer',
                    'bg-white': $route.path !== '/customer'
                  }"
                  ><div
                    class="cursor-pointer hover:bg-[#F5821F4D] md:px-4 md:py-1.5 items-center inline-flex gap-1 rounded-xl"
                  >
                    {{ $t('navbar.customer') }}
                  </div></router-link
                >
                <router-link
                  to="/order"
                  :class="{
                    'bg-[#F5821F4D] items-center inline-flex gap-1 rounded-xl':
                      $route.path === '/order',
                    'bg-white': $route.path !== '/order'
                  }"
                  ><div
                    class="cursor-pointer hover:bg-[#F5821F4D] md:px-4 md:py-1.5 items-center inline-flex gap-1 rounded-xl"
                  >
                    {{ $t('navbar.order') }}
                  </div></router-link
                >
                <router-link
                  to="/about"
                  :class="{
                    'bg-[#F5821F4D] items-center inline-flex gap-1 rounded-xl':
                      $route.path === '/about',
                    'bg-white': $route.path !== '/about'
                  }"
                  ><div
                    class="cursor-pointer hover:bg-[#F5821F4D] md:px-4 md:py-1.5 items-center inline-flex gap-1 rounded-xl"
                  >
                    {{ $t('navbar.about') }}
                  </div></router-link
                >
                <router-link
                  to="/contact"
                  :class="{
                    'bg-[#F5821F4D] items-center inline-flex gap-1 rounded-xl':
                      $route.path === '/contact',
                    'bg-white': $route.path !== '/contact'
                  }"
                  ><div
                    class="cursor-pointer hover:bg-[#F5821F4D] md:px-4 md:py-1.5 items-center inline-flex gap-1 rounded-xl"
                  >
                    {{ $t('navbar.contact') }}
                  </div></router-link
                >
              </ul>
            </div>
          </div>
          <div
            class="items-center justify-between hidden w-full md:-mr-20 md:flex md:w-auto md:order-1"
          >
            <ul
              class="flex flex-col items-center mt-4 border border-gray-100 rounded-lg peer bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <router-link to="/forcustomer">
                <div
                  class="whitespace-nowrap cursor-pointer hover:bg-[#F5821F4D] hover:text-black md:px-4 md:py-1.5 rounded-xl inline-flex items-center gap-1 text-white bg-primary-color w-full"
                >
                  <Icon
                    icon="solar:home-2-outline"
                    class="h-6 md:mr-1 md:w-5"
                  />{{ $t('navbar.forCustomer') }}
                </div>
              </router-link>
              <button
                class="hover:bg-[#F5821F4D] items-center inline-flex gap-1 rounded-xl w-full"
                @click="logout"
              >
                <Icon
                  icon="material-symbols:logout"
                  class="inline-block h-8 md:mr-1 md:w-6"
                />{{ $t('navbar.logout') }}
              </button>
              <div
                class="cursor-pointer md:px-4 md:py-1.5 items-center inline-flex gap-1 rounded-xl w-full"
              >
                <Icon
                  icon="ion:earth-sharp"
                  class="inline-flex items-center h-6 md:mr-1 md:w-5"
                />
                <select
                  @change="changeLanguage($event.target.value)"
                  class="appearance-none cursor-pointer bg-transparent px-3 py-1.5 text-sm text-gray-700 border border-white rounded-xl focus:outline-none"
                >
                  <option value="en">EN</option>
                  <option value="th">TH</option>
                </select>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div
      v-show="isDropdownVisible"
      class="absolute w-full bg-white rounded-lg md:inline-block"
    >
      <!-- เนื้อหาเมนูที่นี่ -->
      <div>
        <ul class="flex flex-col justify-center gap-4 px-8 py-8 text-center">
          <router-link
            to="/"
            class="p-3 text-gray-700 rounded-md cursor-pointer hover:bg-primary-color hover:text-white"
          >
            Home
          </router-link>

          <router-link
            to="/customer"
            class="p-3 text-gray-700 rounded-md cursor-pointer hover:bg-primary-color hover:text-white"
          >
            Customer
          </router-link>

          <router-link
            to="/order"
            class="p-3 text-gray-700 rounded-md cursor-pointer hover:bg-primary-color hover:text-white"
          >
            Order
          </router-link>
          <router-link
            to="/about"
            class="p-3 text-gray-700 rounded-md cursor-pointer hover:bg-primary-color hover:text-white"
          >
            About
          </router-link>
          <router-link
            to="/contact"
            class="p-3 text-gray-700 rounded-md cursor-pointer hover:bg-primary-color hover:text-white"
          >
            Contact
          </router-link>
          <router-link
            to="/forcustomer"
            class="p-3 text-gray-700 rounded-md cursor-pointer hover:bg-primary-color hover:text-white"
          >
            For Customer
          </router-link>
          <li
            class="block py-2 pl-3 pr-4 text-gray-700 rounded-md cursor-pointer hover:bg-primary-color hover:text-white md:hover:bg-transparent md:hover:text-cyan-400 md:p-0 dark:text-gray-400 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            <Icon
              icon="ion:earth-sharp"
              class="inline-flex items-center h-6 md:mr-1 md:w-5"
            />
            <select
              @change="changeLanguage($event.target.value)"
              class="appearance-none cursor-pointer bg-transparent px-3 py-1.5 text-sm text-gray-700 border border-white rounded-xl focus:outline-none"
            >
              <option value="en">EN</option>
              <option value="th">TH</option>
            </select>
          </li>
          <button
            class="block py-2 pl-3 pr-4 text-gray-700 rounded-md cursor-pointer hover:bg-primary-color hover:text-white md:hover:bg-transparent md:hover:text-cyan-400 md:p-0 dark:text-gray-400 md:dark:hover:bg-transparent dark:border-gray-700"
            @click="logout"
          >
            <Icon
              icon="material-symbols:logout"
              class="inline-block h-8 md:mr-1 md:w-6"
            />{{ $t('navbar.logout') }}
          </button>
        </ul>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    Icon
  },
  data() {
    return {
      isDropdownVisible: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible
    },
    async logout() {
      try {
        // Clear token from local storage
        localStorage.removeItem('token')
        location.reload()
        // Redirect to login page or any other desired route
        this.$router.push('/admin/login')
      } catch (error) {
        console.error('Error during logout:', error)
      }
    },
    changeLanguage(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>
<style scoped></style>
