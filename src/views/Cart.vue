<template>
  <div>
    <div>
      <h1>カート</h1>
      <div class="table">
        <!-- <div class="table__line">
                    <div class="block table__title">pic</div>
          <div class="block table__title">商品名</div>
          <div class="block table__title">価格（税抜）</div>
          <div class="block table__title">個数</div>
          <div class="block table__title">計（税抜）</div>
        </div> -->
        <div class="table_line" v-for="(cart, index) in carts" :key="index">
          <div class="block" table__img><img :src="cart.imagePath" /></div>
          <div class="block">{{ cart.itemName }}</div>
          <div class="block">{{ cart.num }}個</div>
          <div class="block">¥{{ cart.price }}</div>
          <div class="block">小計¥{{ cart.price * cart.num }}</div>
          <div class="block table__title">
            <button @click="deleteItem(cart)">削除</button>
          </div>
        </div>
      </div>

      <button>注文に進む</button>
    </div>
    <div>
      <OrderInfo></OrderInfo>
    </div>
  </div>
</template>

<script>
import OrderInfo from "../components/order/orderInfo.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      orders: this.$store.state.orders,
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
    ...mapActions(["deleteOrder", "deleteOrderUserNull"]),
  },

  computed: {
    // cart() {
    //   return this.$store.getters.cart;
    // },
    carts() {
      return this.$store.getters.cartItems;
      //orders配列内のstatusが0の商品に、商品名や価格、画像などの情報を付加したもの
      //（画面上に表示するため）
    },
  },
};
</script>

<style scoped lang="scss">
.table_line {
  display: table;
  width: 600px;
  img {
    width: 100%;
  }
}

.block {
  display: table-cell;
  border: solid 1px #999;
  width: 200px;
}
.table__title {
  width: 150px;
}

table {
  table-layout: auto;
  width: 100%; /* 幅指定 */
}
th {
  width: 100%; /* 幅指定 */
  font-weight: normal; /* 文字の太さ指定 */
}
td {
  width: 50%;
}
</style>
