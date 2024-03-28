<template>
  <div
    class="inline-flex items-center justify-between w-full md:px-24 p-7 md:py-10 bg-[#F5821F4D] h-72 bg-opacity-30"
  >
    <div class="inline-flex flex-col items-start justify-start gap-3 md:gap-5">
      <div class="inline-flex items-center justify-start gap-2">
        <div class="p-1 md:p-2.5 bg-[#F5821F] rounded-full flex items-center">
          <div class="relative w-5 h-5 ">
            <Icon
              icon="la:vr-cardboard"
              color="white"
              class="absolute transform -translate-x-1/2 -translate-y-1/2 inset-1/2 md:h-7 md:w-7"
              src="https://via.placeholder.com/20x20"
            />
          </div>
        </div>

        <div class="font-bold md:text-xl text-neutral-950">IQU</div>
      </div>
      <div class="inline-flex items-start justify-start gap-2">
        <div class="relative origin-top-left rotate-180"></div>
        <Icon icon="iconoir:map-pin" class="md:h-4 md:w-4"/>
        <div class="inline-flex text-xs font-medium md:w-64 w-28 md:text-base text-zinc-80">
          {{$t("footer.address")}}
        </div>
      </div>
      <div class="inline-flex items-center justify-start gap-2">
        <div class="relative origin-top-left rotate-180"></div>
        <Icon icon="mynaui:telephone" :horizontalFlip="true" class="md:h-4 md:w-4" />
        <div class="text-xs font-medium md:text-base text-zinc-800">064-256-5523</div>
      </div>
      <div class="justify-start items-center gap-2.5 inline-flex">
        <div class="relative origin-top-left rotate-180"></div>
        <Icon icon="ion:mail-outline" class="md:h-4 md:w-4"/>
        <div class="text-xs font-medium text-black md:text-base">
          BuddyGlassesOfficial@gmail.com
        </div>
      </div>
    </div>
    <div class="inline-flex flex-col items-center justify-start gap-3 md:gap-5">
      <div class="justify-start items-center md:gap-2.5 inline-flex">
        <div class="relative w-5 h-5">
        <Icon icon="ion:time-outline" class="w-4 h-4 md:h-6 md:w-6" /></div>
        <div class="font-bold md:text-xl text-zinc-800">Business Hours</div>
      </div>
      <div class="inline-flex items-start justify-between md:gap-10">
        <div class="w-10 text-xs font-medium leading-6 text-black md:text-base">
          {{$t("footer.mon")}}<br />{{$t("footer.tues")}}<br />{{$t("footer.wed")}}<br />{{$t("footer.thur")}}<br />{{$t("footer.fri")}}<br />{{$t("footer.sat")}}<br />{{$t("footer.sun")}}
        </div>
        <div class="md:w-full">
          <span class="text-xs font-medium md:text-base text-zinc-800"
            >10:00 AM – 4:00 PM<br />10:00 AM – 4:00 PM<br />10:00 AM – 4:00
            PM<br />10:00 AM – 4:00 PM<br />10:00 AM – 4:00 PM<br />10:00 AM –
            4:00 PM<br /></span
          ><span class="text-[#EB4F54] text-xs md:text-base font-medium "
            >Close</span
          >
        </div>
      </div>
    </div>
    <div class="inline-flex flex-col items-start justify-start gap-3 md:gap-5">
  <div class="font-bold md:text-xl text-zinc-800">{{$t("footer.follow")}}</div>
  <div class="justify-start items-center gap-2.5 inline-flex">
    <div class="relative md:h-6 md:w-6">
        <Icon icon="jam:facebook-square" class="md:w-6 md:h-6 text-[#F5821F]" />
    </div>
    <div class="text-xs font-medium md:text-base text-zinc-800">Buddy Glasses Official</div>
  </div>
  <div class="justify-start items-center gap-2.5 inline-flex">
    <div class="relative md:h-6 md:w-6">
        <Icon icon="jam:instagram" class="md:w-6 md:h-6 text-[#F5821F]" />
    </div>
    <div class="text-xs font-medium md:text-base text-zinc-800">@BuddyGlassesOfficial</div>
  </div>
  <div class="justify-start items-center gap-2.5 inline-flex">
    <div class="relative md:h-6 md:w-6">
        <Icon icon="ic:baseline-tiktok" class="md:w-6 md:h-6 text-[#F5821F]" />
    </div>
    <div class="text-xs font-medium md:text-base text-zinc-800">BuddyGlassesOfficial</div>
  </div>
</div>
  </div>
  <div class="relative h-12 w-full bg-[#0B090A]"></div>
</template>
<script>
import { Icon } from '@iconify/vue'
export default {
  components: {
    Icon
  }
}
</script>
