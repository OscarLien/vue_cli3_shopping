<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <div>
      <loading :active.sync="isLoading"></loading>

      <div class="text-right">
        <button class="btn btn-primary mt-4" @click="openModal(true)">
          建立新的產品
        </button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="120">是否啟用</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-right">
              {{ item.origin_price | currency }}
            </td>
            <td class="text-right">
              {{ item.price | currency }}
            </td>
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

      <pagination :pageData="pagination" @emitpage="getProducts"></pagination>

      <!-- Modal -->
      <div
        class="modal fade"
        id="productModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 class="modal-title" id="exampleModalLabel">
                <span>新增產品</span>
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
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group">
                    <label for="image">輸入圖片網址</label>
                    <ValidationProvider
                      name="image"
                      rules="required"
                      v-slot="{ errors, classes }"
                    >
                      <input
                        type="text"
                        class="form-control"
                        id="image"
                        placeholder="請輸入圖片連結"
                        v-model="tempProduct.imageUrl"
                        :class="classes"
                      />
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="customFile"
                      >或 上傳圖片
                      <i
                        class="fas fa-spinner fa-spin"
                        v-if="status.fileUploading"
                      ></i>
                    </label>
                    <input
                      type="file"
                      id="customFile"
                      class="form-control"
                      ref="files"
                      @change="uploadFile"
                    />
                  </div>
                  <img
                    img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                    class="img-fluid"
                    alt="Product Image"
                    :src="tempProduct.imageUrl"
                  />
                </div>
                <div class="col-sm-8">
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
                        v-model="tempProduct.title"
                        :class="classes"
                      />
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="category">分類</label>
                      <ValidationProvider
                        name="category"
                        rules="required"
                        v-slot="{ errors, classes }"
                      >
                        <input
                          type="text"
                          class="form-control"
                          id="category"
                          placeholder="請輸入分類"
                          v-model="tempProduct.category"
                          :class="classes"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="unit">單位</label>
                      <ValidationProvider
                        name="unit"
                        rules="required"
                        v-slot="{ errors, classes }"
                      >
                        <input
                          type="unit"
                          class="form-control"
                          id="unit"
                          placeholder="請輸入單位"
                          v-model="tempProduct.unit"
                          :class="classes"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="origin_price">原價</label>
                      <ValidationProvider
                        name="origin_price"
                        rules="required"
                        v-slot="{ errors, classes }"
                      >
                        <input
                          type="number"
                          class="form-control"
                          id="origin_price"
                          placeholder="請輸入原價"
                          v-model="tempProduct.origin_price"
                          :class="classes"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="price">售價</label>
                      <ValidationProvider
                        name="price"
                        rules="required"
                        v-slot="{ errors, classes }"
                      >
                        <input
                          type="number"
                          class="form-control"
                          id="price"
                          placeholder="請輸入售價"
                          v-model="tempProduct.price"
                          :class="classes"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <hr />

                  <div class="form-group">
                    <label for="description">產品描述</label>
                    <ValidationProvider
                      name="description"
                      rules="required"
                      v-slot="{ errors, classes }"
                    >
                      <textarea
                        type="text"
                        class="form-control"
                        id="description"
                        placeholder="請輸入產品描述"
                        v-model="tempProduct.description"
                        :class="classes"
                      ></textarea>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="content">說明內容</label>
                    <ValidationProvider
                      name="content"
                      rules="required"
                      v-slot="{ errors, classes }"
                    >
                      <textarea
                        type="text"
                        class="form-control"
                        id="content"
                        placeholder="請輸入產品說明內容"
                        v-model="tempProduct.content"
                        :class="classes"
                      ></textarea>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="is_enabled"
                        v-model="tempProduct.is_enabled"
                        :true-value="1"
                        :false-value="0"
                      />
                      <label class="form-check-label" for="is_enabled">
                        是否啟用
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-secondary"
                data-dismiss="modal"
              >
                取消
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="handleSubmit(updateProduct)"
              >
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="delProductModal"
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
              <strong class="text-danger">{{ tempProduct.title }}</strong>
              商品(刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-secondary"
                data-dismiss="modal"
              >
                取消
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="deleteProduct"
              >
                確認刪除
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ValidationObserver>
</template>

<script>
import $ from 'jquery';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      isNew: false,
      isLoading: false,
      pagination: {},
      status: {
        fileUploading: false,
      },
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = { ...item };
        // ES6 可以將item的值寫到一個空的物件,然後避免tempProduct和item有參考的特性
        this.isNew = false;
      }
      $('#productModal').modal('show');
    },
    updateProduct() {
      const vm = this;
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
      let httpMethod = 'post';
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        httpMethod = 'put';
      }
      vm.$http[httpMethod](api, { data: vm.tempProduct }).then((response) => {
        if (response.data.success) {
          $('#productModal').modal('hide');
          vm.getProducts();
          vm.$store.dispatch('cartModules/updateMessage', { message: response.data.message, status: 'success' });
        } else {
          vm.$store.dispatch('cartModules/updateMessage', { message: response.data.message, status: 'danger' });
        }
      });
    },
    openDeleteModal(item) {
      const vm = this;
      vm.tempProduct = { ...item };
      $('#delProductModal').modal('show');
    },
    deleteProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      vm.$http.delete(api).then((response) => {
        if (response.data.success) {
          $('#delProductModal').modal('hide');
          vm.getProducts();
          vm.$store.dispatch('cartModules/updateMessage', { message: response.data.message, status: 'success' });
        } else {
          vm.$store.dispatch('cartModules/updateMessage', { message: response.data.message, status: 'danger' });
        }
      });
    },
    uploadFile() {
      const vm = this;
      const uploadedFile = this.$refs.files.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile); // 新增欄位 將uploadedFile上傳上去
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      vm.status.fileUploading = true;
      vm.$http
        .post(url, formData, {
          headers: {
            'content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          if (response.data.success) {
            vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl); // set方法 雙向綁定
            vm.$store.dispatch('cartModules/updateMessage', { message: '上傳成功', status: 'success' });
          } else {
            vm.$store.dispatch('cartModules/updateMessage', { message: response.data.message, status: 'danger' });
          }
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
