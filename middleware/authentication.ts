import { Middleware } from "@nuxt/types";
import "firebase/auth";
import firebase from "firebase";

const middleware: Middleware = async ({ route, store, redirect }) => {
  // If the user is not authenticated

  // console.log(store);
  // const user = store.dispatch("user/getUser");
  const user = firebase.auth().onAuthStateChanged(user => {
    // console.log("tet");
    if (user) {
      user.getIdToken().then(function(idToken) {
        // <------ Check this line
        // console.log(idToken); // It shows the Firebase token now
      });
    }
  });

  if (!user) {
    // If the user is not authenticated
    const whiteListRoutes = [
      "signin",
      "signup",
      "checkorder",
      "userprofile",
      "cart"
    ];
    if (whiteListRoutes.includes(route.name!)) {
      return;
    }
  }
  // if (route.name === 'logout') {
  //   store.dispatch('admin/removeLogin');
  //   store.dispatch('user/removeLogin');
  //   return redirect('/login');
  // }
  // await store.dispatch('app/actionCheckLoggedIn');
  // const userIsLoggedIn = store.getters['user/isLoggedIn'];
  // const adminIsLoggedIn = store.getters['admin/isLoggedIn'];
  // if (!userIsLoggedIn && !adminIsLoggedIn) {
  //   return redirect('/login');
  // } else {
  //   return;
  // }
};

export default middleware;
