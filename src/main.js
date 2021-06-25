import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { ValidationProvider, ValidationObserver } from 'vee-validate';
// Vue.component('ValidationProvider', ValidationProvider);
// Vue.component('ValidationObserver', ValidationObserver);
// import VeeValidate from 'vee-validate';
// Vue.use(VeeValidate);
// Vue.config.productionTip = false
// import firebase from 'firebase'

// export const firebaseConfig = {
//   apiKey: "AIzaSyDkfdslzXc4eoepnFkaLR-rHcLxE55En2s",
//   authDomain: "aloha-app-96119.firebaseapp.com",
//   projectId: "aloha-app-96119",
//   storageBucket: "aloha-app-96119.appspot.com",
//   messagingSenderId: "133242871997",
//   appId: "1:133242871997:web:82b7daca7c2db575ce57d4",
//   measurementId: "G-HVH998Q16D"
// };
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
