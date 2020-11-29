<template>
  <div class="py-3">
    <div>
      <Breadcrumbs :items="item_breadcrumbs" />
    </div>
    <div>
      <v-row>
        <v-col cols="12" sm="4" md="3" lg="4">
          <div>
            <v-img
              class="avt-img"
              height="300"
              :src="require('../assets/images/duong.jpg')"
            ></v-img>
          </div>
          <div class="my-5">
            <v-btn
              :class="{ 'btn-active': step === 1 }"
              @click="step = 1"
              class="mb-4"
              color="grey darken-3"
              width="100%"
              outlined
            >
              Thông tin cá nhân
            </v-btn>
            <v-btn
              :class="{ 'btn-active': step === 2 }"
              @click="step = 2"
              class="mb-4"
              color="grey darken-3"
              width="100%"
              outlined
            >
              Danh sách yêu thích
            </v-btn>
            <v-btn
              :class="{ 'btn-active': step === 3 }"
              @click="step = 3"
              class="mb-4"
              color="grey darken-3"
              width="100%"
              outlined
            >
              Lịch sử mua hàng
            </v-btn>
            <v-btn
              :class="{ 'btn-active': step === 4 }"
              @click="step = 4"
              class="mb-4"
              color="grey darken-3"
              width="100%"
              outlined
            >
              Đổi mật khẩu
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="8" md="9" lg="6">
          <v-window v-model="step">
            <v-window-item :value="1">
              <div>
                <h4 class="d-inline red--text">{{ getUser.name }}</h4>
                <a class="d-inline float-right">Chỉnh sửa</a>
              </div>
              <v-divider class="my-3"></v-divider>
              <v-row>
                <v-col class="py-0" cols="5" sm="5" md="3">
                  <p class="mb-0 font-weight-bold">Giới tính</p>
                </v-col>
                <v-col class="py-0" cols="5">
                  <p>: Nam</p>
                </v-col>
              </v-row>
              <v-row class="py-0">
                <v-col class="py-0" cols="5" sm="5" md="3">
                  <p class="mb-0 font-weight-bold">Số điện thoại</p>
                </v-col>
                <v-col class="py-0" cols="5">
                  <p>: none</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="py-0" cols="5" sm="5" md="3">
                  <p class="mb-0 font-weight-bold">Email</p>
                </v-col>
                <v-col class="py-0" cols="7">
                  <p>: {{ getUser.email }}</p>
                </v-col>
              </v-row>
              <div>
                <h4 class="d-inline red--text">Thông tin nhận hàng</h4>
                <a class="d-inline float-right">Thêm</a>
              </div>
              <v-divider class="my-3"></v-divider>
              <div class="address">
                <div class="my-5">
                  <BoxAddress />
                </div>
                <div class="my-5">
                  <BoxAddress />
                </div>
              </div>
            </v-window-item>
            <v-window-item :value="2">
              <div>
                <h4 class="d-inline red--text">MÓN ĂN YÊU THÍCH</h4>
              </div>
              <v-divider class="my-3"></v-divider>
              <v-row v-for="item in 5" :key="item.index">
                <v-col cols="12">
                  <BoxFavourite />
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="3">
              <div>
                <h4 class="d-inline red--text">LỊCH SỬ MUA HÀNG</h4>
              </div>
              <v-divider class="my-3"></v-divider>
              <v-card>
                <v-row class="d-none d-md-flex">
                  <v-col class="text-body-2 font-weight-bold pl-6" cols="5">
                    ĐƠN HÀNG
                  </v-col>
                  <v-col
                    cols="4"
                    class="text-body-2 font-weight-bold text-center"
                  >
                    NGÀY LÊN ĐƠN
                  </v-col>
                  <v-col class="text-body-2 font-weight-bold" cols="3">
                    TỔNG TIỀN
                  </v-col>
                </v-row>
                <!-- for mobile -->
                <v-row class="d-flex d-md-none">
                  <v-col class="text-body-2 font-weight-bold pl-6" cols="6">
                    ĐƠN HÀNG
                  </v-col>
                  <v-col cols="6">
                    <p class="mb-0 float-right mr-3 text-body-2 font-weight-bold">
                      CHI TIẾT
                    </p>
                  </v-col>
                </v-row>
              </v-card>
              <v-row v-for="item in 5" :key="item.index">
                <v-col cols="12">
                  <BoxHistory />
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-col>
        <v-col cols="12" lg="2" class="d-none d-lg-flex">
          <v-img
            height="500"
            :src="require('../assets/images/POSTER_KHUYỄN MÃI.jpg')"
          >
          </v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs";
import BoxAddress from "../components/form/BoxAddress";
import BoxFavourite from "../components/BoxFavourite";
import BoxHistory from "../components/BoxHistory";
import { mapGetters } from "vuex";
export default {
  components: {
    Breadcrumbs,
    BoxAddress,
    BoxFavourite,
    BoxHistory
  },
  data() {
    return {
      step: 1,
      info: true,
      favoritesList: false,
      purchaseHistory: false,
      changePassword: false
    };
  },
  computed: {
    ...mapGetters("user", ["getUser"]),
    item_breadcrumbs() {
      return [
        {
          text: "Trang chủ",
          disabled: false,
          href: "/"
        },
        {
          text: "Thông tin cá nhân",
          disabled: false,
          href: "/userProfile"
        }
      ];
    }
  }
};
</script>

<style scoped>
a {
  color: #bcad72 !important;
}
.avt-img {
  border-radius: 10px;
  border: 1px solid red;
}
.btn-active {
  background-color: #fce59f;
  border: 1px solid red;
}
</style>
