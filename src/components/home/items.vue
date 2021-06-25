<template>
  <div>
    <h1>All Items</h1>
    <div class="items">
      <div v-for="item in items" :key="item.id" class="item">
        <router-link :to="{ name: 'ItemDetail', params: { itemid: item.id } }">
          <p>{{ item.name }}</p>
          <img :src="item.imagePath" />
          <p>{{ item.price }}円</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Items",
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
};
</script>

<style scoped lang="scss">
.items {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 25%;
  img {
    width: 90%;
  }
}
</style>
