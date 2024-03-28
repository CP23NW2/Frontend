// import { createApp } from 'vue'
import App from './App.vue';
import './style.css';
import './index.css';
// import Vue from 'vue';
import VueHtmlToPaper from 'vue-html-to-paper';
import router from './Router/index.js';
import { createApp } from 'vue';
import { Icon } from '@iconify/vue';
import { createI18n } from 'vue-i18n'
// import messages from './locales'; 

const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css'
  ],
  timeout: 10000, // default timeout before the print window appears
  autoClose: false, // if false, the window will not close after printing
  windowTitle: window.document.title, // override the window title
}

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      navbar: {
        address: 'Soi Wanglang, Khwaeng Siriraj, Bangkok',
        home: 'Home',
        customer: 'Customer',
        order: 'Order',
        about: 'About',
        contact: 'Contact',
        forCustomer: 'For Customer',
        logout: 'Log out'
      },
      home: {
        allEyewear: 'All Eyewear',
        preparing: 'Preparing',
        processing: 'Processing',
        completed: 'Completed',
        createOrder: 'Create New Order'
      },
      searchStatus: {
        searchProduct: 'Search product status',
        search: 'Search',
        inputPhone: 'Input your last 4 Phone Number',
        ok: 'OK',
        cancel: 'Cancel',
        result: 'Result of Order number',
        eyesight: 'Eyesight',
        left: 'Left',
        right: 'Right',
        nofound: 'No found this search, Try to search order status again!',
        tryagain: 'could put order number in search input :)'
      },

    },
    th: {
      navbar: {
        address: 'ซอย วังหลัง, แขวง ศิริราช, กรุงเทพมหานคร',
        home: 'หน้าหลัก',
        customer: 'ลูกค้า',
        order: 'รายการสั่งซื้อ',
        about: 'เกี่ยวกับ',
        contact: 'ติดต่อ',
        forCustomer: 'สำหรับลูกค้า',
        logout: 'ออกจากระบบ'
      },
      home: {
        allEyewear: 'จำนวนแว่นตัดทั้งหมด',
        preparing: 'กำลังจัดเตรียม',
        processing: 'กำลังตัดแว่น',
        completed: 'สำเร็จ',
        createOrder: 'เพิ่มรายการสั่งซื้อ'
      },
      searchStatus: {
        searchProduct: 'ตรวจสอบสถานะแว่นตา',
        search: 'ค้นหา',
        inputPhone: 'ใส่หมายเลขโทรศัพท์​ 4 ตัวท้าย',
        ok: 'ตกลง',
        cancel: 'ยกเลิก',
        result: 'สถานะของรายการสั่งซื้อหมายเลข',
        eyesight: 'ค่าสายตา',
        left: 'ซ้าย',
        right: 'ขวา',
        nofound: 'ไม่พบหมายเลขรายการสินค้าของคุณ ลองตรวจสอบหมายเลขคำสั่งซื้อใหม่อีกครั้ง!',
        tryagain: 'ใส่หมายเลขคำสั่งซื้อที่ช่องค้นหาได้เลย :)'
      }
    }
  }

})
  
  const app = createApp(App)
  app.use(i18n)
  app.use(VueHtmlToPaper, options)
  app.component('Icon', Icon)
  app.use(router)
  app.mount('#app')