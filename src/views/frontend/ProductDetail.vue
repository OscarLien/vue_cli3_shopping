<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6">
          <div
            style="
              height: 450px;
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
            "
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
          ></div>
        </div>
        <div class="col-md-6">
          <h2>{{ product.title }}</h2>
          <blockquote class="blockquote mt-3">
            <p class="mb-3">{{ product.content }}</p>
            <footer class="blockquote-footer text-left">
              {{ product.description }}
            </footer>
          </blockquote>

          <div class="d-flex justify-content-between align-items-baseline">
            <div class="h4" v-if="!product.price">
              {{ product.origin_price | currency }}
            </div>
            <div class="h6" v-if="product.price">
              <del>原價{{ product.origin_price | currency }}</del>
            </div>
            <div class="h4" v-if="product.price">
              現在只要{{ product.price | currency }}
            </div>
          </div>
          <select name class="form-control mt-3" v-model="product.num">
            <option :value="num" v-for="num in 10" :key="num">
              選購 {{ num }} {{ product.unit }}
            </option>
          </select>
          <div class="d-flex justify-content-end py-3">
            <!-- <button class="btn btn-outline-danger mx-2" @click.prevent="favItem(productId)" >
              <i v-if="stared.indexOf(productId) === -1" class="far fa-heart" ></i>
              <i v-else class="fas fa-heart" ></i>
            </button> -->
            <button
              class="btn btn-outline-primary"
              @click="addtoCart(product.id, product.num)"
              v-if="product.is_enabled == 1"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="addCartLoading === product.id"
              ></i>
              加入購物車
            </button>
            <button class="btn btn-outline-danger mx-2" v-else>貨到通知</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 class="text-center py-3">您可能會喜歡...</h2>
      <div class="row">
        <div class="col-12">
          <Productlist :productData="filterData"></Productlist>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Productlist from '@/components/frontend/Productlist.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Productlist,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      productId: '',
      product: {},
      isLoading: false,
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    getProduct(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.product = response.data.product;
        vm.product.num = 1;
        vm.isLoading = false;
      });
    },

    addtoCart(id, qty = 1) {
      const vm = this;
      const target = vm.cart.carts.filter((items) => items.product_id === id);
      if (target.length > 0) {
        const sameCartItem = target[0];
        const originQty = sameCartItem.qty;
        const originCartId = sameCartItem.id;
        const originProductId = sameCartItem.product.id;
        const newQty = originQty + qty;
        vm.$store.dispatch('cartModules/changeCartQty', { originCartId, originProductId, newQty });
      } else {
        vm.$store.dispatch('cartModules/addtoCart', { id, qty });
      }
    },
    ...mapActions('productsModules', ['getProducts']),
  },
  computed: {
    filterData() {
      const vm = this;
      const sameItem = vm.products.filter(
        (item) => vm.product.category === item.category,
      );
      return sameItem;
    },
    addCartLoading() {
      return this.$store.state.cartModules.cartLoading.addCartLoading;
    },
    ...mapGetters('productsModules', ['products']),
    ...mapGetters('cartModules', ['cart']),

  },
  created() {
    const vm = this;
    vm.productId = vm.$route.params.id;
    vm.getProduct(vm.productId);
    vm.getProducts();
  },
  watch: {
    // eslint-disable-next-line func-names
    '$route.params.id': function () {
      const vm = this;
      vm.productId = vm.$route.params.id;
      vm.getProduct(vm.productId);
    },
  },
};
</script>
