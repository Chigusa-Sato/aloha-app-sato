<template>
  <div>
    <h1>お届け先情報</h1>
    <ValidationObserver v-slot="ObserverProps">
      <label>名前</label>
      <ValidationProvider name="名前" rules="required">
        <div slot-scope="Providerprops">
          <input v-model="name" />
          <p class="error">{{ Providerprops.errors[0] }}</p>
        </div>
      </ValidationProvider>

      <label>メールアドレス</label>
      <ValidationProvider name="email" rules="required|email">
        <div slot-scope="Providerprops">
          <input v-model="email" />
          <p class="error">{{ Providerprops.errors[0] }}</p>
        </div>
      </ValidationProvider>

      <label>郵便番号</label>
      <ValidationProvider
        name="郵便番号"
        :rules="{ required: true, regex: /^[0-9]{3}[-][0-9]{4}$/ }"
      >
        <div slot-scope="Providerprops">
          <input type="text" v-model="zipcode" />
          <p class="error">{{ Providerprops.errors[0] }}</p>
        </div>
      </ValidationProvider>

      <label>住所</label>
      <ValidationProvider name="住所" rules="required">
        <div slot-scope="Providerprops">
          <input v-model="address" />
          <p class="error">{{ Providerprops.errors[0] }}</p>
        </div>
      </ValidationProvider>

      <label>電話番号</label>
      <ValidationProvider
        name="電話番号"
        :rules="{ required: true, regex: /^[0-9]{3}[-][0-9]{4}[-][0-9]{4}$/ }"
      >
        <div slot-scope="Providerprops">
          <input type="text" v-model="tel" />
          <p class="error">{{ Providerprops.errors[0] }}</p>
        </div>
      </ValidationProvider>

      <label>配達日時</label>
      <p><input type="datetime-local" @change="checkDate" v-model="date" /></p>
      <p class="error">{{ dateError }}</p>

      <label>支払方法</label>
      <ValidationProvider  rules="oneOf:1,2">
        <div  slot-scope="Providerprops">
          <select name="payment" id="pay" value="支払い方法" v-model="pay" >
            <option value="1" id="1">代金引換</option>
            <option value="2" id="2">クレジットカード決済</option>
          </select>
          <p class="error">{{ Providerprops.errors[0] }}</p>
        </div>
      </ValidationProvider>

      <label>クレジットカード番号</label>
      <ValidationProvider
        name="クレジットカード番号"
        :rules="{ required: true, regex: /\d[0-9]{13}/g }"
      >
        <div slot-scope="Providerprops">
          <input type="text" v-model="creditNum" maxLength="16" />
          <p class="error">{{ Providerprops.errors[0] }}</p>
        </div>
      </ValidationProvider>

      <button
        @click="test"
        :disabled="ObserverProps.invalid || !ObserverProps.validated"
      >
        テスト
      </button>
    </ValidationObserver>

    <router-link to="ordercomp"><button>注文する</button></router-link>
    <router-view />
  </div>
</template>

<script>
import { required, email, regex, oneOf } from "vee-validate/dist/rules";
import {
  localize,
  extend,
  ValidationObserver,
  ValidationProvider,
} from "vee-validate";
import ja from "vee-validate/dist/locale/ja.json";
extend("required", required);
extend("email", email);
extend("regex", regex);
extend("oneOf", oneOf);
localize("ja", ja);

export default {
  name: "OrderInfo",
  data() {
    return {
      name: "",
      email: "",
      zipcode: "",
      address: "",
      tel: "",
      date: "",
      dateError: "",
      creditNum: "",
      credit: "",
      pay: "",
      paymentError: "",
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    test() {
      console.log("エラーテスト");
    },
    checkDate() {
      const date = this.date;
      let today = new Date(); //日付選択で今日より前の日付を選べないようにする
      let thisYear = today.getFullYear();
      let thisMonth = ("00" + (today.getMonth() + 1)).slice(-2);
      let thisDate = ("00" + today.getDate()).slice(-2);
      today = `${thisYear}-${thisMonth}-${thisDate}T00:00`;

      let clickday = new Date();
      let nowTimestamp = clickday.getTime();
      nowTimestamp = Math.floor(nowTimestamp / 1000);

      const checkyear = Number(date.slice(0, 4));
      const checkmonth = Number(date.slice(5, 7));
      const checkday = Number(date.slice(8, 10));
      const checkhour = Number(date.slice(11, 13));
      const checkminutes = Number(date.slice(14, 16));
      const selectedDay = new Date(
        checkyear,
        checkmonth - 1,
        checkday,
        checkhour - 3, //後々の条件式のために3時間分減らしている
        checkminutes
      );
      const selectedTimestamp = Math.floor(selectedDay / 1000);
      if (date === "") {
        this.dateError = "配達日時を入力して下さい";
      } else if (nowTimestamp > selectedTimestamp) {
        this.dateError = "今から3時間後の日時をご入力ください";
      } else {
        this.dateError = "";
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
