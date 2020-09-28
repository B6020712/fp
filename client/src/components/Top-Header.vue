<template>
  <div>
    <v-app-bar class="appbar" color="brown">
      <v-toolbar-title class="display-1 font-weight-medium mr-0 mr-md-4 v-sheet theme--dark transparent">Nerkwet</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <div v-if="logInSign" class="subtitle-1 font-weight-medium mr-0 mr-md-4 v-sheet theme--dark transparent">
          <!-- <img :src="photo" class="photoo"> -->
          คุณ : {{name}}
          e-mail : {{email}}
          <v-btn @click="signOut">Sign Out</v-btn>
        </div>
        <div v-if="!logInSign"><v-btn @click="signIn">Sign In</v-btn></div>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
export default {
  data() {
    return {
      logInSign : false,
      // currentUser : false,
      user : {
        name : '',
        email : '',
        photo : ''
      }
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.logInSign = !!user;
      if(user) {
        this.name = user.displayName;
        this.email = user.email;
        this.photo = user.photoURL;
      }
    })
    // this.user = firebase.auth().currentUser;
    // if(this.user) {
    //   this.name = this.user.displayName;
    //   this.email = this.user.email;
    //   this.photo = this.user.photoURL;
  },

  methods: {
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then((result) => {
        this.$router.push("/beforelab");
        console.log(result);
        this.logInSign = true;
      }).catch((err) => {
        alert('Oops. ' + err.message)
      });
    },
    signOut() {
      try {
        const data = firebase.auth().signOut();
        this.$router.push("/");
        console.log(data);
        this.logInSign = false;
      } catch(err){
        console.log(err);
      }
    }
  }
}
</script>

<style scoped>
  .appbar {
    height: 100%;
    widows: 100%;
  }
  .photoo {
    width: 30px;
    height: 30px;
  }
</style>