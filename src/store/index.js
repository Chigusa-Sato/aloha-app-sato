import Vue from "vue";
import Vuex from "vuex";
//import firebase from "firebase";
import { auth, db } from "../firebase/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_user: null,
    items: [
      {
        id: 1,
        name: "Hawaiianパラダイス",
        description:
          "ハワイで取れる名産物でかつオーガニックな食料がふんだんに使われたローカルフーズです。健康志向の方に大人気の商品です。",
        price: 2160,
        imagePath: require("../assets/img/10.jpg"),
      },
      {
        id: 2,
        name: "アサイーボウル",
        description:
          "ブラジル発祥のデザートで、アメリカ合衆国のハワイ州で人気が出てよく知られるようになった商品です。アサイーのスムージーをボウルに盛りつけ、グラノーラなどのシリアル食品やバナナやリンゴやイチゴなど好みの果物をのせて蜂蜜をかけて供する。朝食とされることもある。",
        price: 1490,
        imagePath: require("../assets/img/2.jpg"),
      },
      {
        id: 3,
        name: "ハワイアンマルゲリータピザ",
        description:
          "ハワイで取れたフレッシュトマトと野菜、チーズをふんだんに使って作られたマルゲリータピザです。隠し味として中にパイナップルやマンゴーも入っています。",
        price: 1490,
        imagePath: require("../assets/img/3.jpg"),
      },
      {
        id: 4,
        name: "カメハメハベーカリーの焼きたてマラサダ",
        description:
          "ハワイの定番おやつといえば、やっぱりマラサダ。なかでも、カメハメハベーカリーのマラサダは、行列必至 の人気ぶりです。",
        price: 1900,
        imagePath: require("../assets/img/4.jpg"),
      },
      {
        id: 5,
        name: "Raysのフリフリチキン",
        description:
          "ノースショア名物の鶏肉を丸焼きにしたフリフリチキンです。現地では土日しか食べられないものを暖かい状態でお届けします。",
        price: 1900,
        imagePath: require("../assets/img/5.jpg"),
      },
      {
        id: 6,
        name: "マツモトシェーブアイス",
        description:
          "連日行列ができるノースショアの人気かき氷店のシェーブアイスです。日系人が作ったこの店はノース/ハレイワの観光スポットになっています。",
        price: 2700,
        imagePath: require("../assets/img/6.jpg"),
      },
      {
        id: 7,
        name: "レナーズのマラサダGorgeous4",
        description:
          "ポルトガル発祥のスイーツで有名なドーナツ「マラサダ」。マラサダの代名詞は「レナーズ」と言われるほど有名なお店のマラサダをお届けします。",
        price: 2570,
        imagePath: require("../assets/img/7.jpg"),
      },
      {
        id: 8,
        name: "ザ・テラスのエッグベネディクト",
        description:
          "イングリッシュ・マフィンの半分に、ハム、ベーコンまたはサーモン等や、ポーチドエッグ、オランデーズソースを乗せて作る料理です。",
        price: 2160,
        imagePath: require("../assets/img/8.jpg"),
      },
      {
        id: 9,
        name: "アヒポキ丼",
        description:
          "アヒポキとは、ハワイ語で「アヒ」はまぐろ、「ポキ」は魚を小さく切るという意味のハワイ郷土料理の一つです。 甘辛いタレで絡めてお好みの香味野菜を添えてお召し上がりください。 ",
        price: 2700,
        imagePath: require("../assets/img/9.jpg"),
      },
      {
        id: 10,
        name: "ガーリックシュリンプ",
        description:
          "オアフ島北部のカフク地方で養殖されるエビをにんにく風味の油で炒めた料理。主に移動販売車で売られており、同地方の名物とされる。",
        price: 1490,
        imagePath: require("../assets/img/1.jpg"),
      },
      {
        id: 11,
        name: "Bananのソフトクリーム",
        description:
          "フルーツたっぷりなアイスクリームは、もうリピート間違いなしの絶品もの。冷凍状態のまま鮮度そのままでお届けします。",
        price: 2700,
        imagePath: require("../assets/img/11.jpg"),
      },
      {
        id: 12,
        name: "ホノルルコーヒー",
        description:
          "本場のコナ100%のコーヒーです。観光客にはもちろんローカルにも人気で毎日大行列ができます。",
        price: 2160,
        imagePath: require("../assets/img/12.jpg"),
      },
      {
        id: 13,
        name: "マカヒキのイルカバナナ",
        description:
          "ハワイ・アウラニリゾートに入っているマカヒキのブッフェで提供されているイルカの形をしたバナナです。お子様に大人気です。",
        price: 2160,
        imagePath: require("../assets/img/13.jpg"),
      },
      {
        id: 14,
        name: "ラムファイヤーのマイタイ",
        description:
          "シェラトンワイキキ１階に入っているラムファイヤーのマイタイです。お酒ですので20歳以上限定の商品です。",
        price: 2980,
        imagePath: require("../assets/img/14.jpg"),
      },
      {
        id: 15,
        name: "ロコモコSpecial",
        description:
          "誰もが大好きロコモコです。こだわりのビーフ100％のハンバーグは、肉感がしっかり残ったステーキのような食べごたえ。",
        price: 2440,
        imagePath: require("../assets/img/15.jpg"),
      },
      {
        id: 16,
        name: "ラウラウ",
        description:
          "タロイモの葉の中央に肉や魚の小片を乗せ、葉の端を葉の中に折り込んで、その上からティの葉で包む。伝統的にはさらにバナナの葉で包まれ、イムと呼ばれる地中のオーブンで、熱い石と一緒に地中に埋めて調理される、ハワイの郷土料理です。",
        price: 2700,
        imagePath: require("../assets/img/16.jpg"),
      },
      {
        id: 17,
        name: "ポイ",
        description:
          "タロイモの球茎から作るポリネシアの主食です。焼くか蒸すかした球茎を、粘りが出るまですりつぶすことによって作られ、絶品の美味しさです。",
        price: 2440,
        imagePath: require("../assets/img/17.jpg"),
      },
      {
        id: 18,
        name: "ニコスピア38のアヒステーキ",
        description:
          "ニコスピアで夜しか提供していないアヒ(マグロ)のステーキです。リピータが多く絶品です。",
        price: 2700,
        imagePath: require("../assets/img/18.jpg"),
      },
    ],
    orders: [],
    ordersLog: [],
  },

  mutations: {
    //ログイン情報の保持--------------------------------
    setLoginUserMU(state, user) {
      state.login_user = user;
    },

    //ログアウト情報の保持---------------------------------
    deleteLoginUserMU(state) {
      state.login_user = null;
    },

    //storeへのオーダー情報追加処理
    addOrderMU(state, { orderId, order }) {
      //order={id:1, num:2, status:0}
      let orderToMU = order;
      orderToMU.orderId = orderId; //firestoreで自動採番されるorderId(doc.id)
      state.orders.push(orderToMU);
      console.log(orderToMU);
      console.log(state.orders);
    },
    addOrderUserNullMU(state, order) {
      state.orders.push(order);
    },
    //カートから削除 store ログイン時 -------------------------------------------------
    //db の orderId と store の orderId が一致するものを削除
    deleteOrderMU(state, { orderItemId }) {
      let deleteCartItem = state.orders.findIndex(
        (order) => order.orderId === orderItemId
      );
      state.orders.splice(deleteCartItem, 1);
    },

    //カートから削除 store 未ログイン時
    deleteOrderUserNull(state, order) {
      let deleteCartItem = state.orders.findIndex(
        (element) => element.itemId === order.id
      );
      state.orders.splice(deleteCartItem, 1);
    },

    //注文確定(storeのステータスを更新）
    // updateOrderMU(state,newOrder){
    //   state.orders=
    // }
    updateOrderMU(state, { id, newOrder }) {
      console.log(newOrder);
      state.orders.forEach((order) => {
        if (order.orderId === id) {
          order.status = newOrder.status;
        }
      });
    },

    addOrderLogMU(state, { id, order }) {
      order.id = id;
      let orderedItem = state.items.find((item) => item.id === order.itemId);
      state.ordersLog.push(orderedItem);
    },

    fetchOrderMU(state, { orderId, order }) {
      let pushData = order;
      pushData.orderId = orderId;
      state.orders.push(pushData);
    },
    cancelOrderMU(state, { cancelOrderId, cancelOrder }) {
      state.orders.forEach((order) => {
        if (cancelOrderId === cancelOrder.orderId) {
          order.status = cancelOrder.status;
        }
      });
    },
  },

  actions: {
    //ログイン系------------------------------------------------------------
    login() {
      console.log("ログイン");
      const google_auth_provider = new auth.GoogleAuthProvider();
      auth().signInWithRedirect(google_auth_provider);
    },
    setLoginUser({ commit }, user) {
      commit("setLoginUserMU", user);
    },

    //ログアウト系------------------------------------------------------------
    logout() {
      console.log("ログアウト");
      auth().signOut();
    },

    deleteLoginUser({ commit }) {
      commit("deleteLoginUserMU");
    },

    //カートに追加----------------------------------------------------------------
    addOrder({ getters, commit }, order) {
      //orderはカート内商品の個数とステ-タスと商品名が入る。
      console.log(order); //{id:1, num:2, status:0}
      //firestoreへ商品を追加（カート）
      if (getters.uid) {
        //order.userId = getters.uid;
        db.collection(`users/${getters.uid}/orders`)
          .add(order)
          .then((doc) => {
            console.log(doc.id); //XDzXCTKhLgjqgpugNSuC
            commit("addOrderMU", { orderId: doc.id, order });
          });
      } else {
        commit("addOrderUserNullMU", order);
      }
    },
    //dbからカートや注文した商品の情報を取得---------------------------------------
    fetchOrders({ getters, commit }) {
      console.log("actions");
      db.collection(`users/${getters.uid}/orders`)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            // console.log("doc.data()=" + JSON.stringify(doc.data()));
            // if (doc.data().status === 0) {
            //   commit("addOrderMU", { orderId: doc.id, order: doc.data() });
            // } else {
            //   commit("updateOrderMU", {
            //     orderId: doc.id,
            //     order: doc.data(),
            //   });
            // }
            commit("fetchOrderMU", { orderId: doc.id, order: doc.data() });
            console.log("actions fetch完了");
          });
        });
    },
    //カートから削除 db ログイン時-------------------------------------------------------
    deleteOrder({ getters, commit }, { orderItemId }) {
      db.collection(`users/${getters.uid}/orders`)
        .doc(orderItemId)
        .delete()
        .then(() => {
          console.log("delete");
          commit("deleteOrderMU", { orderItemId });
        });
    },
    //カートから削除 未ログイン時------------------------------------------------------------------
    deleteOrderUserNull({ commit }, crat) {
      commit("deleteOrderUserNull", crat);
    },

    //注文確定（㏈ステータスを更新）----------------------------------------------------------
    updateOrder({ getters, commit }, { id, newOrder }) {
      if (newOrder.pay === "1") {
        newOrder.status = 1;
        console.log("代引き");
      } else if (newOrder.pay === "2") {
        newOrder.status = 2;
        console.log("クレジットカード");
      }
      console.log(newOrder);
      db.collection(`users/${getters.uid}/orders`)
        .doc(id)
        .update(newOrder)
        .then(() => {
          console.log(newOrder);
          commit("updateOrderMU", { id, newOrder });
        });
    },
    cancelOrder({ getters, commit }, { cancelOrderId, cancelOrder }) {
      cancelOrder.status = 9;
      console.log("cancelアクション" + cancelOrder.status);
      db.collection(`users/${getters.uid}/orders`)
        .doc(cancelOrderId)
        .update(cancelOrder)
        .then(() => {
          commit("cancelOrderMU", { cancelOrderId, cancelOrder });
        });
    },
  },

  getters: {
    //ログイン情報の加工（画面に表示するため）--------------------------------
    userName: (state) =>
      state.login_user
        ? `ようこそ、${state.login_user}さん`.displayName
        : "ログインしてください",
    photoURL: (state) => (state.login_user ? state.login_user.photoURL : ""),

    getItemById: (state) => (id) => state.items.find((item) => item.id === id),

    //ログイン時はuidをセット。ログアウト時はnull---------------------------
    uid: (state) => (state.login_user ? state.login_user.uid : null),

    //カートのステータス（０）に合致する商品だけを抽出
    cart: (state) => {
      return state.orders.filter((order) => order.status === 0);
    },

    //商品情報を付与----------------------------------------------------------
    cartItems: (state, getters) => {
      let results= getters.cart.map((order) => {
        let getItemInfo = state.items.find((item) => item.id === order.id); //itemsとordersの商品IDが一致しているもの
        //let orderNum = state.orders.map((obj) => obj.num);
        let cartItemDetails = {
          itemId: getItemInfo.id,
          itemName: getItemInfo.name,
          num: order.num,
          orderId: order.orderId,
          price: getItemInfo.price,
          imagePath: getItemInfo.imagePath,
          status: order.status,
        };
        return cartItemDetails;
      });
      return results;
    },

    ordersLog: (state) => {
      return state.orders.filter(
        (order) =>
          order.status === 1 || order.status === 2 || order.status === 9
      );
    },
    logItems: (state, getters) => {
      let results = getters.ordersLog.map((order) => {
        let getItemInfo = state.items.find((item) => item.id === order.id); //itemsとordersの商品IDが一致しているもの
        let logItemDetails = {
          itemId: getItemInfo.id,
          itemName: getItemInfo.name,
          num: order.num,
          orderId: order.orderId,
          price: getItemInfo.price,
          imagePath: getItemInfo.imagePath,
          status: order.status,
          today: order.today,
        };
        return logItemDetails;
      });
      return results;
    },
  },
});
