<template>
  <v-card class="mx-auto" max-width="900" min-height="100">
    <!-- HEADER 1 -->
    <br/>
    <p class="display-3 mb-3 text-center">LAB 2</p>
    <p class="title font-regular text-center">IP ADDRESS AND NETMASK</p>

    <!-- brief -->
    <v-row align="center" justify="center">
      <v-card-text>
        <p class="subtitle-1 text--primary">
          <v-img max-width="1100" min-height="100" src="@/assets/lab/labpic/2.png"></v-img><br/>
        </p>
      </v-card-text>
    </v-row>

    <v-row align="center" justify="center">
      <v-card-title>
        <p class="headline text--primary text-center">อธิบายแลป</p>
      </v-card-title>
      <v-card-subtitle>
        <p class="subtitle-1 text--primary text-center">
          - - - - - - - - - - - - - - - - - - - Right Group - - - - - - - - - - - - - - - - - - -<br/>
        </p>
        <p class="subtitle-1 text--primary">
         Right Group ได้รับ Block of address จาก ISP เริ่มที่ 192.168.1.0/26 โดย Right Group มี่ HOST ทั้งหมด 61 เครื่อง <br/>
         สิ่งที่ต้องทำคือ<br/>
         1. Interface ของ Router แต่ละสาขาเป็น IP Address แรกที่ใช้ได้<br/>
         2. จัดสรร IP Address โดยให้ PC1 เป็น Address แรกที่ใช้ได้ และ PC2 เป็น IP Address สุดท้ายที่ใช้ได้
        </p>
        <p class="subtitle-1">
          คำสั่งที่ใช้คือ<br/>
          Router(config)# interface g0/0 หรือ Router(config)# interface g0/1<br/>
          Router(config-if)# ip address 192.168.x.x 255.255.x.x<br/>
          Router(config-if)# no shutdown<br/>
        </p>
        <p class="subtitle-1 text--primary text-center">
          - - - - - - - - - - - - - - - - - - - Left Group - - - - - - - - - - - - - - - - - - -<br/>
        </p>
        <p class="subtitle-1 text--primary">
          Left Group ได้รับ Block of Address จาก ISP เริ่มที่ 172.16.0.0/26 โดย Left Group มี่ HOST ทั้งหมด 61 เครื่อง <br/>
          สิ่งที่ต้องทำคือ<br/>
          3. Interface ของ Router แต่ละสาขาเป็น IP Address แรกที่ใช้ได้<br/>
          4. จัดสรร IP Address โดยให้ PC3 เป็น Address แรกที่ใช้ได้ และ PC4 เป็น IP Address สุดท้ายที่ใช้ได้<br/>
          5. ทำให้ PC1 ping หา PC3 ได้ <br/>        
          6. ทำให้ PC2 ping หา PC4 ได้ <br/>        
        </p>
        <v-divider></v-divider>

        <v-radio-group v-model="lab2config_no1">
          <p class="subtitle-1 text--primary"><strong>คำถามเกี่ยวกับการ config</strong></p>
          <div>1. Assign IP Address แรกที่ใช้ได้ให้กับ interface g0/0/1 ของ R1 ด้วยคำสั่งอะไร</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>Router(config-if)#ip address 192.168.1.1 255.255.255.192</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>Router(config-if)#ip 192.168.1.1 255.255.255.192</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>Router(config-if)#ip address is 192.168.1.1 255.255.255.192</div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab2config_no2">
          <div>2. คำสั่งที่ใช้เปิด Interface หลังจากที่ Assign IP Address แรกที่ใช้ได้ให้กับ R1 คือ</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>Router(config-if)#open interface</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>Router(config-if)#no shutdown</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>Router(config-if)#not shutdown</div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab2config_no3">
          <div>3. Gateway ของ PC1 และ PC2 คืออะไร</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>192.168.1.1</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>192.168.1.0</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>10.10.10.1</div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab2config_no4">
          <div>4. Assign IP Address แรกที่ใช้ได้ให้กับ interface g0/0/1 ของ R2 ด้วยคำสั่งอะไร</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>Router(config-if)#ip address 172.16.1.1 255.255.252.0</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>Router(config-if)#ip 172.16.1.1 255.255.252.0</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>Router(config-if)#ip address is 172.16.1.1 255.255.252.0</div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab2config_no5">
          <div>5. Gateway ของ PC1 และ PC2 คืออะไร</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>172.16.1.0</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>172.16.1.1</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>10.10.10.2</div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab2config_no6">
          <div>6. คำสั่งใดที่ใช้ในการติดต่อจาก PC3 ไป PC1</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>ping PC1</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>connect 192.168.1.2</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>ping 192.168.1.2</div>
            </template>
          </v-radio>
        </v-radio-group>
        <v-divider></v-divider>

        <v-radio-group v-model="lab2_no1">
          <p class="subtitle-1 text--primary"><strong>คำถามหลังการทำแลป</strong></p>
          <div>1. Right Group เป็น Classful แบบใด</div>
          <template v-slot:label>
            <!-- <div>เลือกคำตอบที่ <strong>ถูกต้อง</strong></div> -->
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>A</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>B</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>C</div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab2_no2">
          <div>2. Left Group เป็น Classful แบบใด</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>A</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>B</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>C</div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab2_no3">
          <div>3. ถ้า Prefix size เท่ากับ /30 แล้ว Subnet Mask เท่ากับเท่าใด</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>255.255.255.192</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>255.255.255.248</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>255.255.255.252</div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab2_no4">
          <div>4. หาก Right Group เปลี่ยน Prefix Size เป็น /29 จะมี IP Address ที่สามารถแจกจ่ายให้ Host ได้เท่าไร<br/>
          (ไม่นับ Network Address และ Boardcast Address)</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>4</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>5</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>6</div>
            </template>
          </v-radio>
        </v-radio-group>
        <div class="d-flex justify-space-around mb-6 outlined">
          <div class="pa-2 outlined">
            <v-btn color="red" @click="saveResult(lab2config_no1, lab2config_no2, lab2config_no3, lab2config_no4, lab2config_no5, lab2config_no6, lab2_no1, lab2_no2, lab2_no3, lab2_no4)">Check</v-btn>
          </div>
          <div class="pa-2 outlined">
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition" >
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="green" outlined v-bind="attrs" v-on="on">
                  Show Solution
                </v-btn>
              </template>
              <v-card>
                <v-toolbar dark color="primary">
                  <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Solution</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-list three-line subheader>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>ที่ R1 Set IP Address แรกที่ใช้ได้ให้กับ Interface ในที่นี้ Interface คือ g0/0/1</v-list-item-title>
                      <v-list-item-subtitle>Router>enable</v-list-item-subtitle>
                      <v-list-item-subtitle>Router#configure terminal</v-list-item-subtitle>
                      <v-list-item-subtitle>Router(config)#int g0/0/1</v-list-item-subtitle>
                      <v-list-item-subtitle>Router(config-if)#ip address 192.168.1.1 255.255.255.192</v-list-item-subtitle>
                      <v-list-item-subtitle>Router(config-if)#no shutdown</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>ที่ PC1 ไปที่หน้าต่าง Config เลือก Setting และกำหนด Gateway คือ 192.168.1.1</v-list-item-title>
                      <v-list-item-title>จากนั้นเลือก FastEthernet0 กำหนด IP Address แรกที่ใช้ได้คือ 192.168.1.2 และใส่ Subnet Mask คือ 255.255.255.192</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>ที่ PC2 ไปที่หน้าต่าง Config เลือก Setting และกำหนด Gateway คือ 192.168.1.1</v-list-item-title>
                      <v-list-item-title>จากนั้นเลือก FastEthernet0 กำหนด IP Address สุดท้ายที่ใช้ได้คือ 192.168.1.62 และใส่ Subnet Mask คือ 255.255.255.192</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>ที่ R2 Set IP Address แรกที่ใช้ได้ให้กับ Interface ในที่นี้ Interface คือ g0/0/1</v-list-item-title>
                      <v-list-item-subtitle>Router>enable</v-list-item-subtitle>
                      <v-list-item-subtitle>Router#configure terminal</v-list-item-subtitle>
                      <v-list-item-subtitle>Router(config)#int g0/0/1</v-list-item-subtitle>
                      <v-list-item-subtitle>Router(config-if)#ip address 172.16.8.1 255.255.252.0</v-list-item-subtitle>
                      <v-list-item-subtitle>Router(config-if)#no shutdown</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>ที่ PC3 ไปที่หน้าต่าง Config เลือก Setting และกำหนด Gateway คือ 172.16.8.1</v-list-item-title>
                      <v-list-item-title>จากนั้นเลือก FastEthernet0 กำหนด IP Address แรกที่ใช้ได้คือ 172.16.8.2 และใส่ Subnet Mask คือ 255.255.252.0</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>ที่ PC4 ไปที่หน้าต่าง Config เลือก Setting และกำหนด Gateway คือ 172.16.8.1</v-list-item-title>
                      <v-list-item-title>จากนั้นเลือก FastEthernet0 กำหนด IP Address สุดท้ายที่ใช้ได้คือ 172.16.11.254 และใส่ Subnet Mask คือ 255.255.252.0</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>กลับมาที่ R1 ทำการ Assign IP Address ให้กับ interface ที่เชื่อมต่อกับ R2 ในที่นี้คือ g0/0/0</v-list-item-title>
                      <v-list-item-subtitle>Router(config)#int g0/0/0</v-list-item-subtitle>
                      <v-list-item-subtitle>Router(config-if)#ip address 10.10.10.1 255.255.255.0</v-list-item-subtitle>
                      <v-list-item-subtitle>Router(config-if)#no shutdown</v-list-item-subtitle>
                      <v-list-item-title>จากนั้นกำหนด routing(อย่าลืมออกจาก Interface)</v-list-item-title>
                      <v-list-item-subtitle>Router(config)#ip routing</v-list-item-subtitle>
                      <v-list-item-subtitle>Router(config)#ip route 0.0.0.0 0.0.0.0 10.10.10.2</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>ที่ R2 ทำการ Assign IP Address ให้กับ interface ที่เชื่อมต่อกับ R2 ในที่นี้คือ g0/0/0</v-list-item-title>
                      <v-list-item-subtitle>Router(config)#int g0/0/0</v-list-item-subtitle>
                      <v-list-item-subtitle>Router(config-if)#ip address 10.10.10.2 255.255.255.0</v-list-item-subtitle>
                      <v-list-item-subtitle>Router(config-if)#no shutdown</v-list-item-subtitle>
                      <v-list-item-title>จากนั้นกำหนด routing(อย่าลืมออกจาก Interface)</v-list-item-title>
                      <v-list-item-subtitle>Router(config)#ip routing</v-list-item-subtitle>
                      <v-list-item-subtitle>Router(config)#ip route 0.0.0.0 0.0.0.0 10.10.10.1</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>ทดลอง ping จาก R1 ไป R3 และ R2 ไป R4 หาก config ถูกต้องจะสามารถ ping หากันได้</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-divider></v-divider>
              </v-card>
            </v-dialog>
          </div>
          <div class="pa-2 outlined">
            <v-btn color="primary" @click="toLab3">LAB 3</v-btn>
          </div>
        </div>
      </v-card-subtitle>
    </v-row>
  </v-card>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { db } from '../main'

export default {
  data() {
    return {
      dialog: false,
      lab2config_no1: Number,
      lab2config_no2: Number,
      lab2config_no3: Number,
      lab2config_no4: Number,
      lab2config_no5: Number,
      lab2config_no6: Number,
      lab2_no1: Number,
      lab2_no2: Number,
      lab2_no3: Number,
      lab2_no4: Number,
      user : {email : ''},
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.logInSign = !!user;
      if(user) {
        this.email = user.email;
      }
    })
  },
  methods: {
    toLab3() {
      this.$router.push("/lab3");
    },
    saveResult (LAB2CONFIG_NO1, LAB2CONFIG_NO2, LAB2CONFIG_NO3, LAB2CONFIG_NO4, LAB2CONFIG_NO5, LAB2CONFIG_NO6, LAB2_NO1, LAB2_NO2, LAB2_NO3, LAB2_NO4) {
      const createdAt = new Date()
      db.collection("user").doc(this.email).collection("lab2")
      .add({ LAB2CONFIG_NO1, LAB2CONFIG_NO2, LAB2CONFIG_NO3, LAB2CONFIG_NO4, LAB2CONFIG_NO5, LAB2CONFIG_NO6, LAB2_NO1, LAB2_NO2, LAB2_NO3, LAB2_NO4, createdAt })
    }
  }
};
</script>