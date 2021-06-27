<template>
  <div class="header">
    <h1>Head</h1>
    <router-link to="/">ホーム</router-link> |
    <router-link to="/cart">カート</router-link> |
    <router-link to="/orderlog">注文履歴</router-link> |
    <button @click="login">Googleアカウントでログイン</button>
    <button @click="logout">ログアウト</button>
    <p>{{ userName }}</p>
    <img :src="photoURL" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { auth } from "../firebase/index";

export default {
  created() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setLoginUser(user);
      } else {
        this.deleteLoginUser();
      }
    });
  },
  methods: {
    ...mapActions(["login", "logout", "setLoginUser", "deleteLoginUser"]),
  },
  computed: {
    ...mapGetters(["userName", "photoURL"]),
  },
};
</script>

<style>
.header {
  background: peachpuff;
}
</style>
