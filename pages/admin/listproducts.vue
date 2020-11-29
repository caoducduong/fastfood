<template>
  <v-card>
    <v-card-title class="pb-3 box-title d-flex justify-space-between">
      <p class="title-list-order red--text pr-3">
        DANH SÁCH SẢN PHẨM
      </p>
      <v-btn class="chip-price" dense @click="addProduct()"
        >THÊM SẢN PHẨM MỚI</v-btn
      >
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
                label="Tìm kiếm sản phẩm"
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
                label="Danh mục"
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
      <template v-slot:item.actions="{ item }">
        <v-icon
          @click="editProduct(item)"
          color="yellow darken-3"
          small
          class="text-h5 mr-2"
        >
          mdi-pencil
        </v-icon>
        <v-icon @click="deleteStaff(item)" class="text-h5" small>
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:item.image="{ item }">
        <v-img
          class="image-product"
          height="50"
          width="65"
          :src="require(`../../assets/images/${item.image}`)"
        >
        </v-img>
      </template>
      <template v-slot:item.prices="{ item }">
        <div class="d-flex">
          <p class="mb-0 red--text">
            {{ item.price | formatCurrency }}
          </p>
          <p class="mb-0 pl-2 grey--text text-decoration-line-through">
            {{ item.oldPrice | formatCurrency }}
          </p>
        </div>
      </template>
      <template v-slot:item.detail="{ item }">
        <a class="text-decoration-underline detail">
          Chi tiết
        </a>
      </template>
    </v-data-table>
    <ProductDialog
      :title="titleDialog"
      :product="productInfo"
      :dialog="dialog"
      @onClose="onClose"
    />
    <DeleteDialog
      @onClose="closeDelete"
      :dialog="dialogDelete"
      :title="titleDialogDelete"
    />
  </v-card>
</template>

<script>
// store
import { mapState } from "vuex";
// components
import ProductDialog from "../../components/dialog/ProductDialog";
import DeleteDialog from "../../components/dialog/DeleteDialog";

export default {
  layout: "adminDefault",
  components: {
    ProductDialog
  },
  data() {
    return {
      titleDialogDelete: {
        title: "",
        subTitle: ""
      },
      dialogDelete: false,
      titleDialog: "",
      dialog: false,
      productInfo: {},
      headers: [
        { text: "Hình ảnh ", value: "image" },
        { text: "Tên sản phẩm", value: "productName" },
        { text: "Giá tiền", value: "prices" },
        { text: "Danh mục", value: "type" },
        { text: "Chi tiết", value: "detail" },
        { text: "Hành động", value: "actions" }
      ]
    };
  },
  computed: {
    ...mapState("products", ["product"]),
    desserts() {
      if (this.product) {
        return this.product.map(x => {
          return {
            image: x.link,
            productName: x.name,
            // prices: {
            //   oldPrice: x.oldPrice,
            //   price: x.price
            // },
            price: x.price,
            oldPrice: x.oldPrice,
            type: x.type
          };
        });
      }
    }
  },
  methods: {
    getColor(calories) {
      if (calories > 400) return "red";
      else if (calories > 200) return "orange";
      else return "green";
    },
    onClose() {
      this.dialog = false;
    },
    editProduct(item) {
      this.titleDialog = "SỬA THÔNG TIN SẢN PHẨM";
      console.log(item);
      this.productInfo = item;
      this.dialog = true;
    },
    addProduct() {
      this.productInfo = {};
      this.titleDialog = "THÊM SẢN PHẨM";
      this.dialog = true;
    },
    deleteStaff(item) {
      this.titleDialogDelete = {
        title: "XÓA SẢN PHẨM ",
        subTitle: "Bạn có chắc muốn xóa sản phẩm này ?"
      };
      this.dialogDelete = true;
    },
    closeDelete() {
      this.dialogDelete = false;
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
.image-product {
  border-radius: 5px;
  border: 1px solid grey;
}
</style>
