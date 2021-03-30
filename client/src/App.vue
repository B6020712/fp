<template>
  <v-app>
    <LoginHeader></LoginHeader>
    <!-- <Side-App></Side-App> -->
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import LoginHeader from './components/LoginHeader'
// import SideApp from './components/Side-App'
export default {
  components:{
    'LoginHeader':LoginHeader,
    // 'Side-App':SideApp,
  },
  name: 'App' ,
  methods: {
    toLogin() {
      this.$router.push("/login");
    }
  }
};

</script>

<style>
 .main {
   width: 100%;
   height: 100%;
 }
</style>