<template>
  <div class="l-sidebar">
    <h1 class="l-sidebar__menu">Menu</h1>
    <div class="l-sidebar__menu-container">
      <router-link to="/" class="l-sidebar__link">ホーム</router-link>
    </div>
    <div class="l-sidebar__menu-container">
      <router-link to="/cart" class="l-sidebar__link">カート</router-link>
    </div>
    <div class="l-sidebar__menu-container">
      <router-link to="/orderlog" class="l-sidebar__link" v-show="uid"
        >注文履歴</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["uid"]),
  },
};
</script>

<style scoped lang="scss">
</style>
