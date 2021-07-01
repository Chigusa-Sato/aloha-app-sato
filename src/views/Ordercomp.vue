<template>
  <div>
    <h1 class="c-page-title">ご注文が完了しました！</h1>
    <p class="c-page-sub-title">注文内容は注文履歴で確認できます。</p>
    <div class="c-button__container">
      <router-link to="/orderlog">
        <button class="c-button--default">履歴を確認する</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../style/flocss.scss";
</style>
