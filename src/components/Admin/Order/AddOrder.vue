<!-- src/App.vue -->
<template>
  <div id="printMe">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    />
    <div class="w-full h-full mt-4 bg-gray-200 md:mt-12">
      <div class="flex items-center justify-center p-4 py-10 md:py-20 md:p-10">
        <div class="w-full h-auto mt-4 bg-white rounded-md shadow md:mt-0">
          <!-- Header  -->
          <div id="EyewearTable">
            <div v-for="(eyewear, index) in newEyewear" :key="index">
              <div class="w-full h-px mt-4 border border-neutral-300"></div>
              <div class="flex py-5">
                <div class="w-full p-4 md:p-0">
                  <p class="text-primary-color md:text-2xl">
                    Order detail {{ eyewearIndex }}
                  </p>
                  <div
                    class="justify-between gap-4 mt-4 md:grid md:grid-cols-3 md:flex-row"
                  >
                    <div class="w-full pb-4">
                      <p class="pb-2 text-sm md:text-lg">Product</p>
                      <input
                        v-model="newEyewear[index]"
                        :id="'newEyewear' + index"
                        :name="'newEyewear' + index"
                        id="inputConfirm"
                        class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                      />
                    </div>
                    <div class="w-full pb-4">
                      <p class="pb-2 text-sm md:text-lg">*Lens</p>
                      <input
                        v-model="newEyewear.lens"
                        class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                      />
                    </div>
                    <div class="w-full pb-4">
                      <p class="pb-2 text-sm md:text-lg">*Price</p>
                      <input
                        v-model="newEyewear.price"
                        class="w-full text-sm bg-[#D4D4D433] rounded-md md:text-lg md:px-5 h-10"
                        @input="handlePriceInput(newEyewear.price)"
                      />
                    </div>
                  </div>
                  <div
                    class="justify-between gap-4 mt-4 md:grid md:grid-cols-2 md:flex-row"
                  >
                    <div class="w-full pb-4">
                      <p class="pb-2 text-sm md:text-lg">Detail</p>
                      <input
                        v-model="newEyewear.detail"
                        class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                      />
                    </div>
                    <div class="w-full pb-4">
                      <p class="pb-2 text-sm md:text-lg">*Status</p>
                      <select
                        v-model="newEyewear.orderStatus"
                        class="w-full text-sm bg-[#D4D4D433] border-gray-200 rounded-md md:text-lg md:px-5 h-10"
                      >
                        <option value="Preparing">Preparing</option>
                        <option value="Processing">Processing</option>
                        <option value="Complete">Complete</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-center">
                <div id="tableContainer">
                  <div class="container pb-4 mx-auto">
                    <div class="w-full overflow-hidden rounded">
                      <table class="bg-white border border-black">
                        <thead>
                          <tr class="bg-[#F59F54] text-white">
                            <th class="px-6 py-8 border border-black">
                              Eyesight
                            </th>
                            <th class="px-6 py-8 border border-black">SPH</th>
                            <th class="px-6 py-8 border border-black">CYL</th>
                            <th class="px-6 py-8 border border-black">AXIS</th>
                            <th class="px-6 py-8 border border-black">ADD</th>
                            <th class="px-6 py-8 border border-black">PD</th>
                            <th class="px-6 py-8 border border-black">SH</th>
                            <th class="px-6 py-8 border border-black">Up KT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              class="px-6 py-8 border border-black bg-[#FFCA9C] text-center"
                            >
                              Left
                            </td>
                            <td class="border border-black">
                              <input
                                v-model="newEyewear.leftSPH"
                                class="w-full h-20 text-center"
                              />
                            </td>
                            <td class="border border-black">
                              <input
                                v-model="newEyewear.leftCYL"
                                class="w-full h-20 text-center"
                              />
                            </td>
                            <td class="border border-black">
                              <input
                                v-model="newEyewear.leftAXIS"
                                class="w-full h-20 text-center"
                              />
                            </td>
                            <td class="border border-black">
                              <input
                                v-model="newEyewear.leftADD"
                                class="w-full h-20 text-center"
                              />
                            </td>
                            <td class="border border-black">
                              <input
                                v-model="newEyewear.leftPD"
                                class="w-full h-20 text-center"
                              />
                            </td>
                            <td class="border border-black">
                              <input
                                v-model="newEyewear.leftSH"
                                class="w-full h-20 text-center"
                              />
                            </td>
                            <td class="border border-black">
                              <input
                                v-model="newEyewear.leftUpKT"
                                class="w-full h-20 text-center"
                              />
                            </td>
                          </tr>

                          <tr>
                            <td
                              class="px-6 py-8 border border-black bg-[#FFCA9C] text-center"
                            >
                              Right
                            </td>
                            <td class="border border-black">
                              <input
                                v-model="newEyewear.rightSPH"
                                class="w-full h-20 text-center"
                              />
                            </td>
                            <td class="border border-black">
                              <input
                                v-model="newEyewear.rightCYL"
                                class="w-full h-20 text-center"
                              />
                            </td>
                            <td class="border border-black">
                              <input
                                v-model="newEyewear.rightAXIS"
                                class="w-full h-20 text-center"
                              />
                            </td>
                            <td class="border border-black">
                              <input
                                v-model="newEyewear.rightADD"
                                class="w-full h-20 text-center"
                              />
                            </td>
                            <td class="border border-black">
                              <input
                                v-model="newEyewear.rightPD"
                                class="w-full h-20 text-center"
                              />
                            </td>
                            <td class="border border-black">
                              <input
                                v-model="newEyewear.rightSH"
                                class="w-full h-20 text-center"
                              />
                            </td>
                            <td class="border border-black">
                              <input
                                v-model="newEyewear.rightUpKT"
                                class="w-full h-20 text-center"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="py-2">
            <button
              @click="addEyewear"
              class="h-10 w-full rounded-2xl border border-[#F59F54] text-[#F59F54] md:h-[60px] md:text-xl cursor-pointer hover:bg-[#F59F54] hover:text-white"
            >
              Add New Eyewear +
            </button>
          </div>

          <div v-for="(item, index) in orderItems" :key="index" class="mb-4">
            <label
              :for="'itemName' + index"
              class="block text-sm font-medium text-gray-600"
              >Item Name</label
            >
            <input
              v-model="orderItems[index]"
              type="text"
              :id="'itemName' + index"
              :name="'itemName' + index"
              class="w-full p-2 mt-1 border rounded-md"
            />
          </div>

          <button
            type="button"
            @click="addItem"
            class="p-2 text-white bg-blue-500 rounded-md"
          >
            Add Item
          </button>

          <button
            type="submit"
            class="p-2 mt-4 text-white bg-green-500 rounded-md"
          >
            Add Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderName: '',
      newEyewear: []
    }
  },
  methods: {
    addItem() {
      this.newEyewear.push('')
    },
    addOrder() {
      if (this.orderName.trim() !== '' && this.newEyewear.length > 0) {
        console.log('Order Name:', this.orderName)
        console.log('Order Items:', this.newEyewear)
      }
    }
  }
}
</script>

<style>
/* Add your custom styles here */
</style>
