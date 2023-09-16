<template>
  <div>
    <h1 class="c-page-title">注文履歴</h1>
    <h2 v-show="ordersLog.length === 0" class="c-page-sub-title">履歴はありません</h2> 

    <div class="table" v-show="ordersLog.length !== 0">
      <div class="table__line table__line-top">
        <div class="table__block table__title">注文日</div>
                <div class="table__block table__title"></div>
        <div class="table__block table__title">商品名</div>
        <div class="table__block table__title">個数</div>
        <div class="table__block table__title">価格（税抜）</div>
        <div class="table__block table__title">計（税抜）</div>
        <div class="table__block table__title"></div>
      </div>

      <div
        class="table__line"
        v-for="(logItem, index) in ordersLog"
        :key="index"
      >
        <div class="table__block table__block-first">{{ logItem.today }}</div>
        <div class="table__block" table__img><img :src="logItem.imagePath" /></div>
        <div class="table__block">{{ logItem.itemName }}</div>
        <div class="table__block">{{ logItem.num }}個</div>
        <div class="table__block">¥{{ logItem.price }}</div>
        <div class="table__block">小計¥{{ logItem.price * logItem.num }}</div>
        <div class="table__block">
          <button @click.once="cancel(logItem)" class="c-button--default">
            <p v-show="logItem.status == 1 || logItem.status == 2">
              キャンセル
            </p>
            <p v-show="logItem.status == 9" class="u-button--canceled">キャンセル済み</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      storeStateOrders:this.$store.state.orders,
    };
  },
  methods: {
    cancel(logItem) {
      console.log("キャンセル");
      let cancelOrder = this.$store.state.orders.find(
        (store) => store.orderId === logItem.orderId
      );
      let cancelOrderId = cancelOrder.orderId;

      this.cancelOrder({
        cancelOrderId: cancelOrderId,
        cancelOrder: cancelOrder,
      });
    },
    ...mapActions(["cancelOrder"]),
  },
  computed: {
    ordersLog() {
     return this.$store.getters.logItems;
   },
  },
};
</script>
<style scoped lang="scss">
@import "../style/flocss.scss";
.c-button--default{
  p{
    font-size: 0.5rem;
  }
}
</style>
