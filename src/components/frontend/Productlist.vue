<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in productData" :key="item.id">
        <router-link
          :to="{ path: `/product/${item.id}` }"
          class="router-link-active"
        >
          <div
            class="bg-cover"
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
            style="height: 350px"
          ></div>
          <div class="text-center my-5">{{ item.title }}</div>
        </router-link>
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'swiper-example-multiple-slides-per-biew',
  title: 'Multiple slides per view',
  props: ['productData'],
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 4,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 3,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
          },
        },
      },
    };
  },
};
</script>
