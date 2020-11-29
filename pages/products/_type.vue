<template>
  <div>
    <div class="my-3">
      <Breadcrumbs :items="item_breadcrumbs" />
    </div>
    <v-row>
      <v-col cols="12" xl="5" lg="8" md="12" sm="12">
        <div class="red--text text-body-2 font-weight-bold">
          CHƯƠNG TRÌNH KHUYẾN MÃI
        </div>
        <v-divider class="my-2"></v-divider>

        <v-row>
          <v-col cols="12" class="pb-0">
            <v-row>
              <v-col class="pb-0 pr-3 pr-sm-1" cols="12" lg="4" md="4" sm="4">
                <div class="box-sale pb-3">
                  <BoxSale @buyNow="onBuyNow" />
                </div>
              </v-col>
              <v-col class="pb-0 pl-2" cols="12" lg="8" md="8" sm="8">
                <v-row class="pl-3">
                  <v-col
                    class="pt-0 pl-0"
                    v-for="item in products_4"
                    :key="item.index"
                    cols="6"
                  >
                    <v-card height="100%">
                      <BoxProduct :item="item" />
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12 pt-0">
            <v-row class="pl-3">
              <v-col
                class="pt-0 pl-0"
                v-for="item in products_3"
                :key="item.index"
                cols="6"
                xl="4"
                lg="4"
                md="4"
                sm="4"
              >
                <v-card max-width="350" height="100%">
                  <BoxProduct :item="item" />
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-pagination
          color="yellow darken-3"
          class="float-right mt-n3"
          v-model="page"
          :length="4"
        ></v-pagination>
      </v-col>
      <v-col cols="12" xl="3" lg="4" md="12" sm="12">
        <div class="red--text text-body-2 font-weight-bold">
          COMBO ĐẶC BIỆT
        </div>
        <v-divider class="my-2 mb-5"></v-divider>
        <v-row>
          <v-col
            class="pb-2 pl-0"
            cols="12"
            sm="6"
            md="6"
            lg="12"
            v-for="item in 4"
            :key="item.index"
          >
            <Short />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BoxProduct from "../../components/BoxProduct";
import Short from "../../components/Short";
import Breadcrumbs from "../../components/Breadcrumbs";
import BoxSale from "../../components/BoxSale";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  middleware(context) {
    console.log(context);
    const type = context.store.state.products.product.map(x => {
      return x.type;
    });
    const validate_params = type.includes(context.params.type);
    if (!validate_params) context.redirect("/signin");
  },
  components: {
    BoxProduct,
    Short,
    Breadcrumbs,
    BoxSale
  },
  data() {
    return {
      page: 1
    };
  },
  computed: {
    ...mapGetters("user", ["isCheckUser", "getUser"]),
    ...mapState("products", ["product"]),
    products_4() {
      // console.log(this.$route.params.type);
      let product_4 = [];
      const items = this.product.filter(x => {
        return x.type === this.$route.params.type;
      });
      for (let i = 0; i <= 3; i++) {
        product_4.push(items[i]);
      }
      return product_4;
    },
    products_3() {
      // console.log(this.$route.params.type);
      let product_3 = [];
      const items = this.product.filter(x => {
        return x.type === this.$route.params.type;
      });
      if (items.length > 4) {
        for (let i = 0; i <= 2; i++) {
          product_3.push(items[i]);
        }
      }
      return product_3;
    },
    item_breadcrumbs() {
      if (this.$route.params.type === "garan") {
        return [
          {
            text: "Trang chủ",
            disabled: false,
            href: "/"
          },
          {
            text: "Gà rán",
            disabled: true,
            href: "products/garan"
          }
        ];
      } else if (this.$route.params.type === "sale") {
        return [
          {
            text: "Trang chủ",
            disabled: true,
            href: "/"
          },
          {
            text: "Khuyễn mãi",
            disabled: false,
            href: "products/sale"
          }
        ];
      } else if (this.$route.params.type === "com") {
        return [
          {
            text: "Trang chủ",
            disabled: true,
            href: "/"
          },
          {
            text: "Cơm",
            disabled: false,
            href: "products/com"
          }
        ];
      } else if (this.$route.params.type === "burger") {
        return [
          {
            text: "Trang chủ",
            disabled: true,
            href: "/"
          },
          {
            text: "Burger",
            disabled: false,
            href: "products/burger"
          }
        ];
      } else if (this.$route.params.type === "random") {
        return [
          {
            text: "Trang chủ",
            disabled: true,
            href: "/"
          },
          {
            text: "Hôm nay ăn gì",
            disabled: false,
            href: "products/random"
          }
        ];
      } else if (this.$route.params.type === "especially") {
        return [
          {
            text: "Trang chủ",
            disabled: true,
            href: "/"
          },
          {
            text: "Combo Đặc Biệt",
            disabled: false,
            href: "products/especially"
          }
        ];
      }
    }
  },
  methods: {
    ...mapActions("products", ["buyNow"]),
    onBuyNow() {
      if (this.isCheckUser) {
        this.buyNow({
          id: "especially1",
          pick: true,
          quantity: 1
        });
        this.$router.push("/orderconfirmation");
      } else {
        this.$router.push("/signin");
      }
    }
  }
};
</script>

<style scoped>
.box-sale {
  border-radius: 7px;
  height: 100%;
}
</style>
