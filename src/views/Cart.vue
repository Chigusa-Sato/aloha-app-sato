<template>
  <div>
    <div>
      <h1>カート</h1>
      <div class="table">
        <div class="table__line">
          <div class="block table__title">商品名</div>
          <div class="block table__title">価格（税抜）</div>
          <div class="block table__title">個数</div>
          <div class="block table__title">計（税抜）</div>
        </div>
        <div class="table_line" v-for="(cart, index) in carts" :key="index">
          <div class="block" table__img><img :src="cart.imagePath" /></div>
          <div class="block">{{ cart.name }}</div>
          <div class="block">{{ cart.num }}</div>
          <div class="block">¥{{ cart.price }}</div>
          <div class="block">¥{{ cartTotalPrice }}</div>
          <div class="block table__title"><button @click="deleteItem">削除</button></div>
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
//import { mapGetters } from "vuex"
export default {
  data() {
    return {
      orders: this.$store.state.orders,
      cartTotalPrice: 100,
    };
  },
  components: {
    OrderInfo,
  },
  methods:{
    deleteItem(){
      console.log("削除")
    }
  },
  computed: {
    carts() {
      return this.$store.getters.cartItem;
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
