<template>
  <div>
    <v-dialog persistent width="800" v-model="dialogInfo">
      <v-card class="dialog-info pa-6">
        <div class="icon-close">
          <v-icon @click="close()" class="text-h4 pt-2 pr-2">
            mdi-close
          </v-icon>
        </div>
        <v-card-title class="px-0 pb-0 d-flex justify-center align-center">
          <p
            class="text-h6 text-sm-h5 font-weight-bold red--text text--darken-1"
          >
            THÔNG TIN CÁ NHÂN
          </p>
        </v-card-title>
        <v-card class="pa-6 mx-auto" width="100%">
          <div class="mb-3 d-block">
            <p class="mb-0 grey--text text--darken-2">Họ và Tên</p>
            <h3 class="text-body-2 font-weight-bold text-sm-h6">
              Đức Dương
            </h3>
          </div>
          <div class="mb-3 d-block">
            <p class="mb-0 grey--text text--darken-2">Số điện thoại</p>
            <h3 class="text-body-2 font-weight-bold text-sm-h6">
              035 706 6060
            </h3>
          </div>
          <div class="mb-3 d-block">
            <p class="mb-0 grey--text text--darken-2">Email</p>
            <h3 class="text-body-2 font-weight-bold text-sm-h6">
              caoducduong.98.hd@gmail.com
            </h3>
          </div>
          <div class="mb-3 d-block">
            <p class="mb-0 grey--text text--darken-2">Địa chỉ</p>
            <h3 class="text-body-2 font-weight-bold text-sm-h6">
              90 Nguyễn Tuân - Thanh Xuân - Hà Nội
            </h3>
          </div>
          <div class="d-block d-sm-flex mt-8 box-actions">
            <v-btn class="d-block d-sm-flex white--text px-14 btn-edit">
              sửa
            </v-btn>
            <v-btn class="white--text mt-3 mt-sm-0 ml-sm-4 btn-change-password">
              đổi mật khẩu
            </v-btn>
          </div>
        </v-card>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialogInfo: {
      type: Boolean,
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
  right: 0;
  top: 0;
}
</style>
