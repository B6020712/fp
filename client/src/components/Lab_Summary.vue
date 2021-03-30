<template>
  <v-container>
    <v-row width="90%">
        <v-col v-for="item in items1" :key="item.title" link width="25%">
          <v-card class="card" color="blue lighten-5"><div class="div1">{{item.title}}</div><div class="div2">{{item.head}}</div>
          <v-card-actions><v-spacer></v-spacer><v-btn v-on:click="goto(item.action)" class="ma-2" outlined color="indigo">lab</v-btn><v-spacer></v-spacer></v-card-actions></v-card>
        </v-col>
    </v-row>
    <v-row width="90%">
        <v-col v-for="item in items2" :key="item.title" link width="25%">
          <v-card class="card" color="blue lighten-5"><div class="div1">{{item.title}}</div><div class="div2">{{item.head}}</div>
          <v-card-actions><v-spacer></v-spacer><v-btn v-on:click="goto(item.action)" class="ma-2" outlined color="indigo">lab</v-btn><v-spacer></v-spacer></v-card-actions></v-card>
        </v-col>
    </v-row>
    <v-row width="90%">
        <v-col v-for="item in items3" :key="item.title" link width="25%">
          <v-card class="card" color="blue lighten-5"><div class="div1">{{item.title}}</div><div class="div2">{{item.head}}</div>
          <v-card-actions><v-spacer></v-spacer><v-btn v-on:click="goto(item.action)" class="ma-2" outlined color="indigo">lab</v-btn><v-spacer></v-spacer></v-card-actions></v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items1: [
        { title: 'BEFORE LAB', head: 'Downloading Cisco Packet Tracer' , action: "/beforelab" },
        { title: 'LAB 1', head: 'Basic Configuration Commands' , action: "/lab1" },
        { title: 'LAB 2', head: 'IP Planning' , action: "/lab2" },
        { title: 'LAB 3', head: 'Data Link Layer' , action: "/lab3" },
      ],
      items2: [
        { title: 'LAB 4', head: 'Implementing VLAN' , action: "/lab4" },
        { title: 'LAB 5', head: 'IPv4 Routing' , action: "/lab5" },
        { title: 'LAB 6', head: 'Routing Protocols' , action: "/lab6" },
        { title: 'LAB 7', head: 'IPv6' , action: "/lab7" },
      ],
      items3: [
        { title: 'LAB 8', head: 'NAT, DHCP and DNS' , action: "/lab8" },
        { title: 'LAB 9', head: 'Switch Port Security and ACL' , action: "/lab9" },
        { title: 'LAB 10', head: 'Wireless LAN' , action: "/lab10" },
        { title: 'FUTURE', head: '..........' , action: "/lab1" },
      ],
    }
  },
  methods: {
    goto: function (to) {
      this.$router.push(to);
    }
  }
}
</script>

<style>
  .card {
    height: 150px;
    width: 80%;
    text-align: center;
  }
  .div1 {
    padding-top: 10px;
  }
  .div2 {
    font-weight: bold;
    padding-top: 10px;
  }
</style>