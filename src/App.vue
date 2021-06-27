<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
      <Sidenav class="sidebar-area"></Sidenav>
    </div>
    <div class="scafold-wrapper text-center">
      <router-view />
    </div>
    <div id="footer">
      <Footer class="footer-area"></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./views/Header.vue";
import Sidenav from "./views/Sidenav.vue";
import Footer from "./views/Footer.vue";
import { auth } from "./firebase/index";
import { mapActions } from "vuex";

export default {
  components: {
    Header,
    Footer,
    Sidenav,
  },
  methods: {
    ...mapActions(["setLoginUser", "deleteLoginUser", "fetchOrders"]),
  },
  beforeCreate() {
    console.log("beforeCreate");
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setLoginUser(user);
        this.fetchOrders();
      } else {
        this.deleteLoginUser();
        this.$store.state.orders = [];
      }
    });
  },
  created() {
    console.log("created");
    console.log(this.$store.state.orders); //storeのordersがレンダリングされるたびにリセットされている
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.sidebar-area {
  /* 左側に固定 */
  float: left;
}
.footer-area {
  margin-top: 40px;
}

.scafold-wrapper {
  /* display: flex; 要素を横並びにする */
  flex-direction: column; /* 要素の並び順の主軸を指定 上 => 下 */
  min-height: 100vh; /* 要素の高さの最小値を指定 vhはviewport(表示領域) heightの略 */

  /* サイドバーのwidth分だけ範囲を削除 */
  width: calc(100% - 200px);

  /* サイドバーで隠れるので右に寄せる */
  margin: 0 0 0 180px;
}
</style>
