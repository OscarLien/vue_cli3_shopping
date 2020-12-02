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
          <div class="col-12 col-md-8 px-0">
            <ul class="list-unstyled d-flex justify-content-around">
              <li class="checkStep checkStepActive">
                <span class="text-center"> 1. 填寫訂購資料</span>
              </li>
              <li class="checkStep">
                <span class="text-center">2. 確認付款</span>
              </li>
              <li class="checkStep">
                <span class="text-center">3. 完成</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container" v-if="cart.total !== 0">
        <div class="my-5 row justify-content-center">
          <div class="col-12 col-md-8">
            <h2 class="text-center mb-3">訂購資訊</h2>
            <table class="table">
              <thead>
                <th></th>
                <th scope="col" class="text-nowrap">品名</th>
                <th scope="col" class="text-nowrap">數量</th>
                <th scope="col">單價</th>
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
                  <td class="align-middle text-nowrap">
                    <select
                      name=""
                      id=""
                      v-model="item.qty"
                      @change="changeQty(item.id, item.product.id, item.qty)"
                    >
                      <option :value="num" v-for="num in 10" :key="num">
                        {{ num }}
                      </option>
                    </select>
                    {{ item.product.unit }}
                    <!-- {{ item.qty }}/{{ item.product.unit }} -->
                  </td>
                  <td class="align-middle text-right">
                    {{ item.final_total | currency }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="text-right">總計</td>
                  <td class="text-right">{{ cart.total | currency }}</td>
                </tr>
                <tr v-if="cart.final_total != cart.total">
                  <td colspan="3" class="text-right text-success">折扣價</td>
                  <td class="text-right text-success">
                    {{ cart.final_total | currency }}
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

          <div class="col-12 col-md-8 mb-5">
            <h2 class="text-center">填寫訂購資料</h2>
            <div class="form-row">
              <form class="col-12" @submit.prevent="handleSubmit(createOrder)">
                <div class="form-group">
                  <label for="email"
                    >電子郵件<span class="text-danger">*必填</span></label
                  >
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
                  <label for="name"
                    >姓名<span class="text-danger">*必填</span></label
                  >
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
                  <label for="tel"
                    >電話<span class="text-danger">*必填</span></label
                  >
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
                  <label for="address"
                    >地址<span class="text-danger">*必填</span></label
                  >
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
      vm.$http.post(api, { data: coupon }).then((response) => {
        if (response.data.success) {
          vm.$store.dispatch('cartModules/updateMessage', {
            message: response.data.message,
            status: 'success',
          });
          vm.getCart();
        } else {
          vm.$store.dispatch('cartModules/updateMessage', {
            message: response.data.message,
            status: 'danger',
          });
        }
      });
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const order = vm.form;
      vm.isLoading = true;
      vm.$http.post(api, { data: order }).then((response) => {
        if (response.data.success) {
          vm.$store.dispatch('cartModules/updateMessage', {
            message: response.data.message,
            status: 'success',
          });
          vm.$router.push(`/payment/${response.data.orderId}`);
          vm.$store.dispatch('cartModules/getCart');
          vm.isLoading = false;
        }
      });
    },
    changeQty(id, productId, qty) {
      const vm = this;
      const addapi = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const delapi = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      const cart = {
        product_id: productId,
        qty,
      };
      vm.$http
        .all([vm.$http.delete(delapi), vm.$http.post(addapi, { data: cart })])
        .then(
          vm.$http.spread(() => {
            vm.getCart();
          }),
        );
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
