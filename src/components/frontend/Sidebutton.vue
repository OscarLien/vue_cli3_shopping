<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <div class="fixed d-flex flex-column">
      <button
        type="button"
        class="btn btn-cart my-3"
        data-toggle="modal"
        data-target="#cartModal"
        @click="openCartModal"
      >
        <i class="fas fa-shopping-cart"></i>
        <span
          class="badge badge-pill badge-danger"
          v-if="cart.carts && cart.carts.length != 0"
          >{{ cart.carts.length }}</span
        >
      </button>
    </div>
    <div
      class="modal fade"
      id="cartModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="cartModal">您的購物車</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div v-if="cart.total == 0">
              <p class="text-center h1 py-5">購物車還空空的喔！</p>
              <button
                class="btn btn-outline-primary btn-block"
                @click="hideCartModal"
              >
                立刻選購
              </button>
            </div>
            <div v-if="cart.total !== 0">
              <table class="table">
                <thead>
                  <th></th>
                  <th>品名</th>
                  <th width="60px">數量</th>
                  <th>單價</th>
                </thead>
                <tbody>
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td>
                      <button
                        class="btn btn-outline-danger btn-sm"
                        @click="delCart(item.id)"
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                    <td>{{ item.product.title }}</td>
                    <td>{{ item.qty }}{{ item.product.unit }}</td>
                    <td>{{ item.final_total | currency }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  data-dismiss="modal"
                >
                  再去逛逛
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  @click="hideCartModal"
                >
                  結帳去
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      data: {
        // favItems: {},
        // stared: JSON.parse(localStorage.getItem('stared')) || [],
      },
    };
  },
  methods: {
    openCartModal() {
      $('#cartModal').modal('show');
    },
    hideCartModal() {
      const vm = this;
      $('#cartModal').modal('hide');
      if (vm.cart.carts.length === 0) {
        vm.$router.push('/product');
      } else {
        vm.$router.push('/checkout');
      }
    },
    ...mapActions('cartModules', ['getCart', 'delCart']),
    ...mapActions('productsModules', ['getProducts']),
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('cartModules', ['cart']),
    ...mapGetters('productsModules', ['products']),
  },
  created() {
    const vm = this;
    vm.getCart();
    // vm.getFav();
  },
};
</script>
