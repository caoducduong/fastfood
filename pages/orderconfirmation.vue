<template>
  <div>
    <v-row>
      <v-col cols="12" md="7">
        <v-card class="mb-2">
          <v-row class="container py-0">
            <v-col cols="7" class="py-2 d-flex align-center">
              <v-icon
                class="black--text ac-back"
                @click="$router.push('/cart')"
              >
                mdi-keyboard-backspace
              </v-icon>
              <p class="ml-3 mb-0 grey--text text--darken-3">
                Sản phẩm ( {{ totalPick.length }} )
              </p>
            </v-col>
          </v-row>
        </v-card>
        <v-card>
          <div v-for="item in totalPick" :key="item.index">
            <ProductConfirm :product="item" />
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <v-card>
          <v-card-title class="red--text">
            Địa chỉ nhận hàng:
          </v-card-title>
          <v-card-subtitle class="d-flex pb-0">
            <div class="col-1 pl-0 py-0">
              <v-icon class="red--text">mdi-map-marker</v-icon>
            </div>
            <div class="col-11 pl-2 py-0">
              <v-row>
                <v-col cols="9" class="pt-0 pr-0 py-0">
                  <p class="mb-0 font-weight-medium text-body-1">
                    {{ getUser.name }}
                  </p>
                  <p>
                    126 Vĩnh Hưng, Phường Hoàng Mai, Quận Hai Bà Trưng, Hà Nội
                  </p>
                </v-col>
                <v-col cols="3 pr-0 pt-0 py-0">
                  <a
                    class="text-caption text-sm-body-2 float-right text-decoration-none"
                    >Chỉnh sửa</a
                  >
                </v-col>
              </v-row>
            </div>
          </v-card-subtitle>
          <v-card-subtitle class="d-flex pb-0">
            <div class="col-1 pl-0 py-0">
              <v-icon class="red--text">mdi-phone</v-icon>
            </div>
            <div class="col-11 pl-2 py-0">
              <v-row>
                <v-col cols="9" class="pt-0 pr-0 py-0">
                  <p class="mb-0 font-weight-medium text-body-1">0969304401</p>
                </v-col>
                <v-col cols="3 pr-0 pt-0 py-0">
                  <a
                    class="text-caption text-sm-body-2 float-right text-decoration-none"
                    >Chỉnh sửa</a
                  >
                </v-col>
              </v-row>
            </div>
          </v-card-subtitle>
          <v-card-subtitle class="d-flex">
            <div class="col-1 pl-0 py-0">
              <v-icon class="red--text">mdi-map-marker</v-icon>
            </div>
            <div class="col-11 pl-2 py-0">
              <v-row>
                <v-col cols="9" class="pt-0 pr-0 py-0">
                  <p class="mb-0 font-weight-medium text-body-1">
                    {{ getUser.email }}
                  </p>
                </v-col>
                <v-col cols="3 pr-0 pt-0 py-0">
                  <a
                    class="text-caption text-sm-body-2 float-right text-decoration-none"
                    >Chỉnh sửa</a
                  >
                </v-col>
              </v-row>
            </div>
          </v-card-subtitle>

          <v-divider class="mx-5"></v-divider>
          <v-card-title class="red--text">
            Thông tin đơn hàng:
          </v-card-title>
          <v-card-subtitle>
            <div class="my-1">
              <span class="text-body-1"
                >Tạm tính ( {{ totalPick.length }} sản phẩm )</span
              >
              <span class="text-body-1 red--text float-right">
                {{ price | formatCurrency }}
              </span>
            </div>
            <div class="my-1">
              <span class="text-body-1">Phí giao hàng</span>
              <span class="text-body-1 red--text float-right">
                {{ deliveryCharges | formatCurrency }}
              </span>
            </div>
            <div class="my-1">
              <span class="text-body-1">Phương thức thanh toán</span>
              <a class="text-body-1 text-decoration-underline float-right">
                Tiền mặt
              </a>
            </div>
          </v-card-subtitle>
          <v-divider class="mx-5"></v-divider>
          <v-card-title>
            <div class="total-price">
              <span class="grey--text text--darken-2">
                TỔNG CỘNG
              </span>
              <span class="red--text float-right">
                {{ totalPrice | formatCurrency }}
              </span>
              <v-btn
                :disabled="purchased"
                @click="buyProduct()"
                width="100%"
                color="red"
                class="darken-3 d-block white--text mt-4"
              >
                XÁC NHẬN ĐƠN HÀNG
                <v-progress-circular
                  v-if="purchased"
                  class="ml-2"
                  size="20"
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </v-btn>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <Dialog :dialog="dialogSuccess" />
  </div>
</template>

<script>
import ProductInCart from "../components/cart/product";
import ProductConfirm from "../components/cart/ProductConfirm";
import { mapGetters, mapActions } from "vuex";
import productVue from "~/components/cart/product.vue";
import Dialog from "~/components/dialog/Dialog";

export default {
  components: {
    ProductInCart,
    ProductConfirm,
    Dialog
  },
  data() {
    return {
      checkAll: null,
      deliveryCharges: 15000,
      purchased: false,
      dialogSuccess: {}
    };
  },
  computed: {
    ...mapGetters("products", ["getProductInCart"]),
    ...mapGetters("user", ["getUser"]),
    totalPick() {
      const array = this.getProductInCart.filter(product => {
        return product.pick === true;
      });
      return array;
    },
    anyRemaining() {
      const remaining = this.getProductInCart.filter(x => {
        return !x.pick;
      }).length;
      return remaining === 0;
    },
    price() {
      const pickProduct = this.getProductInCart.filter(x => {
        return x.pick === true;
      });
      // console.log(pickProduct);
      const totalPrice = pickProduct.map(x => {
        return x.price * x.quantity;
      });
      // console.log(totalPrice);
      return totalPrice.reduce((x, y) => {
        return x + y;
      }, 0);
    },
    totalPrice() {
      return this.price + this.deliveryCharges;
    }
  },
  methods: {
    ...mapActions("products", ["changeAllPick", "remove"]),
    editAllPick() {
      this.changeAllPick({
        allPick: !this.anyRemaining
      });
    },
    onRemove() {
      this.remove();
    },
    buyProduct() {
      this.purchased = true;
      setTimeout(() => {
        this.purchased = false;
        this.dialogSuccess = {
          visible: true,
          header: "ĐẶT HÀNG THÀNH CÔNG",
          text: "Chúc mừng bạn đã đặt hàng thành công !",
          actionText: "TIẾP TỤC MUA HÀNG",
          link: "/"
        };
      }, 2000);
    }
  }
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
.total-price {
  width: 100%;
}
a {
  color: #c79f30;
}
.ac-back {
  cursor: pointer;
}
</style>
