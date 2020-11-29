<template>
  <div>
    <v-dialog persistent width="800" v-model="dialog">
      <v-card class="dialog-info pa-6">
        <v-card-title class="pt-0 px-0 pb-0 d-flex justify-center align-center">
          <p
            class="text-h6 text-sm-h5 font-weight-bold red--text text--darken-1"
          >
            {{ title }}
          </p>
        </v-card-title>
        <v-card class="pa-6 mx-auto" width="100%">
          <v-row>
            <v-col cols="12" sm="6" class="pb-0">
              <div class="my-3">
                <div class="d-flex justify-space-between align-center">
                  <p class="mb-2">
                    Tên sản phẩm
                  </p>
                  <v-checkbox
                    label="Ưu tiên"
                    value="true"
                    color="red"
                    class="mt-0 mb-1"
                    dense
                    hide-details="auto"
                  ></v-checkbox>
                </div>
                <v-text-field
                  :value="product.productName"
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-gift"
                  label="Tên sản phẩm"
                  outlined
                >
                </v-text-field>
              </div>
              <div class="my-3">
                <p class="mb-2">
                  Giá gốc
                </p>
                <v-text-field
                  :value="product.price | formatCurrency"
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-currency-usd-off"
                  label="Giá gốc"
                  outlined
                >
                </v-text-field>
              </div>
              <div class="my-3">
                <p class="mb-2">
                  Giá Khuyến mãi
                  <v-text-field
                    :value="product.oldPrice | formatCurrency"
                    dense
                    hide-details="auto"
                    prepend-inner-icon="mdi-currency-usd-circle"
                    label="Giá Khuyến mãi"
                    outlined
                  >
                  </v-text-field>
                </p>
              </div>
            </v-col>
            <v-col cols="12" sm="6" class="pb-0">
              <div class="my-3">
                <div class="d-flex justify-space-between align-center">
                  <p class="mb-2">
                    Danh mục
                  </p>
                </div>
                <v-text-field
                  :value="product.type"
                  append-icon="mdi-chevron-down"
                  dense
                  hide-details="auto"
                  mdi-menu
                  label="Chọn danh mục"
                  prepend-inner-icon="mdi-menu"
                  outlined
                >
                </v-text-field>
              </div>
              <div class="my-3">
                <p class="mb-2">
                  Ảnh sản phẩm
                </p>
                <v-text-field
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-folder-image"
                  label="Ảnh sản phẩm"
                  outlined
                >
                </v-text-field>
              </div>
              <div class="my-3">
                <p class="mb-2">
                  Ảnh sản phẩm
                </p>
                <div>
                  <v-radio-group
                    class="mt-2"
                    hide-details="auto"
                    dense
                    prepend-icon="mdi-car-connected"
                    column
                  >
                    <v-radio label="Free ship" value="radio-1"></v-radio>
                    <v-radio label="Mất phí ship" value="radio-2"></v-radio>
                  </v-radio-group>
                </div>
              </div>
            </v-col>
            <v-col cols="12" class="py-0">
              <p class="mb-2">
                Giới thiệu sản phẩm
              </p>
              <v-textarea
                label="Giới thiệu sản phẩm"
                auto-grow
                outlined
              ></v-textarea>
            </v-col>
          </v-row>
          <v-card-actions class="pt-0 d-flex justify-end pr-0">
            <v-btn class="white--text" color="red darken-2">thêm</v-btn>
            <v-btn
              @click="close()"
              class="white--text"
              outlined
              color="red darken-2"
              >hủy</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      require: true
    },
    product: {
      type: Object
    },
    title: {
      type: String,
      require: true
    }
  },
  methods: {
    close() {
      this.$emit("onClose");
    }
  }
};
</script>

<style scoped>
.dialog-info {
  background-color: #dfdfdf !important;
}
.btn-change-password {
  background-color: #c3a12f !important;
}
.btn-edit {
  background-color: #f0293c !important;
}
.box-actions {
  text-align: -webkit-right;
}
.icon-close {
  position: absolute;
  right: 3px;
  top: 3px;
}
</style>
