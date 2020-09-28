<template>
  <div>
    <div id="nav">
      <!-- <v-app-bar app dark>
        <v-toolbar-title>Basic Computer Network</v-toolbar-title>
        <v-spacer></v-spacer><v-spacer></v-spacer>

        <v-menu open-on-hover top offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              LAB 1-10
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <bar/>
          </v-list>
        </v-menu> 
      </v-app-bar> -->
      <v-navigation-drawer permanent left>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1">
            Select an app
            <small>Summarize if needed</small>
          </v-stepper-step>
          <v-stepper-step :complete="e6 > 2" step="2">Configure analytics for this app</v-stepper-step>
          <v-stepper-step :complete="e6 > 3" step="3">Select an ad format and name ad unit</v-stepper-step>
          <v-stepper-step step="4">View setup instructions</v-stepper-step>
        </v-stepper>
      </v-navigation-drawer>
    <v-content>
      
    </v-content>
    </div>
  </div>
</template>

<script>
// import bar from "@/components/bar" ;
export default {
  // components: {
  //   bar 
  // }
  data() {
    return {
      e6: 1,
    }
  }
}
</script>

<style>

</style>