<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <table class="table">
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th width="120">應付金額</th>
          <th width="120">是否付款</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in order" :key="item.id">
          <td>{{ item.create_at | date }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} <br />
                {{ product.qty }}{{ product.product.unit }} -
                {{ product.total | currency }}
              </li>
            </ul>
          </td>
          <td>{{ item.total | currency }}</td>
          <td>
            <strong v-if="item.is_paid">
              <span class="text-success">已付款</span
              >{{ item.paid_date | date }}</strong
            >
            <span v-else class="text-muted">尚未啟用</span>
          </td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(item)"
            >
              編輯
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pageData="pagination" @emitpage="getOrder"></pagination>

    <!-- Modal -->
    <div
      class="modal fade"
      id="orderModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">修改訂單</h5>
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
            <div class="form-group">
              <label for="">購買時間</label>
              <input
                type="text"
                class="form-control"
                id="create_at"
                v-model="tempOrder.create_at"
              />
            </div>
            <div class="form-group">
              <label for="">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="tempOrder.user.email"
              />
            </div>
            <div class="form-group">
              <label for="">購買款項</label>
              <input type="text" class="form-control" id="product" />
            </div>
            <div class="form-group">
              <label for="">應付金額 </label>
              <input
                type="number"
                class="form-control"
                id="product"
                v-model="tempOrder.total"
              />
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="is_paid"
                  v-model="tempOrder.is_paid"
                  :true-value="1"
                  :false-value="0"
                />
                <label class="form-check-label" for="is_paid"> 是否付款 </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="editOrder">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      order: [],
      tempOrder: {
        user: {},
        products: {},
      },
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    getOrder(page = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        vm.order = response.data.orders;
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
      });
    },
    openModal(item) {
      // eslint-disable-next-line prefer-object-spread
      this.tempOrder = Object.assign({}, item);
      $('#orderModal').modal('show');
    },
    editOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order/${vm.tempOrder.id}`;
      vm.isLoading = true;
      this.$http.put(api, { data: vm.tempOrder }).then((response) => {
        vm.tempOrder = {
          user: {},
        };
        console.log(response.data);
        if (response.data.success) {
          $('#orderModal').modal('hide');
          vm.getOrder();
          vm.isLoading = false;
        }
      });
    },
  },
  created() {
    this.getOrder();
  },
};
</script>
