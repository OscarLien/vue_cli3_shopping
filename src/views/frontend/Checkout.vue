<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <loading :active.sync="isLoading"></loading>
    <div>
      <div
        class="d-flex justify-content-center align-items-center text-center"
        style="height: 350px"
        v-if="cart.total == 0"
      >
      <div>
        <h3>您的購物車內還沒有任何商品</h3>
        <router-link to="/product"
          ><button class="btn btn-outline-primary my-3">
            <i class="fas fa-shopping-cart pr-2"></i>馬上去選購
          </button></router-link
        >
      </div>
      </div>
      <div class="container pt-5" v-if="cart.total !== 0">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10">
            <ul class="list-unstyled form-row justify-content-around">
              <li class="col-12 col-md-4 mb-3">
                <span class="checkStep active d-block text-center"
                  >1. 填寫訂購資料</span
                >
              </li>
              <li class="col-12 col-md-4 mb-3">
                <span class="checkStep d-block text-center">2. 付款</span>
              </li>
              <li class="col-12 col-md-4 mb-3">
                <span class="checkStep d-block text-center">3. 完成</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container" v-if="cart.total !== 0">
        <div class="my-5 row justify-content-center">
          <div class="col-12 col-md-10">
            <h2 class="text-center mb-3">訂購資訊</h2>
            <table class="table">
              <thead>
                <th></th>
                <th>品名</th>
                <th>數量</th>
                <th>單價</th>
              </thead>
              <tbody>
                <tr v-for="item in cart.carts" :key="item.id">
                  <td class="align-middle">
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click="delCart(item.id)"
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                  <td class="align-middle">
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td class="align-middle">
                    {{ item.qty }}/{{ item.product.unit }}
                  </td>
                  <td class="align-middle text-right">
                    {{ item.final_total | currency }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="text-right">總計</td>
                  <td class="text-right">{{ cart.total| currency }}</td>
                </tr>
                <tr v-if="cart.final_total != cart.total">
                  <td colspan="3" class="text-right text-success">折扣價</td>
                  <td class="text-right text-success">
                    {{ cart.final_total| currency }}
                  </td>
                </tr>
              </tfoot>
            </table>
            <div class="input-group mb-3 input-group-sm">
              <input
                type="text"
                class="form-control"
                placeholder="請輸入優惠碼"
                v-model="coupon_code"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  @click="applyCoupon"
                >
                  套用優惠碼
                </button>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-10 mb-5">
            <h2 class="text-center">填寫訂購資料</h2>
            <div class="form-row">
              <form class="col-12" @submit.prevent="handleSubmit(createOrder)">
                <div class="form-group">
                  <label for="email">Email</label>
                  <ValidationProvider
                    name="email"
                    rules="required"
                    v-slot="{ errors, classes }"
                  >
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="請輸入Email"
                      v-model="form.user.email"
                      :class="classes"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <div class="form-group">
                  <label for="name">姓名</label>
                  <ValidationProvider
                    name="name"
                    rules="required"
                    v-slot="{ errors, classes }"
                  >
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      placeholder="請輸入姓名"
                      v-model="form.user.name"
                      :class="classes"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <div class="form-group">
                  <label for="tel">電話</label>
                  <ValidationProvider
                    name="tel"
                    rules="required"
                    v-slot="{ errors, classes }"
                  >
                    <input
                      type="text"
                      class="form-control"
                      id="tel"
                      name="tel"
                      placeholder="請輸入電話"
                      v-model="form.user.tel"
                      :class="classes"
                    /><span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <div class="form-group">
                  <label for="address">地址</label>
                  <ValidationProvider
                    name="address"
                    rules="required"
                    v-slot="{ errors, classes }"
                  >
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      name="address"
                      placeholder="請輸入地址"
                      v-model="form.user.address"
                      :class="classes"
                    /><span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <div class="form-group">
                  <label for="message">留言</label>
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    rows="3"
                    placeholder="有什麼話想告訴我們？"
                    v-model="form.message"
                  ></textarea>
                </div>
                <div class="text-right">
                  <button type="submit" class="btn btn-outline-primary">
                    建立訂單
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ValidationObserver>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      coupon_code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      isLoading: false,
    };
  },
  methods: {
    applyCoupon() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      this.$http.post(api, { data: coupon }).then(() => {
        // console.log(response.data);
        vm.getCart();
      });
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const order = vm.form;
      vm.isLoading = true;
      this.$http.post(api, { data: order }).then((response) => {
        if (response.data.success) {
          // console.log('訂單已建立', response.data);
          vm.$router.push(`/payment/${response.data.orderId}`);
          vm.$store.dispatch('cartModules/getCart');
          vm.isLoading = false;
        }
      });
    },
    ...mapActions('cartModules', ['getCart', 'delCart']),
  },
  computed: {
    ...mapGetters('cartModules', ['cart']),
  },
  created() {
    this.getCart();
  },
};
</script>
