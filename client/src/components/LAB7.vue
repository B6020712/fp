<template>
  <v-card class="mx-auto" max-width="1000" min-height="100" >
    <!-- HEADER 1 -->
    <p class="display-3 mb-3 text-center">LAB 7</p>
    <p class="title font-regular text-center">Routing Protocols part 1</p>

    <!-- brief -->
    <v-row align="center" justify="center">
      <v-card class="mx-auto" min-width="300" min-height="100">
        <v-card-text>
          <p class="display-2 font-weight-bold mb-3 text--primary">Brief Lab</p>
          <p class="subtitle-1 text--primary">
            แลปนี้จะเกี่ยวกับเส้นทางการส่ง Packet จากต้นทางไปยังปลายทาง<br/>
          </p>
          <p class="subtitle-1" align="center">
            <v-img min-width="100" min-height="100" src="@/assets/lab/lab7/lab7-1.png"></v-img><br/>
            figure 1 - lab 7</p>
        </v-card-text>
      </v-card>
    </v-row>
    <br/>
    
    <v-row align="center" justify="center">
      <v-card class="mx-auto text-left" max-width="800" min-height="400">
        <v-card-title>
          <p class="headline text--primary">อธิบายแลป</p>
        </v-card-title>
        <v-card-subtitle>
          <p class="subtitle-1 text--primary">
            1. กำหนดค่าพื้นฐานดัง Figure 1<br/>
            1.2 กำหนด IP address โดยทุก Subnet มี subnet mask คือ /24 แบบ Classful ให้กับอุปกรณ์ดัง Figure 1<br/>
            1.3 กำหนด Default Gateway ให้กับ PC ทุกเครื่อง ไปยัง G0/2 ของ Router ที่ทำการเชื่อมต่อ<br/><br/>

            2. ให้กำหนดค่า Cost ให้กับ Interface ดัง Figure 1 เพราะ OSPF มีการพิจารณา Cost ในการสร้าง Shortest-Path 
            ด้วย Link-state Algorithm โดยมีค่า Cost เริ่มต้นอ้างอิง (Default OSPF Cost) จากประเภทของ Interface (แต่ละประเภทมี Bandwidth แตกต่างกัน) ดัง Table 1<br/>
          </p>
          <p class="subtitle-1" align="center">
            <v-img min-width="100" min-height="100" src="@/assets/lab/lab7/lab7-3.png"></v-img><br/>
            Figure 2 - Table 1<br/>
          </p>
          <p class="subtitle-1">
            Router(config)# int (ชื่อ interface)<br/>
            Router(config-if)# ip ospf cost (ค่า cost)<br/>
          </p>
          <p class="subtitle-1 text--primary">
            3. หลังจากกำหนดค่า Cost แล้วทำการสร้าง OSPF Process ID เป็น 10 (ซึ่งเป็นค่าระหว่าง 1-65535) 
            ที่ Router แต่ละตัว เช่น Router0 กำหนดดังข้างล่าง โดยสามารถกำหนด OSPF Process ID เท่ากันได้ใน Router ตัวอื่น<br/>
          </p>
          <p class="subtitle-1">
            Route0(config)# router ospf 10<br/>
          </p>
          <p class="subtitle-1 text--primary">
            4. ทำการกำหนดค่า Network Address และ Wildcard mask ที่เป็น interface ของ Router รวมถึงกำหนด Area ที่ต้องการให้กับ OSPF เช่น Router0 กำหนดดังข้างล่าง<br/>
            4.1 กำหนด Network Address และ Wildcard Masks<br/>
          </p>
          <p class="subtitle-1">
            <v-img min-width="100" min-height="100" src="@/assets/lab/lab7/lab7-4-1.png"></v-img>
            <v-img min-width="100" min-height="100" src="@/assets/lab/lab7/lab7-4-2.png"></v-img><br/>
            Router0(config-router)# network (network_address) (wildcard_mask) area (area)<br/>
            Router0(config-router)# network 192.168.10.0 0.0.0.255 area 10<br/>
            Router0(config-router)# network 1.1.5.0 0.0.0.255 area 10<br/>
            Router0(config-router)# network 1.1.4.0 0.0.0.255 area 10<br/>
          </p>
          <p class="subtitle-1 text--primary">
            5. ตรวจสอบและสังเกตการกำหนดค่าของ OSPF ได้ด้วยหลาย command (ลองสังเกตค่า Cost สำหรับแต่ละ Network ปลายทาง)
          </p>
          <p class="subtitle-1">
            # show ip route ospf<br/>
            # show ip ospf interfaces<br/>
            # show ip protocols<br/>
            # show ip ospf<br/>
          </p>
          <p class="subtitle-1 text--primary">
            6. กำหนดค่า OSPF ตาม Figure 1 ให้กับ Router ตัวอื่น
          </p>
          <p class="subtitle-1 text--primary" align="center">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          </p>
          <p class="subtitle-1 text--primary">
            7. สิ่งที่ต้องอธิบายให้ได้จากการทำแลปนี้คือ<br/>
            7.1 ใช้คำสั่ง tracert จาก PC0 ไปยัง PC1 และอธิบายว่าทำไม Router ถึงเลือกส่ง packet ไปในเส้นทางนั้น<br/>
          </p>
        </v-card-subtitle>
      </v-card>
    </v-row>
  </v-card>
</template>

<script>
export default {
};
</script>