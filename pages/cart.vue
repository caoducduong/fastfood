<template>
  <div>
    <v-row>
      <v-col cols="12" md="7">
        <v-card class="mb-2">
          <div class="d-flex justify-space-between">
            <div class="d-flex pa-2">
              <v-checkbox
                class="pt-0 mt-0"
                color="red"
                hide-details="auto"
                :value="anyRemaining"
                @click="editAllPick()"
              >
              </v-checkbox>
              <div class="text-subtitle-2 grey--text text--darken-3">
                CHỌN TẤT CẢ ( {{ totalPick }} SẢN PHẨM )
              </div>
            </div>
            <div class="mr-3 d-flex justify-center align-center">
              <div>
                <v-icon class="cursor" @click="onRemove()"
                  >mdi-trash-can-outline</v-icon
                >
                <span
                  class="cursor text-subtitle-2 grey--text text--darken-3"
                  @click="onRemove()"
                >
                  Xoa
                </span>
              </div>
            </div>
          </div>
        </v-card>
        <v-card>
          <div v-for="item in getProductInCart" :key="item.index">
            <ProductInCart :product="item" />
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <v-card>
          <v-card-title class="red--text">
            Địa chỉ nhận hàng:
          </v-card-title>
          <v-card-subtitle class="d-flex">
            <v-icon>mdi-location-enter</v-icon>
            <div class="ml-4">
              <div>
                <span class="font-weight-bold text-body-1">{{
                  getUser.name
                }}</span>
                <a href="" class="float-right text-decoration-none"
                  >Chỉnh sửa</a
                >
              </div>
              <div>
                126 Vĩnh Hưng, Phường Hoàng Mai, Quận Hai Bà Trưng, Hà Nội
              </div>
            </div>
          </v-card-subtitle>
          <v-divider class="mx-5"></v-divider>
          <v-card-title class="red--text">
            Thông tin đơn hàng:
          </v-card-title>
          <v-card-subtitle>
            <div class="my-1">
              <span class="text-body-1"
                >Tạm tính ( {{ totalPick }} sản phẩm )</span
              >
              <span class="text-body-1 red--text float-right">
                {{ price | formatCurrency }}
              </span>
            </div>
            <div class="my-1">
              <span class="text-body-1">Phi Giao Hang</span>
              <span class="text-body-1 red--text float-right">
                {{ deliveryCharges | formatCurrency }}
              </span>
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
                width="100%"
                color="red"
                class="darken-3 d-block white--text mt-4"
                @click="$router.push('/orderconfirmation')"
              >
                Mua hàng
              </v-btn>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductInCart from "../components/cart/product";
import { mapGetters, mapActions } from "vuex";
import productVue from "~/components/cart/product.vue";

export default {
  components: {
    ProductInCart
  },
  data() {
    return {
      checkAll: null,
      deliveryCharges: 15000
    };
  },
  computed: {
    ...mapGetters("products", ["getProductInCart"]),
    ...mapGetters("user", ["getUser"]),
    totalPick() {
      const array = this.getProductInCart.filter(product => {
        return product.pick === true;
      });
      return array.length;
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
</style>
