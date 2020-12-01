<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <!--Carousel Img-->
    <swiper ref="mySwiper" class="swiper" :options="swiperOptions">
      <swiper-slide>
        <div
          class="header active bg-cover justify-content-md-end align-items-md-center
          justify-content-center align-items-end"
          style="
            background-image: url(https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
          "
        >
          <div class="header-button header-button1 mb-md-0">
            <p class="text-white h3">快來體驗腕表的魅力吧!</p>
            <button
              class="btn btn-secondary px-5 py-3 mb-2"
              @click="$router.push(`/product`)"
            >
              馬上去看看
            </button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
        ><div
          class="header bg-cover justify-content-md-start align-items-md-center
          justify-content-center align-items-end"
          style="
            background-image: url(https://images.unsplash.com/photo-1509941943102-10c232535736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
          "
        >
          <div class="header-button header-button2 mb-md-0">
            <p class="text-white h3">還不馬上來試戴!</p>
            <button
              class="btn btn-secondary px-5 py-3 mb-2"
              @click="$router.push(`/product`)"
            >
              馬上去看看
            </button>
          </div>
        </div></swiper-slide
      >
      <swiper-slide>
        <div
          class="header bg-cover justify-content-md-center align-items-md-end
          justify-content-center align-items-end"
          style="
            background-image: url(https://images.unsplash.com/photo-1591352254932-6d56d9fe295b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80);
          "
        >
          <div class="header-button header-button3">
            <p class="text-white h3">來認識腕表吧!</p>
            <button
              class="btn btn-secondary px-5 py-3 mb-2"
              @click="$router.push(`/brand`)"
            >
              馬上去看看
            </button>
          </div>
        </div></swiper-slide
      >
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <section>
      <div class="container my-5">
        <div class="row my-5">
          <div class="col-md-6 m-auto">
            <h2 class="feature-heading">為甚麼要戴手錶</h2>
            <p class="feature-text">
              戴手錶的本意就是為了隨時了解時間，雖然現在手機十分普及了，很多人因此放棄了手錶，但是相比於手機，
              手錶還是比較方便的。比如騎車的時候想了解一下時間，掏手機就沒有看手錶方便了。又或者一些不允許帶手機入場的場所，用手錶掌握時間就成了必然。
            </p>
          </div>
          <div class="col-md-6">
            <div
              class="bg-cover"
              data-aos="fade-up"
              style="
                background-image: url(https://images.unsplash.com/photo-1523268755815-fe7c372a0349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
                height: 500px;
              "
            ></div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-md-6 order-md-2 m-auto">
            <h2 class="feature-heading">彰顯身份與品位</h2>
            <p class="feature-text">
              腕錶是一個成功人士必不可少的裝備，它的作用不僅在於看時間，更多的是代表人的品位和個性。
              每個職場達人都希望自己的手腕上閃爍著尊貴的光環，那份尊貴與豪華甚至讓人窒息。
              特別是頂級的世界知名手錶品牌，能夠擁有它們是職場精英一直以來的追求。
              同時手錶的佩戴也能體現個人品味。去打高爾夫、騎馬、保齡球的時候戴上運動風格明顯的腕錶，顯得活力十足。去陽光沙灘、香檳寶馬的時候，
              一枚亮閃閃的休閒腕錶又幫你吸引無數比基尼美女的目光。
            </p>
          </div>
          <div class="col-md-6 order-md-1">
            <div
              class="bg-cover"
              data-aos="fade-right"
              style="
                background-image: url(https://images.unsplash.com/photo-1456444029056-7dfaeeb83a19?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80);
                height: 500px;
              "
            ></div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-md-6 m-auto">
            <h2 class="feature-heading">給人守時的良好印象</h2>
            <p class="feature-text">
              手錶不僅僅是來看時間的。一個人佩戴手錶，通常意味著時間觀念強、作風嚴謹。
              而用手錶看時間是表示對客戶的尊重。再切實一點，成功的人需要抓住時機，重視自己的時間，需要時刻必爭。
              時間是雙方約定的契約，守時代表著誠信，而且在陌生人之間迅速傳遞出你的這種品質。
            </p>
          </div>
          <div class="col-md-6">
            <div
              class="bg-cover"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              style="
                background-image: url(https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
                height: 500px;
              "
            ></div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <h2 class="text-center py-3">推薦商品</h2>
      <div class="row">
        <div class="col-12">
          <Productlist :productData="products"></Productlist>
        </div>
      </div>
    </div>
    <div></div>
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
      swiperOptions: {
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    };
  },
  methods: {
    ...mapActions('productsModules', ['getProducts']),
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('productsModules', ['products', 'categories']),
  },
  created() {
    this.getProducts();
  },
};
</script>
