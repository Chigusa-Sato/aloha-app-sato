<template>
  <div>
    <div>
      <input type="text" v-model="keyword" placeholder="type something" />
      <button @click="search">searh</button>
      <p v-show="searchItems.length===0">該当する商品がありません</p>
    </div>
    <div class="searchItems">
      <div
        v-for="searchItem in searchItems"
        :key="searchItem.id"
        class="searchItem"
      >
        <router-link
          :to="{ name: 'ItemDetail', params: { itemid: searchItem.id } }"
        >""
          <p>{{ searchItem.name }}</p>
          <img :src="searchItem.imagePath" />
          <p>{{ searchItem.price }}円</p>
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
      this.resultMessage=" "
      this.searchItems = [];
      if (this.keyword === "") { //keywordが空の場合-
        return (this.resultMessage = "検索ワードを入力してください");

      } else if (this.keyword !== "") {//keywordが入っていた場合
        for (let i = 0; i <= this.$store.state.items.length; i++) {
          let itemsName = this.$store.state.items[i].name;

          if (itemsName.indexOf(this.keyword) !== -1) {
            this.resultMessage="検索結果";
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
.searchItems {
  display: flex;
  flex-wrap: wrap;
}
.searchItem {
  width: 25%;
  img {
    width: 90%;
  }
}
</style>
