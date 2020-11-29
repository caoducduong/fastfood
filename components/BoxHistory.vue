<template>
  <div>
    <v-card class="d-flex align-center" height="auto">
      <v-row>
        <v-col cols="3" md="2">
          <v-img
            class="img-product-favourite ml-2"
            width="80"
            height="80"
            :src="require('../assets/images/combo.jpg')"
          ></v-img>
        </v-col>
        <v-col cols="6" md="4">
          <p class="mb-0 font-weight-bold">Gà rán 1 miếng</p>
          <v-divider class="grey mt-3 mb-1"></v-divider>
          <div class="d-flex">
            <v-icon color="red">
              mdi-map-marker
            </v-icon>
            <p class="mb-0 text-caption grey--text text--darken-2">
              90 Nguyễn Tuân Quận Thanh Xuân, Hà Nội
            </p>
          </div>
        </v-col>
        <v-col
          class="pl-0 pl-md-3 d-flex justify-center align-center"
          cols="3"
          md="2"
        >
          <div>
            <div>
              <p class="mb-0 text-caption text-md-body-1">
                08/10/2020
              </p>
            </div>
            <div class="d-block d-md-none">
              <p class="mb-0 red--text text-body-2">
                36.000 đ
              </p>
              <p class="bg-yellow text-caption mb-0 text-sm-body-2">
                Chi tiết <span class="font-weight-bold">>></span>
              </p>
            </div>
          </div>
        </v-col>
        <v-col
          class="pt-0 pt-md-3 d-none justify-md-center d-md-flex align-md-center"
          cols="12"
          md="4"
        >
          <div>
            <p class="mb-0 red--text text-h6">
              36.000 đ
            </p>
            <p class="bg-yellow text-caption mb-0">
              Xem chi tiết <span class="font-weight-bold">>></span>
            </p>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.img-product-favourite {
  border-radius: 7px;
  border: 1px solid red;
}
.bg-yellow {
  color: #c79f30 !important;
}
</style>
