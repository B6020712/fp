<template>
  <v-card  height="400" width="256">
    <v-navigation-drawer absolute permanent left>
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
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      e6: 1,
    }
  }
}
</script>

<style>

</style>