<template>
<div class="mt-16 md:mt-12">
    <div class="p-4 md:px-24 md:py-16 custom-gradient">
      <div class="grid items-center justify-between grid-cols-4 gap-1 pt-10 md:gap-4">
        <div
          class="inline-flex flex-col items-center justify-center w-full gap-1 px-3 py-4 bg-white rounded-lg shadow md:gap-3 md:py-10 md:rounded-3xl"
        >
          <div class="text-xl font-semibold text-orange-400 md:leading-10 md:text-4xl">
            100
          </div>
          <div class="font-medium text-[8px] md:text-base text-zinc-500">Pending Order</div>
        </div>
        <div
          class="inline-flex flex-col items-center justify-center w-full gap-1 px-3 py-4 bg-white rounded-lg shadow md:gap-3 md:py-10 md:rounded-3xl"
        >
          <div class="text-xl font-semibold text-orange-400 md:leading-10 md:text-4xl">
            100
          </div>
          <div class="text-[8px] font-medium md:text-base text-zinc-500">Shipping to Order</div>
        </div>
        <div
          class="inline-flex flex-col items-center justify-center w-full gap-1 px-3 py-4 bg-white rounded-lg shadow md:gap-3 md:py-10 md:rounded-3xl"
        >
          <div class="text-xl font-semibold text-orange-400 md:leading-10 md:text-4xl">
            100
          </div>
          <div class="text-[8px] font-medium md:text-base text-zinc-500">In-store Order</div>
        </div>
        <div
          class="inline-flex flex-col items-center justify-center w-full gap-1 px-3 py-4 bg-white rounded-lg shadow md:gap-3 md:py-10 md:rounded-3xl"
        >
          <div class="text-xl font-semibold text-orange-400 md:leading-10 md:text-4xl">
            100
          </div>
          <div class="text-[8px] font-medium md:text-base text-zinc-500">Ongoing Promotion</div>
        </div>
        </div>
      <div class="flex justify-center py-6 md:py-8">
        <div
          class="flex justify-center px-10 py-3 bg-blue-800 shadow md:p-8 md:py-5 md:px-14 rounded-2xl"
        >
          <div
            class="inline-flex items-center self-stretch justify-center gap-2"
          >
            <RouterLink to="addorder">
              <div class="text-sm font-medium text-center text-white md:text-2xl">
                Create New Order
              </div></RouterLink
            >
          </div>
        </div>
      </div>
      <SearchStatus/>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue'
import SearchStatus from '../../components/SearchStatus.vue';
export default {
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
