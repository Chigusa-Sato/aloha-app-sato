<template>
  <div class="p-detail">
    <h1 class="c-page-title">商品詳細</h1>
    <div class="p-detail__container">
      <div>
        <img :src="itemDetail.imagePath" class="p-detail__image" />
      </div>
      <div class="p-detail__text-container">
        <div class="p-detail__text">
          <p class="c-page-sub-title">{{ itemDetail.name }}</p>
        </div>
        <div class="p-detail__text">
          <p>¥{{ itemDetail.price }}(税抜)</p>
        </div>
        <div class="p-detail__text">
          <p>{{ itemDetail.description }}</p>
        </div>
        <div class="p-detail-add">
          <div class="p-detail-add__count">
            <img
              :src="require('../assets/img/minus.png')"
              class="c-logo countMinus"
              @click="countMinus"
            />
            <span>{{ count }}</span>
            <img
              :src="require('../assets/img/plus.png')"
              class="c-logo countPlus"
              @click="countPlus"
            />
          </div>
          <button @click="addCart" class="c-button--default">
            カートに入れる ¥{{ totalPrice }}(税抜)
          </button>
                   

        </div>
         <p >{{message}}</p>
      </div>
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
      storeOrder: this.$store.state.orders,
      message:""
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
      if(this.count===0){
        this.message="個数を選択してください"
      }else{

      console.log("itemDetailログインしている");
      let order = {};
      order.id = this.itemDetail.id;
      order.num = this.count; //カートに入れた商品の個数
      order.status = 0; //注文前のステータス
      console.log(order);
      this.addOrder(order).then(() => {});
      console.log(order);
      this.$router.push({ name: "Cart" }, () => {});
    }},
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
@import "../style/flocss.scss";
.c-button--default{
  margin-left:15%;
    font-size:12px;
}
</style>
