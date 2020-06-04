<template>
  <div>
    <!-- HEADER 1 -->
    <p class="display-3 mb-3">LAB 3</p>
    <p class="title font-regular">Data Link Layer</p>

    <!-- brief -->
    <v-row align="center" justify="center">
      <v-card class="mx-auto" min-width="300" min-height="100">
        <v-card-text>
          <p class="display-2 font-weight-bold mb-3 text--primary">Brief Lab</p>
          <p class="subtitle-1 text--primary">
          แลปนี้เราจะเรียนรู้การทำงานของเครื่อข่ายใน Data Link Layer<br/>
          แลปนี้จะมีการทำทั้งหมด 2 part โดยแลปที่ 1 คือ Figure 1,2 และแลป 2 คือ Figure 3<br/>
          </p>
          <p class="subtitle-2" align="center">
            <v-img max-width="500" min-height="100" src="@/assets/lab/lab3/lab3-1.png"></v-img><br/>
            figure 1 - Hub</p>
          <p class="subtitle-2" align="center">
            <v-img max-width="500" min-height="100" src="@/assets/lab/lab3/lab3-2.png"></v-img><br/>
            figure 2 - Switch</p>
          <p class="subtitle-2" align="center">
            <v-img max-width="1100" min-height="100" src="@/assets/lab/lab3/lab3-3.png"></v-img><br/>
            figure 3 - Topology</p>
        </v-card-text>
      </v-card>
    </v-row>
    <br/>

    <v-row align="center" justify="center">
      <v-card class="mx-auto text-left" max-width="1300" min-height="400">
        <v-card-title>
          <p class="headline text--primary">อธิบายแลป</p>
        </v-card-title>
        <v-card-subtitle>
          <p class="subtitle-1 text--primary text-center">
              - - - - - - - - - - - - - - - - - - - PART 1 - - - - - - - - - - - - - - - - - - -<br/>
          </p>
          <p class="subtitle-1 text--primary">
            1.สร้างการเชื่อมต่อเครือข่ายด้วย Hub ดัง Figure 1<br/>
            2.สร้างการเชื่อมต่อเครือข่ายด้วย Switch ดัง Figure 2<br/>
            3.ใช้ Simulation mode และทำการ Filter เฉพาะ ICMP จากนั้นทำการส่งด้วยการ<br/>
            Add Simple PDU (icon รูปซองจดหมายปิด) จาก PC1 ไปยัง PC3 ทั้งแบบ Hub และ Switch<br/>
          </p>
          <p class="subtitle-1">
            Simulation Mode จะอยู่ทางด้านมุมซ้ายล่างของหน้าจอ<br/>
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab3/lab3-4.png"></v-img><br/>
            เลือก Filter<br/>
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab3/lab3-5.png"></v-img><br/>
            ทำการส่งด้วยการ Add Simple PDU<br/>
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab3/lab3-6.png"></v-img><br/>
          </p>
          <p class="subtitle-1 text--primary">
            7.ส่งด้วยการ Add Complex PDU (icon รูปซองจดหมายเปิด)<br/>
            โดย Destination address เป็น Broadcast address ของเครือข่าย<br/>
          </p>
          <p class="subtitle-1">
            ทำการส่งด้วยการ Add Complex PDU<br/>
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab3/lab3-7.png"></v-img><br/>
          </p>
          <p class="subtitle-1 text--primary">
            8.สิ่งที่ต้องทำและตอบคำถามให้ได้คือ<br/>
            8.1 PC1 (192.30.1.1) สามารถ ping ไปยัง PC3 (192.30.1.3) ได้ทั้งแบบ Hub และ Switch<br/>
            8.2 อธิบายความแตกต่างระหว่างแบบ Hub และ Switch เมื่อ PC1 ส่ง ICMP ไปยัง PC3<br/>
            8.3	อธิบายความแตกต่างระหว่างแบบ Hub และ Switch เมื่อ PC1 ส่งด้วย Destination address<br/>
            เป็น Broadcast address ของเครือข่าย<br/><br/>
          </p>
          <p class="subtitle-1 text--primary text-center">
            - - - - - - - - - - - - - - - - - - - PART 2 - - - - - - - - - - - - - - - - - - -<br/>
          </p>
          <p class="subtitle-1 text--primary">
            9.นำ PC, Switch และ Hub มาเชื่อมต่อดัง topology<br/>
            10.กำหนด IP address และ default gateway ด้วย IP address ของ Router<br/>
            (ต่อกับ RouterA คือ 10.1.1.1 และถ้าต่อกับ RouterB คือ 10.3.3.1)<br/>
            11.ใช้ Simulation mode และทำการ Filter เฉพาะ ICMP หลังจากนั้นทำการส่งด้วยการ<br/>
            Add Simple PDU (icon รูปซองจดหมายปิด) จาก PC11 ไปยัง PC31<br/>
            12.โดย PC11 ต้องสามารถ Ping ไปยัง PC31 ได้และต้องตอบคำถามต่อไปนี้ได้<br/>
            12.1 Ethernet Frame ที่ A จะมี Source mac address และ Destination mac address คืออะไร<br/>
            12.2 Ethernet Frame ที่ B จะมี Source mac address และ Destination mac address คืออะไร<br/>
            12.3 Ethernet Frame ที่ C จะมี Source mac address และ Destination mac address คืออะไร<br/>
            12.4 Ethernet Frame ที่ D จะมี Source mac address และ Destination mac address คืออะไร<br/>
            12.5 Ethernet Frame ที่ E จะมี Source mac address และ Destination mac address คืออะไร<br/>
          </p>
        </v-card-subtitle>
      </v-card>
    </v-row>

  </div>
</template>

<script>
export default {
};
</script>