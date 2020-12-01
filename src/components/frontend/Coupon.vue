<template>
  <div>
    <div class="container-fluid" :class="{'d-none':isClose}">
      <div class="row bg-secondary text-center">
        <div class="col d-flex justify-content-center align-items-center">
          <span class="text-white"
            >恭喜你!! 獲得了超值的優惠券!!輸入優惠碼: coupon 即可享有30%OFF!!</span
          >
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
