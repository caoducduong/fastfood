import { ActionTree, MutationTree, GetterTree } from "vuex";
import { Product } from "../types/product";
import { Cart } from "../types/product";
import firebase from "firebase";
// import firestore from "firebase";

type ProduceState = {
  product: Product[];
  cart: Cart[];
  loader: boolean;
};

export const state = (): ProduceState => ({
  product: [
    {
      id: "ga1",
      name: "Gà Rán Bóng Đêm",
      rate: 5,
      price: 35000,
      oldPrice: 50000,
      type: "garan",
      link: "burger.jpg"
    },
    {
      id: "ga2",
      name: "Gà Rán Bóng Đêm",
      rate: 5,
      price: 35000,
      oldPrice: 50000,
      type: "garan",
      link: "burger.jpg"
    },
    {
      id: "ga3",
      name: "Gà Rán Bóng Đêm",
      rate: 5,
      price: 35000,
      oldPrice: 50000,
      type: "garan",
      link: "burger.jpg"
    },
    {
      id: "ga4",
      name: "Gà Rán Bóng Đêm",
      rate: 5,
      price: 35000,
      oldPrice: 50000,
      type: "garan",
      link: "com.jpg"
    },
    {
      id: "ga5",
      name: "Gà Rán Bóng Đêm",
      rate: 5,
      price: 35000,
      oldPrice: 50000,
      type: "garan",
      link: "burger.jpg"
    },
    {
      id: "ga6",
      name: "Gà Rán Bóng Đêm",
      rate: 5,
      price: 35000,
      oldPrice: 50000,
      type: "garan",
      link: "combo.jpg"
    },
    {
      id: "ga7",
      name: "Gà Rán Bóng Đêm",
      rate: 5,
      price: 35000,
      oldPrice: 50000,
      type: "garan",
      link: "burger.jpg"
    },
    {
      id: "ga8",
      name: "Gà Rán Bóng Đêm",
      rate: 5,
      price: 35000,
      oldPrice: 50000,
      type: "garan",
      link: "com.jpg"
    },
    {
      id: "com1",
      name: "Cơm Đùi Gà",
      rate: 4,
      price: 30000,
      oldPrice: 45000,
      type: "com",
      link: "com.jpg"
    },
    {
      id: "com2",
      name: "Cơm Đùi Gà",
      rate: 4,
      price: 30000,
      oldPrice: 45000,
      type: "com",
      link: "garan.jpg"
    },
    {
      id: "com3",
      name: "Cơm Đùi Gà",
      rate: 4,
      price: 30000,
      oldPrice: 45000,
      type: "com",
      link: "burger.jpg"
    },
    {
      id: "com4",
      name: "Cơm Đùi Gà",
      rate: 4,
      price: 30000,
      oldPrice: 45000,
      type: "com",
      link: "burger.jpg"
    },
    {
      id: "com5",
      name: "Cơm Đùi Gà",
      rate: 4,
      price: 30000,
      oldPrice: 45000,
      type: "com",
      link: "com.jpg"
    },
    {
      id: "com6",
      name: "Cơm Đùi Gà",
      rate: 4,
      price: 30000,
      oldPrice: 45000,
      type: "com",
      link: "garan.jpg"
    },
    {
      id: "com7",
      name: "Cơm Đùi Gà",
      rate: 4,
      price: 30000,
      oldPrice: 45000,
      type: "com",
      link: "burger.jpg"
    },
    {
      id: "com8",
      name: "Cơm Đùi Gà",
      rate: 4,
      price: 30000,
      oldPrice: 45000,
      type: "com",
      link: "garan.jpg"
    },
    {
      id: "burger1",
      name: "Big Burger",
      rate: 4.5,
      price: 31000,
      oldPrice: 50000,
      type: "burger",
      link: "com.jpg"
    },
    {
      id: "burger2",
      name: "Big Burger",
      rate: 4.5,
      price: 31000,
      oldPrice: 50000,
      type: "burger",
      link: "burger.jpg"
    },
    {
      id: "burger3",
      name: "Big Burger",
      rate: 4.5,
      price: 31000,
      oldPrice: 50000,
      type: "burger",
      link: "burger.jpg"
    },
    {
      id: "burger4",
      name: "Big Burger",
      rate: 4.5,
      price: 31000,
      oldPrice: 50000,
      type: "burger",
      link: "burger.jpg"
    },
    {
      id: "burger5",
      name: "Big Burger",
      rate: 4.5,
      price: 31000,
      oldPrice: 50000,
      type: "burger",
      link: "garan.jpg"
    },
    {
      id: "burger6",
      name: "Big Burger",
      rate: 4.5,
      price: 31000,
      oldPrice: 50000,
      type: "burger",
      link: "garan.jpg"
    },
    {
      id: "burger7",
      name: "Big Burger",
      rate: 4.5,
      price: 31000,
      oldPrice: 50000,
      type: "burger",
      link: "burger.jpg"
    },
    {
      id: "burger8",
      name: "Big Burger",
      rate: 4.5,
      price: 31000,
      oldPrice: 50000,
      type: "burger",
      link: "burger.jpg"
    },
    {
      id: "sale1",
      name: "Gà rán 1 miếng",
      rate: 4.5,
      price: 31000,
      oldPrice: 50000,
      type: "sale",
      link: "burger.jpg"
    },
    {
      id: "sale2",
      name: "Gà quay",
      rate: 4.5,
      price: 31000,
      oldPrice: 50000,
      type: "sale",
      link: "garan.jpg"
    },
    {
      id: "sale3",
      name: "Cơm gà truyền thống",
      rate: 4.5,
      price: 31000,
      oldPrice: 50000,
      type: "sale",
      link: "com.jpg"
    },
    {
      id: "sale4",
      name: "Bánh ponlan trứng",
      rate: 4.5,
      price: 31000,
      oldPrice: 50000,
      type: "sale",
      link: "burger.jpg"
    },
    // {
    // id: "sale5",
    // name: "Mochi socola",
    // rate: 4.5,
    // price: 31000,
    // oldPrice: 50000,
    // type: "sale"
    // },
    // {
    // id: "sale6",
    // name: "Burger truyen thong",
    // rate: 4.5,
    // price: 31000,
    // oldPrice: 50000,
    // type: "sale"
    // },
    {
      id: "especially1",
      name: "[COMBO] Nhóm A",
      rate: 4.5,
      price: 69000,
      oldPrice: 75000,
      type: "especially",
      link: "combo.jpg"
    },
    {
      id: "especially2",
      name: "[COMBO] 1 Người A",
      rate: 4,
      price: 31000,
      oldPrice: 50000,
      type: "especially",
      link: "burger.jpg"
    },
    {
      id: "especially3",
      name: "[COMBO] 1 Người B",
      rate: 4,
      price: 31000,
      oldPrice: 50000,
      type: "especially",
      link: "com.jpg"
    },
    {
      id: "especially4",
      name: "[COMBO] Nhóm B",
      rate: 4,
      price: 31000,
      oldPrice: 50000,
      type: "especially",
      link: "combo.jpg"
    },
    {
      id: "random1",
      name: "Phần hot wings 5 miếng",
      rate: 5,
      price: 31000,
      oldPrice: 50000,
      type: "random",
      link: "burger.jpg"
    },
    {
      id: "random2",
      name: "Gà rán phần",
      rate: 5,
      price: 31000,
      oldPrice: 50000,
      type: "random",
      link: "garan.jpg"
    },
    {
      id: "random3",
      name: "Cơm gà xiên que",
      rate: 5,
      price: 31000,
      oldPrice: 50000,
      type: "random",
      link: "burger.jpg"
    },
    {
      id: "random4",
      name: "Cơm gà xào",
      rate: 5,
      price: 31000,
      oldPrice: 50000,
      type: "random",
      link: "combo.jpg"
    }
  ],
  cart: [],
  loader: false
});

export const actions: ActionTree<ProduceState, ProduceState> = {
  buyNow({ commit }, payload) {
    commit("BUY_NOW", payload);
  },
  addProducts({ commit }, payload: Product) {
    const { name, type, price, oldPrice, rate } = payload;
    firebase
      .firestore()
      .collection("products")
      .add({
        name,
        type,
        price,
        oldPrice,
        rate
      })
      .then(result => {
        console.log(result.id);
        console.log("success");
      });
  },
  addToCart({ commit }, payload) {
    commit("ADD_TO_CART", payload);
  },
  changePick({ commit }, payload) {
    commit("CHANGE_PICK", payload);
  },
  changeAllPick({ commit }, payload) {
    commit("CHANGE_ALL_PICK", payload);
  },
  augment({ commit }, payload) {
    commit("AUGMENT", payload);
  },
  abate({ commit }, payload) {
    commit("ABATE", payload);
  },
  remove({ commit }) {
    commit("REMOVE");
  },
  resetPassword({ commit }, email) {
    console.log(email);
    commit("LOADER", true);
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        commit("LOADER", false);
        console.log("send mail success !!!");
      })
      .catch((e: string) => {
        commit("LOADER", false);
        console.log(e);
      });
  }
};

export const mutations: MutationTree<ProduceState> = {
  ADD_TO_CART(state: ProduceState, payload) {
    const listId = state.cart.map(x => {
      return x.id;
    });
    const alreadyExist = listId.includes(payload.id);
    if (alreadyExist) {
      const index = state.cart.findIndex(product => {
        return product.id === payload.id;
      });
      console.log(index);
      state.cart[index].quantity++;
      console.log(state.cart);
    } else {
      console.log(state.cart);
      state.cart.push(payload);
    }
  },
  BUY_NOW(state: ProduceState, payload) {
    state.cart = [];
    state.cart.push(payload);
  },
  CHANGE_PICK(state: ProduceState, payload) {
    const index = state.cart.findIndex(product => {
      return product.id === payload.id;
    });
    state.cart[index].pick = payload.pick;
  },
  CHANGE_ALL_PICK(state: ProduceState, payload) {
    // console.log(payload.AllPick);
    state.cart.forEach(x => (x.pick = payload.allPick));
  },
  AUGMENT(state: ProduceState, payload) {
    const index = state.cart.findIndex(x => {
      return x.id === payload.id;
    });
    // console.log(index);
    if (payload.quantity < 20) {
      state.cart[index].quantity++;
    } else {
      alert("max 20");
    }
  },
  ABATE(state: ProduceState, payload) {
    const index = state.cart.findIndex(x => {
      return x.id === payload.id;
    });
    // console.log("index");
    if (payload.quantity !== 1) {
      state.cart[index].quantity--;
    } else {
      alert("Min 1");
    }
  },
  REMOVE(state: ProduceState) {
    console.log(state.cart);
    const tmp = state.cart.filter(x => {
      return x.pick === false;
    });
    state.cart = tmp;
    // for (let i = 0; i <= state.cart.length; i++) {
    //   if (state.cart[i].pick === true) {
    //     state.cart.splice(i, 1);
    //   }
    // }
  },
  LOADER(state, loader) {
    state.loader = loader;
  }
};

export const getters: GetterTree<ProduceState, ProduceState> = {
  getLengthCart(state: ProduceState) {
    return state.cart.length;
  },
  getProductInCart(state: ProduceState) {
    return state.cart.map(product => {
      let found_product = state.product.find(x => {
        return product.id === x.id;
      });
      // console.log(found_product);
      return {
        ...found_product!,
        quantity: product.quantity,
        pick: product.pick
      };
    });
  },
  loader(state: ProduceState) {
    return state.loader;
  }
};
