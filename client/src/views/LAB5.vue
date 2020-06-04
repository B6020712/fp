<template>
  <div>
    <!-- HEADER 1 -->
    <p class="display-3 mb-3">LAB 5</p>
    <p class="title font-regular">VLAN Part 2</p>

    <!-- brief -->
    <v-row align="center" justify="center">
      <v-card class="mx-auto" min-width="300" min-height="100">
        <v-card-text>
          <p class="display-2 font-weight-bold mb-3 text--primary">Brief Lab</p>
          <p class="subtitle-1 text--primary">
            เรียนรู้การทำงานของ VLAN<br/>
            <v-img min-width="100" min-height="100" src="@/assets/lab/lab5/lab5-1.png"></v-img><br/>
          </p>
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
            1.บริษัทแห่งหนึ่งต้องการแบ่ง Network โดยแต่ละฝ่ายจะมี VLAN เป็นของตัวเอง ถ้าต้องการ VLAN ให้กับ 3 ฝ่ายคือ
            คณะกรรมการบริหาร ฝ่ายประชาสัมพันธ์และฝ่ายขายโดยมีเงื่อนไขว่าทั้งหมดจะต้องสามารถติดต่อกันได้ (inter-vlan Routing)<br/><br/>
            2.กำหนดค่า Sub-interface ที่ Router (ตรวจสอบก่อนว่า interface นั้นเปิดหรือไหม่)<br/>
            2.1 ที่ Interface g0/0/0.10 ให้ทำการ tag VLAN ID เป็น 10 ด้วยการ encapsulation dot1Q และมี IP address คือ 172.16.1.1 (netmask คือ 255.255.255.248)<br/>
          </p>
          <p class="subtitle-1">
            Router(config)# interface g0/0/0.10<br/>
            Router(config-subif)# encapsulation dot1Q 10<br/>
            Router(config-subif)# ip address 172.16.1.1 255.255.255.248<br/>
          </p>
          <p class="subtitle-1 text--primary">
            2.2 ที่ Interface g0/0/1.151 ให้ทำการ tag VLAN ID เป็น 151 ด้วยการ encapsulation dot1Q และมี IP address คือ 192.168.151.1 (netmask คือ 255.255.255.0)<br/><br/>
            2.3	ที่ Interface g0/0/1.151 ให้ทำการ tag VLAN ID เป็น 151 ด้วยการ encapsulation dot1Q และมี IP address คือ 192.168.151.1 (netmask คือ 255.255.255.0)<br/><br/>
            2.4	กำหนดค่า Switch0<br/>
            2.4.1 ให้ f0/1, f0/2 เป็น vlan10 และ mode access<br/>
            2.4.2 ให้ g0/1 เป็น trunk port สำหรับ vlan 10<br/><br/>
            2.5	กำหนดค่า Switch1 (ลองกำหนดเอง เรียนรู้จากแลป 4.1)<br/>
            2.5.1 ให้ f0/1, f0/2 เป็น vlan150 และ mode access<br/>
            2.5.2 ให้ g0/1 เป็น trunk port สำหรับ vlan 151<br/>
            2.5.3 ให้ g0/2 เป็น trunk port สำหรับ vlan 150-151<br/><br/>
            2.6	กำหนดค่า Switch2 (ลองกำหนดเอง เรียนรู้จากแลป 4.1)<br/>
            2.6.1 ให้ f0/1 เป็น vlan151 และ mode access<br/>
            2.6.2 ให้ g0/1 เป็น trunk port สำหรับ vlan 151<br/><br/>
            2.7	ตรวจสอบค่า Default Gateway ของ PC ถ้าไม่สามารถ Ping ได้แต่มั่นใจว่ากำหนดค่าถูกต้อง<br/><br/>
          </p>
          <p class="subtitle-1 text--primary text-center">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - <br/>
          </p>
          <p class="subtitle-1 text--primary">
            3.สิ่งที่ต้องทำและตอบคำถามได้ในแลปนี้คือ<br/>
            3.1 PC0 สามารถ Ping ไปยัง PC4 ได้<br/>
            3.2 อธิบายการทำงานว่าทำไมจึงสามารถ Ping ข้าม VLAN ได้<br/>
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