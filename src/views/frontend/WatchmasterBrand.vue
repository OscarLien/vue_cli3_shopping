<template>
  <div>
    <section>
      <div class="container py-3">
        <h3 class="text-center mt-5">認識腕表</h3>
        <hr />
        <div class="row">
          <div class="col-12">
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link text-left btn-block"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      id="collapseOneButton"
                      @click="changestyle"
                    >
                      <i class="far fa-question-circle fa-2x"></i
                      ><span class="ml-2">如何區分機械錶與石英錶?</span>
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <h3>石英錶</h3>
                    <p class="brand-text">
                      石英錶內會裝有電池，並運用石英在電力驅動下會規律震動的原理來驅動電機，從而控制錶針的走動。
                      由於內部的石英晶體提供穩定的脈衝波，因此可以保持相當高的精確度，每天的誤差可保
                      持在1秒以內，不過相對的缺點，就是石英錶需要定期更換電池，一般電池的壽命大概為2-3年。
                      另外由於石英錶機芯較機械錶簡單，因此一般來說錶殻會較薄，重量自然會相薄輕巧。
                    </p>
                    <h3>機械錶</h3>
                    <p class="brand-text">
                      對比石英錶，機械錶並不依靠電池來提供動力，其原理是來自機芯內的發條。經上緊發條後，
                      藉發條系統釋放出動能來供錶針走動，一般來說經上滿的發條通常可以使手錶行走約40小時。
                      如要手錶不停運作，通常建議一天上滿一次發條。而有一些機械錶有會有能量儲備顯示，供使用者
                      知道什麼時候要上發條。
                      基於其純機械式設計，理論上機械錶的發條只要有足夠動力，就可連續不停運作，因此一般來說機械錶的壽命
                      都有十年以上。
                      不過由於機械錶中的結構精密，其精準度往往容易受周遭環境因素而影響，例如溫度，震動等。
                      一般來說日差大概是20秒內，再者，機械錶中的精密結構亦是其錶殻比石英錶錶殻較厚的原因之一。
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link text-left btn-block collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      id="collapseTwoButton"
                      @click="changestyle"
                    >
                      <i class="far fa-question-circle fa-2x"></i
                      ><span class="ml-2">應如何選擇機械錶或是石英錶？</span>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <p class="brand-text">
                      簡單來說，石英錶走時較機械錶準確，錶殻亦較薄，不過其壽命則較機械錶遜色。
                      乍看之下，石英錶的優點似乎比機械錶多 那為什麼機械錶（如
                      Rolex,Omega）在市場仍佔有那麼重要的地位？
                      如果單以手錶的報時功能來作考量，石英錶確是比機械錶有過之而無不及。不
                      過機械錶的魅力，在於其更能展示工藝之美，一隻高手準的機械錶，其價值已不單單側重於其報時功能，
                      更是在於裝嵌及手磨技術，相等於一件高級工藝品，魅力並非普通石英錶可以取替。
                      讀者們有空不仿一到小店，相信能一改以往對手錶的看法。
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link text-left btn-block collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      id="collapseThreeButton"
                      @click="changestyle"
                    >
                      <i class="far fa-question-circle fa-2x"></i
                      ><span class="ml-2">機械錶為什麼時間常常不準？</span>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <p class="brand-text">
                      機械錶受到地心引力影響
                      /摩擦力影響都一定會有誤差，每日誤差在60秒內都算正常或許會覺得麻煩，
                      但不論是幾十萬到幾千塊的機械錶，原理都是一樣的，只是越貴的錶款誤差會稍微少一點，
                      看著機芯擺動享受每一秒的跳動，這才是手錶的迷人之處。所以要知道機械錶不準是一定的，需要常常校正。
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFour">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link text-left btn-block collapsed text-nowrap"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                      id="collapseFourButton"
                      @click="changestyle"
                    >
                      <i class="far fa-question-circle fa-2x"></i
                      ><span class="ml-2"
                        >機械錶的誤差在多少內才算正常呢？</span
                      >
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  class="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <p class="brand-text">
                      一般來說，機械腕錶的日誤差在±30秒內都是符合標準的，而天文台認證的機芯誤差則更為嚴苛一些，平均誤差要達到-4秒至+6秒/天。
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link text-left btn-block collapsed text-nowrap"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                      id="collapseFiveButton"
                      @click="changestyle"
                    >
                      <i class="far fa-question-circle fa-2x"></i
                      ><span class="ml-2">機械錶誤差這麼大為什麼歷久不衰?</span>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFive"
                  class="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <p class="brand-text">
                      很多朋友很喜歡機械腕錶，不管是調校的過程，還是觀察機芯的細節，傾聽機芯的聲音等等都是一種享受。
                      上世紀70年代，石英錶面世，震撼腕錶市場，因石英錶與機械錶的結構相當接近，而且比機械錶更精準，因此迅速被市場所接受，機械錶一度被視為過時產品。
                      <br /><br />幸好一段時間後，不少收藏家陸續發現，石英錶並不如機械錶般有吸引力，於是重新將焦點轉回機械錶上；
                      而當中最大原因，在於機械錶更能展示工藝之美，是一支高水準的腕錶，它的價值已經不是單一著重於其報時效能
                      ，而是在於裝嵌及設計，相等於一件高級工藝品，魅力絕非石英錶可以代替。
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingSix">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link text-left btn-block collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                      id="collapseSixButton"
                      @click="changestyle"
                    >
                      <i class="far fa-question-circle fa-2x"></i
                      ><span class="ml-2">機械錶怎麼保養？</span>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseSix"
                  class="collapse"
                  aria-labelledby="headingSix"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <p class="brand-text">
                      通常建議3~5年就要保養洗油
                      ，當然這個動作就要交給專業的師傅。不要經常和有磁性的物品接近(如電視機、電腦等等)
                      因為 消磁
                      會導致誤差更大。若有進水或是霧氣要立即送修，以免損壞到機芯。都不能接觸熱水、蒸氣，所以洗澡跟泡溫泉都不可以配戴。
                      <br /><br />有日曆的錶款建議晚上10:00~凌晨2:00，不要調整時間，因為這段時間齒輪再互相調節,
                      若去做調整容易造成齒輪磨損，這裡所指的時間，並不是現實生活中的真實時間，而是手錶顯示的時間。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 class="text-center mt-4">品牌介紹</h3>
        <hr />
        <div class="container d-md-block d-none">
          <div class="row">
            <div class="col-md-6 recommend-card px-md-0">
              <div
                class="recommend-img"
                style="
                  background-image: url(https://upload.cc/i1/2020/10/23/djGwsK.jpg);
                "
              >
                <a
                  href=""
                  class="recommend-cover"
                  @click.prevent="$router.push(`/brand/rolex`)"
                >
                  <div class="recommend-btn">See More</div>
                </a>
              </div>
            </div>
            <div class="col-md-6 recommend-card px-md-0">
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
            <div class="col-md-6 recommend-card px-md-0">
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
            <div class="col-md-6 recommend-card px-md-0">
              <div
                class="recommend-img"
                style="
                  background-image: url(https://upload.cc/i1/2020/10/23/lA0gz9.jpg);
                  background-size: auto;
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
        <div class="container d-block d-md-none">
          <div class="row">
            <div class="col-12 recommend-card px-0">
              <div
                class="recommend-img"
                style="
                  background-image: url(https://i.pinimg.com/originals/c3/af/ba/c3afba827e7299415cb7034e00bc9533.jpg);
                "
              >
                <a
                  href=""
                  class="recommend-cover"
                  @click.prevent="$router.push(`/brand/rolex`)"
                >
                  <div class="recommend-btn">See More</div>
                </a>
              </div>
            </div>
            <div class="col-12 recommend-card px-0">
              <div
                class="recommend-img"
                style="
                  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToN3nC6ShW2p-H8y85KK6Aaz2Psg5lL5OQaA&usqp=CAU);
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
            <div class="col-12 recommend-card px-0">
              <div
                class="recommend-img"
                style="
                  background-image: url(https://cdn.freebiesupply.com/logos/thumbs/2x/iwc-schaffhausen-logo.png);
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
            <div class="col-12 recommend-card px-0">
              <div
                class="recommend-img"
                style="
                  background-image: url(https://storage.seikowatches.com/production/images/2018/03/thumbnail_14145316810840.jpg);
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
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      collapse: false,
    };
  },
  methods: {
    changestyle() {
      $('#collapseOne').on('show.bs.collapse', () => {
        $('#collapseOneButton').addClass('text-secondary');
      });
      $('#collapseOne').on('hide.bs.collapse', () => {
        $('#collapseOneButton').removeClass('text-secondary');
      });
      $('#collapseTwo').on('show.bs.collapse', () => {
        $('#collapseTwoButton').addClass('text-secondary');
      });
      $('#collapseTwo').on('hide.bs.collapse', () => {
        $('#collapseTwoButton').removeClass('text-secondary');
      });
      $('#collapseThree').on('show.bs.collapse', () => {
        $('#collapseThreeButton').addClass('text-secondary');
      });
      $('#collapseThree').on('hide.bs.collapse', () => {
        $('#collapseThreeButton').removeClass('text-secondary');
      });
      $('#collapseFour').on('show.bs.collapse', () => {
        $('#collapseFourButton').addClass('text-secondary');
      });
      $('#collapseFour').on('hide.bs.collapse', () => {
        $('#collapseFourButton').removeClass('text-secondary');
      });
      $('#collapseFive').on('show.bs.collapse', () => {
        $('#collapseFiveButton').addClass('text-secondary');
      });
      $('#collapseFive').on('hide.bs.collapse', () => {
        $('#collapseFiveButton').removeClass('text-secondary');
      });
      $('#collapseSix').on('show.bs.collapse', () => {
        $('#collapseSixButton').addClass('text-secondary');
      });
      $('#collapseSix').on('hide.bs.collapse', () => {
        $('#collapseSixButton').removeClass('text-secondary');
      });
    },
  },
};
</script>
