<template>
    <div class="w-full h-full bg-[#F5821F] relative overflow-hidden mt-16 md:mt-12 ">
    <div class="absolute z-10 -top-10 -left-10">
      <div
        class="rounded-full opacity-50 w-72 h-72 bg-gradient-to-b from-[#F9F9F9] blur-sm"
      ></div>
    </div>
    <div class="absolute z-10 mt-40 md:-mt-10 md:-end-10 -end-40">
      <div
        class="rounded-full opacity-50 w-72 h-72 bg-gradient-to-b from-[#F9F9F9] blur-sm"
      ></div>
    </div>
    <div class="absolute md:left-[700px] md:-bottom-[200px] z-10 -bottom-40 -left-40">
      <div
        class="rounded-full opacity-50 w-80 h-80 bg-gradient-to-b from-[#F9F9F9] blur-sm"
      ></div>
    </div>
    <div class="relative z-20 gap-16 p-7 md:p-[130px] md:inline-flex">
     
      <div class="grid gap-2 md:gap-4">
        <div class="h-32 md:h-full md:w-full">
          <img
            class="object-cover w-full h-full rounded shadow"
            src="/Public/images/image-content1.png"
            alt="Image 2"
          />
        </div>
        <div class="flex items-start gap-2 md:gap-5">
          <div class="relative z-10 md:w-72 md:h-72">
            <img
              class="object-cover w-full h-full rounded shadow"
              src="/Public/images/image-content2.png"
              alt="Image 1"
            />
          </div>
          <div class="z-10 md:w-72 md:h-72">
            <img
              class="object-cover w-full h-full rounded shadow"
              src="/Public/images/image-content3.png"
              alt="Image 3"
            />
          </div>
        </div>
      </div>
      
      <div class="z-20 inline-flex flex-col items-center justify-center gap-4 mt-4 md:gap-10">
        <div class="self-stretch text-base font-semibold leading-tight text-white md:text-5xl">
          {{$t("about.title")}}
        </div>
        <div
          class=" md:p-5 bg-white rounded-lg border-l-8 md:border-l-[16px]  border-black justify-start items-center inline-flex"
        >
          <div class="w-full md:text-[18px] font-medium text-justify text-[8px] p-5 md:leading-6">
            {{$t("about.subtitle")}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>