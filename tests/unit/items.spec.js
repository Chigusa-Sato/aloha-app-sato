import Items from '@/components/home/items.vue';
import Vuex from 'vuex'
import { shallowMount,createLocalVue } from '@vue/test-utils';



const localVue = createLocalVue()
localVue.use(Vuex)

describe('test ItemDetail Component',()=>{
  let store
  let storeMock
  let wrapper
  beforeEach(()=>{
    storeMock={
      namespaced: true,
      state:{
        items: [
          {
            id: 1,
            name: "Hawaiianパラダイス",
            description:
              "ハワイで取れる名産物でかつオーガニックな食料がふんだんに使われたローカルフーズです。健康志向の方に大人気の商品です。",
            price: 2160,
        imagePath: require("@/assets/img/10.jpg"),
          },
          {
            id: 2,
            name: "アサイーボウル",
            description:
              "ブラジル発祥のデザートで、アメリカ合衆国のハワイ州で人気が出てよく知られるようになった商品です。アサイーのスムージーをボウルに盛りつけ、グラノーラなどのシリアル食品やバナナやリンゴやイチゴなど好みの果物をのせて蜂蜜をかけて供する。朝食とされることもある。",
            price: 1490,
        imagePath: require("@/assets/img/2.jpg"),
          },
          {
            id: 3,
            name: "ハワイアンマルゲリータピザ",
            description:
              "ハワイで取れたフレッシュトマトと野菜、チーズをふんだんに使って作られたマルゲリータピザです。隠し味として中にパイナップルやマンゴーも入っています。",
            price: 1490,
        imagePath: require("@/assets/img/3.jpg"),
          },
          {
            id: 4,
            name: "ベーカリーのマラサダ",
            description:
              "ハワイの定番おやつといえば、やっぱりマラサダ。なかでも、カメハメハベーカリーのマラサダは、行列必至 の人気ぶりです。",
            price: 1900,
            imagePath: require("@/assets/img/4.jpg"),
          },
          {
            id: 5,
            name: "Raysのフリフリチキン",
            description:
              "ノースショア名物の鶏肉を丸焼きにしたフリフリチキンです。現地では土日しか食べられないものを暖かい状態でお届けします。",
            price: 1900,
            imagePath: require("@/assets/img/5.jpg"),
          },
          {
            id: 6,
            name: "マツモトシェーブアイス",
            description:
              "連日行列ができるノースショアの人気かき氷店のシェーブアイスです。日系人が作ったこの店はノース/ハレイワの観光スポットになっています。",
            price: 2700,
            imagePath: require("@/assets/img/6.jpg"),
          },
          {
            id: 7,
            name: "レナーズのマラサダGorgeous4",
            description:
              "ポルトガル発祥のスイーツで有名なドーナツ「マラサダ」。マラサダの代名詞は「レナーズ」と言われるほど有名なお店のマラサダをお届けします。",
            price: 2570,
            imagePath: require("@/assets/img/7.jpg"),
          },
          {
            id: 8,
            name: "ザ・テラスのエッグベネディクト",
            description:
              "イングリッシュ・マフィンの半分に、ハム、ベーコンまたはサーモン等や、ポーチドエッグ、オランデーズソースを乗せて作る料理です。",
            price: 2160,
            imagePath: require("@/assets/img/8.jpg"),
          },
          {
            id: 9,
            name: "アヒポキ丼",
            description:
              "アヒポキとは、ハワイ語で「アヒ」はまぐろ、「ポキ」は魚を小さく切るという意味のハワイ郷土料理の一つです。 甘辛いタレで絡めてお好みの香味野菜を添えてお召し上がりください。 ",
            price: 2700,
            imagePath: require("@/assets/img/9.jpg"),
          },
          {
            id: 10,
            name: "ガーリックシュリンプ",
            description:
              "オアフ島北部のカフク地方で養殖されるエビをにんにく風味の油で炒めた料理。主に移動販売車で売られており、同地方の名物とされる。",
            price: 1490,
            imagePath: require("@/assets/img/1.jpg"),
          },
          {
            id: 11,
            name: "Bananのソフトクリーム",
            description:
              "フルーツたっぷりなアイスクリームは、もうリピート間違いなしの絶品もの。冷凍状態のまま鮮度そのままでお届けします。",
            price: 2700,
            imagePath: require("@/assets/img/11.jpg"),
          },
          {
            id: 12,
            name: "ホノルルコーヒー",
            description:
              "本場のコナ100%のコーヒーです。観光客にはもちろんローカルにも人気で毎日大行列ができます。",
            price: 2160,
            imagePath: require("@/assets/img/12.jpg"),
          },
          {
            id: 13,
            name: "マカヒキのイルカバナナ",
            description:
              "ハワイ・アウラニリゾートに入っているマカヒキのブッフェで提供されているイルカの形をしたバナナです。お子様に大人気です。",
            price: 2160,
            imagePath: require("@/assets/img/13.jpg"),
          },
          {
            id: 14,
            name: "ラムファイヤーのマイタイ",
            description:
              "シェラトンワイキキ１階に入っているラムファイヤーのマイタイです。お酒ですので20歳以上限定の商品です。",
            price: 2980,
            imagePath: require("@/assets/img/14.jpg"),
          },
          {
            id: 15,
            name: "ロコモコSpecial",
            description:
              "誰もが大好きロコモコです。こだわりのビーフ100％のハンバーグは、肉感がしっかり残ったステーキのような食べごたえ。",
            price: 2440,
            imagePath: require("@/assets/img/15.jpg"),
          },
          {
            id: 16,
            name: "ラウラウ",
            description:
              "タロイモの葉の中央に肉や魚の小片を乗せ、葉の端を葉の中に折り込んで、その上からティの葉で包む。伝統的にはさらにバナナの葉で包まれ、イムと呼ばれる地中のオーブンで、熱い石と一緒に地中に埋めて調理される、ハワイの郷土料理です。",
            price: 2700,
            imagePath: require("@/assets/img/16.jpg"),
          },
          {
            id: 17,
            name: "ポイ",
            description:
              "タロイモの球茎から作るポリネシアの主食です。焼くか蒸すかした球茎を、粘りが出るまですりつぶすことによって作られ、絶品の美味しさです。",
            price: 2440,
            imagePath: require("@/assets/img/17.jpg"),
          },
          {
            id: 18,
            name: "ニコスピア38のアヒステーキ",
            description:
              "ニコスピアで夜しか提供していないアヒ(マグロ)のステーキです。リピータが多く絶品です。",
            price: 2700,
            imagePath: require("@/assets/img/18.jpg"),
          },
        ]
      }
    }
    store=new Vuex.Store({
      modules:{
        items:storeMock
      }
    })

    wrapper=shallowMount(Items,{store,localVue, stubs: ['router-link'],})
  })

  it('renders the correct markup',()=>{
    expect(wrapper.text()).toContain('商品一覧')
  })
})





