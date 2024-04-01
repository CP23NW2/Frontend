import App from './App.vue';
import './style.css';
import './index.css';
import VueHtmlToPaper from 'vue-html-to-paper';
import router from './Router/index.js';
import { createApp } from 'vue';
import { Icon } from '@iconify/vue';
import { createI18n } from 'vue-i18n'

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
      about: {
        title: 'Eyewear store that has been open for more than 10 years, offering high-quality eyeglasses',
        subtitle: 'The story of this eyewear store began in Wang Lang Soi 5, where there was only one store in the entire Wang Lang Soi 5 area. With a unique approach to eye measurements focused on accuracy, we have earned the trust of customers from all walks of life for over 10 years. In order to strengthen our relationships with customers, we expanded our store to offer high-quality eyeglass cutting services at prices that were unprecedented. This is what has kept our customers loyal to us for a long time, as there is no one else who can compare to us. We are Wang Lang Soi 5 Eyewear, and we are delighted to serve you.'
      },
      contact: {
        location: 'Buddy Glasses Location',
        detailLocation: 'Soi Wanglang, Khwaeng Siriraj, Khet Bangkok Noi, Krung Thep Maha Nakhon, Thailand 10700'
      },
      footer: {
        address: 'Soi Wanglang, Khwaeng Siriraj, Khet Bangkok Noi, Krung Thep Maha Nakhon, Thailand 10700',
        mon: 'Mon',
        tues: 'Tues',
        wed: 'Wed',
        thur: 'Thur',
        fri: 'Fri',
        sat: 'Sat',
        sun: 'Sun',
        follow: 'Follow Us On'
      },
      customerList: {
        customerlist: 'Customer List',
        addCus: 'Create New Customer',
        id: 'ID',
        fullname: 'Name - Last Name',
        phone: 'Phone Number',
        address: 'Address',
        manage: 'Management',
        customer: 'Customers',
        newCus: 'New Customer',
        user: 'User Information',
        name: 'Name',
        last: 'Last Name',
        confirm: 'Confirm',
        cancel: 'Cancel',
        edit: 'Edit Customer ID'
      },
      orderList: {
        orderList: 'Order List',
        addOrder: 'Create New Order',
        all: 'All Order',
        preparing: 'Eyewear Preparing',
        processing: 'Eyewear Processing',
        completed: 'Eyewear Completed',
        orderid: 'Order ID',
        cusName: 'Customer Name',
        productName: 'Product Name',
        name: 'Name',
        product: 'Product',
        totalPrice: 'Total Price',
        status: 'Status',
        shipping: 'Shipping',
        manage: 'Management',
        bath: 'Bath',
        phone: 'Phone Number',
        orders: 'Orders',
        addCusOr: 'Add Customer and Order',
        selectCusBook: 'Select from address book',
        selectCus: 'Select the customers address',
        enterName: 'Please enter your name',
        enterLastName: 'Please enter your last name',
        enterDate: 'Please enter date',
        enterPhone: 'Please enter phone number',
        enterBrand: 'Please enter brand!',
        enterPrice: 'Please enter price!',
        enterLens: 'Please enter lens!',
        addEyewear: 'Add New Eyewear +', 
        eyewears: 'Eyewears'
      },
      eyewearList : {
        date: 'Date',
        orderDetails: 'Order Details',
        delivery: 'Delivery',
        pickup: 'Pickup',
        shippingName: 'Shipping Name',
        trackingNumber: 'Tracking Number',
        orderDetail : 'Order detail',
        lens: 'Lens', 
        price: 'Price',
        detail:'Detail',
        status: 'Status',
        selectStatus: 'Select Status',
        print: 'Print',
        eyewearDetail: 'Eyewear details'
      },
      addOrder:{ 
        addOrder:'Add Order',
        customerID:'Customer ID',
        pleaseSelOne: 'Please select one',
        brand: 'Brand'
      }
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
        preparing: 'รายการที่กำลังจัดเตรียม',
        processing: 'รายการที่กำลังทำ',
        completed: 'รายการที่สำเร็จ',
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
      },
      about: {
        title: 'ร้านแว่นตาที่เปิดให้บริการมาเกิน 10 ปีด้วยแว่นตาที่มีมาตรฐานสูง ราคามิตรภาพพร้อมบริการด้วยใจ',
        subtitle: 'ร้านแว่นตา Buddy Glasses ที่เปิดมานานกว่า 10 ปี เราเริ่มจากการเปิดธุรกิจขนาดเล็กที่ขายแว่นตาสำเร็จรูปร้านแรกในวังหลังซอย 5 เราบริการลูกค้าอย่างจริงใจ ใส่ใจลูกค้าทุกท่าน ทำให้ร้านแว่นตาเป็นที่ประทับใจและไว้วางใจของลูกค้าหลายท่าน หลังจากได้รับความเชื่อมั่นจากลูกค้าร้าน Buddy Glasses จึงขยายสาขาสำหรับการบริการตัดแว่นตาคุณภาพสูงเพื่อให้ตอบโจทย์กับสายตาของลูกค้าอย่างละเอียดมากยิ่งขึ้นในราคาที่ย่อมเยาว์ ร้านแว่นตา Buddy Glasses ยินดีที่จะให้บริการลูกค้าทุกท่าน'
      },
      contact: {
        location: 'แผนที่ร้าน Buddy Glasses',
        detailLocation: 'ซอย วังหลัง, แขวง ศิริราข, เขต บางกอกน้อย, กรุงเทพมหานคร ประเทศไทย 10700'
      },
      footer: {
        address: 'ซอย วังหลัง, แขวง ศิริราข, เขต บางกอกน้อย, กรุงเทพมหานคร ประเทศไทย 10700',
        mon: 'จ.',
        tues: 'อ.',
        wed: 'พ.',
        thur: 'พฤ.',
        fri: 'ศ.',
        sat: 'ส.',
        sun: 'อท.',
        follow: 'ติดตามเราได้ที่'
      },
      customerList: {
        customerlist: 'รายชื่อลูกค้า',
        addCus: 'เพิ่มลูกค้าใหม่',
        id: 'รหัสลูกค้า',
        fullname: 'ชื่อ - นามสกุล',
        phone: 'เบอร์โทรศัพท์',
        address: 'ที่อยู่',
        manage: 'การจัดการ',
        customer: 'คน',
        newCus: 'ลูกค้าใหม่',
        user: 'ข้อมูลลูกค้า',
        name: 'ชื่อ',
        last: 'นามสกุล',
        confirm: 'ยืนยัน',
        cancel: 'ยกเลิก'
      },
      orderList: {
        orderList: 'รายการสั่งซื้อ',
        addOrder: 'เพิ่มรายการ',
        all: 'รายการทั้งหมด',
        preparing: 'รายการที่กำลังจัดเตรียม',
        processing: 'รายการที่กำลังทำ',
        completed: 'รายการที่สำเร็จ',
        orderid: 'หมายเลขรายสั่งซื้อ',
        cusName: 'ชื่อลูกค้า',
        productName: 'ชื่อสินค้า',
        name: 'ชื่อรายการสินค้า',
        product: 'สินค้า',
        totalPrice: 'ราคารวม',
        status: 'สถานะ',
        shipping: 'จัดส่ง',
        manage: 'การจัดการ',
        bath: 'บาท',
        phone: 'เบอร์โทรศัพท์',
        orders: 'รายการ',
        addCusOr: 'สร้างชื่อลูกค้าและคำสั่งซื้อ',
        selectCusBook: 'เลือกที่อยู่ผู้รับจากรายชื่อ',
        selectCus: 'เลือกที่อยู่ผู้รับ',
        enterName: 'กรุณากรอกชื่อของคุณ',
        enterLastName: 'กรุณากรอกนามสกุลของคุณ',
        enterDate: 'กรุณาใส่วันที่',
        enterPhone: 'กรุณากรอกเบอร์โทรศัพท์ของคุณ',
        enterBrand: 'กรุณากรอกชื่อแบรนด์',
        enterPrice: 'กรุณกรอกราคา',
        addEyewear: 'เพิ่มแว่นตา +',
        eyewears: 'รายการ'
      },
      eyewearList : {
        date: 'วันที่',
        orderDetails: 'ข้อมูลการสั่งซื้อ',
        delivery: 'จัดส่ง',
        shippingName: 'ชื่อขนส่ง',
        trackingNumber: 'หมายเลขพัสดุ',
        orderDetail : 'ข้อมูลการสั่งซื้อ',
        lens: 'เลนส์',
        price: 'ราคา',
        detail:'รายละเอียด',
        status: 'สถานะ',
        selectStatus: 'เลือกสถานะ',
        print: 'ถ่ายเอกสาร',
        eyewearDetail: 'รายละเอียดแว่นที่'
    },
  }
  }
})
  
  const app = createApp(App)
  app.use(i18n)
  app.use(VueHtmlToPaper, options)
  app.component('Icon', Icon)
  app.use(router)
  app.mount('#app')