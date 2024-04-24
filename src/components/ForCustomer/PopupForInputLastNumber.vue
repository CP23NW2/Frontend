<!-- <template>
  <div class="popup" @click.stop>
    <div class="bg-white rounded-lg md:w-[500px] md:h-[449px]">
      <div class="flex items-center justify-center mt-3">
        <div class="items-center justify-center text-center">
          <div class="flex justify-center py-5">
            <div
              class="bg-primary-color rounded-full w-[80px] h-[80px] flex items-center justify-center"
            >
              <Icon icon="la:vr-cardboard" color="white" width="60" />
            </div>
          </div>
          <p class="text-xl font-bold">Input your last 4 Phone Number</p>
          <div class="mt-5">
            <input
              type="text"
              class="text-center text-lg w-[70px] h-[70px] rounded-full shadow-xl border-b-2 border-gray-300 mx-3"
              v-model="inputNumber1"
              maxlength="1"
            />

            <input
              type="text"
              class="text-center text-lg w-[70px] h-[70px] rounded-full shadow-xl border-b-2 border-gray-300 mx-3"
              v-model="inputNumber2"
              maxlength="1"
            />

            <input
              type="text"
              class="text-center text-lg w-[70px] h-[70px] rounded-full shadow-xl border-b-2 border-gray-300 mx-3"
              v-model="inputNumber3"
              maxlength="1"
            />

            <input
              type="text"
              class="text-center text-lg w-[70px] h-[70px] rounded-full shadow-xl border-b-2 border-gray-300 mx-3"
              v-model="inputNumber4"
              maxlength="1"
            />
          </div>

          <div class="flex justify-center mt-6">
            <button
              @click="submitForm"
              class="bg-blue-800 md:text-base font-medium rounded-full md:w-[177px] md:h-[51px] text-white"
            >
              OK
            </button>
          </div>
          <div class="flex justify-center mt-2">
            <button
              @click="closePopup"
              class="bg-red-600 md:text-base font-medium rounded-full md:w-[177px] md:h-[51px] text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from 'vue'
import { Icon } from '@iconify/vue'
import axios from 'axios'

export default {
  setup() {
    const customer = ref({})
    const customerTel = ref('')
    const inputNumber1 = ref('')
    const inputNumber2 = ref('')
    const inputNumber3 = ref('')
    const inputNumber4 = ref('')

    const fetchData = async () => {
      try {
        const customersResponse = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/customers`
        )

        if (customersResponse.data) {
          customer.value = customersResponse.data
          customerTel.value = customer.value
            .map((customer) => customer.customerTel)
            .join(', ')
        }
        console.log('phone number', customerTel.value)
      } catch (error) {
        console.error('Error fetching customer data:', error)
      }
    }

    onMounted(() => {
      fetchData()
    })

    const { emit } = getCurrentInstance()

    const closePopup = () => {
      emit('close')
    }

    const submitForm = () => {
      const enteredDigits = `${inputNumber1.value || ''}${
        inputNumber2.value || ''
      }${inputNumber3.value || ''}${inputNumber4.value || ''}`
      const enteredDigitsToMatch = enteredDigits.toLowerCase()

      const matchingPhoneNumbers = customer.value
        .filter((customer) =>
          customer.customerTel.endsWith(enteredDigitsToMatch)
        )
        .map((customer) => customer.customerTel)

      console.log('Entered Digits:', enteredDigitsToMatch)
      console.log('Matching Phone Numbers:', matchingPhoneNumbers)

      if (matchingPhoneNumbers.length > 0) {
        console.log('Success! Found matching phone numbers.')
        emit(
          'matchingCustomer',
          customer.value.find(
            (customer) => customer.customerTel === matchingPhoneNumbers[0]
          )
        )
      } else {
        console.error('Error! No matching phone numbers found.')
      }
    }
    return {
      customerTel,
      customer,
      inputNumber1,
      inputNumber2,
      inputNumber3,
      inputNumber4,
      closePopup,
      submitForm
    }
  },
  components: {
    Icon
  }
}
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
</style> -->
