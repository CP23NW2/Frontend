<template>
<div class="items-center justify-center gap-10 pt-16 mt-16 md:mt-12 md:flex md:p-24 p-7">
    <!-- Text Content -->
    <div class="flex flex-col items-center w-full gap-2 md:gap-10">
      <div class="text-base font-semibold text-black md:leading-10 md:text-5xl">
        {{$t("contact.location")}}
      </div>
      <div class="font-medium md:text-[24px] text-zinc-800 text-center text-xs">
        <Icon icon="iconoir:map-pin" class="inline-flex w-5 h-5 md:w-10 md:h-10"/>
        {{$t("contact.detailLocation")}}
      </div>
    </div>

    <!-- Google Map -->
    <div class="mt-8 md:mt-0 md:h-full md:w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.8453199483042!2d100.4845007!3d13.7558657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2993051e73297%3A0xefb268b41be6b4e4!2z4Lij4LmJ4Liy4LiZ4LmB4Lin4LmI4LiZ4LiV4Liy4Lin4Lix4LiH4Lir4Lil4Lix4LiH4LiL4Lit4LiiIDU!5e0!3m2!1sth!2sth!4v1700760250463!5m2!1sth!2sth"
        class=" md:h-[454px] w-full mx-auto"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  <div>
    
  </div>
</template>
<script>
import { Icon } from '@iconify/vue'
export default {
  components: {
    Icon
  }
}
</script>