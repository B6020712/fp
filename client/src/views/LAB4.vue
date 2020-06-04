<template>
  <div>
    <!-- HEADER 1 -->
    <p class="display-3 mb-3">LAB 4</p>
    <p class="title font-regular">VLAN Part 1</p>

    <!-- brief -->
    <v-row align="center" justify="center">
      <v-card class="mx-auto" min-width="300" min-height="100">
        <v-card-text>
          <p class="display-2 font-weight-bold mb-3 text--primary">Brief Lab</p>
          <p class="subtitle-1 text--primary">
            เรียนรู้การทำงานของ VLAN<br/>
            <v-img min-width="100" min-height="100" src="@/assets/lab/lab4/lab4-1.png"></v-img><br/>
          </p>
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
          <p class="subtitle-1 text--primary">
            ---------------<br/>
            1.สร้างการเชื่อมต่อเครือข่ายดังภาพด้านบนเฉพาะ Switch0 (ที่สาขา CPE)<br/>
            1.1 เพื่อความปลอดภัยทำการปิด interface ที่ไม่ใช้ ดังนั้นปิดทั้งหมดก่อนค่อยเปิดเมื่อใช้<br/>
          </p>
          <p class="subtitle-1">
            Switch# configure terminal<br/>
            Switch(config)# interface range fa0/1-24<br/>
            Switch(config-if-range)# shutdown<br/>
            Switch(config-if-range)# interface range gi0/1-2<br/>
            Switch(config-if-range)# shutdown<br/>
          </p>
          <p class="subtitle-1 text--primary">
            1.2 เปิดเฉพาะ interface ที่ใช้เป็น Access mode<br/>
          </p>
          <p class="subtitle-1">
            Switch(config)# interface range fa0/1, fa0/2, fa0/13, fa0/14<br/>
            Switch(config-if-range)# switchport mode access<br/>
            Switch(config-if-range)# no shutdown<br/>
          </p>
          <p class="subtitle-1 text--primary">
            1.3 สร้าง VLANs และกำหนดชื่อให้ Switch0<br/>
          </p>
          <p class="subtitle-1">
            Switch(config)# vlan 10<br/>
            Switch(config-vlan)# name CPE<br/>
            Switch(config-vlan)# vlan 20<br/>
            Switch(config-vlan)# name TCE<br/>
          </p>
          <p class="subtitle-1 text--primary">
            1.4 ตรวจสอบ VLANs ที่ได้ตั้งค่าไป<br/>
          </p>
          <p class="subtitle-1">
            Switch# show vlan brief<br/>
          </p>
          <p class="subtitle-1 text--primary">
            1.5 กำหนดค่า VLAN ให้กับแต่ละ port ตามที่เราต้องการ<br/>
          </p>
          <p class="subtitle-1">
            Switch(config)# interface range fa0/1, fa0/2, fa0/13<br/>
            Switch(config-if-range)# switchport mode access<br/>
            Switch(config-if-range)# switchport access vlan 10<br/>
            Switch(config-if-range)# interface fa0/14<br/>
            Switch(config-if-range)# switchport mode access<br/>
            Switch(config-if-range)# switchport access vlan 20<br/>
            Switch# show vlan brief<br/>
          </p>
          <p class="subtitle-1 text--primary">
            2.สร้างการเชื่อมต่อเครือข่ายดัง Figure 1 เฉพาะ SW1 (ที่สาขา TCE)<br/>
            3.สร้าง Trunk ระหว่าง SW0 และ SW1 และกำหนดค่า native vlan 99<br/>
            3.1 ที่ Switch0 ทำการกำหนดค่า และตรวจสอบ<br/>
          </p>
          <p class="subtitle-1">
            Switch# configure terminal<br/>
            Switch(config)# interface g0/1<br/>
            Switch(config)# switchport trunk allowed vlan 10,20<br/>
            Switch(config-if)# switchport mode trunk<br/>
            Switch(config-if)# switchport trunk native vlan 99<br/>
            Switch(config-if)# no shutdown<br/>
            Switch# show interface trunk<br/>
          </p>
          <p class="subtitle-1 text--primary">
            3.2 ที่ Switch1 ทำการกำหนดค่า และตรวจสอบ<br/>
          </p>
          <p class="subtitle-1">
            Switch# configure terminal<br/>
            Switch(config)# interface g0/2<br/>
            Switch(config)# switchport trunk allowed vlan 10,20<br/>
            Switch(config-if)# switchport mode trunk<br/>
            Switch(config-if)# switchport trunk native vlan 99<br/>
            Switch(config-if)# no shutdown<br/>
            Switch# show interface trunk<br/>
          </p>
          <p class="subtitle-1 text--primary">
            4.มีนักศึกษา TCE หนึ่งคนที่ต้องการนั่งอยู่ในสาขา CPE แต่มีความต้องการใช้งานเครือข่าย TCE ของตัวเอง<br/>
            5.มีนักศึกษา CPE หนึ่งคนที่ต้องการนั่งอยู่ในสาขา TCE แต่มีความต้องการใช้งานเครือข่าย CPE ของตัวเอง<br/>
            6.สาขา CPE อยู่ใน network vlan10 ที่ network 191.10.1.0/28<br/>
            7.สาขา TCE อยู่ใน network vlan20 ที่ network 191.10.2.0/28<br/>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -<br/>
            8.สิ่งที่ต้องทำให้ได้ในแลปนี้คือ<br/>
            8.1 CPE0 สามารถ Ping ไปยัง CPE-Std ที่นั่งอยู่ในสาขา TCE ได้<br/>
            8.2 TCE1 สามารถ Ping ไปยัง TCE-Std ที่นั่งอยู่ในสาขา CPE ได้<br/>
            8.3 อธิบายว่า SW0 – SW1 เชื่อมต่อกันด้วย Switch mode ใด<br/>
            8.4 อธิบายว่าทำไมนักศึกษาของ CPE ถึงไปเชื่อมต่อกับ SW ที่สาขา TCE แต่ยังใช้งานเครือข่ายของ CPE ได้<br/>
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