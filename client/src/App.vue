<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <v-app-bar app dark>
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
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-app-bar>
        <v-content>
          <v-container>
            <router-view />
          </v-container>
        </v-content>
      </div>
    </div>
  </v-app>
</template>

<script>
import bar from "./components/bar" ;
export default {
  components: {
    bar 
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
