<template>
  <div class="box-address">
    <v-card class="px-4 py-2">
      <v-row>
        <v-col col="9" sm="9">
          <v-row>
            <v-col>
              <div class="d-flex">
                <v-icon class="d-block red--text">mdi-location-enter</v-icon>
                <div>
                  <v-card-subtitle class="py-0">
                    Cao Dai Quang (Mac dinh)
                  </v-card-subtitle>
                  <v-card-subtitle class="py-0">
                    126 Vĩnh Hưng, Phường Hoàng Mai, Quận Hai Bà Trưng, Hà Nội
                  </v-card-subtitle>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="d-flex">
                <v-icon class="red--text">mdi-phone</v-icon>
                <div>
                  <v-card-subtitle class="py-0">
                    0357066060
                  </v-card-subtitle>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="d-flex">
                <v-icon class="red--text">mdi-email</v-icon>
                <div>
                  <v-card-subtitle class="py-0">
                    quangcd@icts.vn
                  </v-card-subtitle>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3" sm="3">
            <a class="d-inline float-right">Chỉnh sửa</a>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  color: #bcad72 !important;
}
</style>
