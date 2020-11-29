<template>
  <div>
    <v-card>
      <v-card-title class="red--text">
        TẠO ĐƠN HÀNG MỚI
      </v-card-title>
      <v-row>
        <v-col cols="12" md="7">
          <div class="box-background">
            <v-card-subtitle
              class="background-custom pt-3 text-body-1 font-weight-bold"
            >
              Thông tin đơn hàng
            </v-card-subtitle>

            <div class="d-block pa-3">
              <p class="mb-0 grey--text text--darken-3">
                Sản phẩm <span class="red--text">*</span>
              </p>
              <div class="pl-0 d-flex col-10 justify-center align-center">
                <v-text-field
                  class="white"
                  outlined
                  dense
                  hide-details="auto"
                  label="Nhập tên, mã sản phẩm"
                ></v-text-field>
                <v-btn color="red lighten-1" class="ml-3 white--text">
                  THÊM
                </v-btn>
              </div>
            </div>
            <div class="px-3">
              <v-data-table
                :hide-default-footer="true"
                class="table-create"
                :headers="headers"
              ></v-data-table>
              <v-card class="mt-3 card-price" flat>
                <v-row>
                  <v-col cols="9" class="text-right">
                    <p class="mb-0">
                      Tổng :
                    </p>
                  </v-col>
                  <v-col cols="3" class="text-right">
                    <p class="mb-0 mr-3">
                      0 đ
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="9" class="text-right">
                    <p class="mb-0">
                      Phí vận chuyển :
                    </p>
                  </v-col>
                  <v-col cols="3" class="text-right">
                    <p class="mb-0 mr-3">
                      0 đ
                    </p>
                  </v-col>
                </v-row>
                <v-row class="totalPrice mx-0">
                  <v-col cols="9" class="text-right">
                    <p class="mb-0 red--text">
                      Tổng phải trả :
                    </p>
                  </v-col>
                  <v-col cols="3" class="text-right">
                    <p class="mb-0 mr-3 red--text">
                      0 đ
                    </p>
                  </v-col>
                </v-row>
              </v-card>
            </div>
            <div class="pa-3">
              <v-row>
                <v-col cols="12" sm="4">
                  <div class="pa-2 box-shipper text-center">
                    <p class="mb-0 font-weight-medium">Nhân viên vận chuyển</p>
                  </div>
                </v-col>
                <v-col cols="12" sm="8" class="pl-3 pl-sm-0">
                  <v-text-field
                    class="white"
                    hide-details="auto"
                    dense
                    outlined
                    append-icon="mdi-chevron-down"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5">
          <div class="box-background">
            <v-card-subtitle
              class="background-custom pt-3 text-body-1 font-weight-bold"
            >
              Thông tin khách hàng
            </v-card-subtitle>
            <div class="d-block pa-3">
              <div class="mb-3">
                <p class="mb-0 grey--text text--darken-3">
                  Sản phẩm <span class="red--text">*</span>
                </p>
                <v-text-field
                  class="white"
                  dense
                  hide-details="auto"
                  outlined
                  label="Họ tên khách hàng"
                >
                </v-text-field>
              </div>
              <div class="mb-3">
                <p class="mb-0 grey--text text--darken-3">
                  Số điện thoại <span class="red--text">*</span>
                </p>
                <v-text-field
                  class="white"
                  dense
                  hide-details="auto"
                  outlined
                  label="Số điện thoại"
                >
                </v-text-field>
              </div>
              <div class="mb-3">
                <p class="mb-0 grey--text text--darken-3">
                  Email
                </p>
                <v-text-field
                  class="white"
                  dense
                  hide-details="auto"
                  outlined
                  label="Email khách hàng"
                >
                </v-text-field>
              </div>
              <div class="mb-3">
                <p class="mb-0 grey--text text--darken-3">
                  Tỉnh thành - Quận huyện
                </p>
                <div>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        hide-details="auto"
                        dense
                        outlined
                        append-icon="mdi-chevron-down"
                        label="Tỉnh thành"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        hide-details="auto"
                        dense
                        outlined
                        append-icon="mdi-chevron-down"
                        label="Quận huyện"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </div>
              </div>
              <div class="mb-3">
                <p class="mb-0 grey--text text--darken-3">
                  Địa chỉ
                </p>
                <v-text-field
                  class="white"
                  dense
                  hide-details="auto"
                  outlined
                  label="Số nhà / ngõ / ngách"
                >
                </v-text-field>
              </div>
              <div class="mb-3">
                <p class="mb-0 grey--text text--darken-3">
                  Ghi chú của khách hàng
                </p>
                <v-text-field
                  class="white"
                  dense
                  hide-details="auto"
                  outlined
                  label="Ghi chú của khách hàng"
                >
                </v-text-field>
              </div>
            </div>
          </div>
          <div class="mt-2 box-background">
            <v-card-subtitle
              class="background-custom pt-3 text-body-1 font-weight-bold"
            >
              Phương thức thanh toán
            </v-card-subtitle>
            <div class="pa-3">
              <v-radio-group row>
                <v-radio label="Tiền mặt" value="radio-1"></v-radio>
                <v-radio label="Thẻ ngân hàng" value="radio-2"></v-radio>
              </v-radio-group>
            </div>
          </div>
          <div class="px-3">
            <v-row>
              <v-col cols="12" sm="6"
                ><v-btn width="100%" outlined dense class="white--text btn-left"
                  >Nhập lại</v-btn
                ></v-col
              >
              <v-col cols="12" sm="6"
                ><v-btn
                  width="100%"
                  outlined
                  dense
                  class="white--text btn-right"
                  >Tạo đơn hàng</v-btn
                ></v-col
              >
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: "adminDefault",
  data() {
    return {
      // headers: ['stt', 'Tên sản phẩm', 'Số lượng', 'Giá']
      headers: [
        {
          text: "STT",
          value: "stt"
        },
        {
          text: "Tên sản phẩm",
          value: "productName"
        },
        {
          text: "Số lượng",
          value: "quantity"
        },
        {
          text: "Giá",
          value: "price"
        }
      ]
    };
  }
};
</script>

<style scoped>
.background-custom {
  background-color: #fce08d !important;
}
.box-background {
  background-color: #f2f3f7;
}
.table-create {
  border: 1px solid #cbc8c8;
}
.totalPrice {
  background-color: #ede8e8;
  border-top: 1px solid #cbc8c8;
}
.box-shipper {
  background-color: #ede8e8;
  border-top: 1px solid #cbc8c8;
  border-radius: 7px;
}
.card-price {
  border: 1px solid #cbc8c8;
}
.btn-left {
  background-color: #c4a02d !important;
  border-radius: 7px;
}
.btn-right {
  background-color: #f1293a !important;
  border-radius: 7px;
}
</style>
