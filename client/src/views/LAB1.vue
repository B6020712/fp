<template>
  <div>
    <!-- HEADER 1 -->
    <p class="display-2 font-weight-bold mb-3">LAB 1</p>
    <p class="title font-regular">
      แลปนี้จะเกี่ยวกับการใช้คำสั่งพื้นฐานทั่วไปครับ
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
            เช่น การใช้คำสั่งเพื่อดูค่าที่เราพึ่งตั้งค่าไปหรือการเข้าสู่โหมดต่างๆ และทริคที่จะทำให้ลดเวลาการพิมพ์ได้
          </p>
        </v-card-text>
      </v-card>
    </v-row>
    <br />

    <!-- 1 -->
    <v-row align="center" justify="center">
      <v-card class="mx-auto" max-width="1500" max-height="2500">
        <v-card-text>
          <p class="headline text--primary">คำสั่งเพื่อเข้าสู่โหมดต่างๆ</p>
          <p class="subtitle-1 text--primary align-right">
            เข้าสู๋โหมด Privileged Exec หรือบางครั้งจะเรียกว่า Enable mode <br />
            Router> enable <br />
            Router# <br />
            Router# configuration terminal <br />
            Router(config)# <br />
          </p>
        </v-card-text>
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