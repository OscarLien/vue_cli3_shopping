<template>
  <div>
    <section>
      <div class="container py-3">
        <h3 class="text-center">品牌介紹</h3>
        <hr />
        <div class="row">
          <div class="col-md-6 col-12 recommend-card px-0">
            <div
              class="recommend-img"
              style="
                background-image: url(https://upload.cc/i1/2020/10/23/djGwsK.jpg);
              "
            >
              <a
                href=""
                class="recommend-cover px-0"
                @click.prevent="$router.push(`/brand/rolex`)"
              >
                <div class="recommend-btn">See More</div>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-12 recommend-card px-0">
            <div
              class="recommend-img"
              style="
                background-image: url(https://upload.cc/i1/2020/10/23/oszAQj.jpg);
              "
            >
              <a
                href=""
                class="recommend-cover"
                @click.prevent="$router.push(`/brand/omega`)"
              >
                <div class="recommend-btn">See More</div>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-12 recommend-card px-0">
            <div
              class="recommend-img"
              style="
                background-image: url(https://upload.cc/i1/2020/10/23/vg34Op.jpg);
              "
            >
              <a
                href=""
                class="recommend-cover"
                @click.prevent="$router.push(`/brand/iwc`)"
              >
                <div class="recommend-btn">See More</div>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-12 recommend-card px-0">
            <div
              class="recommend-img"
              style="
                background-image: url(https://upload.cc/i1/2020/10/23/lA0gz9.jpg);
              "
            >
              <a
                href=""
                class="recommend-cover"
                @click.prevent="$router.push(`/brand/gs`)"
              >
                <div class="recommend-btn">See More</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
