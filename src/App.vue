<template>
  <div id="app" class="app">
    <Header class="app__header"></Header>
    <!-- <Sidenav class="app__sidenav"></Sidenav> -->
    <router-view class="app__main" />
    <Footer class="app__footer"></Footer>
  </div>
</template>

<script>
import Header from "./views/Header.vue";
//import Sidenav from "./views/Sidenav.vue";
import Footer from "./views/Footer.vue";
import { auth } from "./firebase/index";
import { mapActions } from "vuex";

export default {
  components: {
    Header,
    Footer,
    //Sidenav,
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
    console.log(this.$store.state.orders); //storeのordersがレンダリングされるたびにリセットされている
  },
};
</script>

<style lang="scss">
@import "style/flocss.scss";

.app {
  color: $color-default;
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // display:grid;
  grid-template-areas: "header header header" "sidenav main main" "footer footer footer";
  &__header {
    grid-area: header;
    width: 100%;
    padding: 20px;
  }
  &__sidenav {
    grid-area: sidenav;
    width: 20%;
  }
  &__main {
    grid-area: main;
    width: 100%;
    height: 100%;
  }
  &__footer {
    grid-area: footer;
    width: 100%;
    padding: 20px;
  }
}

// .nav {
//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }

//   }
//   &__.sidebar-area {
//   /* 左側に固定 */
//   float: left;
// }
// &__.footer-area {
//   margin-top: 40px;
// }

// }

// .main {
//   // /* display: flex; 要素を横並びにする */
//   // flex-direction: column; /* 要素の並び順の主軸を指定 上 => 下 */
//   // min-height: 100vh; /* 要素の高さの最小値を指定 vhはviewport(表示領域) heightの略 */

//   // /* サイドバーのwidth分だけ範囲を削除 */
//   // width: calc(100% - 200px);

//   // /* サイドバーで隠れるので右に寄せる */
//   // margin: 0 0 0 180px;
// }
</style>
