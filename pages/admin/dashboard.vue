<template>
  <div>
    <v-card>
      <v-card-title class="pt-10 d-flex align-center justify-center">
        ĐƠN HÀNG HIỆN TẠI
      </v-card-title>
      <div class="pt-3 px-3 py-sm-10 pb-5 pb-sm-5 px-sm-10">
        <v-row>
          <v-col cols="4">
            <v-card height="100%" class="pa-3 pa-sm-10 box-over">
              <div class="d-flex justify-center align-center">
                <div class="text-center">
                  <v-icon class="display-1 text-sm-h3" color="red">
                    mdi-checkbox-multiple-marked
                  </v-icon>
                  <p
                    class="mt-3 mb-0 font-weight-bold text-caption text-sm-body-1"
                  >
                    Thành công : <span class="red--text"> 12</span>
                  </p>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card height="100%" class="pa-3 pa-sm-10 box-over">
              <div class="d-flex justify-center align-center">
                <div class="text-center">
                  <v-icon class="display-1 text-sm-h3" color="red">
                    mdi-new-box
                  </v-icon>
                  <p
                    class="mt-3 mb-0 font-weight-bold text-caption text-sm-body-1"
                  >
                    Mới đặt : <span class="red--text"> 2</span>
                  </p>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card height="100%" class="pa-3 pa-sm-10 box-over">
              <div class="d-flex justify-center align-center">
                <div class="text-center">
                  <v-icon class="display-1 text-sm-h3" color="red">
                    mdi-golf-cart
                  </v-icon>
                  <p
                    class="mt-3 mb-0 font-weight-bold text-caption text-sm-body-1"
                  >
                    Đang xử lý : <span class="red--text"> 3</span>
                  </p>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-card height="100%" class="pa-3 pa-sm-10 box-over">
              <div class="d-flex justify-center align-center">
                <div class="text-center">
                  <v-icon class="display-1 text-sm-h3" color="red">
                    mdi-cart
                  </v-icon>
                  <p
                    class="mt-3 mb-0 font-weight-bold text-caption text-sm-body-1"
                  >
                    Thành công : <span class="red--text"> 0</span>
                  </p>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card height="100%" class="pa-3 pa-sm-10 box-over">
              <div class="d-flex justify-center align-center">
                <div class="text-center">
                  <v-icon class="display-1 text-sm-h3" color="red">
                    mdi-cancel
                  </v-icon>
                  <p
                    class="mt-3 mb-0 font-weight-bold text-caption text-sm-body-1"
                  >
                    Hoàn lại : <span class="red--text"> 0</span>
                  </p>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card height="100%" class="pa-3 pa-sm-10 box-over">
              <div class="d-flex justify-center align-center">
                <div class="text-center">
                  <v-icon class="display-1 text-sm-h3" color="red">
                    mdi-reload
                  </v-icon>
                  <p
                    class="mt-3 mb-0 font-weight-bold text-caption text-sm-body-1"
                  >
                    Đang giao : <span class="red--text"> 12</span>
                  </p>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <v-divider class="mx-3"></v-divider>
      <v-card-title class="red--text d-flex justify-center">
        HÔM NAY
      </v-card-title>
      <v-row>
        <v-col class="text-center" cols="12" sm="6">
          <h2 class="grey--text text--darken-2">
            TỔNG SỐ ĐƠN HÀNG
          </h2>
          <p class="text-h4 yellow--text text--darken-4">30</p>
        </v-col>
        <v-col class="text-center" cols="12" sm="6">
          <h2 class="grey--text text--darken-2">
            TỔNG DOANH THU
          </h2>
          <p class="text-h4 red--text text--darken-2">1.250.000 đ</p>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: "adminDefault"
};
</script>

<style scoped>
.box-over {
  background-color: #eaeaec !important;
}
</style>
