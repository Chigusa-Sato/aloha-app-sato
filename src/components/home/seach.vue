<template>
  <div>
    <div>
      <input type="text" v-model="keyword" placeholder="type something" />
      <button @click="search">searh</button>
      <p>{{ resultMessage }}</p>
    </div>
    <div class="searchItems">
      <div
        v-for="searchItem in searchItems"
        :key="searchItem.id"
        class="searchItem"
      >
        <router-link
          :to="{ name: 'ItemDetail', params: { itemid: searchItem.id } }"
        >
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
      items: this.$store.state.items,
      searchItems: [],
      keyword: "",
      resultMessage: "",
    };
  },
  methods: {
    search() {
      this.searchItems = [];
      //keywordが空の場合--------------------------------
      if (this.keyword === "") {
        return (this.resultMessage = "検索ワードを入力してください");
      }
      //keywordが入っていた場合---------------------------
      let keyWord = this.keyword;
      for (let i = 0; i < this.items.length; i++) {
        let itemsName = this.items[i].name;
        if (itemsName.indexOf(keyWord) > -1) {
          this.searchItems.push(this.items[i]);
        } else {
          return (this.resultMessage = "該当する商品はありません");
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
