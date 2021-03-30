<template>
  <v-navigation-drawer v-if="logInSign" v-model="drawer" :mini-variant.sync="mini" permanent clipped app>
    <!-- <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img :src="photo"></v-img>
      </v-list-item-avatar>
      <v-list-item-title>LAB RESULT</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider> -->

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-on:click="goto(item.action)">{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
// import { db } from '../main'

export default {
  data () {
    return {
      logInSign : false,
      user : {
        name : '',
        email : '',
        photo : ''
      },
      drawer: true,
      items: [
        { title: 'LAB 1', icon: 'mdi-checkbox-multiple-blank-circle-outline', action: "/lab1" },
        { title: 'LAB 2', icon: 'mdi-checkbox-multiple-blank-circle-outline', action: "/lab2" },
        { title: 'LAB 3', icon: 'mdi-checkbox-multiple-blank-circle-outline', action: "/lab3" },
        { title: 'LAB 4', icon: 'mdi-checkbox-multiple-blank-circle-outline', action: "/lab4" },
        { title: 'LAB 5', icon: 'mdi-checkbox-multiple-blank-circle-outline', action: "/lab5" },
        { title: 'LAB 6', icon: 'mdi-checkbox-multiple-blank-circle-outline', action: "/lab6" },
        { title: 'LAB 7', icon: 'mdi-checkbox-multiple-blank-circle-outline', action: "/lab7" },
        { title: 'LAB 8', icon: 'mdi-checkbox-multiple-blank-circle-outline', action: "/lab8" },
        { title: 'LAB 9', icon: 'mdi-checkbox-multiple-blank-circle-outline', action: "/lab9" },
        { title: 'LAB 10', icon: 'mdi-checkbox-multiple-blank-circle-outline', action: "/lab10" },
      ],
      mini: true,
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
    goto: function (to) {
      this.$router.push(to);
    }
  }
}
</script>