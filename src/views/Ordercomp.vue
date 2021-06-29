<template>
  <div>
    <h1 class="o-page-title">ご注文が完了しました！</h1>
    <p class="o-page-sub-title">注文内容は注文履歴で確認できます。</p>
    <div class="o-button__container">
      <router-link to="/orderlog">
        <button class="o-button--default">履歴を確認する</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../style/flocss.scss";
</style>
