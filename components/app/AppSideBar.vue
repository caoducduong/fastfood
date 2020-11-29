<template>
  <v-navigation-drawer :value="visibleBar" :clipped="true" fixed app>
    <v-layout column fill-height>
      <v-list class="pt-0" dense>
        <template v-for="(item, i) in routes">
          <v-list-item
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
          style="background-color: #e6e8ea"
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
</template>

<script>
export default {
  props: {
    visibleBar: {
      type: Boolean,
      require: true
    }
  },
  data() {
    return {
      routes: [
        {
          icon: "mdi-apps",
          title: "TỔNG QUAN",
          to: "/user/dashboard"
        },
        {
          icon: "mdi-cart",
          title: "Đơn hàng",
          children: [
            {
              icon: "mdi-cart",
              title: "Tạo đơn",
              to: "/user/orders/create"
            },
            {
              icon: "mdi-cart",
              title: "Danh sách đơn",
              to: "/user/orders/lists"
            },
            {
              icon: "mdi-cart",
              title: "Đơn hoàn",
              to: "/user/orders/refund"
            }
          ]
        },
        {
          icon: "mdi-account",
          title: "NHÂN VIÊN",
          children: [
            {
              icon: "mdi-cart",
              title: "Tạo đơn",
              to: "/user/orders/create"
            },
            {
              icon: "mdi-cart",
              title: "Danh sách đơn",
              to: "/user/orders/lists"
            },
            {
              icon: "mdi-cart",
              title: "Đơn hoàn",
              to: "/user/orders/refund"
            }
          ]
        },
        {
          icon: "mdi-gift",
          title: "SẢN PHẨM",
          children: [
            {
              icon: "mdi-cart",
              title: "Tạo đơn",
              to: "/user/orders/create"
            },
            {
              icon: "mdi-cart",
              title: "Danh sách đơn",
              to: "/user/orders/lists"
            },
            {
              icon: "mdi-cart",
              title: "Đơn hoàn",
              to: "/user/orders/refund"
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
              title: "Tạo đơn",
              to: "/user/orders/create"
            },
            {
              icon: "mdi-cart",
              title: "Danh sách đơn",
              to: "/user/orders/lists"
            },
            {
              icon: "mdi-cart",
              title: "Đơn hoàn",
              to: "/user/orders/refund"
            }
          ]
        }
      ],
      logoutRoute: {
        fixed: true,
        icon: "mdi-logout",
        title: "Đăng xuất",
        to: "/logout"
      }
    };
  }
};
</script>

<style scoped></style>
