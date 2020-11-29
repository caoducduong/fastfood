<template>
  <v-card>
    <v-card-title class="box-title d-flex justify-space-between">
      <p class="title-list-order red--text pr-3">
        DANH SÁCH ĐƠN HÀNG
      </p>
      <p class="text-h6">
        Tổng số đơn hàng
        <span class="text-h6 red--text text--darken-2 pa-2 quantity">
          56
        </span>
      </p>
    </v-card-title>
    <div class="pa-5">
      <v-row>
        <v-col cols="12" sm="10" md="6">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                class="grey lighten-3"
                dense
                hide-details="auto"
                outlined
                label="Tìm kiếm đơn hàng"
                append-icon="mdi-magnify"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                class="grey lighten-3"
                dense
                hide-details="auto"
                outlined
                label="Trạng thái"
                prepend-inner-icon="mdi-filter-outline"
                append-icon="mdi-chevron-down"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template v-slot:item.personcreate="{ item }">
        <v-chip class="personcreate red--text text--darken-3">
          {{ item.personcreate }}
        </v-chip>
      </template>
      <template v-slot:item.cart="{ item }">
        <a class="text-decoration-underline detail">
          Chi tiết
        </a>
      </template>
      <template v-slot:item.date="{ item }">
        <div class="d-block">
          <p class="mb-0">
            10:51
          </p>
          <p class="mb-0">
            12/10/2020
          </p>
        </div>
      </template>
      <template v-slot:item.receiver="{ item }">
        <div class="d-block">
          <p class="mb-0">
            Long
          </p>
          <p class="mb-0">
            035.706.6060
          </p>
        </div>
      </template>
      <template v-slot:item.totalprice="{ item }">
        <v-chip
          class="font-weight-bold text--darken-2 red--text chip-price"
          dark
        >
          {{ item.totalprice }}
        </v-chip>
      </template>
      <template v-slot:item.file="{ item }">
        <a>
          <v-icon small class="text-h5 mr-2">
            mdi-printer
          </v-icon>
        </a>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  layout: "adminDefault",
  data() {
    return {
      headers: [
        { text: "Mã đơn hàng", value: "ordercode" },
        { text: "Giỏ hàng", value: "cart" },
        { text: "Người tạo", value: "personcreate" },
        { text: "Ngày tạo", value: "date" },
        { text: "Người nhận", value: "receiver" },
        { text: "Nhân viên giao", value: "shipper" },
        { text: "Tổng tiền", value: "totalprice" },
        { text: "File in", value: "file" }
      ],
      desserts: [
        {
          ordercode: "FF00020",
          cart: "",
          personcreate: "Ad_Duong",
          date: "",
          receiver: 4.0,
          shipper: "GH_Quân",
          totalprice: "79.000 đ",
          file: ""
        },
        {
          ordercode: "FF00019",
          cart: "",
          personcreate: "Ad_Duong",
          date: "",
          receiver: 4.0,
          shipper: "GH_Quân",
          totalprice: "79.000 đ",
          file: ""
        },
        {
          ordercode: "FF00018",
          cart: "",
          personcreate: "Ad_Duong",
          date: "",
          receiver: 4.0,
          shipper: "GH_Quân",
          totalprice: "79.000 đ",
          file: ""
        },
        {
          ordercode: "FF00017",
          cart: "",
          personcreate: "Ad_Duong",
          date: "",
          receiver: 4.0,
          shipper: "GH_Quân",
          totalprice: "79.000 đ",
          file: ""
        },
        {
          ordercode: "FF00016",
          cart: "",
          personcreate: "Ad_Duong",
          date: "",
          receiver: 4.0,
          shipper: "GH_Quân",
          totalprice: "79.000 đ",
          file: ""
        },
        {
          ordercode: "FF00015",
          cart: "",
          personcreate: "Ad_Duong",
          date: "",
          receiver: 4.0,
          shipper: "GH_Quân",
          totalprice: "79.000 đ",
          file: ""
        },
        {
          ordercode: "FF00014",
          cart: "",
          personcreate: "Ad_Duong",
          date: "",
          receiver: 4.0,
          shipper: "GH_Quân",
          totalprice: "79.000 đ",
          file: ""
        },
        {
          ordercode: "FF00013",
          cart: "",
          personcreate: "Ad_Duong",
          date: "",
          receiver: 4.0,
          shipper: "GH_Quân",
          totalprice: "79.000 đ",
          file: ""
        },
        {
          ordercode: "FF00012",
          cart: "",
          personcreate: "Ad_Duong",
          date: "",
          receiver: 4.0,
          shipper: "GH_Quân",
          totalprice: "79.000 đ",
          file: ""
        },
        {
          ordercode: "FF00011",
          cart: "",
          personcreate: "Ad_Duong",
          date: "",
          receiver: 4.0,
          shipper: "GH_Quân",
          totalprice: "79.000 đ",
          file: ""
        },
        {
          ordercode: "FF00010",
          cart: "",
          personcreate: "Ad_Duong",
          date: "",
          receiver: 4.0,
          shipper: "GH_Quân",
          totalprice: "79.000 đ",
          file: ""
        },
        {
          ordercode: "FF00009",
          cart: "",
          personcreate: "Ad_Duong",
          date: "",
          receiver: 4.0,
          shipper: "GH_Quân",
          totalprice: "79.000 đ",
          file: ""
        }
      ]
    };
  },
  methods: {
    getColor(calories) {
      if (calories > 400) return "red";
      else if (calories > 200) return "orange";
      else return "green";
    }
  }
};
</script>

<style scoped>
.quantity {
  background-color: #fce08d;
  border-radius: 7px;
}
.box-title {
  border-bottom: 3px solid #bfbfbf;
  padding-bottom: 0;
}
.title-list-order {
  border-right: 3px solid #bfb7b7;
}
.detail {
  color: #b7a47a;
}
.chip-price {
  background-color: #fae6a1 !important;
}
.personcreate {
  border: 2px solid grey;
  background-color: #ffffff !important;
}
</style>
