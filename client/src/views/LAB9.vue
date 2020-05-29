<template>
  <div>
      <!-- BAR ON THE TOP -->
    <v-app-bar absolute dark>
      <v-toolbar-title>Basic Computer Network</v-toolbar-title>
      <v-spacer/><v-spacer/>
      <v-app-bar>
        <v-tabs>
          <bar />
        </v-tabs>
      </v-app-bar>
    </v-app-bar>
    <!-- HEADER 1 -->
    <br/><br/><br/>
    <h1 class="display-2 font-weight-bold mb-3">LAB9</h1>
  </div>
</template>

<script>
import bar from "../components/bar" ;
export default {
  components: {
    bar 
  },
};
</script>

<style>

</style>