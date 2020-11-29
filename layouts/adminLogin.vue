<template>
  <v-app class="adminDefault">
    <v-app-bar class="bar-admin" :clipped-left="clipped" fixed app>
      <v-toolbar-title class="title-bar d-flex align-center">
        <div>
          <v-img
            height="70"
            width="70"
            contain
            class="logo-img"
            :src="require('../assets/images/LOGO.png')"
            alt=""
          />
        </div>
        <p
          class="d-none d-sm-inline ml-4 font-weight-bold mb-0 text-h5 red--text"
        >
          AdminFastFood
        </p>
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <div class="ma-5">
        <nuxt />
      </div>
    </v-main>
    <v-footer class="footer-admin" :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: "mdi-apps",
          title: "TỔNG QUAN",
          to: "/admin/dashboard"
        },
        {
          icon: "mdi-cart",
          title: "ĐƠN HÀNG",
          children: [
            {
              icon: "mdi-cart",
              title: "Tạo đơn",
              to: "/admin/createorder"
            },
            {
              icon: "mdi-cart",
              title: "Danh sách đơn",
              to: "/admin/listorder"
            },
            {
              icon: "mdi-cart",
              title: "Đơn hoàn",
              to: "/admin/refund"
            }
          ]
        },
        {
          icon: "mdi-account",
          title: "NHÂN VIÊN",
          children: [
            {
              title: "Danh sách nhân viên",
              to: "/admin/staffs"
            }
          ]
        },
        {
          icon: "mdi-gift",
          title: "SẢN PHẨM",
          children: [
            {
              title: "Danh sách sản phẩm",
              to: "/admin/listproducts"
            }
          ]
        },
        {
          icon: "mdi-chart-bar",
          title: "BÁO CÁO",
          to: "/user/reports"
        },
        {
          icon: "mdi-account-multiple",
          title: "NGƯỜI DÙNG",
          children: [
            {
              icon: "mdi-cart",
              title: "Danh sách người dùng",
              to: "/admin/listusers"
            }
          ]
        }
      ],
      logoutRoute: {
        fixed: true,
        icon: "mdi-logout",
        title: "Đăng xuất",
        to: "/logout"
      },
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>

<style>
.adminDefault {
  background-color: #e9eaec !important;
}
.bar-admin {
  background-color: #fce59f !important;
}
.v-data-table__wrapper tbody tr {
  height: 60px;
}
.table-create .v-data-table-header {
  background-color: #ede8e8;
}
.footer-admin {
  background-color: #fce59f !important;
}
</style>
