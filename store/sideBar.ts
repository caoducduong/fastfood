import { NuxtState } from '@nuxt/types/app'
import { ActionTree, MutationTree, GetterTree } from 'vuex'

import { ISidebarItem } from '../types/sideBar'

type SidebarState = {
  clipped: boolean
  drawer: boolean
  fixed: boolean
  items: ISidebarItem[]
  miniVariant: boolean
}

type SidebarStateGetter = {
  routes: ISidebarItem[]
  activeRoutes: ISidebarItem[]
}

export const state = (): SidebarState => ({
  clipped: true,
  drawer: true,
  fixed: true,
  items: [
    {
      icon: 'mdi-apps',
      title: 'Trang chủ',
      to: '/',
    },
    {
      icon: 'mdi-account-multiple',
      title: 'Quản lý người dùng',
      to: '/admin/users',
    },
    {
      icon: 'mdi-account-multiple',
      title: 'Quản lý kho',
      to: '/admin/warehouse',
    },
    {
      icon: 'mdi-home-modern',
      title: 'Quản lý khu vực kho',
      to: '/admin/warehouse-area',
    },
    {
      icon: 'mdi-cards-outline',
      title: 'Quản lý danh mục',
      to: '/admin/categories',
    },
    {
      icon: 'mdi-group',
      title: 'Quản lý nhóm',
      to: '/admin/groups',
    },
    {
      icon: 'mdi-pistol',
      title: 'Lịch sử nạp tiền',
      to: '/charge-histories',
    },
    {
      icon: 'mdi-gift',
      title: 'Sản phẩm',
      to: '/products',
    },
  ],
  miniVariant: false,
})

export const actions: ActionTree<SidebarState, SidebarState> = {
  async changeFixed({ commit, state }) {
    commit('SET_FIXED', !state.fixed)
  },

  async changeDrawer({ commit, state }) {
    commit('SET_DRAWER', !state.drawer)
  },

  async changeClipped({ commit, state }) {
    commit('SET_CLIPPED', !state.clipped)
  },

  async changeMiniVariant({ commit, state }) {
    commit('SET_MINI_VARIANT', !state.miniVariant)
  },
}

export const mutations: MutationTree<SidebarState> = {
  SET_FIXED(state: SidebarState, fixed: boolean) {
    console.log(`SET_FIX: ${fixed}`)
    state.fixed = fixed
  },

  SET_CLIPPED(state: SidebarState, clipped: boolean) {
    console.log(`SET_CLIPPED: ${clipped}`)
    state.clipped = clipped
  },

  SET_DRAWER(state: SidebarState, drawer: boolean) {
    console.log(`SET_DRAWER: ${drawer}`)
    state.drawer = drawer
  },

  SET_MINI_VARIANT(state: SidebarState, miniVariant: boolean) {
    console.log(`SET_MINI_VARIANT: ${miniVariant}`)
    state.miniVariant = miniVariant
  },
}

export const getters: GetterTree<
  SidebarState,
  SidebarStateGetter & NuxtState
> = {
  routes(state, getters, roototState) {
    return [
      {
        permission: 'admin',
        fixed: true,
        icon: 'mdi-apps',
        title: 'TỔNG QUAN',
        to: '/admin/dashboard',
      },
      {
        permission: 'admin',
        icon: 'mdi-cart',
        title: 'ĐƠN HÀNG',
        children: [
          {
            icon: 'mdi-cart',
            title: 'Tạo đơn',
            to: '/admin/orders/create',
          },
          {
            icon: 'mdi-cart',
            title: 'Danh sách đơn',
            to: '/admin/orders/lists',
          },
          {
            icon: 'mdi-cart',
            title: 'Đơn hoàn',
            to: '/admin/orders/refund',
          },
        ],
      },
      {
        permission: 'admin',
        icon: 'mdi-account-multiple',
        title: 'ĐỐI TÁC',
        children: [
          {
            icon: 'mdi-account-multiple',
            title: 'Danh sách đối tác',
            to: '/admin/users',
          },
          {
            icon: 'mdi-account-multiple',
            title: 'Nhóm đối tác',
            to: '/admin/groups',
          },
        ],
      },
      {
        permission: 'admin',
        icon: 'mdi-gift',
        title: 'SẢN PHẨM',
        to: '/products',
        children: [
          {
            icon: 'mdi-gift',
            title: 'Danh sách sản phẩm',
            to: '/admin/products',
          },
          {
            icon: 'mdi-gift',
            title: 'Danh mục sản phẩm',
            to: '/admin/categories',
          },
          {
            permission: 'admin',
            icon: 'mdi-account-multiple',
            title: 'Quản lý kho',
            to: '/admin/warehouse',
          },
          {
            permission: 'admin',
            icon: 'mdi-home-modern',
            title: 'Khu vực kho',
            to: '/admin/warehouse-area',
          },
        ],
      },
      {
        permission: 'admin',
        icon: 'mdi-chart-bar',
        title: 'BÁO CÁO',
        to: '/admin/reports',
      },
      // {
      //   permission: 'admin',
      //   icon: 'mdi-cast',
      //   title: 'MARKETING',
      //   to: '/admin/makerting',
      // },
      {
        permission: 'admin',
        icon: 'mdi-cog',
        title: 'CẤU HÌNH',
        to: '/admin/settings',
        children: [
          {
            icon: 'mdi-account-multiple',
            title: 'Danh sách Nhân viên',
            to: '/admin/staffs',
          },
        ],
      },
      {
        permission: 'user',
        fixed: true,
        icon: 'mdi-apps',
        title: 'TỔNG QUAN',
        to: '/user/dashboard',
      },
      {
        permission: 'user',
        icon: 'mdi-cart',
        title: 'Đơn hàng',
        children: [
          {
            icon: 'mdi-cart',
            title: 'Tạo đơn',
            to: '/user/orders/create',
          },
          {
            icon: 'mdi-cart',
            title: 'Danh sách đơn',
            to: '/user/orders/lists',
          },
          {
            icon: 'mdi-cart',
            title: 'Đơn hoàn',
            to: '/user/orders/refund',
          },
        ],
      },
      {
        permission: 'user',
        icon: 'mdi-cash-multiple',
        title: 'Lịch sử nạp tiền',
        to: '/user/charge-histories',
      },
      {
        permission: 'user',
        icon: 'mdi-gift',
        title: 'Sản phẩm',
        to: '/user/products',
      },
      {
        permission: 'user',
        icon: 'mdi-chart-bar',
        title: 'BÁO CÁO',
        to: '/user/reports',
      },
      {
        permission: 'user',
        icon: 'mdi-account-multiple',
        title: 'Người đã giới thiệu',
        to: '/user/references',
      },
    ]
  },
  activeRoutes(state, getters, rootState, rootGetters) {
    const user = rootState.user.loggedIn
    const admin = rootState.admin.loggedIn
    const permissions = {
      admin: admin || null,
      user: user || null,
    }
    return getters['routes'].filter((route: ISidebarItem) => {
      if (!route.permission) {
        if (route.to === 'logout') {
          return null
        }
        return true
      }
      return !!permissions[route.permission]
    })
  },
  logoutRoute(state, getters, rootGetters) {
    const route = {
      fixed: true,
      icon: 'mdi-logout',
      title: 'Đăng xuất',
      to: '/logout',
    }

    return route
  },
}
