<template>
  <div>
    <h1 class="c-page-title">カート</h1>
    <h2 v-show="carts.length == 0" class="c-page-sub-title">商品はありません</h2>
    <div class="table" v-show="carts.length !== 0">
      <div class="table__line table__line-top">
        <div class="table__block table__title"></div>
        <div class="table__block table__title">商品名</div>
        <div class="table__block table__title">個数</div>
        <div class="table__block table__title">価格（税抜）</div>
        <div class="table__block table__title">計（税抜）</div>
        <div class="table__block table__title"></div>
      </div>
      <div class="table__line" v-for="(cart, index) in carts" :key="index">
        <div class="table__block table__block-first" table__img>
          <img :src="cart.imagePath" />
        </div>
        <div class="table__block">{{ cart.itemName }}</div>
        <div class="table__block">{{ cart.num }}個</div>
        <div class="table__block">¥{{ cart.price }}</div>
        <div class="table__block">小計¥{{ cart.price * cart.num }}</div>
        <div class="table__block">
          <img
            :src="require('../assets/img/delete.png')"
            class="table__block-logo"
            @click="deleteItem(cart)"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="c-button__container">
        <button
          @click="loginCheck"
          v-show="carts.length !== 0"
          class="c-button--default"
        >
          注文に進む
        </button>
      </div>
      <!-- <div v-if="uid && carts.length !== 0"> -->
      <div v-show="toOrderInfo && this.carts.length !== 0">
        <OrderInfo></OrderInfo>
      </div>
    </div>
  </div>
</template>

<script>
import OrderInfo from "../components/order/orderInfo.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      orders: this.$store.state.orders,
      toOrderInfo: false,
    };
  },
  components: {
    OrderInfo,
  },

  methods: {
    deleteItem(cart) {
      //引数cartは削除対象の商品
      if (this.$store.state.login_user != null) {
        console.log(this.$store.state.orders);
        let orderItem = this.$store.state.orders.find(
          (store) => store.orderId === cart.orderId
        ); //storeのカートから削除対象の商品を特定
        console.log(this.carts);
        console.log(orderItem);
        let orderItemId = orderItem.orderId;
        this.deleteOrder({ orderItemId });
      } else {
        console.log("ロづインしなさい");
        this.deleteOrderUserNull({ cart });
      }
    },
    loginCheck() {
      if (!this.uid) {
        console.log("ロづインしよう");
        this.login();
        this.OrderInfo = false;
      } else {
        console.log("ログイン済み");
        if (this.carts.length !== 0) {
          this.toOrderInfo = true;
        }
      }
    },
    ...mapActions(["deleteOrder", "deleteOrderUserNull", "login"]),
  },

  computed: {
    // cart() {
    //   return this.$store.getters.cart;
    // },
    ...mapGetters(["uid"]),
    carts() {
      return this.$store.getters.cartItems;
      //orders配列内のstatusが0の商品に、商品名や価格、画像などの情報を付加したもの
      //（画面上に表示するため）
    },
  },
};
</script>

<style scoped lang="scss">
@import "../style/flocss.scss";
</style>
