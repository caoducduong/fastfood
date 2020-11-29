<template>
  <v-app class="adminDefault">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-layout column fill-height>
        <v-list>
          <template v-for="(item, i) in items">
            <v-list-item
              class="font-weight-medium"
              v-if="!item.children"
              :key="i"
              :to="item.to"
              router
              exact
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
            <v-list-group
              class="font-weight-medium"
              v-else
              :key="item.title"
              :prepend-icon="item.action"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title" />
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="child in item.children"
                :key="child.title"
                :to="child.to"
                router
                exact
              >
                <v-list-item-content>
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template>
        </v-list>
        <v-spacer></v-spacer>
        <v-list>
          <v-list-item
            :to="logoutRoute.to"
            router
            exact
            style="background-color:  #fce59f"
          >
            <v-list-item-action>
              <v-icon>{{ logoutRoute.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="logoutRoute.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-layout>
    </v-navigation-drawer>
    <v-app-bar class="bar-admin" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon
        class="d-inline d-lg-none"
        @click.stop="drawer = !drawer"
      />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn> -->
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
          class="d-none d-sm-inline ml-4 font-weight-bold mb-0 text-h5 red--text text--darken-2"
        >
          AdminFastFood
        </p>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-badge class="mx-8" value="4" content="4" color="red" overlap>
        <v-icon class="text-h4">
          mdi-bell-outline
        </v-icon>
      </v-badge>
      <v-menu
        transition="slide-y-transition"
        offset-y
        :max-width="300"
        :nudge-bottom="10"
        :nudge-width="200"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="pr-3" icon color="yellow" v-bind="attrs" v-on="on">
            <v-avatar color="orange">
              <span class="white--text">CD</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-avatar size="36" color="orange">
                <span class="white--text">CD</span>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                caoducduong
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-icon> mdi-account </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title @click="dialogInfo = !dialogInfo">
                Thông tin tài khoản
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon> mdi-key-change </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Đổi mật khẩu </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon> mdi-logout-variant </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title @click="logOut()">
                Đăng xuất
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <div class="ma-5">
        <nuxt />
      </div>
    </v-main>
    <v-footer class="footer-admin" :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <InfoAdmin @onClose="onClose" :dialogInfo="dialogInfo" />
  </v-app>
</template>

<script>
import InfoAdmin from "../components/dialog/InfoAdmin";

export default {
  component: {
    InfoAdmin
  },
  data() {
    return {
      dialogInfo: false,
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
          icon: "mdi-account-multiple",
          title: "NGƯỜI DÙNG",
          children: [
            {
              icon: "mdi-cart",
              title: "Danh sách người dùng",
              to: "/admin/listusers"
            }
          ]
        },
        {
          icon: "mdi-chart-bar",
          title: "BÁO CÁO",
          to: "/admin/detailreport"
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
  },
  methods: {
    logOut() {
      this.$router.push({ name: "admin" });
    },
    onClose() {
      this.dialogInfo = false;
    }
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
