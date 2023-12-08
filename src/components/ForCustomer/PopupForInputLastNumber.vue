<template>
    <div class="popup" @click.stop>
      <div class=" bg-white rounded-lg md:w-[500px] md:h-[449px]" >
        <div class="flex justify-center items-center mt-3">
        <div class="justify-center text-center items-center">
        <div class="flex justify-center py-5">
        <div class=" bg-primary-color rounded-full w-[80px] h-[80px] flex items-center justify-center">
            <Icon icon="la:vr-cardboard" color="white" width="60"/>
        </div>
    </div>
        <p class="font-bold text-xl">Input your last 4 Phone Number</p>
        <div class="mt-5">
            <input
            ref="inputNumber1"
            type="text"
            class="text-center text-lg w-[70px] h-[70px] rounded-full shadow-xl border-b-2 border-gray-300 mx-3"
            v-model="inputNumber1"
            @input="handleInput(1)"
            maxlength="1"
            >

            <input
            ref="inputNumber2"
            type="text"
            class="text-center text-lg w-[70px] h-[70px] rounded-full shadow-xl border-b-2 border-gray-300 mx-3"
            v-model="inputNumber2"
            @input="handleInput(2)"
            maxlength="1"
            >

            <input
            ref="inputNumber3"
            type="text"
            class="text-center text-lg w-[70px] h-[70px] rounded-full shadow-xl border-b-2 border-gray-300 mx-3"
            v-model="inputNumber3"
            @input="handleInput(3)"
            maxlength="1"
            >

            <input
            ref="inputNumber4"
            type="text"
            class="text-center text-lg w-[70px] h-[70px] rounded-full shadow-xl border-b-2 border-gray-300 mx-3"
            v-model="inputNumber4"
            @input="handleInput(4)"
            maxlength="1"
            >
        </div>
        <div class="flex mt-6 justify-center">
        <button 
        class=" bg-blue-800 md:text-base font-medium rounded-full md:w-[177px] md:h-[51px] text-white">OK</button>
    </div>
    <div class="flex mt-2 justify-center">    
    <button @click="closePopup" 
        class=" bg-red-600 md:text-base font-medium rounded-full md:w-[177px] md:h-[51px] text-white">Cancel</button>
    </div>
    </div>  
</div>
    </div>
    </div>
  </template>
  
  <script>
  import { Icon } from '@iconify/vue'
  export default {
    components:{
        Icon
    },
    data() {
      return {
        inputNumber1: null,
        inputNumber2: null,
        inputNumber3: null,
        inputNumber4: null,
      };
    },
    methods: {
      closePopup() {
        // เรียกใช้เมธอดที่จะปิด Popup
        this.$emit("close");
      },
      submitForm() {
        // ทำอะไรก็ตามที่คุณต้องการเมื่อฟอร์มถูกส่ง
        console.log("Submitted:");
      },
    //   handleInput() {
    //   // กรองข้อมูลที่ถูกป้อนเพื่อให้เป็นตัวเลขเท่านั้น
    //   this.inputNumber1 = this.inputNumber1.replace(/[^0-9]/g, '');
    //   this.inputNumber2 = this.inputNumber2.replace(/[^0-9]/g, '');
    //   this.inputNumber3 = this.inputNumber3.replace(/[^0-9]/g, '');
    //   this.inputNumber4 = this.inputNumber4.replace(/[^0-9]/g, '');
    // }

    handleInput(index) {
      const nextInput = this.$refs[`inputNumber${index + 1}`];
      if (nextInput && this[`inputNumber${index}`].length === 1) {
        nextInput.focus();
      }

      // Filter out non-numeric characters
      this[`inputNumber${index}`] = this[`inputNumber${index}`].replace(/[^0-9]/g, '');
    },
    },
  };
  </script>
  <style scoped>
  /* สไตล์ CSS สำหรับ Popup นี้ */
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  </style>