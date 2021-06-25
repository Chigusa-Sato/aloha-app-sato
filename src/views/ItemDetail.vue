<template>
  <div>
    <h1>商品詳細</h1>
    <div class="detail">
      <div class="detail__container">
        <div class="detail__img">
          <img :src="itemDetail.imagePath" />
        </div>
        <div class="detail__name">
          <p>{{ itemDetail.name }}</p>
        </div>
        <div class="detail__price">
          <p>¥{{ itemDetail.price }}(税抜)</p>
        </div>
        <div class="detail__description">
          <p>{{ itemDetail.description }}</p>
        </div>
      </div>
    </div>
    <div>
      <button @click="countMinus">-</button>
      {{ count }}
      <button @click="countPlus">+</button>
      <button @click="addCart">カートに入れる ¥{{ totalPrice }}(税抜)</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      itemDetail: {},
      count: 0,
      totalPrice: 0,
      storeOrder:this.$store.state.orders
    };
  },
  methods: {
    countMinus() {
      if (this.count > 0) {
        this.count--;
        this.totalPrice = this.itemDetail.price * this.count;
      }
    },
    countPlus() {
      if (this.count < 10) {
        this.count++;
        this.totalPrice = this.itemDetail.price * this.count;
      }
    },
    addCart() {
      console.log(this.itemDetail);
      let order = {};
      order.id = this.itemDetail.id;
      order.num = this.count; //カートに入れた商品の個数
      order.status = 0; //注文前のステータス
      console.log(order);
      this.addOrder(order).then(() => {});
      console.log(this.storeOrder)//storeのorder配列の中身
      this.$router.push({name:"Cart"},()=>{});
    },
    ...mapActions(["addOrder"]),
  },
  created() {
    const item = this.$store.getters.getItemById(this.$route.params.itemid);
    if (item) {
      this.itemDetail = item; //dataオプションにgetItemByIDでとってきた値を入れている
    }
  },
};
</script>

<style scoped lang="scss">
.detail {
  display: flex;

  img {
    width: 50%;
  }
}
</style>
