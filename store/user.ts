import { ActionTree, MutationTree, GetterTree } from "vuex";
import { UserProfile } from "../types/user";
import { SnackBar } from "../types/snackbar";
import firebase from "firebase";

type UserState = {
  userProfile: UserProfile;
  loggedIn: boolean;
  snackBar: SnackBar;
};
export const state = (): UserState => ({
  userProfile: {
    id: "",
    phone: 0,
    email: "",
    name: "",
    sex: "",
    primaryAddress: "",
    subAddress: ""
  },
  loggedIn: false,
  snackBar: {
    show: false,
    text: "",
    color: ""
  }
});
export type RootState = ReturnType<typeof state>;

export const actions: ActionTree<UserState, UserState> = {
  async getUser({ commit }) {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        commit("SET_CURRENT_USER", user);
      }
      return true;
    });
  },
  async actionCheckSignUp({ commit }, payload) {
    commit("SET_LOGGED_IN", true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        commit("SET_SNACKBAR", {
          text: "Tạo Tài Khoản Thành Công",
          show: true,
          color: "success"
        });
        const user = firebase.auth().currentUser;
        user!
          .sendEmailVerification()
          .then(() => {
            user!
              .updateProfile({
                displayName: payload.name
              })
              .then(() => {
                console.log(user!);
              });
          })
          .then(() => {
            commit("SET_LOGGED_IN", false);
            console.log("check mail");
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
        commit("SET_LOGGED_IN", false);
        if (error.code === "auth/email-already-in-use") {
          // commit("SET_SNACKBAR", {
          //   text: "Tài Khoản Đã Tồn Tại",
          //   show: true,
          //   color: "red"
          // });
          alert("Tài Khoản Đã Tồn Tại");
        } else if (error.code === "auth/invalid-email") {
          // commit("SET_SNACKBAR", {
          //   text: "Email Không Đúng Định Dạng",
          //   show: true,
          //   color: "red"
          // });
          alert("Email Không Đúng Định Dạng");
        } else if (error.code === "auth/operation-not-allowed") {
          // commit("SET_SNACKBAR", {
          //   text: "Sai Mật Khẩu Tài Khoản",
          //   show: true,
          //   color: "red"
          // });
          alert("Sai Mật Khẩu Tài Khoản");
        } else {
          // commit("SET_SNACKBAR", {
          // text: "Mật Khẩu Yếu",
          // show: true,
          // color: "red"
          // });
          alert("Mật Khẩu Yếu");
        }
      });
  },
  async signIn({ commit }, payload) {
    commit("SET_LOGGED_IN", true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        console.log("sign success !");
        const user = firebase.auth().currentUser;
        commit("SET_USER", {
          id: user!.uid,
          name: user!.displayName,
          email: user!.email
        });
        commit("SET_LOGGED_IN", false);
        if (payload.type) {
          this.$router.push({ name: "admin-dashboard" });
        } else {
          this.$router.push("/");
        }
      })
      .catch(error => {
        console.log(error);
        commit("SET_LOGGED_IN", false);
        if (error.code === "auth/email-already-in-use") {
          // commit("SET_SNACKBAR", {
          //   text: "Tài Khoản Đã Tồn Tại",
          //   show: true,
          //   color: "red"
          // });
          alert("Tài Khoản Đã Tồn Tại");
        } else if (error.code === "auth/invalid-email") {
          // commit("SET_SNACKBAR", {
          //   text: "Email Không Đúng Định Dạng",
          //   show: true,
          //   color: "red"
          // });
          alert("Email Không Đúng Định Dạng");
        } else if (error.code === "auth/operation-not-allowed") {
          // commit("SET_SNACKBAR", {
          //   text: "Sai Mật Khẩu Tài Khoản",
          //   show: true,
          //   color: "red"
          // });
          alert("Sai Mật Khẩu Tài Khoản");
        } else if (error.code === "auth/wrong-password") {
          // commit("SET_SNACKBAR", {
          // text: "Mật Khẩu Yếu",
          // show: true,
          // color: "red"
          // });
          alert("Sai mật khẩu hoặc tài khoản");
        }
      });
  }
};

export const mutations: MutationTree<UserState> = {
  SET_USER(state: UserState, payload) {
    state.userProfile.id = payload.id;
    state.userProfile.email = payload.email;
    state.userProfile.name = payload.name;
  },
  SET_LOGGED_IN(state: UserState, payload) {
    state.loggedIn = payload;
  },
  SET_SNACKBAR(state: UserState, payload) {
    state.snackBar = payload;
  },
  SET_CURRENT_USER(state: UserState, user) {
    state.userProfile.name = user.displayName;
    state.userProfile.email = user.email;
  }
};

export const getters: GetterTree<UserState, UserState> = {
  isLoggedIn(state: UserState) {
    return state.loggedIn;
  },
  isCheckUser(state: UserState) {
    if (state.userProfile.id === "") return false;
    else return true;
  },
  getUser(state: UserState) {
    return state.userProfile;
  },
  getSnackBar(state: UserState) {
    return state.snackBar;
  }
};
