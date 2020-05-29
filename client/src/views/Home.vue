<template>
  <div>
    <!-- HEADER 1 -->
    <p class="display-2 font-weight-bold mb-3">Learn Basic Computer Network</p>
    <br />

    <v-row no-gutters align="center" justify="center">
      <v-col cols=9>
        <v-card class="pa-2" outlined tile>
          <p class="title font-regular-bold mb-3">สำหรับผู้ที่ต้องการเรียนรู้พื้นฐานของเครือข่ายคอมพิวเตอร์</p>
          <p class="title font-regular-bold mb-3">เหมาะสำหรับ นักเรียน นักศีกษา หรือผู้ที่สนใจ</p>
        </v-card>
      </v-col>
      <v-col cols=9>
        <v-card class="pa-2" outlined tile>
          <p class="title font-regular-bold mb-3">โดยจะใช้โปรแกรม Cisco Packet Tracer เป็นโปรแกรมที่ใช้สำหรับการทำแลป</p>
          <p class="title font-regular-bold mb-3">จะมีทั้งหมด 10 แลปให้ทดลองทำโดยทำตั้งแต่แลปที่ 1 ไล่ไปจนถึงแลปที่ 10 นะครับ</p>
          <p class="title font-regular-bold mb-3">หรือสนใจทำแลปใดก็สามารถกดเข้าไปทำได้เลยครับ</p>
        </v-card>
      </v-col>
      <v-col cols=9>
        <v-card class="pa-2" outlined tile>
          <p class="title font-regular-bold mb-3">ขั้นแรกสุดที่เราจะเริ่มกันคือการดาว์นโหลดและติดตั้งโปรแกรม Cisco Packet Tracer</p>
          </v-card>
      </v-col>
    </v-row>
    <br />

    <!-- Before LAB -->
    <v-row align="center" justify="center">
      <v-card width="400" height="215">
        <v-card-text>
          <p class="display-1">Before LAB</p>
          <p>ดาว์นโหลดและติดตั้งโปรแกรม Cisco Packet Tracer</p>
        </v-card-text>
        <v-card-action>
          <v-btn class="ma-2" color="info" @click="toBeforeLAB">
            Before Lab
            <v-icon>mdi-arrow-right-bold-box</v-icon>
          </v-btn>
        </v-card-action>
      </v-card>
    </v-row>
    <br />
  </div>
</template>

<script>
export default {
  methods: {
    toBeforeLAB() {
      this.$router.push("/beforelab");
    }
  }
};
</script>