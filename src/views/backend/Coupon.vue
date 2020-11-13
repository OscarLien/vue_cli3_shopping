<template>
  <div>
    <loading :active.sync="isLoading"></loading>

    <div class="text-right">
      <button class="btn btn-primary mt-4" @click="openModal(true)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <td>名稱</td>
          <td width="120">折扣百分比</td>
          <td width="120">到期日</td>
          <td width="120">是否啟用</td>
          <td width="120">編輯</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ item.due_date }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDeleteModal(item)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- modal -->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
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
              <label for="title">標題</label>
              <ValidationProvider
                name="title"
                rules="required"
                v-slot="{ errors, classes }"
              >
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入標題"
                  v-model="tempCoupon.title"
                  :class="classes"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label for="code">優惠碼</label>
              <ValidationProvider
                name="code"
                rules="required"
                v-slot="{ errors, classes }"
              >
                <input
                  type="text"
                  class="form-control"
                  id="code"
                  placeholder="請輸入優惠碼"
                  v-model="tempCoupon.code"
                  :class="classes"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <ValidationProvider
                name="due_date"
                rules="required"
                v-slot="{ errors, classes }"
              >
                <input
                  type="date"
                  class="form-control"
                  id="due_date"
                  placeholder="請輸入到期日"
                  v-model="tempCoupon.due_date"
                  :class="classes"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label for="percent">折扣百分比</label>
              <ValidationProvider
                name="due_date"
                rules="required"
                v-slot="{ errors, classes }"
              >
              <input
                type="number"
                class="form-control"
                id="percent"
                placeholder="請輸入折扣百分比"
                v-model="tempCoupon.percent"
                :class="classes"
              />
              <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="is_enabled"
                  v-model="tempCoupon.is_enabled"
                  :true-value="1"
                  :false-value="0"
                />
                <label class="form-check-label" for="is_enabled"
                  >是否啟用</label
                >
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
            <button type="button" class="btn btn-primary" @click="updateCoupon">
              更新優惠券
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="delCouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
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
            是否刪除
            <strong class="text-danger">{{ tempCoupon.title }}</strong>
            優惠券(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="deleteCoupon">
              確認刪除
            </button>
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
      coupons: {},
      tempCoupon: {},
      isNew: false,
      isLoading: false,
      due_date: new Date(),
    };
  },
  methods: {
    getCoupon() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.isLoading = false;
        // console.log(response.data);
        vm.coupons = response.data.coupons;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = {};
        this.isNew = true;
      } else {
        // eslint-disable-next-line prefer-object-spread
        this.tempCoupon = Object.assign({}, item);
        this.isNew = false;
      }

      $('#couponModal').modal('show');
    },
    updateCoupon() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
      const vm = this;
      let httpMethod = 'post';
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
        httpMethod = 'put';
      }
      // vm.isLoading = true;
      this.$http[httpMethod](api, { data: vm.tempCoupon }).then((response) => {
        // vm.isLoading = false;
        // console.log(response.data);
        if (response.data.success) {
          $('#couponModal').modal('hide');
          vm.getCoupon();
        }
      });
    },
    openDeleteModal(item) {
      this.tempCoupon = item;
      $('#delCouponModal').modal('show');
    },
    deleteCoupon() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
      // vm.isLoading = true;
      this.$http.delete(api).then((response) => {
        // vm.isLoading = false;
        // console.log(response.data);
        if (response.data.success) {
          $('#delCouponModal').modal('hide');
          vm.getCoupon();
        }
      });
    },
  },
  watch: {
    due_date() {
      const vm = this;
      const timestamp = Math.floor(new Date(vm.due_date) / 1000);
      vm.tempCoupon.due_date = timestamp;
    },
  },
  created() {
    this.getCoupon();
  },
};
</script>
