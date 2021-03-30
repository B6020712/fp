<template>
  <div class="maindiv">
    <!-- <Side-App></Side-App> -->
    <v-carousel :show-arrows="false">
      <v-carousel-item
        class="img"
        v-for="(item,i) in items"
        :key="i"
        :src="item.src">
      </v-carousel-item>
    </v-carousel><br/>
    <p class="display-2 text-center">Nerkwet</p>
    <p class="subhead">สำหรับผู้ที่ต้องการเรียนรู้พื้นฐานของเครือข่ายคอมพิวเตอร์ 
      เหมาะสำหรับ นักเรียน นักศีกษา หรือผู้ที่สนใจ โดยจะใช้โปรแกรม Cisco Packet Tracer เป็นโปรแกรมที่ใช้สำหรับการทำแลป
      จะมีทั้งหมด 10 แลปให้ทดลองทำโดยทำตั้งแต่แลปที่ 1 ไล่ไปจนถึงแลปที่ 10 นะครับ
      หรือสนใจทำแลปใดก็สามารถกดเข้าไปทำได้เลยครับ
      ขั้นแรกสุดที่เราจะเริ่มกันคือการดาว์นโหลดและติดตั้งโปรแกรม Cisco Packet Tracer
    </p><br/>
  </div>
</template>

<script>
// import SideApp from "@/components/Side-App"
export default {
  // components:{
  //   'Side-App':SideApp,
  // },
  data () {
    return {
      items: [
        { src: 'https://www.ksc.net/th/images/product/img_Head-Internet-Corporate.jpg', },
        { src: 'https://raed.academy/wp-content/uploads/2020/06/acceso-universal-a-internet-dstNtc.jpg', },
        { src: 'https://photo.reqnews.com/data/images/10/pengertian-dan-manfaat-internet-IDCloudHost.png', },
      ],
    }
  }
};
</script>

<style scoped>
  .maindiv {
    margin: auto;
    text-align: center;
    max-width: 800px;
  }
  .headerna {
    font-family: Alata;
    font-size: 30px;
  }
  .subhead {
    font-family: sarabun;
    font-size: 20px;
  }
  .img {
    width: 100%;
    height: 400px;
  }
</style>