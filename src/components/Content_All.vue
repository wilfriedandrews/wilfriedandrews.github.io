<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" class="m-auto">
            <!-- slides -->
            <swiper-slide style="text-align:center"><img :src="img1"/></swiper-slide>
            <swiper-slide style="text-align:center">I'm Slide 2</swiper-slide>
            <swiper-slide style="text-align:center">I'm Slide 3</swiper-slide>
            <swiper-slide style="text-align:center">I'm Slide 4</swiper-slide>
            <swiper-slide style="text-align:center">I'm Slide 5</swiper-slide>
            <swiper-slide style="text-align:center">I'm Slide 6</swiper-slide>
            <swiper-slide style="text-align:center">I'm Slide 7</swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
          </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import uid1 from '../assets/img/all/uid1.jpg'
import uid2 from '../assets/img/all/uid2.jpg'
import uid3 from '../assets/img/all/uid3.jpg'
import uid4 from '../assets/img/all/uid4.jpg'
import uid5 from '../assets/img/all/uid5.png'
import uid6 from '../assets/img/all/uid6.png'
import logo1 from '../assets/img/all/logo1.png'
import img1 from '../assets/logo.png'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data(){
    return{
      uid1: uid1,
      img1: img1,
      content:[]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>