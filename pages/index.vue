<template>
  <div>
    <div>
      <v-row>
        <div class="d-none d-sm-block d-lg-none branner-ipad px-3">
          <v-img :src="require('../assets/images/banner-ipad.jpg')"></v-img>
        </div>

        <div class="d-block d-sm-none branner-ipad px-3">
          <v-img :src="require('../assets/images/banner-mobile.jpg')"></v-img>
        </div>

        <v-col cols="12" sm="3" md="3" lg="2" class="pr-0 d-none d-sm-flex">
          <v-card class="mx-auto" tile>
            <v-navigation-drawer permanent>
              <v-list class="py-0 list-item-content">
                <v-list-item link>
                  <v-list-item-content class="py-0">
                    <v-list-item-title
                      class="font-weight-bold red--text text-subtitle-1"
                    >
                      DANH MỤC
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-divider></v-divider>
              <v-list nav dense>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item
                    class="mb-1"
                    v-for="(item, i) in itemsBar"
                    :key="i"
                  >
                    <v-list-item-content class="py-1">
                      <v-list-item-title
                        class="text-body-2"
                        @click="barLeft(item.path)"
                        v-text="item.text"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-navigation-drawer>
          </v-card>
        </v-col>
        <!-- middle -->
        <v-col cols="12" sm="9" md="9" lg="8">
          <div class="d-flex justify-space-between align-center">
            <h3
              class="custom-color-black text-sm-h6 text-body-2 font-weight-bold"
            >
              CHƯƠNG TRÌNH KHUYẾN MÃI
            </h3>
            <a
              @click="$router.push('/products/sale')"
              style="color: #BDAC86"
              class="text-caption d-none d-sm-flex text-sm-body-1"
              >Xem tất cả >></a
            >
            <a
              style="color: #BDAC86"
              class="text-caption d-flex d-sm-none text-sm-body-1"
              >Chi tiết >></a
            >
          </div>
          <v-divider class="my-2"></v-divider>
          <v-row class="text-center pl-3">
            <v-col
              class="pb-0 pl-0"
              v-for="item in product_sale"
              :key="item.index"
              cols="6"
            >
              <v-card
                max-width="380"
                height="100%"
                class="mx-auto card-box-product"
              >
                <BoxProduct :item="item" />
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <!-- banner right -->
        <v-col cols="12" sm="2" class="pl-0 d-none d-lg-flex">
          <v-img :src="require('../assets/images/POSTER_KHUYỄN MÃI.jpg')">
          </v-img>
        </v-col>
      </v-row>
    </div>
    <!-- bottom -->
    <div>
      <div class="d-flex justify-space-between align-center">
        <h3 class="custom-color-black text-sm-h6 text-body-2 font-weight-bold">
          COMBO ĐẶC BIỆT
        </h3>
        <a
          @click="$router.push('/products/especially')"
          style="color: #BDAC86"
          class="text-caption d-none d-sm-flex text-sm-body-1"
          >Xem tất cả >></a
        >
        <a
          style="color: #BDAC86"
          class="text-caption d-flex d-sm-none text-sm-body-1"
          >Chi tiết >></a
        >
      </div>
      <v-divider class="my-2"></v-divider>
      <v-row class="text-center pl-3">
        <v-col
          class="pl-0 pb-0"
          v-for="item in product_especially"
          :key="item.index"
          cols="6"
          md="3"
        >
          <v-card
            max-width="100%"
            height="100%"
            class="mx-auto card-box-product"
          >
            <BoxProduct :item="item" />
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div>
      <div class="mt-3 d-flex justify-space-between align-center">
        <h3 class="custom-color-black text-sm-h6 text-body-2 font-weight-bold">
          GỢI Ý HÔM NAY ĂN GÌ
        </h3>
        <a
          @click="$router.push('/products/random')"
          style="color: #BDAC86"
          class="text-caption d-none d-sm-flex text-sm-body-1"
          >Xem tất cả >></a
        >
        <a
          style="color: #BDAC86"
          class="text-caption d-flex d-sm-none text-sm-body-1"
          >Chi tiết >></a
        >
      </div>
      <v-divider class="my-2"></v-divider>
      <v-row class="text-center pl-3">
        <v-col
          class="pl-0 pb-0"
          v-for="item in product_random"
          :key="item.index"
          cols="6"
          md="3"
        >
          <v-card
            max-width="100%"
            height="100%"
            class="mx-auto card-box-product"
          >
            <BoxProduct :item="item" />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import BoxProduct from "../components/BoxProduct";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    BoxProduct
  },
  data() {
    return {
      selectedItem: 0,
      itemsBar: [
        { text: "Trang Chủ", path: "/" },
        { text: "Khuyến Mãi", path: "/products/sale" },
        { text: "Combo Đặc Biệt", path: "/products/especially" },
        { text: "Gà Rán", path: "/products/garan" },
        { text: "Burger", path: "/products/burger" },
        { text: "Cơm", path: "/products/com" },
        { text: "Hôm nay ăn gì", path: "/products/random" },
        { text: "Thức Ăn Nhẹ" },
        { text: "Tráng Miệng" },
        { text: "Đồ Uống" },
        { text: "Tin Tức" }
      ]
    };
  },
  computed: {
    ...mapState("products", ["product"]),
    product_sale() {
      return this.product.filter(x => {
        return x.type === "sale";
      });
    },
    product_sale_3() {
      const array = this.product.filter(x => {
        return x.type === "sale";
      });
      const product_3 = [];
      for (let i = 0; i <= 1; i++) {
        product_3.push(array[i]);
      }
      return product_3;
    },
    product_especially() {
      return this.product.filter(x => {
        return x.type === "especially";
      });
    },
    product_random() {
      return this.product.filter(x => {
        return x.type === "random";
      });
    }
  },
  methods: {
    barLeft(path) {
      console.log(path);
      this.$router.push(path);
    }
  }
};
</script>
<style>
.bar-search .v-input__append-inner {
  display: none;
}
.card-box-product {
  border-radius: 8px !important;
}

.custom-color-black {
  color: #525254;
}
/* v-list-item__content */
.list-item-content .v-list-item__content {
  margin-top: -8px;
}
.list-item-content {
  height: 39px !important;
}
.branner-ipad {
  width: 100%;
}
</style>
