<template>
  <div class="py-3">
    <div>
      <Breadcrumbs :items="item_breadcrumbs" />
    </div>
    <div>
      <v-row>
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" sm="6">
              <v-img
                class="img-box-product"
                :src="require(`../../assets/images/${isProduct.link}`)"
              >
                <div class="disscount">
                  <p class="text-subtitle-2 red--text mb-0 pt-1">
                    20%
                  </p>
                </div>
              </v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="d-flex justify-space-between">
                <div class="text-h5 font-weight-bold">
                  {{ isProduct.name }}
                </div>
                <v-icon class="red--text">
                  mdi-heart
                </v-icon>
              </div>
              <v-row>
                <v-col cols="5" sm="5">
                  <div
                    class="d-block red--text font-weight-bold text-h5 subtitle-1"
                  >
                    {{ isProduct.price | formatCurrency }}
                  </div>
                  <div
                    class="d-block grey--text text-h6 text-decoration-line-through"
                  >
                    <p>{{ isProduct.oldPrice | formatCurrency }}</p>
                  </div>
                  <div>
                    <v-row align="center" class="pb-3 mx-0">
                      <v-rating
                        :value="isProduct.rate"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>

                      <div class="grey--text ml-1">(413)</div>
                    </v-row>
                  </div>
                  <!-- <div class="d-inline-block red--text subtitle-1 py-3">
                    <v-icon>mdi-car</v-icon>
                  </div> -->
                </v-col>
                <v-col cols="7" sm="7" class="gr-btn-left">
                  <v-btn
                    class="my-2 white--text float-right"
                    color="red"
                    width="170"
                    small
                    @click="onBuyNow()"
                  >
                    MUA NGAY
                  </v-btn>
                  <v-btn
                    @click="addCart()"
                    class="my-2 bg-yellow white--text float-right"
                    width="170"
                    small
                  >
                    THÊM VÀO GIỎ HÀNG
                  </v-btn>
                  <v-btn
                    class="my-2 float-right"
                    outlined
                    color="red"
                    width="170"
                    small
                  >
                    <v-icon dense>mdi-plus</v-icon>
                    YÊU THÍCH
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <!-- detail -->
          <div>
            <v-card>
              <v-tabs class="blue-grey lighten-5" v-model="tab">
                <v-tab v-for="item in items" :key="item.tab">
                  {{ item.tab }}
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <div class="detail-product">
                        <v-row class="px-3">
                          <v-col
                            class="d-flex justify-center align-center border-box border-left-box"
                            cols="3"
                            sm="2"
                            md="2"
                          >
                            <p class="mb-0 font-weight-bold">
                              Tên Món Ăn
                            </p>
                          </v-col>
                          <v-col class="border-box" cols="9" sm="10" md="10">
                            {{ isProduct.name }}
                          </v-col>
                        </v-row>
                        <v-row class="px-3">
                          <v-col
                            class="d-flex justify-center align-center border-box border-left-box"
                            cols="3"
                            sm="2"
                            md="2"
                          >
                            <p class="font-weight-bold mb-0">Đặc điểm</p>
                          </v-col>
                          <v-col class="border-box" cols="9" sm="10" md="10">
                            Thơm ngon to nhiều nhân
                          </v-col>
                        </v-row>
                        <v-row class="px-3">
                          <v-col
                            class="d-flex justify-center border-left-box"
                            cols="3"
                            sm="2"
                            md="2"
                          >
                            <p class="font-weight-bold mb-0">
                              Nguyên Liệu
                            </p>
                          </v-col>
                          <v-col cols="9" sm="10" md="10">
                            <ul class="pl-0">
                              <li>Thịt bò</li>
                              <li>Bột mì</li>
                              <li>Bơ</li>
                              <li>Bột Năng</li>
                              <li>Bột gia vị</li>
                              <li>Trứng gà</li>
                              <li>Sữa tươi không đường</li>
                              <li>Phô mai</li>
                              <li>Bột nêm</li>
                              <li>Bột tỏi</li>
                              <li>Tiêu đen</li>
                            </ul>
                          </v-col>
                        </v-row>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-row class="mt-2">
                      <v-col
                        cols="12"
                        sm="3"
                        class="pr-0 pl-sm-4 text-center d-flex justify-center align-center"
                      >
                        <div>
                          <h1 class="display-3 font-weight-bold">4.5</h1>
                          <div>
                            <v-rating
                              :value="5"
                              color="amber"
                              dense
                              readonly
                              size="20"
                            ></v-rating>
                            <p class="mb-0">( 120 Người đánh giá )</p>
                          </div>
                        </div>
                      </v-col>
                      <v-col cols="12" sm="9" class="px-7">
                        <v-row>
                          <v-col class="py-0" cols="7" sm="8">
                            <div class="line-rate-box my-2 text-center">
                              <v-card
                                flat
                                width="69%"
                                height="12"
                                class="line-rate text-center"
                              >
                              </v-card>
                            </div>
                          </v-col>
                          <v-col
                            class="pl-0 pl-sm-3 py-0 d-flex align-center"
                            cols="5"
                            sm="4"
                          >
                            <div class="d-flex mb-n1">
                              <v-rating
                                class="d-flex justify-center"
                                :value="5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                              ></v-rating>
                              <span
                                class="ml-1 ml-sm-2 grey--text text--darken-3"
                                >69%</span
                              >
                            </div>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col class="py-0" cols="7" sm="8">
                            <div class="line-rate-box my-2 text-center">
                              <v-card
                                flat
                                width="15%"
                                height="12"
                                class="line-rate text-center"
                              >
                              </v-card>
                            </div>
                          </v-col>
                          <v-col
                            class="pl-0 pl-sm-3 py-0 d-flex align-center"
                            cols="5"
                            sm="4"
                          >
                            <div class="d-flex mb-n1">
                              <v-rating
                                class="d-flex justify-center"
                                :value="4"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                              ></v-rating>
                              <span
                                class="ml-1 ml-sm-2 grey--text text--darken-3"
                                >15%</span
                              >
                            </div>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col class="py-0" cols="7" sm="8">
                            <div class="line-rate-box my-2 text-center">
                              <v-card
                                flat
                                width="11%"
                                height="12"
                                class="line-rate text-center"
                              >
                              </v-card>
                            </div>
                          </v-col>
                          <v-col
                            class="pl-0 pl-sm-3 py-0 d-flex align-center"
                            cols="5"
                            sm="4"
                          >
                            <div class="d-flex mb-n1">
                              <v-rating
                                class="d-flex justify-center"
                                :value="3"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                              ></v-rating>
                              <span
                                class="ml-1 ml-sm-2 grey--text text--darken-3"
                                >03%</span
                              >
                            </div>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col class="py-0" cols="7" sm="8">
                            <div class="line-rate-box my-2 text-center">
                              <v-card
                                flat
                                width="35%"
                                height="12"
                                class="line-rate text-center"
                              >
                              </v-card>
                            </div>
                          </v-col>
                          <v-col
                            class="pl-0 pl-sm-3 py-0 d-flex align-center"
                            cols="5"
                            sm="4"
                          >
                            <div class="d-flex mb-n1">
                              <v-rating
                                class="d-flex justify-center"
                                :value="2"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                              ></v-rating>
                              <span
                                class="ml-1 ml-sm-2 grey--text text--darken-3"
                                >11%</span
                              >
                            </div>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col class="py-0" cols="7" sm="8">
                            <div class="line-rate-box my-2 text-center">
                              <v-card
                                flat
                                width="07%"
                                height="12"
                                class="line-rate text-center"
                              >
                              </v-card>
                            </div>
                          </v-col>
                          <v-col
                            class="pl-0 pl-sm-3 py-0 d-flex align-center"
                            cols="5"
                            sm="4"
                          >
                            <div class="d-flex mb-n1">
                              <v-rating
                                class="d-flex justify-center"
                                :value="1"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                              ></v-rating>
                              <span
                                class="ml-1 ml-sm-2 grey--text text--darken-3"
                                >02%</span
                              >
                            </div>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                    <v-divider class="grey mt-5 mx-4"></v-divider>
                    <v-card-text
                      class="pb-0 pt-0"
                      v-for="item in 3"
                      :key="item.index"
                    >
                      <AComment />
                      <v-divider class="grey"></v-divider>
                    </v-card-text>
                    <!-- <div class="px-6 py-2" v-if="isCheckUser">
                      <v-row>
                        <v-col cols="12" sm="9">
                          <v-text-field
                            dense
                            hide-details="auto"
                            outlined
                            label="Viết đánh giá ở đây !"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="3" class="text-center">
                          <v-btn class="bg-yellow white--text" width="80%">
                            ĐÁNH GIÁ
                          </v-btn>
                        </v-col>
                        <v-col cols="12" class="d-flex">
                          <p class="mb-0">Đánh giá sao *:</p>
                          <v-rating
                            class="ml-3"
                            color="amber"
                            dense
                            half-increments
                            size="20"
                          ></v-rating>
                        </v-col>
                      </v-row>
                    </div> -->
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="red--text text-body-2 font-weight-bold">
            COMBO ĐẶC BIỆT
          </div>
          <v-divider class="my-2"></v-divider>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="12"
              lg="12"
              class="pb-2"
              v-for="item in 4"
              :key="item.index"
            >
              <Short />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "../../components/Breadcrumbs";
import Short from "../../components/Short";
import AComment from "../../components/AComment";

import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    Breadcrumbs,
    Short,
    AComment
  },
  data() {
    return {
      tab: null,
      items: [{ tab: "MÓN ĂN" }, { tab: "ĐÁNH GIÁ" }]
    };
  },
  computed: {
    ...mapState("products", ["product"]),
    ...mapGetters("user", ["isCheckUser", "getUser"]),
    isProduct() {
      // console.log(this.product);
      const id = this.$route.params.id;
      return this.product.find(x => {
        return x.id === id;
      });
    },
    item_breadcrumbs() {
      return [
        {
          text: "Trang chủ",
          disabled: false,
          href: "/"
        },
        {
          text: "Chi Tiết Món Ăn",
          disabled: false,
          href: "/",
          disabled: true
        }
      ];
    }
  },
  methods: {
    ...mapActions("products", ["addToCart", "buyNow"]),
    addCart() {
      if (this.isCheckUser) {
        this.addToCart({
          id: this.isProduct.id,
          quantity: 1,
          pick: true
        });
      } else {
        this.$router.push("/signin");
      }
    },
    onBuyNow() {
      if (this.isCheckUser) {
        this.buyNow({
          id: this.isProduct.id,
          quantity: 1,
          pick: true
        });
        this.$router.push("/orderconfirmation");
      } else {
        this.$router.push("/signin");
      }
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
.detail-product {
  border: 3px solid #d5d4d5;
}
.bg-yellow {
  background-color: #c79f30 !important;
}
.img-box-product {
  position: relative;
  border-radius: 8px;
}
.border-box {
  border-bottom: 3px solid #d5d4d5;
}
.border-left-box {
  border-right: 3px solid #d5d4d5;
}
.disscount {
  height: 27px;
  width: 45px;
  background-color: #f2e92a;
  text-align: center;
  display: flex;
  justify-content: center;
  position: absolute;
  border-radius: 5px;
  right: 10px;
  top: 7px;
  /* border-bottom: 10px solid #f0f0f0;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent; */
}
.tabs-product-detail {
  background-color: red !important;
}
.line-rate-box {
  border-radius: 20px;
  height: 13px;
  background-color: #d8d8d8;
}
.line-rate {
  background-color: #c79f30 !important;
  border-radius: 20px;
}
/* @media screen and (max-width: 600px) {
  .gr-btn-left {
    display: grid;
  }
} */
</style>
