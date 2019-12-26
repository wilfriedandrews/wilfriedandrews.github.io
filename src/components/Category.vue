<template>
  <section>
    <div class="grid no-gutter">
      <div class="grid__2">
        <div class="category">
          <div class="category__list" v-for="(item,index) in category" :key="index">
            <div :id="item.id" class="category__list__item" v-on:click="setActive(item.id)">
              <router-link to="/content">
                {{item.name}}
              </router-link>
              </div>
          </div>
        </div>
      </div>
      <div class="grid__2">
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// require styles
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import img1 from '../assets/logo.png'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
      return {
        currentID:'sss',
        img1: img1,
        category:[
          {
            name:'All',
            id:'all',
            class:'active'
          },
          {
            name:'UI Design',
            id:'ui-design',
            class:''
          },
          {
            name:'HTML & CSS',
            id:'htmlcss',
            class:''
          },
          {
            name:'Logo',
            id:'logo',
            class:''
          },
          {
            name:'Video',
            id:'video',
            class:''
          },
        ],
        swiperOption: {
          // some swiper options/callbacks
          // ...
          navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
        }
      }
    },
    methods: {
      setActive : function(id){
        var current = document.getElementsByClassName('active')
        var now = document.getElementById(id)
        console.log(current.length)
        if(current.length === 0){
          now.classList.add('active')
          // console.log(1)
        } else{
          current[0].classList.remove('active')
          now.classList.add('active')
          // console.log(2)

        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/_variable.scss';
@import '../assets/css/_global.scss';
@import '../assets/css/_grid.scss';
.category{
  margin-left: 40px;
  font-family: 'roboto';
  font-weight: 500;
  &__list{
    &__item{
      font-size: 6rem;
      margin-bottom: 20px;
      color: $color-white;
      opacity: .1;
      transition: opacity .5s;
      cursor: pointer;
      &:hover{
        opacity: 1;
        transition: opacity .5s;
      }
      a{
        text-decoration: none;
        color: $color-white;
      }
    }
  }
  .active{
    opacity: 1;
  }
}

.content{
  display: flex;
  height: 100%;
}
</style>

