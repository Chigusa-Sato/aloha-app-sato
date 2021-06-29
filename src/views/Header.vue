<template>
  <div class="l-header">
    <div class="l-header__left">
      <button class="l-header__link">三</button>
      <img
        :src="require('../assets/img/header_logo.png')"
        class="l-header__logo"
      />
    </div>
    <div class="l-header__right">
                  <p class="l-header__user-name">{{ userName }}</p>

      <router-link to="/" class="l-header__link"
        ><img :src="require('../assets/img/home.png') " class="o-logo"
      /></router-link>
      <router-link to="/cart" class="l-header__link">
        <img :src="require('../assets/img/shopping-cart.png')" class="o-logo"
      /></router-link>
      <router-link to="/orderlog" v-show="uid" class="l-header__link" 
        ><img :src="require('../assets/img/time-left.png')" class="o-logo"
      /></router-link>
      <button @click="login" v-show="!uid" class="l-header__link">
        <img :src="require('../assets/img/user.png')" class="o-logo" />
      </button>
      <button @click="logout" v-show="uid" class="l-header__link">
        <img :src="require('../assets/img/logout.png')" class="o-logo"/>
      </button>
    </div>
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
    ...mapGetters(["userName", "photoURL", "uid"]),
  },
};
</script>

<style scoped lang="scss">
@import "../style/flocss.scss";

</style>
