<template>
  <v-card class="mx-auto" max-width="1000" min-height="100">
    <!-- HEADER 1 -->
    <br/>
    <p class="display-3 mb-3 text-center">LAB 2</p>
    <p class="title font-regular text-center">Assign IP address</p>

    <!-- brief -->
    <v-row align="center" justify="center">
        <v-card-text>
          <p class="display-2 font-weight-bold mb-3 text--primary">Brief Lab</p>
          <p class="subtitle-1 text--primary">
            <v-img max-width="1100" min-height="100" src="@/assets/lab/lab2/lab2-2.png"></v-img><br/>
            แลปนี้จะเกี่ยวกับการแจกจ่าย IP address ให้กับผู้ใช้<br/>
          </p>
        </v-card-text>
    </v-row>
    <br/>

    <v-row align="center" justify="center">
      <v-card-title>
        <p class="headline text--primary">อธิบายแลป</p>
      </v-card-title>
      <v-card-subtitle>
        <p class="subtitle-1 text--primary text-center">
          - - - - - - - - - - - - - - - - - - - บริษัท A (ฝั่งด้านขวา) - - - - - - - - - - - - - - - - - - -<br/>
        </p>
        <p class="subtitle-1 text--primary">
          บริษัท A ได้รับ Block of address จาก ISP(Internet Service Provider หรือผู้ให้บริการอินเตอร์เน็ต) เริ่มที่ 172.16.0.0/16<br/>
          บริษัท A มีทั้งหมด 2 สาขาย่อย โดยสาขาที่ 1 มีจำนวน Host ทั้งหมด 4,000 เครื่องและสาขาที่ 2 มีจำนวน Host ทั้งหมด 2,000 เครื่อง<br/>
          สิ่งที่ต้องทำคือจัดสรร IP address ให้กับทั้ง 2 สาขาโดย IP address ของบริษัท A เริ่มตั้งแต่ 172.16.0.1<br/>
          1.interface ของ Router แต่ละสาขาเป็น IP address แรกที่ใช้ได้<br/>
        </p>
        <p class="subtitle-1">
          คำสั่งที่ใช้คือ<br/>
          Router(config)# interface g0/0 หรือ Router(config)# interface g0/1<br/>
          Router(config-if)# ip address 172.16.x.x 255.255.x.x<br/>
          Router(config-if)# no shutdown<br/>
        </p>
        <p class="subtitle-1 text--primary">
          2.จัดสรร IP address ให้กับ PC ทั้งสองของสาขานั้นๆ โดยให้ PC เครื่องใดก็ได้มี IP address ที่เป็นเลขสุดท้ายที่ใช้ได้<br/>
          3.ทำให้ PC0 ของสาขา 1 สามารถ Ping หา PC3 ของสาขาที่ 2 ได้<br/>
        </p>
        <p class="subtitle-1 text--primary text-center">
          - - - - - - - - - - - - - - - - - - - บริษัท B (ฝั่งด้านซ้าย) - - - - - - - - - - - - - - - - - - -<br/>
        </p>
        <p class="subtitle-1 text--primary">
          บริษัท B ได้ร้องขอ Block of address จากบริษัท A โดยทางบริษัท A ได้จัดสรร IP ให้กับบริษัท B จำนวน 512 IP Addresses<br/>
          โดย Block of addresses เริ่มที่ 172.16.100.0/23 บริษัท B มีทั้งหมด 2 สาขาย่อย<br/>
          สาขาที่ 3 มีจำนวน Host ทั้งหมด 220 เครื่อง และสาขาที่ 4 มีจำนวน Host ทั้งหมด 100 เครื่อง<br/>
          สิ่งที่ต้องทำคือจัดสรร IP address ให้กับสาขาที่ 3 และ 4 โดย<br/>
          4.interface ของ Router แต่ละสาขาเป็น IP address แรกที่ใช้ได้<br/>
          5.จัดสรร IP address ให้กับ PC ทั้งสองของสาขานั้นๆ โดยให้ PC เครื่องใดก็ได้มี IP address ที่เป็นเลขสุดท้ายที่ใช้ได้<br/>
          6.ทำให้ PC4 ของสาขา 3 สามารถ Ping หา PC7 ของสาขาที่ 4 ได้<br/>
          7.Config ให้ทั้ง 2 บริษัทสามารถ ping หากันได้โดย<br/>
          7.1 PC0 สามารถ Ping หา PC6 ได้<br/>
          7.2 PC4 สามารถ Ping หา PC3 ได้<br/>
        </p>
        <v-btn color="primary" @click="toLab3">LAB 3</v-btn>
      </v-card-subtitle>
    </v-row>
  </v-card>
</template>

<script>
export default {
  methods: {
    toLab3() {
      this.$router.push("/lab3");
    }
  }
};
</script>