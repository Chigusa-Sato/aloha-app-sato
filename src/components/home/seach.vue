<template>
  <div class="search">
    <h1 class="o-page-title">検索</h1>
    <div class="l-input-group">
      <div class="l-input-group__container">
        <input
          type="text"
          class="l-input-group__input"
          v-model="keyword"
          placeholder="type something"
        />
        <img
          :src="require('../../assets/img/search.png')"
          @click="search"
          class="o-logo"
        />
      </div>
      <p v-show="searchItems.length === 0" class="l-input-group__message">
        該当する商品がありません
      </p>
    </div>

    <div class="l-card">
      <div v-for="item in searchItems" :key="item.id" class="l-card__aside">
        <router-link :to="{ name: 'ItemDetail', params: { itemid: item.id } }">
          <div class="l-card__figure">
            <img :src="item.imagePath" class="l-card__image" />
          </div>
          <div class="l-card__content">
            <p class="l-card__link">{{ item.name }}</p>
            <p class="l-card__link">{{ item.price }}円</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
      //resultMessage:"",
      searchItems: [],
    };
  },
  methods: {
    search() {
      this.resultMessage = "";
      this.searchItems = [];
      if (this.keyword === "") {
        //keywordが空の場合-
        return (this.resultMessage = "検索ワードを入力してください");
      } else if (this.keyword !== "") {
        //keywordが入っていた場合
        for (let i = 0; i < this.$store.state.items.length; i++) {
          let itemsName = this.$store.state.items[i].name;

          if (itemsName.indexOf(this.keyword) !== -1) {
            this.resultMessage = "検索結果";
            this.searchItems.push(this.$store.state.items[i]);
          }
          // if (itemsName.indexOf(this.keyword) == -1){
          //         this.resultMessage="検索結果";
          // }
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../style/flocss.scss";
.search{
  padding:0 0 10% 0;
 // border:1px solid
}
</style>
