<template>
  <div>
    <div class="container-fluid py-0" :class="{ 'd-none': isClose }">
      <div class="row bg-primary text-white">
        <div class="col text-center">
          恭喜你!! 獲得了超值的優惠券!!輸入優惠碼: coupon 即可享有30% OFF!!
        </div>
        <button class="btn text-white" @click="isClose = true">
          <i class="fas fa-times fa-xs"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClose: false,
    };
  },
  methods: {},
};
</script>
