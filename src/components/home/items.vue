<template>
  <div>
    <p class="c-page-title">商品一覧</p>
    <div class="p-card">
      <div v-for="item in items" :key="item.id" class="p-card__aside">
        <router-link :to="{ name: 'ItemDetail', params: { itemid: item.id } }">
          <div class="p-card__figure">
            <img :src="item.imagePath" class="p-card__image" />
          </div>
          <div class="p-card__content">
            <p class="p-card__link">{{ item.name }}</p>
            <p class="p-card__link">{{ item.price }}円</p>
          </div>
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
@import "../../style/flocss.scss";

</style>
