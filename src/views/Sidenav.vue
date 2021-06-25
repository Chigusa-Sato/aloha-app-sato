<template>
  <div class="sidenavi">
    <h1>サイドナビ</h1>
    <router-link to="/">ホーム</router-link><br>
    <router-link to="/cart">カート</router-link><br>
    <router-link to="/orderlog">注文履歴</router-link><br>
  </div>
</template>

<style scoped>
.sidenavi {
  background: rgb(238, 214, 170);
  width: 100px;
  height: 300px;
  text-align: center;
}
</style>
