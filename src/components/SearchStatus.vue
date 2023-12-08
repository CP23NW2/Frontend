<template>
    <div class="w-full">
    <form>
        <label
          for="product_status"
          class="block text-sm font-medium text-gray-900 md:mb-2 md:text-3xl dark:text-white"
          >Search product status</label
        >
        <div class="flex items-center justify-between gap-1 pt-2 md:pt-2 md:gap-2 ">
          <div class="relative w-full ">
            <input
              type="text"
              id="voice-search"
              class="block w-full md:p-5 p-2 text-xs md:text-base text-gray-900 border border-gray-300 md:rounded-2xl rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 md:ps-10 ps-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#AAAAAA] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Put order number for 10 characters ex. 4759093895"
              required
            />
            <button
              type="button"
              class="absolute z-10 flex items-center end-2 md:pe-5 md:inset-y-8 inset-y-4"
            >
              <Icon icon="carbon:close-filled" class="md:w-8 md:h-8 w-5 h-5 text-[#808080]" />
            </button>
          </div>
          <button
            type="submit"
            @click="showPopup"
            class="inline-flex items-center py-2 px-4 md:p-5 md:px-10 text-xs md:text-base font-medium text-white bg-[#2B2B2B] rounded-lg md:rounded-2xl border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
          <PopupForInputLastNumber v-if="isPopupVisible" @close="closePopup"/>
        </div>
      </form>
      <div
        class="inline-flex items-center w-full justify-center md:gap-10 gap-2 md:my-[40px] px-7 my-4"
      >
        <img src="/Public/images/found.png" class=" w-52 md:min-w-fit md:h-fit"/>

        <div class="inline-flex flex-col items-start justify-start md:gap-6 ">
          <div class="text-base font-medium text-orange-400 md:text-3xl">Buddy Glasses</div>
          <div class="md:text-6xl font-semibold md:leading-10 text-xl text-[#2B2B2B]">
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
import PopupForInputLastNumber from '/src/components/ForCustomer/PopupForInputLastNumber.vue';
export default{
  components: {
  PopupForInputLastNumber,
  },
  data() {
    return {
      isPopupVisible: false,
    };
  },
  methods: {
    showPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
  }
}
</script>