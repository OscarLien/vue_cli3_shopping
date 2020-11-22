<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
      <router-link to="/home" class="navbar-brand logo-font">Watch Master</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/home"
              >首頁</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/brand"
              >品牌介紹</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/product"
              >全部商品</router-link
            >
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">關於我們</a>
          </li> -->
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.logo-font {
font-family: Caveat, cursive;
font-size: 25px;
}
</style>
