<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <div class="sidebar-link-area">
        <h1>Side</h1>
        <router-link to="/" class="sidebar-link">ホーム</router-link><br />
        <router-link to="/cart" class="sidebar-link">カート</router-link><br />
        <router-link to="/orderlog" class="sidebar-link">注文履歴</router-link><br />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .sidebar {
  background: rgb(238, 214, 170);
  width: 100px;
  height: 300px;
  text-align: center;
} */

.sidebar {
  background-color: rgb(238, 214, 170);
  height: 1000px; /* サイドバーの高さ */
  width: 200px; /* サイドバーのwidthを指定 */
  max-width: 200px; /* widthの最大値 */
  opacity: 0.9.5; /* 透過する 0に近くほど透過する */
  /* position: fixed; 左上に要素を固定する(スクロールしても位置は固定される) */
  overflow-x: hidden; /* 横軸ではみ出た要素を非表示にする */
  box-sizing: border-box; /* paddingとborderを、widthとheightに含める */
 padding-left: 40px;   /*サイドバー内のリンクの位置を右にずらす */
}

.sidebar-link-area {
  padding-top: 20px; /* サイドバーリンクの上部に空白を作る */
}

.sidebar-link {
  color: #ffffff; /* リンクの文字色を白に */
}

.sidebar-link:hover {
  color: #ffffff /* マウスがリンクに乗った時も文字色を白に */
}

</style>
