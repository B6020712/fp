<template>
  <v-app>
    <Top-Header></Top-Header>
    <!-- <Side-App></Side-App> -->
    <br/>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TopHeader from './components/Top-Header'
// import SideApp from './components/Side-App'
export default {
  components:{
    'Top-Header':TopHeader,
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

<style scoped>
 .main {
   width: 100%;
   height: 100%;
 }
</style>