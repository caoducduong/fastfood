<template>
  <v-app>
    <v-main class="default">
      <Bar />
      <v-container class="pt-0">
        <nuxt />
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Bar from "../components/Bar";
import Footer from "../components/Footer";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    Bar,
    Footer
  },
  // middleware(context) {
  //   console.log("middleware");
  //   context.store.dispatch("user/getUser");
  // },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  computed: {
    ...mapGetters("user", ["getSnackBar"])
  }
};
</script>

<style>
.v-toolbar__content {
  height: 100% !important;
}
.v-input__append-outer {
  margin: 0 !important;
}
.default {
  background-color: #f2f3f7;
}
.v-stepper__step {
  align-items: baseline !important;
}
.v-stepper {
  box-shadow: none !important;
}
.textarea-rating .v-input__append-inner {
  bottom: 5px;
  position: absolute !important;
  right: 5px;
}
</style>
