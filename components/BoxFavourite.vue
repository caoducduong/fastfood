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
          <v-icon color="red">
            mdi-heart
          </v-icon>
        </v-col>
        <v-col class="pl-0 pl-sm-3 d-flex justify-center align-center" cols="3" md="2">
          <div>
            <p class=" mb-0 font-weight-bold red--text subtitle-1">
              36.000 đ
            </p>
            <p
              class="mb-0 d-inline-block grey--text subtitle-2 text-decoration-line-through"
            >
              50.000 đ
            </p>
          </div>
        </v-col>
        <v-col class="pt-0 pt-md-3 justify-center d-flex align-center" cols="12" md="4">
          <v-btn height="32" color="red darken-2" class="px-6 white--text">
            MUA NGAY
          </v-btn>
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
</style>
