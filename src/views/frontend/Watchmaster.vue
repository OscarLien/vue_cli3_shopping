<template>
  <div>
    <Navbar></Navbar>
    <Alert></Alert>
    <Coupon></Coupon>
    <div class="container-fluid content px-0 px-md-0">
          <router-view></router-view>
    </div>
    <Sidebutton></Sidebutton>
    <Footer></Footer>
  </div>
</template>

<script>
// import $ from 'jquery';
import Navbar from '@/components/frontend/Navbar.vue';
import Footer from '@/components/frontend/Footer.vue';
import Coupon from '@/components/frontend/Coupon.vue';
import Sidebutton from '@/components/frontend/Sidebutton.vue';
import Alert from '@/components/AlertMessage.vue';

export default {
  components: {
    Navbar,
    Footer,
    Coupon,
    Sidebutton,
    Alert,
  },
};
</script>
