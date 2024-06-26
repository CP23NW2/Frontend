<template>
  <div class="mt-16 md:mt-12">
    <div class="p-4 md:px-24 md:py-16 custom-gradient ">
      <div
        class="grid items-center justify-between grid-cols-4 gap-1 pt-10 md:gap-4"
      >
        <router-link
          to="/order"
          class="inline-flex flex-col items-center justify-center w-full gap-1 px-3 py-4 bg-white rounded-lg shadow hover:bg-gray-100 md:gap-3 md:py-10 md:rounded-3xl"
        >
          <div
            class="text-xl font-semibold text-orange-400 md:leading-10 md:text-4xl"
          >
            {{ eyewearList.length }}
          </div>
          <div class="font-medium text-[8px] md:text-base text-zinc-500">
            {{ $t('home.allEyewear') }}
          </div>
        </router-link>
        <router-link
          to="/order"
          class="inline-flex flex-col items-center justify-center w-full gap-1 px-3 py-4 bg-white rounded-lg shadow hover:bg-gray-100 md:gap-3 md:py-10 md:rounded-3xl"
        >
          <div
            class="text-xl font-semibold text-orange-400 md:leading-10 md:text-4xl"
          >
            {{ getPrepareOrdersCount() }}
          </div>
          <div class="text-[8px] font-medium md:text-base text-zinc-500">
            {{ $t('home.preparing') }}
          </div>
        </router-link>
        <router-link
          to="/order"
          class="inline-flex flex-col items-center justify-center w-full gap-1 px-3 py-4 bg-white rounded-lg shadow md:gap-3 hover:bg-gray-100 md:py-10 md:rounded-3xl"
        >
          <div
            class="text-xl font-semibold text-orange-400 md:leading-10 md:text-4xl"
          >
            {{ getProcessingOrdersCount() }}
          </div>
          <div class="text-[8px] font-medium md:text-base text-zinc-500">
            {{ $t('home.processing') }}
          </div>
        </router-link>
        <router-link
          to="/order"
          class="inline-flex flex-col items-center justify-center w-full gap-1 px-3 py-4 bg-white rounded-lg shadow hover:bg-gray-100 md:gap-3 md:py-10 md:rounded-3xl"
        >
          <div
            class="text-xl font-semibold text-orange-400 md:leading-10 md:text-4xl"
          >
            {{ getCompleteOrdersCount() }}
          </div>
          <div class="text-[8px] font-medium md:text-base text-zinc-500">
            {{ $t('home.completed') }}
          </div>
        </router-link>
      </div>
      <div class="flex justify-center py-6 md:py-8">
        <div
          class="flex justify-center px-10 py-3 bg-blue-800 shadow md:p-8 md:py-5 md:px-14 rounded-2xl"
        >
          <div
            class="inline-flex items-center self-stretch justify-center gap-2"
          >
            <RouterLink to="addorder">
              <div
                class="text-sm font-medium text-center text-white md:text-2xl"
              >
                {{ $t('home.createOrder') }}
              </div></RouterLink
            >
          </div>
        </div>
      </div>
      <SearchStatus />
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue'
import SearchStatus from '../../components/SearchStatus.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  name: 'pink-tabs',
  data() {
    return {
      orderList: [],
      eyewearList: [],
      customerList: []
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

    return {
      orderList,
      eyewearList,
      customerList
    }
  },

  computed: {
    completeEyewearList: function () {
      return this.eyewearList.filter(
        (eyewear) => eyewear.orderStatus === 'Complete'
      )
    },
    ProcessingEyewearList: function () {
      return this.eyewearList.filter(
        (eyewear) => eyewear.orderStatus === 'Processing'
      )
    },
    PrepareEyewearList: function () {
      return this.eyewearList.filter(
        (eyewear) => eyewear.orderStatus === 'Preparing'
      )
    }
  },
  methods: {
    getCompleteOrdersCount() {
      const uniqueCompleteOrderIDs = [
        ...new Set(this.completeEyewearList.map((eyewear) => eyewear.orderID))
      ]
      return uniqueCompleteOrderIDs.length
    },
    getProcessingOrdersCount() {
      const uniqueProcessingOrderIDs = [
        ...new Set(this.ProcessingEyewearList.map((eyewear) => eyewear.orderID))
      ]
      return uniqueProcessingOrderIDs.length
    },
    getPrepareOrdersCount() {
      const uniquePrepareOrderIDs = [
        ...new Set(this.PrepareEyewearList.map((eyewear) => eyewear.orderID))
      ]
      return uniquePrepareOrderIDs.length
    }
  },
  components: {
    Icon,
    SearchStatus
  }
}
</script>

<style>
.custom-gradient {
  background: linear-gradient(
    to bottom,
    rgba(255, 199, 168, 0.3) 50%,
    rgba(205, 96, 35, 0.3) 100%
  );
}
</style>
