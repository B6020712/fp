<template>
  <div>
    <v-app-bar class="appbar" color="#1976D2" clipped-left app>
      <v-toolbar-title class="display-1 font-weight-medium mr-0 mr-md-4 v-sheet theme--dark transparent">Nerkwet</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <div v-if="logInSign" class="subtitle-1 font-weight-medium mr-0 mr-md-4 v-sheet theme--dark transparent">
          <v-icon v-on:click="$router.push('/labsummary')" dark style="padding-right: 10px">mdi-home</v-icon>
          <!-- {{name}} -->
          <v-menu bottom min-width="200px" rounded offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon x-large v-on="on">
                <v-avatar size="48">
                  <img :src="photo" class="photoo">
                </v-avatar>
              </v-btn>
            </template>
            <v-card height="250px" width="250px">
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <v-avatar><img :src="photo" class="photoo"></v-avatar>
                  <h3>{{name}}</h3>
                  <p class="caption mt-1">{{email}}</p>
                  <v-divider></v-divider><br/>
                  <v-btn @click="signOut">Sign Out</v-btn>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
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
  },

  methods: {
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then((result) => {
        this.$router.push("/labsummary");
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
    },
  }
}
</script>

<style scoped>
  .appbar {
    height: 100%;
    widows: 100%;
  }
  .photoo {
    width: 40px;
    height: 40px;
  }
</style>