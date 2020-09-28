<template>
  <v-card class="mx-auto" max-width="1000" min-height="100">
    <!-- HEADER 1 -->
    <p class="display-3 mb-3 text-center">LAB 8</p>
    <p class="title font-regular text-center">Routing Protocols part 2</p>

    <!-- brief -->
    <v-row align="center" justify="center">
      <v-card class="mx-auto" min-width="300" min-height="100">
        <v-card-text>
          <p class="display-2 font-weight-bold mb-3 text--primary">Brief Lab</p>
          <p class="subtitle-1 text--primary">
            แลปนี้จะเกี่ยวกับ protocol OSPF และ EIGRP<br/>
          </p>
          <p class="subtitle-1" align="center">
            <v-img min-width="100" min-height="100" src="@/assets/lab/lab8/lab8-1.png"></v-img><br/>
            figure 1 - lab 8
          </p>
          <p class="subtitle-1" align="center">
            <v-img min-width="100" min-height="100" src="@/assets/lab/lab8/lab8-2-a.png"></v-img><br/>
            figure 2 - IntraA
          </p>
          <p class="subtitle-1" align="center">
            <v-img min-width="100" min-height="100" src="@/assets/lab/lab8/lab8-2-b.png"></v-img><br/>
            figure 3 - IntraB
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
            1. ที่ฝั่งซ้ายรวมถึง Intra A จะใช้ EIGRP เป็น AS number 100<br/>
            1.1 กำหนดค่า EIGRP ที่ Router2 ดังนี้ (กำหนดค่าคล้ายกับ OSPF ใช้ network address และ wildcard mask ของ interface)<br/>
          </p>
          <p class="subtitle-1">
            Router(config)# router eigrp 100<br/>
            Router(config-router)# network 8.8.8.0 0.0.0.255<br/>
            Router(config-router)# network 2.2.3.0 0.0.0.255<br/>
            Router(config-router)# network 2.2.1.0 0.0.0.255<br/>
            Router(config-router)# no auto-summary<br/>
          </p>
          <p class="subtitle-1 text--primary">
            1.2 กำหนดค่า EIGRP ที่ Router0 และ Router1 จากตัวอย่าง Router2<br/><br/>

            2 ที่ฝั่งขวารวมถึง Intra B จะใช้ OSPF (แบบมีหลาย Area) โดยให้เป็น ProcessID 10<br/>
            2.1 กำหนดค่า Router7 ด้วย OSPF ดังนี้<br/>
          </p>
          <p class="subtitle-1">
            Router(config)# router ospf 10<br/>
            Router(config-router)# network 8.8.9.0 0.0.0.255 area 0<br/>
            Router(config-router)# network 10.0.0.0 0.0.0.255 area 10<br/>
            Router(config-router)# network 10.0.3.0 0.0.0.255 area 20<br/>
          </p>
          <p class="subtitle-1 text--primary">
            2.2 กำหนดค่า Router5 ด้วย OSPF ดังนี้<br/>
          </p>
          <p class="subtitle-1">
            Router(config)# router ospf 10<br/>
            Router(config-router)# network 10.0.1.0 0.0.0.255 area 10<br/>
            Router(config-router)# network 10.0.0.0 0.0.0.255 area 10<br/>
            Router(config-router)# network 10.0.4.0 0.0.0.255 area 5<br/>
          </p>
          <p class="subtitle-1 text--primary">
            2.3 ทดลองกำหนดค่าให้ Router6 โดยมี network 10.0.4.0 0.0.0.255 เป็น area 5, network 10.0.2.0 0.0.0.255 เป็น area 20 และ network 10.0.3.0 0.0.0.255 เป็น area 20<br/><br/>
            2.4 ทดลองกำหนดค่าให้ Router8 โดยมี network 10.0.1.0 0.0.0.255 เป็น area 10, network 10.0.2.0 0.0.0.255 เป็น area 20 และ network 172.55.1.0 0.0.0.255 เป็น area 20<br/><br/>
            3. สุดท้ายให้ Intra ทั้งสองทำการแลกเปลี่ยน Routing (OSPF & EIGRP Redistribution) หรือทำการเชื่อมต่อกันด้วย Backbone<br/>
            3.1 วิธีการแลกเปลี่ยน Routing table ของ EIGRP กับ OSPF<br/>
          </p>
          <p class="subtitle-1">
            <strong>3.1.1วิธีการแลกเปลี่ยน Routing แบบ redistribute OSPF routes into EIGRP<br/></strong>
            Router(config)#router eigrp (EIGRP ID)<br/>
            Router(config-router) # redistribute ospf (OSPF procees ID) metric 1000 33 255 1 1500<br/><br/>
            <strong>3.1.2 วิธีการแลกเปลี่ยน Routing แบบ redistribute EIGRP routes into OSPF<br/></strong>
            Router(config)#router ospf (OSPF procees ID)<br/>
            Router(config-router) # redistribute eigrp (EIGRP ID) subnets<br/><br/>
            <strong>3.1.3 กำหนดค่า Redistribution สำหรับ OSPF และ EIFRP ที่ Router4 ดังนี้<br/></strong>
            Router(config)#router eigrp 100<br/>
            Router(config-router)# network 8.8.8.0 0.0.0.255<br/>
            Router(config-router)# redistribute ospf 10 metric 1000 33 255 1 1500<br/>
            Router(config-router)# exit<br/>
            Router(config)# router ospf 10<br/>
            Router(config-router)# network 8.8.9.0 0.0.0.255 area 0<br/>
            Router(config-router)# redistribute eigrp 100 subnets<br/>
          </p>
          <p class="subtitle-1 text--primary" align="center">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          </p>
          <p class="subtitle-1 text--primary">
            4. สิ่งที่ต้องทำให้ได้ในแลปนี้คือ<br/>
            4.1 ที่ Router4 ต้องมีการเรียนรู้ subnet จาก intra A (172.16.1.0/24) และ intra B (172.55.1.0/24)<br/>
            4.2 ที่ Router2 ต้องมีจุดที่ EIGRP ได้จากการแลกเปลี่ยนกับ OSPF<br/>
            4.3 ที่ Router7 ต้องมีจุดที่ OSPF ได้จากการแลกเปลี่ยนกับ EIGRP<br/>
            4.4 PC0 สามารถติดต่อไปยัง PC1 ได้ (Ping หรือ tracert ก็ได้)<br/>
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