<template>
  <div>
    <v-card width="500" class="my-4 mx-auto">
      <div class="text-center">
        <v-card-text class="mt-8">
          <h1 class="text-center headline red--text">
            Chào mừng bạn đến với FAST FOOD
          </h1>
          <h1 class="font-weight-bold text-center headline red--text">
            TẠO TÀI KHOẢN
          </h1>
          <v-form class="my-8 px-7">
            <v-card-subtitle class="pb-2 pt-0 pl-0 d-flex subtitle-1">
              Số điện thoại hoặc email *
            </v-card-subtitle>
            <v-text-field
              @keyup.enter="signUp()"
              required
              outlined
              prepend-inner-icon="mdi-email"
              v-model="email"
              :rules="emailRules"
              label="Email"
            ></v-text-field>
            <v-card-subtitle class="pb-2 pt-0 pl-0 d-flex subtitle-1">
              Mật khẩu *
            </v-card-subtitle>
            <v-text-field
              @keyup.enter="signUp()"
              outlined
              prepend-inner-icon="mdi-lock"
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[passwordRules.required, passwordRules.min]"
              :type="show ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 6 characters"
              counter
              @click:append="show = !show"
            ></v-text-field>
            <v-card-subtitle class="pb-2 pt-0 pl-0 d-flex subtitle-1">
              Họ tên *
            </v-card-subtitle>
            <v-text-field
              @keyup.enter="signUp()"
              outlined
              prepend-inner-icon="mdi-email"
              v-model="name"
              label="Name"
            ></v-text-field>
            <v-radio-group hide-details="auto" v-model="sex" row class="mt-0">
              <template v-slot:label>
                <div>GIới tính:</div>
              </template>
              <v-radio label="Nam" value="male"></v-radio>
              <v-radio label="Nữ" value="female"></v-radio>
            </v-radio-group>
          </v-form>
          <v-card-actions class="pt-0 card-action">
            <v-btn
              :disabled="isLoggedIn"
              @click="signUp()"
              color="red darken-2 white--text"
              class="px-15"
            >
              ĐĂNG KÝ
              <v-progress-circular
                v-if="isLoggedIn"
                class="ml-2"
                size="20"
                indeterminate
                color="primary"
              ></v-progress-circular>
            </v-btn>
          </v-card-actions>
          <div>
            <v-card-subtitle class="pt-0"
              >Bạn đã là thành viên ? <a @click="signIn()">Đăng nhập</a>
            </v-card-subtitle>
          </div>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      show: false,
      email: "",
      password: "",
      name: "",
      sex: "",
      passwordRules: {
        required: value => !!value || "Password is Required.",
        min: v => v.length >= 6 || "Min 6 characters",
        emailMatch: () => `The email and password you entered don't match`
      },
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    ...mapActions("user", ["actionCheckSignUp"]),
    signIn() {
      this.$router.push("/signin");
    },
    signUp() {
      console.log("signUp");
      this.actionCheckSignUp({
        email: this.email,
        password: this.password,
        name: this.name,
        sex: this.sex
      });
    }
  },
  computed: {
    ...mapGetters("user", ["isLoggedIn"])
  }
};
</script>

<style scoped>
a {
  color: #bcad72;
}
.card-action {
  justify-content: center;
}
</style>
