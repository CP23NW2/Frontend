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
          {{$t("navbar.address")}}
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
    <div class="fixed z-50 w-full -mt-8 overflow-auto md:w-full md:-mt-2">
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
              @click="toggleDropdown"
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
            <div
              v-show="isDropdownVisible"
              class="absolute w-full -ml-20 transition-all duration-300 bg-white rounded-lg opacity-0 pointer-events-auto md:inline-block top-5 focus:top-12 focus:opacity-100 focus:visible"
            >
              <!-- เนื้อหาเมนูที่นี่ -->
              <div>
                <ul class="flex flex-col justify-start gap-3 px-8 py-8">
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

                  <li
                    class="p-3 text-gray-700 rounded-md cursor-pointer hover:bg-primary-color hover:text-white"
                  >
                    Content
                  </li>

                  <li>
                    <a
                      href="#customer"
                      class="block py-2 pl-3 pr-4 text-gray-700 rounded-md cursor-pointer hover:bg-primary-color hover:text-white md:hover:bg-transparent md:hover:text-cyan-400 md:p-0 dark:text-gray-400 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Web application  -->
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            >
              <ul
                class="flex flex-col p-2 mt-4 border border-gray-100 rounded-lg peer bg-gray-50 md:flex-row md:space-x-2 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700"
              >
                <router-link
                  to="/forcustomer"
                  :class="{
                    'bg-[#F5821F4D] items-center inline-flex gap-1 rounded-xl':
                      $route.path === '/forcustomer',
                    'bg-white': $route.path !== '/forcustomer'
                  }"
                  ><div
                    class="cursor-pointer hover:bg-[#F5821F4D] md:px-4 md:py-1.5 items-center inline-flex gap-1 rounded-xl"
                  >
                  {{$t("navbar.home")}}
                  </div></router-link
                >
                <router-link
                  to="/forcustomer/about"
                  :class="{
                    'bg-[#F5821F4D] items-center inline-flex gap-1 rounded-xl':
                      $route.path === '/forcustomer/about',
                    'bg-white': $route.path !== '/forcustomer/about'
                  }"
                  ><div
                    class="cursor-pointer hover:bg-[#F5821F4D] md:px-4 md:py-1.5 items-center inline-flex gap-1 rounded-xl"
                  >
                  {{$t("navbar.about")}}
                  </div></router-link
                >
                <router-link
                  to="/forcustomer/contact"
                  :class="{
                    'bg-[#F5821F4D] items-center inline-flex gap-1 rounded-xl':
                      $route.path === '/forcustomer/contact',
                    'bg-white': $route.path !== '/forcustomer/contact'
                  }"
                  ><div
                    class="cursor-pointer hover:bg-[#F5821F4D] md:px-4 md:py-1.5 items-center inline-flex gap-1 rounded-xl"
                  >
                  {{$t("navbar.contact")}}
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
            <div
                class="cursor-pointer md:px-4 md:py-1.5 items-center inline-flex gap-1 rounded-xl"
              >
                <Icon
                  icon="ion:earth-sharp"
                  class="inline-flex items-center h-6 md:mr-1 md:w-5"
                />
                  <select @change="changeLanguage($event.target.value)" class="appearance-none cursor-pointer bg-transparent px-3 py-1.5 text-sm text-gray-700 border border-white rounded-xl focus:outline-none">
                    <option value="en">EN</option>
                    <option value="th">TH</option>
                  </select>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>

  <router-view></router-view>
</template>

<script>
import { Icon } from '@iconify/vue'
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
    changeLanguage(locale) {
      this.$i18n.locale = locale;
    }
  }
}
</script>