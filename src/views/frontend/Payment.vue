<template>
  <div>
    <loading :active.sync="isLoading"></loading>
      <div class="container pt-5" >
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 px-0">
            <ul class="list-unstyled d-flex justify-content-around">
              <li class="checkStep ">
                <span class=" text-center">
                  1. 填寫訂購資料</span>
              </li>
              <li class="checkStep" :class="{checkStepActive : order.is_paid===false}">
                <span class="text-center">2. 確認付款</span>
              </li>
              <li class="checkStep" :class="{checkStepActive : order.is_paid===true}">
                <span class="text-center">3. 完成</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    <div class="container">
      <div class="row justify-content-center">
        <form class="col-12 col-md-8" @submit.prevent="payOrder">
          <h2 class="text-center">確認訂購資料</h2>
          <table class="table">
            <thead>
              <th scope="col">品名</th>
              <th scope="col" class="text-nowrap">數量</th>
              <th scope="col">單價</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">
                  {{ item.qty }}{{ item.product.unit }}
                </td>
                <td class="align-middle text-right">
                  {{ item.final_total | currency }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">總計:</td>
                <td class="text-right">{{ order.total | currency }}</td>
              </tr>
            </tfoot>
          </table>
          <table class="table">
            <tbody>
              <tr>
                <th width="140">電子郵件</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-right mb-3" v-if="order.is_paid === false">
            <button class="btn btn-outline-primary">確認付款去</button>
          </div>
        </form>
        <div class="col-12 col-md-8 mb-3" v-if="order.is_paid">
          <button
            class="btn btn-outline-primary btn-block py-2"
            @click.prevent="$router.push(`/product`)"
          >
            繼續買起來
          </button>
        </div>
      </div>
    </div>

    <!--Modal-->
    <div
      class="modal fade"
      id="paySuccessModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">付款成功</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <span class="text-success">付款成功</span>
            <br>
            是否繼續前往商品頁面選購？
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-danger"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-outline-primary"
            @click="goToProduct">前往</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      orderId: '',
      order: {
        user: {},
      },
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.order = response.data.order;
        vm.isLoading = false;
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$store.dispatch('cartModules/updateMessage', {
            message: response.data.message,
            status: 'success',
          });
          vm.getOrder();
          vm.paySuccess();
        }
      });
    },
    paySuccess() {
      $('#paySuccessModal').modal('show');
    },
    goToProduct() {
      const vm = this;
      $('#paySuccessModal').modal('hide');
      vm.$router.push('/product');
    },
  },
  created() {
    this.orderId = this.$route.params.id;
    this.getOrder();
  },
};
</script>
