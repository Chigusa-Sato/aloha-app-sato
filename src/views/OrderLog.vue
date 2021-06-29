<template>
  <div>
    <h1 class="o-page-title">注文履歴</h1>
    <h2 v-show="ordersLog.length === 0">履歴はありません</h2>
    <div class="table_line" v-for="(logItem, index) in ordersLog" :key="index">
      <div class="block">{{ logItem.today }}</div>
      <div class="block" table__img><img :src="logItem.imagePath" /></div>
      <div class="block">{{ logItem.itemName }}</div>
      <div class="block">{{ logItem.num }}個</div>
      <div class="block">¥{{ logItem.price }}</div>
      <div class="block">小計¥{{ logItem.price * logItem.num }}</div>
      <div class="block">
        <button @click.once="cancel(logItem)">
          <p v-if="logItem.status === 1 || logItem.status === 2">キャンセル</p>
          <p v-else-if="logItem.status === 9">キャンセル済み</p>
        </button>
      </div>
      <div class="block table__title"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      storeStateOrders: this.$store.state.orders,
      //   ordersLog: this.$store.getters.ordersLog,
    };
  },
  methods: {
    cancel(logItem) {
      console.log("キャンセル");
      let cancelOrder = this.$store.state.orders.find(
        (store) => store.orderId === logItem.orderId
      );
      console.log(cancelOrder);
      let cancelOrderId = cancelOrder.orderId;
      console.log(cancelOrderId);

      this.cancelOrder({
        cancelOrderId: cancelOrderId,
        cancelOrder: cancelOrder,
      });
    },
    ...mapActions(["cancelOrder"]),
  },
  mounted() {
    // this.ordersLog = this.$store.getters.ordersLog;
    console.log("mounted");
    console.log(this.$store.getters.ordersLog);
  },
  computed: {
    ordersLog() {
      console.log("computed");
      console.log(this.$store.getters.logItems);
      return this.$store.getters.logItems;
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
</style>
