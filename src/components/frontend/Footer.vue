<template>
  <div>
    <!--訂閱-->
    <footer>
      <section class="container-fluid py-4 bg-secondary">
        <div class="container">
          <div class="row justify-content-center">
            <div
              class="col-md-5 d-flex align-items-center justify-content-md-start
              justify-content-center mb-4 mb-md-0 mr-auto"
            >
              <span class="h4 text-white">訂閱我們取得最新商品資訊</span>
            </div>
            <div class="col-md-5">
              <div
                class="bg-custom2 form-square form-square-withicon d-flex justify-content-between"
              >
                <label for="" class="form-square-icon-left fa-lg">
                  <i class="fas fa-envelope"></i>
                </label>
                <input type="email" class="form-input" placeholder="Email" />
                <button
                  class="btn btn-lg btn-custom2 d-flex align-items-center"
                >
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="bg-primary">
        <div class="container-fluid pt-3">
          <div class="row text-white justify-content-center">
            <div class="col-md-4 d-flex flex-column text-center">
              <h5>聯絡我們</h5>
              <ul class="list-unstyled">
                <li>TEL: <a href="tel:+" class="text-white">0123456789</a></li>
                <li>
                  Email:
                  <a href="mailto:" class="text-white">watchmaster@mail.com</a>
                </li>
                <li>地址： 地球上的某一個角落</li>
              </ul>
            </div>
            <div class="col-md-4 d-flex flex-column text-center">
              <h5>Watch Master</h5>
              <p>
                Watch
                Master是一家以「比哪裡都便宜出售新品，高價買進良品」為宗旨的品牌手錶專賣店。為了迎接創業20年，Watch
                Master將店鋪擴張，且平常都有約3000支以上的款式陳列！
              </p>
            </div>

            <div class="col-md-4 text-center">
              <h5 class="mb-3">關注我們</h5>
              <a href="" class="text-white"
                ><i class="fab fa-facebook-square fa-2x mr-3 mb-2"></i
              ></a>
              <a href="#" class="text-white"
                ><i class="fab fa-twitter fa-2x mb-2"></i
              ></a>
              <br />
              <a href="#" class="text-white"
                ><i class="fas fa-envelope-open fa-2x mr-3"></i
              ></a>
              <router-link class="text-white" to="/login"
                ><i class="fas fa-tools fa-2x"></i
              ></router-link>
            </div>
            <div class="col-md-12 text-center py-2">
              僅做為個人學習使用，非商業用途。 @ 2020 Watch Master* All Rights
              Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
