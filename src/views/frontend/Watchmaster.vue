<template>
  <div>
    <Navbar></Navbar>
    <Alert></Alert>
    <Coupon></Coupon>
    <div class="container-fluid content px-0 px-md-0">
      <router-view></router-view>
    </div>
    <Sidebutton :class="{hideCart:hide}"></Sidebutton>
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
  data() {
    return {
      hide: false,
    };
  },
  components: {
    Navbar,
    Footer,
    Coupon,
    Sidebutton,
    Alert,
  },
  methods: {
    hideCart() {
      const vm = this;
      if (vm.$route.name === 'Checkout' || vm.$route.name === 'Payment') {
        vm.hide = true;
      }
    },
  },
  watch: {
    $route(newUrl) {
      const vm = this;
      if (newUrl.name === 'Checkout' || newUrl.name === 'Payment') {
        vm.hide = true;
      } else {
        vm.hide = false;
      }
    },
  },
  created() {
    const vm = this;
    vm.hideCart();
  },
};
</script>

<style lang="scss">
.hideCart{
  display: none;
}
</style>
