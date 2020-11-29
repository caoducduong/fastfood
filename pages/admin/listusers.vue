<template>
  <div>
    <v-card>
      <v-card-title class="pb-3 box-title d-flex justify-space-between">
        <p class="title-list-order red--text pr-3">
          DANH SÁCH NGƯỜI DÙNG
        </p>
        <p class="text-h6">
          Tổng số người dùng
          <span class="text-h6 red--text text--darken-2 pa-2 quantity">
            {{ desserts.length }}
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
                  label="Tìm kiếm nhân viên"
                  append-icon="mdi-magnify"
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
            @click="deleteStaff(item)"
            small
            class="text-h5 mr-2 actions-table"
          >
            mdi-lock-outline
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
    <DeleteDialog
      @onClose="closeDelete"
      :dialog="dialogDelete"
      :title="titleDialogDelete"
    />
  </div>
</template>

<script>
import DeleteDialog from "../../components/dialog/DeleteDialog";
export default {
  layout: "adminDefault",
  data() {
    return {
      titleDialogDelete: {
        title: "",
        subTitle: ""
      },
      dialogDelete: false,
      headers: [
        { text: "ID", value: "id" },
        { text: "Tên người dùng", value: "name" },
        { text: "Số điện thoại", value: "phoneNumber" },
        { text: "Email", value: "Email" },
        { text: "Hành động", value: "actions" }
      ],
      desserts: [
        {
          id: "FF_001",
          name: "CaoQuang",
          phoneNumber: "0357066060",
          Email: "quangcd@icts.vn"
        },
        {
          id: "FF_005",
          name: "CaoDuong",
          phoneNumber: "0357066060",
          Email: "duongsan.98.hd@gmail.com"
        },
        {
          id: "FF_002",
          name: "VuDuc",
          phoneNumber: "0357066060",
          Email: "vuducprovjp@gmail.com"
        },
        {
          id: "FF_003",
          name: "QuangPro",
          phoneNumber: "0357066060",
          Email: "anhquangprovjp@gmail.com"
        },
        {
          id: "FF_0704",
          name: "CaoDucDuong",
          phoneNumber: "0357066060",
          Email: "caoduong@gmail.vjp"
        },
        {
          id: "FF_0064",
          name: "CaoDucDuong",
          phoneNumber: "0357066060",
          Email: "caoduong@gmail.vjp"
        },
        {
          id: "FF_03404",
          name: "CaoDucDuong",
          phoneNumber: "0357066060",
          Email: "caoduong@gmail.vjp"
        },
        {
          id: "FF_0044",
          name: "CaoDucDuong",
          phoneNumber: "0357066060",
          Email: "caoduong@gmail.vjp"
        }
      ]
    };
  },
  methods: {
    deleteStaff(item) {
      this.titleDialogDelete = {
        title: "VÔ HIỆU HÓA TÀI KHOẢN",
        subTitle: "Bạn có chắc muốn vô hiệu hóa tài khoản ?"
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
.actions-table {
  cursor: pointer;
}
.quantity {
  background-color: #fce08d;
  border-radius: 7px;
}
</style>
