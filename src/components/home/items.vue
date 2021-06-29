<template>
  <div>
    <p class="o-page-title">商品一覧</p>
    <div class="l-card">
      <div v-for="item in items" :key="item.id" class="l-card__aside">
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
