<template>
  <div>
    <div class="w-full h-screen mt-4 bg-gray-200 md:mt-12">
      <div class="flex items-center justify-center p-4 py-10 md:py-20 md:p-10">
        <div
          id="printMe"
          class="w-full h-auto mt-4 bg-white rounded-md shadow md:mt-0"
        >
          <!-- Header  -->
          <div
            class="bg-[#f59f546e] w-full h-12 md:h-16 flex items-center px-2.5 rounded-t-md"
          >
            <p class="text-xl md:px-10 md:text-3xl">
              {{ $t("customerList.newCus") }}
            </p>
          </div>

          <form @submit.prevent="addCustomer" class="flex p-4 py-5 md:px-12">
            <div class="w-full pb-4">
              <label class="text-primary-color md:text-2xl">
                {{ $t("customerList.user") }}
              </label>
              <div
                class="justify-between gap-4 mt-4 md:grid md:grid-cols-2 md:flex-row"
              >
                <div class="w-full pb-4">
                  <label class="pb-2 text-sm md:text-lg">{{
                    $t("customerList.name")
                  }}</label>
                  <input
                    v-model="newCustomer.customerName"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <label class="pb-2 text-sm md:text-lg">{{
                    $t("customerList.last")
                  }}</label>
                  <input
                    v-model="newCustomer.customerLastName"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="w-full pb-4">
                  <label class="pb-2 text-sm md:text-lg">{{
                    $t("customerList.phone")
                  }}</label>
                  <input
                    type="tel"
                    maxlength="10"
                    v-model="newCustomer.customerTel"
                    @input="validatePhoneNumber()"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                  <p v-if="isValidPhone" style="color: red">
                    {{ this.telNumberErrorMessage }}
                  </p>
                </div>
                <br>
                <div class="w-full">
                  <label class="pb-2 text-sm md:text-lg">{{
                    $t("customerList.address")
                  }}</label>
                  <input
                    v-model="detailAddress"
                    maxlength="50"
                    class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                  />
                </div>
                <div class="grid grid-cols-4">
                    <div class="mt-7">
                      <select v-model="selectedProvince" @change="onProvinceChange" class="md:px-5 h-10 rounded-md bg-[#D4D4D433] border-gray-200">
                        <option value="">-- จังหวัด --</option>
                        <option v-for="province in provinces" :value="province">{{ province }}</option>
                      </select>
                    </div>
                    <div class="mt-7" v-if="selectedProvince">
                      <select v-model="selectedDistrict" @change="onDistrictChange" class="md:px-5 h-10 rounded-md bg-[#D4D4D433] border-gray-200">
                        <option value="">-- อำเภอ --</option>
                        <option v-for="district in filteredDistricts" :value="district">{{ district }}</option>
                      </select>
                    </div>
                    <div class="mt-7" v-if="selectedDistrict">
                      <select v-model="selectedTambon" @change="onTambonChange" class="md:px-5 h-10 rounded-md bg-[#D4D4D433] border-gray-200">
                        <option value="">-- ตำบล --</option>
                        <option v-for="tambon in filteredTambons" :value="tambon">{{ tambon }}</option>
                      </select>
                    </div>
                    <div class="mt-7" v-if="selectedTambon">
                      <select v-model="selectedPostCode" class="md:px-5 h-10 rounded-md bg-[#D4D4D433] border-gray-200">
                        <option value="">-- รหัสไปรษณีย์ --</option>
                        <option v-for="postCode in filteredPostCodes" :value="postCode">{{ postCode }}</option>
                      </select>
                    </div>
                </div>
              </div>
              <div class="flex justify-end mt-5">
                <div class="mx-2">
                  <button
                    type="submit"
                    class="bg-blue-700 h-10 w-24 rounded-xl text-white md:h-[60px] md:w-[130px] md:text-xl cursor-pointer hover:bg-blue-800"
                  >
                    {{ $t("customerList.confirm") }}
                  </button>
                </div>
                <div class="mx-2">
                  <button
                    @click="cancel"
                    class="bg-red-500 h-10 w-24 rounded-xl text-white md:h-[60px] md:w-[130px] md:text-xl cursor-pointer hover:bg-red-600"
                  >
                    {{ $t("customerList.cancel") }}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>

  </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

const CustomerForm = {
  data() {
    return {
      newCustomer: {
        customerID: "",
        customerName: "",
        customerLastName: "",
        customerTel: "",
        address: "",
      },
      isValidPhone: false,
      isTelNumberUnique: true,
      telNumberErrorMessage: "",
      isLoading: false,
      selectedAddress: "",
      addresses: [], // ข้อมูลทั้งหมด
      provinces: [], // รายชื่อจังหวัดทั้งหมด
      detailAddress: '',
      selectedProvince: '', // จังหวัดที่เลือก
      selectedDistrict: '', // อำเภอที่เลือก
      selectedTambon: '', // ตำบลที่เลือก
      selectedPostCode: '' // รหัสไปรษณีย์ที่เลือก
    };
  },
  methods: {
    async fetchDataAddress() {
      try {
        const response = await axios.get("public/addressOfThailand.json");
        this.addresses = response.data;
        this.provinces = Array.from(new Set(this.addresses.map(address => address.ProvinceThai)));
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    },
    onProvinceChange() {
      this.selectedDistrict = ''; // รีเซ็ตค่าอำเภอที่เลือกเมื่อเปลี่ยนจังหวัด
      this.selectedTambon = ''; // รีเซ็ตค่าตำบลที่เลือกเมื่อเปลี่ยนจังหวัด
      this.selectedPostCode = ''; // รีเซ็ตค่ารหัสไปรษณีย์เมื่อเปลี่ยนจังหวัด
    },
    onDistrictChange() {
      this.selectedTambon = ''; // รีเซ็ตค่าตำบลที่เลือกเมื่อเปลี่ยนอำเภอ
      this.selectedPostCode = ''; // รีเซ็ตค่ารหัสไปรษณีย์เมื่อเปลี่ยนอำเภอ
    },
    onTambonChange() {
      this.selectedPostCode = ''; // รีเซ็ตค่ารหัสไปรษณีย์เมื่อเปลี่ยนตำบล
    },
    async addCustomer() {
      try {
        this.isLoading = true;

        // รวมข้อมูลที่เลือกจาก dropdown เข้าด้วยกัน
        const fullAddress = `${this.detailAddress} ${this.selectedProvince} ${this.selectedDistrict} ${this.selectedTambon} ${this.selectedPostCode}`;

        // เพิ่มข้อมูลที่เลือกจาก dropdown ลงใน newCustomer.address
        this.newCustomer.address = fullAddress;

        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/customers`,
          this.newCustomer
        );

        if (response.status == 200) {
          console.log("Customer added successfully");
          this.fetchData();
          this.showSuccessMessage();
        } else {
          console.error("Failed to add customer:", response.data);
        }
      } catch (error) {
        console.error("Error adding customer:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.error,
        });
        // Handle specific error scenarios
      } finally {
        this.isLoading = false;
      }
    },
    async validateBackend(phone) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/customers/validateTel`,
          {
            customerTel: phone,
          }
        );
        if (response.status === 200) {
          this.isValidPhone = false;
          this.telNumberErrorMessage = "";
        }
      } catch (error) {
        if (error.response.status === 400) {
          this.isValidPhone = true;
          this.telNumberErrorMessage = error.response.data.error;
        }
      }
    },
    validatePhoneNumber() {
      let phone = this.newCustomer.customerTel;
      if (
        !(
          phone.startsWith("08") ||
          phone.startsWith("09") ||
          phone.startsWith("06")
        )
      ) {
        this.isValidPhone = true;
        this.telNumberErrorMessage =
          "Phone Number should start with '06', '08', or '09'";
      } else if (isNaN(phone)) {
        this.isValidPhone = true;
        this.telNumberErrorMessage = "Phone Number contain only numbers";
      } else {
        this.isValidPhone = false;
        this.telNumberErrorMessage = "";
      }
    },
    cancel() {
      this.$router.push("/customer");
    },

    async fetchData() {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/customers`
        );
        if (result.status == 200) {
          console.log("Data updated successfully");
        } else {
          console.error("Failed to update data:", result.data.error);
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    },

    // validate unique number
    showSuccessMessage() {
      Swal.fire({
        icon: "success",
        title: "Add New Customer Success!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        this.$router.push("/customer");
      });
    },
  },
  computed: {
    // กรองอำเภอที่เป็นไปได้ขึ้นอยู่กับจังหวัดที่เลือก
    filteredDistricts() {
      const uniqueDistricts = new Set();
      this.addresses.forEach(address => {
        if (address.ProvinceThai === this.selectedProvince) {
          uniqueDistricts.add(address.DistrictThaiShort);
        }
      });
      return Array.from(uniqueDistricts);
    },
    // กรองตำบลที่เป็นไปได้ขึ้นอยู่กับอำเภอที่เลือก
    filteredTambons() {
      return this.addresses
        .filter(address => address.DistrictThaiShort === this.selectedDistrict)
        .map(address => address.TambonThaiShort);
    },
    // กรองรหัสไปรษณีย์ที่เป็นไปได้ขึ้นอยู่กับตำบลที่เลือก
    filteredPostCodes() {
      return this.addresses
        .filter(address => address.TambonThaiShort === this.selectedTambon)
        .map(address => address.PostCode);
    }
  },
  mounted() {
    this.fetchDataAddress();
  }
};
export default CustomerForm;
</script>
