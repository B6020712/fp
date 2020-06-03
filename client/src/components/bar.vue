<template>
  <div class="my-2">
    <v-col><v-btn text @click="toHome"><v-icon>mdi-home</v-icon>หน้าแรก</v-btn></v-col>
    <v-col><v-btn text @click="toBeforeLAB">BeforeLAB</v-btn></v-col>
    <v-col><v-btn text @click="toLAB1">LAB1</v-btn></v-col>
    <v-col><v-btn text @click="toLAB2">LAB2</v-btn></v-col>
    <v-col><v-btn text @click="toLAB3">LAB3</v-btn></v-col> 
    <v-col><v-btn text @click="toLAB4">LAB4</v-btn></v-col>
    <v-col><v-btn text @click="toLAB5">LAB5</v-btn></v-col>
    <v-col><v-btn text @click="toLAB6">LAB6</v-btn></v-col>
    <v-col><v-btn text @click="toLAB7">LAB7</v-btn></v-col>
    <v-col><v-btn text @click="toLAB8">LAB8</v-btn></v-col>
    <v-col><v-btn text @click="toLAB9">LAB9</v-btn></v-col>
    <v-col><v-btn text @click="toLAB10">LAB10</v-btn></v-col>
    <v-col><v-btn text @click="toSolutions">เฉลยแลป</v-btn></v-col>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push("/");
    },
    toBeforeLAB() {
      this.$router.push("/beforelab");
    },
    toLAB1() {
      this.$router.push("/lab1");
    },
    toLAB2() {
      this.$router.push("/lab2");
    },
    toLAB3() {
      this.$router.push("/lab3");
    },
    toLAB4() {
      this.$router.push("/lab4");
    },
    toLAB5() {
      this.$router.push("/lab5");
    },
    toLAB6() {
      this.$router.push("/lab6");
    },
    toLAB7() {
      this.$router.push("/lab7");
    },
    toLAB8() {
      this.$router.push("/lab8");
    },
    toLAB9() {
      this.$router.push("/lab9");
    },
    toLAB10() {
      this.$router.push("/lab10");
    },
    toSolutions() {
      this.$router.push("/solutions");
    }
  }
}
</script>

<style>

</style>