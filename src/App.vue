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
  }
};
</script>

<style lang="scss">
@import "style/flocss.scss";

.app {
  color: $color-default;
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

</style>
