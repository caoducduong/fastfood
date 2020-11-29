<template>
  <div>
    <div class="my-3">
      <Breadcrumbs :items="item_breadcrumbs" />
    </div>
    <v-row>
      <v-col cols="12" md="10">
        <v-card class="pa-md-10">
          <v-row>
            <v-col cols="12" sm="6">
              <v-stepper class="ff-steps" non-linear v-model="e6" vertical>
                <v-stepper-step class="pr-0" color="red" :complete="e6 > 1" step="1">
                  <span class="red--text text--darken-1 font-weight-bold">
                    XÁC NHẬN ĐƠN HÀNG
                  </span>
                  <v-card class="mt-3" flat height="auto">
                    <v-card-subtitle class="py-0">
                      <p class="mb-0">+ Gà rán 1 miếng</p>
                    </v-card-subtitle></v-card
                  >
                </v-stepper-step>
                <v-stepper-step
                  class="pb-0 pr-0"
                  color="red"
                  :complete="e6 > 2"
                  step="2"
                >
                  <span class="red--text font-weight-bold">
                    ĐANG GIAO HÀNG
                  </span>
                  <div>
                    <v-card class="mt-3" flat height="auto">
                      <v-card-subtitle class="py-0">
                        <p class="mb-0 grey--text text--darken-1">
                          <span class="font-weight-bold"
                            >Nhân viên giao hàng</span
                          >: Nguyễn Văn Nam
                        </p>
                        <p class="mb-0 grey--text text--darken-1">
                          <span class="font-weight-bold">Phone</span>:
                          0357066060
                        </p>
                        <p class="mb-0 grey--text text--darken-1">
                          <span class="font-weight-bold">Biển số xe</span>: 29B1
                          - 11311
                        </p>
                      </v-card-subtitle></v-card
                    >
                  </div>
                </v-stepper-step>
                <v-stepper-step
                  class="pb-0 pr-0"
                  color="red"
                  :complete="e6 > 3"
                  step="3"
                >
                  <span class="red--text font-weight-bold">
                    ĐÃ GIAO HÀNG ĐẾN NƠI
                  </span>
                  <div>
                    <v-card class="mt-3" flat height="auto">
                      <v-card-subtitle class="py-0">
                        <p class="mb-0 grey--text text--darken-1">
                          90 Nguyễn Tuân
                        </p>
                        <p class="mb-0 grey--text text--darken-1">
                          Phường Thanh Xuân Trung
                        </p>
                        <p class="mb-0 grey--text text--darken-1">
                          Quận Thanh Xuân, Hà Nội
                        </p>
                      </v-card-subtitle></v-card
                    >
                  </div>
                </v-stepper-step>
                <v-stepper-step
                  class="pb-0 pr-0"
                  color="red"
                  :complete="e6 > 4"
                  step="4"
                >
                  <span class="red--text font-weight-bold">
                    GIAO HÀNG THÀNH CÔNG
                  </span>
                </v-stepper-step>
              </v-stepper>
            </v-col>
            <v-col class="px-4 px-sm-10 px-md-0 d-flex justify-center align-center" cols="12" sm="6">
              <v-card
                width="400"
                flat
                class="text-center py-5 card-rating-checkorder"
              >
                <v-card-title class="d-flex justify-center">
                  <p class="mb-0 red--text text--darken-1">
                    Vui lòng đánh giá
                  </p>
                </v-card-title>
                <div>
                  <v-rating
                    class="ml-3"
                    color="amber"
                    dense
                    half-increments
                    size="30"
                  ></v-rating>
                </div>
                <div class="px-3 mt-5">
                  <v-textarea
                    class="textarea-rating"
                    color="grey darken-2"
                    outlined
                    name="input-7-1"
                    filled
                    label="Vui lòng viết những đánh giá của bạn ở đây !"
                    auto-grow
                    append-icon="mdi-folder-image"
                  ></v-textarea>
                </div>
                <v-card-actions class="d-flex justify-center">
                  <v-btn class="px-5 white--text btn-rating-checkorder">
                    đánh giá
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" md="2" class="d-none d-md-inline">
        <v-img :src="require('../assets/images/POSTER_KHUYỄN MÃI.jpg')">
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs";
export default {
  components: {
    Breadcrumbs
  },
  data() {
    return {
      e6: 5
    };
  },
  computed: {
    item_breadcrumbs() {
      return [
        {
          text: "Trang chủ",
          disabled: false,
          href: "/"
        },
        {
          text: "Kiểm tra đơn hàng",
          disabled: false,
          href: "/checkorder"
        }
      ];
    }
  }
};
</script>

<style>
.ff-steps {
  height: 100% !important;
}
.btn-rating-checkorder {
  background-color: #c79f2c !important;
}
.card-rating-checkorder {
  border-radius: 5px;
  border: 2px solid #909090 !important;
}
</style>
