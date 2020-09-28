import Vue from 'vue' ;
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import axios from 'axios';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyAkbtRkqaa6noMv33dRv-3Y1cipaT8jvRw",
  authDomain: "loginsocial-36934.firebaseapp.com",
  databaseURL: "https://loginsocial-36934.firebaseio.com",
  projectId: "loginsocial-36934",
  storageBucket: "loginsocial-36934.appspot.com",
  messagingSenderId: "841840057012",
  appId: "1:841840057012:web:4f5a5749cb0c69df16d5e1",
  measurementId: "G-53ZXN9DJSY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// new Vue({
  //   vuetify,
  //   router,
  //   render: h => h(App)
  // }).$mount('#app')
  
  // let app;
  // firebase.auth().onAuthStateChanged(() => {
    //   if (!app) {
      //     app = new Vue({
        //       vuetify,
        //       router,
        //       render: h => h(App)
        //     }).$mount('#app')
        //   }
        // })
        
let app;

firebase.auth().onAuthStateChanged( user => {
  console.log(user);
  if(!app) {
    app = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})