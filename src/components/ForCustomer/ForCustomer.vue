<template>
    <div class="w-full h-full mt-14 md:mt-12 custom-gradient">
      <div class="inline-flex flex-col items-center justify-center w-full gap-5 px-6 pt-14 md:px-24 md:pt-24">
        <div class="inline-flex items-center justify-center w-full gap-6">
          <div v-if="selectedImage === 1" class=" flex items-center justify-center w-full bg-center bg-cover md:h-[500px]">
            <img class="object-cover object-center w-full h-full rounded" src="/Public/images/image-content1.png" />
          </div>
          <div v-if="selectedImage === 2" class=" flex items-center justify-center w-full bg-center bg-cover md:h-[500px]">
            <img class="object-cover object-center w-full h-full rounded" src="/Public/images/image-content2.png" />
          </div>
          <div v-if="selectedImage === 3" class=" flex items-center justify-center w-full bg-center bg-cover md:h-[500px]">
            <img class="object-cover object-center w-full h-full rounded" src="/Public/images/image-content3.png" />
          </div>
        </div>
        <div class="inline-flex items-center justify-center gap-3 md:pb-8">
          <button @click="selectImage(1)" :class="{ 'md:w-24 w-16  bg-[#F5821F] rounded-full': selectedImage === 1, 'bg-white': selectedImage !== 1 }" class="w-4 h-4 rounded-full md:h-6 md:w-6"></button>
          <button @click="selectImage(2)" :class="{ 'md:w-24 w-16  bg-[#F5821F] rounded-full': selectedImage === 2, 'bg-white': selectedImage !== 2 }" class="w-4 h-4 rounded-full md:h-6 md:w-6"></button>
          <button @click="selectImage(3)" :class="{ 'md:w-24 w-16  bg-[#F5821F] rounded-full': selectedImage === 3, 'bg-white': selectedImage !== 3 }" class="w-4 h-4 rounded-full md:h-6 md:w-6"></button>
        </div>
        <SearchStatus />
      </div>
      
      </div>
  </template>
  
  <script>
import SearchStatus from '../../components/SearchStatus.vue'

export default {
    components:{
        SearchStatus
    },
    data() {
      return {
        selectedImage: 1,
      };
    },
    methods: {
      selectImage(imageNumber) {
        this.selectedImage = imageNumber;
      },
      autoChangeSlide() {
        // ฟังก์ชันนี้จะถูกเรียกทุก 3 วินาที
        setInterval(() => {
          this.selectedImage = (this.selectedImage % 3) + 1;
        }, 3000);
      },
    },
    mounted() {
      // เรียกใช้ฟังก์ชัน autoChangeSlide เมื่อคอมโพเนนต์ถูกติดตั้ง
      this.autoChangeSlide();
    },
    
  };
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
  