<template>
  <div>
    <!-- HEADER 1 -->
    <p class="display-3 mb-3">LAB 1</p>
    <p class="title font-regular">Basic Configuration Commands</p>

    <!-- brief -->
    <v-row align="center" justify="center">
      <v-card class="mx-auto" min-width="300" min-height="100">
        <v-card-text>
          <p class="display-2 font-weight-bold mb-3 text--primary">Brief Lab</p>
          <p class="subtitle-1 text--primary">
            โดยแลปนี้จะเป็นการใช้คำสั่งพื้นฐานทั่วไปและการใช้อุปกรณ์ เพื่อให้เกิดความคุ้นชินกับคำสั่งที่จะได้ใช้บ่อยๆในการทำแลป<br />
            เช่น การใช้คำสั่งเพื่อดูค่าที่เราพึ่งตั้งค่าไปหรือการเข้าสู่โหมดต่างๆ<br/>
          </p>
          <p class="title text--primary">
            โดยวิธีการทำแลปนี้คือให้ Follow ตามแลปเลย<br/>
          </p>
        </v-card-text>
      </v-card>
    </v-row>
    <br/>

    <v-row align="center" justify="center">
      <v-col>
        <v-card class="mx-auto text-left" min-width="300" min-height="400">
          <v-card-title>
            <p class="headline text--primary">คำสั่งเพื่อเข้าสู่โหมดต่างๆ</p>
          </v-card-title>
          <v-card-subtitle>
            <p class="subtitle-1 text--primary">
              โหมด User<br />
              Router><br /><br/>
              เข้าสู่โหมด Privileged หรือบางครั้งจะเรียกว่า Enable mode <br />
              Router> enable <br />
              Router# <br /><br/>
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

    <!-- 1 -->
    <v-row align="center" justify="center">
      <v-card class="mx-auto text-left" max-width="800" min-height="400">
        <v-card-title>
          <p class="headline text--primary">ขั้นตอนการทำแลป</p>
        </v-card-title>
        <v-card-subtitle>
          <p class="subtitle-1 text--primary">
            1.เปิดโปรแกรม Cisco Packet Tracer<br/>
            2.เลือก Router รุ่น 4321 จากด้านล่างซ้ายมือไปวางไว้ที่ Workspace<br/>
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-1.png"></v-img><br/>
            3.คลิกเข้าไปที่ Router<br/>
            4.ที่หน้าต่าง Physical ทำการกดสวิตซ์ 1 ครั้งเพื่อปิด Router<br/>
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-2.png"></v-img><br/>
            5.ติดตั้ง Module ชื่อ NIM-Cover โดยการลากมาวางตรงช่องว่าง จากนั้นกดปุ่มเปิดเครื่อง<br/>
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-3_1.png"></v-img><br/>
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-3_2.png"></v-img><br/>
            6.จากนั้นมาที่หน้าต่าง CLI<br/>
          </p>
          <p class="subtitle-1">
            --- System Configuration Dialog ---<br/>
            Would you like to enter the initial configuration dialog? [yes/no]: <br/>
          </p>
          <p class="subtitle-1 text--primary">
            ให้เราตอบว่า no<br/>
            7.เข้าสู่ Priviledge Mode และ Configuration Mode<br/>
          </p>
          <p class="subtitle-1">
            Router> enable<br/>
            Router# configuration terminal<br/>
            Router(config)# <br/>
          </p>
          <p class="subtitle-1 text--primary">
            8.ตั้งชื่อ Hostname ว่า R1 และตั้งรหัสผ่านเพื่อเข้าสู่ Priviledge Mode โดยรหัสผ่านคือ lab1
          </p>
          <p class="subtitle-1">
            เราสามารถใช้เครื่องหมาย ? เพื่อดูว่าสามารถใช้คำสั่งอะไรต่อไปได้บ้างเช่น<br/>
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-3_3.png"></v-img><br/>
            Router(config)# hostname R1<br/>
            R1(config)# enable password lab1<br/>
          </p>
          <p class="subtitle-1 text--primary">
            9.กลับมาสู่ Priviledge Mode และใช้คำสั่งดูว่าตอนนี้มี Config อะไรบ้างที่ run อยู่ใน R1
          </p>
          <p class="subtitle-1">
            R1(config)# end<br/>
            R1# show running-config<br/>
            เราสามารถพิมพ์คำแบบย่อได้เช่น<br/>
            R1# sh ru<br/>
            หรือเราจะพิมพ์ตัวอักษรต้นๆของคำแล้วกด tab จะเป็นการตัวอักษรที่เหลือที่สามารถต่อได้
          </p>
          <p class="subtitle-1 text--primary">
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-4.png"></v-img><br/>
            นี่คือ config ที่เราพึ่ง set ให้กับ Router ของเราโดยเราจะเห็นคำว่า --More-- ที่ด้านล่างสุด<br/>
            ถ้าเรากด enter จะเป็นการโชว์ข้อมูลบรรทัดต่อมาทีละบรรทัด แต่ถ้าเรากด spacerbar จะเป็นการโชว์ข้อมูลทีละหลายบรรทัด<br/><br/>
            10.ที่ Privileged Mode ทำการเขียน running configuration ไปยัง startup-config ที่เก็บอยู่ใน NVRAM<br/>
            หากเราทำการปิดและเปิด Router ใหม่ config ที่เราได้ config ไว้เมื่อครั้งที่แล้วจะถูกโหลดกลับมาอัตโนมัติ<br/>
          </p>
          <p class="subtitle-1">
            R1# copy running-config startup-config<br/>
            Destination filename [startup-config]? <br/>
            Building configuration...<br/>
            [OK]<br/>
            R1#<br/>
          </p>
          <p class="subtitle-1 text--primary">
            11.ทำการปิดและเปิด Router อีกครั้ง จากนั้นใช้คำสั่งเพื่อดูว่า config ที่เราได้เขียนไว้ที่ startup-config นั้นทำงานหรือไม่<br/>
          </p>
          <p class="subtitle-1">
            R1# show running-config<br/>
          </p>
          <p class="subtitle-1 text--primary">
            12.จากนั้นให้ทำการ Assign IP address ให้กับ R1 โดยให้ Interface GigabitEthernet0/0/0(เขียนแบบย่อว่า g0/0/0) มี IP address คือ 192.168.100.10 255.255.255.0<br/>
          </p>
          <p class="subtitle-1">
            R1(config)# int g0/0/0<br/>
            R1(config-if)# ip address 192.168.100.10 255.255.255.0<br/>
            R1(config-if)# no shutdown<br/>
          </p>
          <p class="subtitle-1 text--primary">
            13.ตรวจสอบ IP address ที่พึ่ง Assign ไปโดยใช้คำสั่ง<br/>
          </p>
          <p class="subtitle-1">
            R1# show ip interface brief<br/>
          </p>
          <p class="subtitle-1 text--primary">
            14.เราสามารถกำหนดค่าของ router ผ่านการ telnet จาก PC เข้ามาที่ router โดยใช้ IP ของ router คือ 192.168.100.10<br/>
            14.1 ลาก PC มาวางที่พื้นที่ว่างและใช้สาย Copper Cross-Over เชื่อมระหว่าง Router(interface g0/0/0) กับ PC(interface Fa0)<br/>
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-5_1.png"></v-img><br/>
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-5_2.png"></v-img><br/>
            14.2 ที่หน้าต่าง Config เลือก FastEthernet0 ตั้งค่า IP address 192.168.100.20 255.255.255.0<br/>
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-5_3.png"></v-img><br/>
          </p>
          <p class="subtitle-1 text--primary">
            15.ตรวจสอบว่า Router มีกี่ vty (Virtual Terminal lines) โดยใช้คำสั่ง show running-config<br/>
          </p>
          <p class="subtitle-1">
            R1# show running-config<br/><br/>
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-6.png"></v-img><br/>
          </p>
          <p class="subtitle-1 text--primary">
            16.กำหนด Password สำหรับการ login ผ่าน telnet โดย password คือ telnet<br/>
          </p>
          <p class="subtitle-1">
            R1(config)# line vty 0 4<br/>
            R1(config-line)# password telnet<br/>
            R1(config-line)# login<br/>
          </p>
          <p class="subtitle-1 text--primary">
            17.ที่ PC0 หน้าต่าง Desktop เลือก Command Prompt ทำการ telnet ไปที่ 192.168.100.10<br/>
          </p>
          <p class="subtitle-1">
            C:\telnet 192.168.100.10<br/>
            password คือ telnet<br/>
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-7.png"></v-img><br/>
          </p>
          <p class="subtitle-1 text--primary">
            18.ทดลอง Assign IP ให้กับ Router(interface GigabitEthernet0/0/1) ผ่านทาง PC0 โดย IP address คือ 192.168.200.10<br/>
          </p>
          <p class="subtitle-1">
            โดยเมื่อใช้คำสั่ง telnet password คือ telnet และเมื่อใช้คำสั่ง enable password คือ lab1 <br/>
            R1(config)# int g0/0/1<br/>
            R1(config-if)# ip address 192.168.200.10 255.255.255.0<br/>
            R1(config-if)# no shutdown<br/>
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-8.png"></v-img><br/>
          </p>
          <p class="subtitle-1 text--primary">
            19.กลับมาที่ Router และเช็คว่า IP address ที่เรา assign ผ่านทาง PC0 นั้นสำเร็จหรือไม่<br/>
          </p>
          <p class="subtitle-1">
            R1#show ip interface brief<br/>
            <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-9.png"></v-img><br/>
          </p>
        </v-card-subtitle>
      </v-card>
    </v-row>
    <br />

  </div>
</template>

<script>
export default {
};
</script>

<style>

</style>