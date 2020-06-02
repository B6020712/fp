<template>
  <div>
    <!-- HEADER 1 -->
    <p class="display-2 font-weight-bold mb-3">LAB 1</p>
    <p class="title font-regular">
      แลปนี้จะเกี่ยวกับการใช้คำสั่งพื้นฐานทั่วไป
    </p>

    <!-- brief -->
    <v-row align="center" justify="center">
      <v-card class="mx-auto" max-width="1500" max-height="2500">
        <v-card-text>
          <p class="display-2 font-weight-bold mb-3 text--primary">Brief Lab</p>
          <v-img min-width="200" min-height="200" src="@/assets/lab/lab1.png"></v-img>
          <p class="title">
            Lab 1
          </p>
          <p class="subtitle-1 text--primary">
            โดยแลปนี้จะเป็นการใช้คำสั่งพื้นฐานทั่วไป เพื่อให้เกิดความคุ้นชินกับคำสั่งที่จะได้ใช้บ่อยๆในการทำแลป <br />
            เช่น การใช้คำสั่งเพื่อดูค่าที่เราพึ่งตั้งค่าไปหรือการเข้าสู่โหมดต่างๆ
          </p>
        </v-card-text>
      </v-card>
    </v-row>
    <br />

    <!-- 1 -->
    <v-row align="center" justify="center">
      <v-col>
        <v-card class="mx-auto text-left" min-width="300" min-height="400">
          <v-card-title>
            <p class="headline text--primary">คำสั่งเพื่อเข้าสู่โหมดต่างๆ</p>
          </v-card-title>
          <v-card-subtitle>
            <p class="subtitle-1 text--primary">
              โหมด User<br />
              Router><br />
              เข้าสู่โหมด Privileged หรือบางครั้งจะเรียกว่า Enable mode <br />
              Router> enable <br />
              Router# <br />
              เข้าสู่โหมด Global Configuration<br />
              Router# configuration terminal <br />
              Router(config)# <br />
            </p>
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto text-left" min-width="300" min-height="400">
          <v-card-title>
            <p class="headline text--primary">
              อธิบายการใช้งานของแต่ละโหมด
            </p>
          </v-card-title>
          <v-card-subtitle>
            <p class="subtitle-1 text--primary">
              User Mode : Prompt ของโหมดนี้จะมีสัญลักษณ์คือ ">" ต่อท้าย
              โดยโหมดนี้เป็นโหมดที่ไว้ใช้ดูการทำงานทั่วไป
              สามารถใช้คำสั่งพื้นฐานทั่วไปได้
              เช่น ping , traceroute , show ip interface เป็นต้น
            </p>
            <p class="subtitle-1 text--primary">
              Privileged Mode : Prompt ของโหมดนี้จะมีสัญลักษณ์คือ "#" ต่อท้าย
              โดยโหมดนี้สามารถตั้งค่าต่างๆได้
            </p>
            <p class="subtitle-1 text--primary">
              Global Configuration Mode : Prompt ของโหมดนี้จะมีสัญลักษณ์คือ "(config)#" ต่อท้าย
              โดยโหมดนี้จะสามารถตั้งค่าต่างๆที่ส่งผลกับตัวอุปกรณ์เช่นตั้งค่า Interface ของ Router
            </p>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <br/>

    <v-row align="center" justify="center">
      <v-card class="mx-auto text-left" min-width="300" min-height="100">
        <v-card-title>
          <p class="headline text--primary">สิ่งที่จะทำในแลปนี้</p>
        </v-card-title>
        <v-card-subtitle>
          <p class="subtitle-1 text--primary">
            1.เปลี่ยน Hostname จาก Router เป็น R1 ที่ R1<br/>
            2.เปลี่ยน Hostname จาก Router เป็น R2 ที่ R2<br/>
            3.ตั้งค่ารหัสผ่านให้กับ R1 และ R2 โดยให้รหัสผ่านคือ LAB1<br/>
            4.Assign IP ให้กับ R1 ที่ interface GigabitEthernet0/0 โดย IP address คือ 1.1.1.1<br/>
            5.Assign IP ให้กับ R2 ที่ interface GigabitEthernet0/0 โดย IP address คือ 1.1.1.2<br/>
            6.Assign IP ให้กับ R1 ที่ interface GigabitEthernet0/1 โดย IP address คือ 192.168.1.1<br/>
            7.Assign IP ให้กับ R2 ที่ interface GigabitEthernet0/1 โดย IP address คือ 192.168.2.1<br/>
            8.Set static route ให้กับ R1 เชื่อมต่อไปที่ PC1 ผ่าน R2<br/>
            9.Set static route ให้กับ R2 เชื่อมต่อไปที่ PC2 ผ่าน R1<br/>
            10.ทำให้ R1 สามารถ Ping ไปหา R2 ได้<br/>

            11.ที่ R1 ดูว่ามี config อะไรบ้างที่ run อยู่<br/>
            12.ที่ R2 ดูว่ามี config อะไรบ้างที่ run อยู่<br/>
            13.copy running-config ของ R1 ไว้ที่ flash memory<br/>
            14.copy running-config ของ R2 ไว้ที่ flash memory<br/>
            15.Assign IP ให้กับ PC0 ที่ interface FastEthernet0 โดย IP คือ 192.168.1.10<br/>
            16.Assign IP ให้กับ PC1 ที่ interface FastEthernet0 โดย IP คือ 192.168.2.10<br/>
            17.set Default Gateway ให้กับ PC0 โดย IP คือ 192.168.1.1<br/>
            18.set Default Gateway ให้กับ PC1 โดย IP คือ 192.168.2.1<br/>
            19.หากทำสำเร็จทุกข้อ PC0 และ PC1 จะสามารถติดต่อหากันได้
            20.ทำการ ปิดและเปิด R1 และ R2 รอจน Boot เสร็จจากนั้น Ping PC0 ไป PC1 หาก Ping ได้แปลว่าทำแลปสำเร็จ<br/>
          </p>
        </v-card-subtitle>
      </v-card>
    </v-row>
    <br/>

    <v-row align="center" justify="center">
      <v-card class="mx-auto text-left" min-width="300" min-height="100">
        <v-card-title>
          <p class="headline text--primary">เฉลยการทำแลป</p>
        </v-card-title>
        <v-card-subtitle>
          <p class="subtitle-1 text--primary">
            Would you like to enter the initial configuration dialog? [yes/no]: no<br/>
            1.เปลี่ยน Hostname จาก Router เป็น R1 ที่ R1<br/>
            Router> enable<br/>
            Router# config terminal<br/>
            Router(config)# hostname R1<br/>
            R1(config)# <br/><br/>

            2.เปลี่ยน Hostname จาก Router เป็น R2 ที่ R2<br/>
            Router> enable<br/>
            Router# config terminal<br/>
            Router(config)# hostname R2<br/>
            R2(config)# <br/><br/>

            3.ตั้งค่ารหัสผ่านให้กับ R1 และ R2 โดยให้รหัสผ่านคือ LAB1<br/>
            R1(config)# enable password LAB1<br/>
            R2(config)# enable password LAB1<br/><br/>

            4.Assign IP ให้กับ R1 ที่ interface GigabitEthernet0/0 โดย IP address คือ 1.1.1.1/24<br/>
            R1(config)# int g0/0<br/>
            R1(config-if)# ip address 1.1.1.1 255.255.255.0<br/><br/>

            5.Assign IP ให้กับ R2 ที่ interface GigabitEthernet0/0 โดย IP address คือ 1.1.1.2<br/>
            R2(config)# int g0/0<br/>
            R2(config-if)# ip address 1.1.1.2 255.255.255.0<br/><br/>

            6.Assign IP ให้กับ R1 ที่ interface GigabitEthernet0/1 โดย IP address คือ 192.168.1.1<br/>
            R1(config)# int g0/1<br/>
            R1(config-if)# ip address 192.168.1.1 255.255.255.0<br/><br/>

            7.Assign IP ให้กับ R2 ที่ interface GigabitEthernet0/1 โดย IP address คือ 192.168.2.1<br/>
            R2(config)# int g0/1<br/>
            R2(config-if)# ip address 192.168.2.1 255.255.255.0<br/><br/>

            8.Set static route ให้กับ R1 เชื่อมต่อไปที่ PC1 ผ่าน R2<br/>
            R1(config)# ip route 192.168.2.0 255.255.255.0 1.1.1.2<br/>
            <br/>
            
            9.Set static route ให้กับ R2 เชื่อมต่อไปที่ PC2 ผ่าน R1<br/>
            R2(config)# ip route 192.168.1.0 255.255.255.0 1.1.1.1<br/>
            <br/>

            10.ทำให้ R1 สามารถ Ping ไปหา R2 ได้<br/>
            - จะสังเกตุเห็นได้ว่าที่ interface GigabitEthernet0/0 นั้นโดน Shutdown ไว้อยู่<br/>
            R1(config)# int g0/0<br/>
            R1(config-if)# no shutdown<br/>
            - เมื่อเราสั่ง no shutdown แล้วจะเห็นว่า เส้นเชื่อมระหว่าง R1 และ R2 นั้นยังแดงอยู่<br/>
            - เราต้องไป no shutdown ที่ R2 ด้วย จึงจะสามารถ ping หากันได้<br/>
            R2(config)# int g0/0<br/>
            R2(config-if)# no shutdown<br/>
            - ลอง ping จาก R1 ไป R2 ถ้าเรา config ได้ถูกต้องจะสามารถ ping หากันได้<br/>
            R1# ping 1.1.1.2<br/>
            <br/>

            11.ที่ R1 ดูว่ามี config อะไรบ้างที่ run อยู่<br/>
            R1# show running-config<br/>
            <br/>

            12.ที่ R2 ดูว่ามี config อะไรบ้างที่ run อยู่<br/>
            R2# show running-config<br/>
            <br/>

            13.copy running-config ของ R1 ไว้ที่ startup configuration<br/>
            R1# copy running-config startup-config<br/>
            Destination filename [startup-config]?<br/>
            - จะถามชื่อไฟล์ที่เราจะตั้งชือให้เรากดปุ่ม enter<br/>
            <br/>

            14.copy running-config ของ R2 ไว้ที่ startup configuration<br/>
            R2# copy running-config startup-config<br/>
            Destination filename [startup-config]?<br/>
            - จะถามชื่อไฟล์ที่เราจะตั้งชือให้เรากดปุ่ม enter<br/>
            <br/>

            15.Assign IP ให้กับ PC0 ที่ interface FastEthernet0 โดย IP คือ 192.168.1.10<br/>
            - คลิกที่รูป PC0 -> คลิกที่หน้าต่าง config -> คลิกที่ FastEthernet0 -> ที่ช่อง IP Address ใส่ 192.168.1.10 -> ที่ช่อง Subnet Mask ใส่ 255.255.255.0<br/>
            <br/>

            16.Assign IP ให้กับ PC1 ที่ interface FastEthernet0 โดย IP คือ 192.168.2.10<br/>
            - คลิกที่รูป PC1 -> คลิกที่หน้าต่าง config -> คลิกที่ FastEthernet0 -> ที่ช่อง IP Address ใส่ 192.168.2.10 -> ที่ช่อง Subnet Mask ใส่ 255.255.255.0<br/>
            <br/>

            17.set Default Gateway ให้กับ PC0 โดย IP คือ 192.168.1.1<br/>
            - คลิกที่ Setting -> ที่ช่อง Gateway ใส่ 192.168.1.1<br/>
            <br/>

            18.set Default Gateway ให้กับ PC1 โดย IP คือ 192.168.2.1<br/>
            - คลิกที่ Setting -> ที่ช่อง Gateway ใส่ 192.168.2.1<br/>
            <br/>

            19.หากทำสำเร็จทุกข้อ PC0 และ PC1 จะสามารถติดต่อหากันได้<br/>
            - ping จาก PC0 ไป PC1<br/>
            R1# ping 192.168.1.10<br/>
            - ping จาก PC1 ไป PC0<br/>
            R2# ping 192.168.2.10<br/>
            <br/>

            20.ทำการ ปิดและเปิด R1 และ R2 รอจน Boot เสร็จจากนั้น Ping PC0 ไป PC1 หาก Ping ได้แปลว่าทำแลปสำเร็จ<br/>
            - คลิกที่ Physical -> ตรง Physical Device View จะเป็นการจำลองรูปแบบของ Router จะเห็น Switch เปิด/ปิด ให้เรากดที่ปุ่มนั้น 1 ครั้งและกดย้ำอีก 1 ครั้ง<br/>
            - รอจน boot เสร็จและลอง ping จาก R1 ไป R2 ถ้าเรา backup config ไว้ก่อนทำการปิดและเปิดเครื่องอีกครั้งเราจะไม่ต้อง config ค่าอะไรก็จะสามารถติดต่อหากันได้<br/>
            <br/>
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