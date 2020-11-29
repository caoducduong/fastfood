<template>
  <div>
    <div class="my-5">
      <v-img :src="require('../assets/images/contact.png')"> </v-img>
    </div>
    <div>
      <v-row>
        <v-col cols="12" sm="5" md="3" class="pt-0">
          <v-card class="white--text container card-address py-8">
            <div class="mb-3">
              <div class="d-flex">
                <v-icon class="text-h5 white--text">mdi-map-marker</v-icon>
                <p class="mb-0 ml-2 font-weight-bold">
                  Địa Chỉ :
                </p>
              </div>
              <p class="mb-0 ml-1">
                Số 90 Nguyễn Tuân, Quận Thanh Xuân, TP. Hà Nội
              </p>
            </div>
            <div class="mb-3">
              <div class="d-flex mb-1">
                <v-icon class="text-h5 white--text">mdi-phone</v-icon>
                <p class="mb-0 ml-2 font-weight-bold">
                  Điện Thoại :
                </p>
              </div>
              <p class="ml-1">(+84-28) 357066060</p>
              <p class="ml-1">(+84-28) 357066060</p>
            </div>
            <div class="mb-3">
              <div class="d-flex">
                <v-icon class="text-h5 white--text">mdi-email</v-icon>
                <p class="mb-0 ml-2 font-weight-bold">
                  Email :
                </p>
              </div>
              <p class="mb-0 ml-1">infofashfood@gmail.com</p>
            </div>
          </v-card>
        </v-col>
        <v-col class="pt-0" cols="12" sm="7" md="9">
          <v-card class="container px-7 card-contact">
            <v-row>
              <v-col
                class="d-flex align-center font-weight-bold"
                cols="12"
                sm="3"
                md="2"
              >
                <p class="mb-0">
                  Họ Và Tên
                </p>
              </v-col>
              <v-col cols="12" sm="9" md="10">
                <v-text-field
                  hide-details="auto"
                  dense
                  outlined
                  label="Họ Và Tên"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                class="d-flex align-center font-weight-bold"
                cols="12"
                sm="3"
                md="2"
              >
                <p class="mb-0">
                  Số điện thoại
                </p>
              </v-col>
              <v-col cols="12" sm="9" md="10">
                <v-text-field
                  type="number"
                  hide-details="auto"
                  dense
                  outlined
                  label="Số điện thoại"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                class="d-flex align-center font-weight-bold"
                cols="12"
                sm="3"
                md="2"
              >
                <p class="mb-0">
                  Email
                </p>
              </v-col>
              <v-col cols="12" sm="9" md="10">
                <v-text-field
                  type="email"
                  hide-details="auto"
                  dense
                  outlined
                  label="Email"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                class="d-flex align-center font-weight-bold"
                cols="12"
                sm="3"
                md="2"
              >
                <p class="mb-0">
                  Địa chỉ
                </p>
              </v-col>
              <v-col cols="12" sm="9" md="10">
                <v-text-field
                  hide-details="auto"
                  dense
                  outlined
                  label="Địa chỉ"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex font-weight-bold" cols="12"
                sm="3"
                md="2">
                <p class="mb-0">
                  Lời nhắn
                </p>
              </v-col>
              <v-col cols="12" sm="9" md="10">
                <v-textarea
                  hide-details="auto"
                  dense
                  outlined
                  label="Lời nhắn"
                >
                </v-textarea>
              </v-col>
            </v-row>
            <div class="d-flex justify-center align-center my-4">
              <v-btn height="35" class="white--text px-10 btn-submit">
                GỬI NGAY
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-address {
  background-color: #f0293c !important;
  border-radius: 8px;
}
.card-contact {
  border-radius: 8px;
}
.btn-submit {
  background-color: #f0293c !important;
}
</style>
