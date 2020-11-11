/* eslint-disable func-names */
<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="updatePage(pageData.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in pageData.total_pages"
          :key="page"
          :class="{ active: pageData.current_page == page }"
          @click.prevent="updatePage(page)"
        >
          <a class="page-link" href="#">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: pageData.has_next == false }">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="updatePage(pageData.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['pageData'], // props 由外到內傳遞資料：傳遞分頁資料到分頁元件
  methods: {
    updatePage(page) {
      this.$emit('emitpage', page); // emit 由內到外傳遞資料：分頁元件的頁碼參數傳遞到外層
    },
  },
};
</script>
