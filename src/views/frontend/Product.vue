<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-3">
          <div class="product-sidebar mb-5">
            <h2 class="bg-primary text-white text-center py-3 mb-0">
              手錶品牌
            </h2>
            <ul class="list-unstyled list-group">
              <li>
                <a
                  href=""
                  class="list-group-item list-group-item-action text-center"
                  :class="{ active: category == 'all' }"
                  @click.prevent="changeCategory('all')"
                  >全部品牌</a
                >
              </li>
              <li v-for="(item, index) in categories" :key="index">
                <a
                  href=""
                  class="list-group-item list-group-item-action text-center"
                  :class="{ active: category == item }"
                  @click.prevent="changeCategory(item)"
                  >{{ item }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-9">
          <div class="container">
            <div class="row">
              <div
                class="col-md-4 mb-4"
                v-for="item in filterProducts"
                :key="item.id"
              >
                <div
                  class="card border-0 shadow-sm"
                  @click="$router.push(`/product/${item.id}`)"
                >
                  <div
                  class="img-box"
                    style="
                      height: 275px;
                      background-size: cover;
                      background-position: center;
                      "
                    :style="{ backgroundImage: `url(${item.imageUrl})` }"
                  >
                    <span class="badge badge-secondary float-right ml-2">{{
                      item.category
                    }}</span>
                  </div>
                  <div class="card-body text-center">
                    <h5 class="card-title">
                      {{ item.title }}
                    </h5>
                    <div>
                      <button type="button" class="btn btn-outline-primary">
                        詳情
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import Pagination from '@/components/Pagination';
export default {
  data() {
    return {
      category: 'all', // 目前選擇類別
      status: {
        loadingItem: '',
      },
      pagination: {},
      showPages: '',
    };
  },
  //   components: {
  //     Pagination: Pagination,
  //   },
  methods: {
    changeCategory(item) {
      const vm = this;
      vm.category = item;
      // vm.pagination.current_page = 1;
      // this.getProducts();
    },
    ...mapActions('productsModules', ['getProducts']),
  },
  computed: {
    filterProducts() {
      const vm = this;
      if (vm.category === 'all') {
        return vm.products;
      }
      const categoryData = vm.products.filter((item) => item.category === vm.category);
      return categoryData;
    },
    ...mapGetters(['isLoading']),
    ...mapGetters('productsModules', ['products', 'categories']),
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
.badge{
  border-radius:0rem 0.25rem 0rem 0.25rem;
}
</style>
