<template>
<div>
  <section class="page__home">
    <div class="page__home__container">
      <div class="title">
        <div class="title__primary">Hello.</div>
        <div class="title__secondary">Human Creatify</div>
      </div>
      <!-- button -->
      <div class="btn-work">
        <div class="btn-work__title">
          <span @click="greet" class="btn-work__title__text"> See Work</span>
        </div>
      </div>
    </div>
    <!-- <div class="lines"></div> -->
  </section>
  <section class="galery clippy" id="galery">
    <div class="galery__container">
      <Category></Category>
    </div>
  </section>
</div>
</template>
<script>
import { setTimeout } from 'timers';
import Category from '@/components/Category.vue'
// import category from "../components/Category";
export default {
  components: {
    Category
  },
  methods: {
    greet: function(){
      console.log('ss');
      document.getElementById("galery").style.clipPath =" polygon(0% 83%, 100% 83%, 100% 100%, 0% 100%)";
      setTimeout(function(){
        document.getElementById("galery").style.clipPath =" polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      }, 1000);
      setTimeout(function(){
        document.getElementById("my-navbar").style.backgroundColor =" #000";
        document.getElementById("my-navbar").style.color =" #fff";
      }, 1500);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/_variable.scss";
.m-auto {
  margin: auto;
}

.checkbox {
  &__container {
    position: relative;
  }
  &__label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__custom {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__custom {
    width: 30px;
    height: 30px;
    display: none;
  }
  &__mark {
    position: absolute;
    background-color: blue;
    width: 30px;
    height: 30px;
  }
  input:checked ~ &__mark {
    background-color: red;
    width: 30px;
    height: 30px;
  }
}
.clippy {
  transition-duration: 1s;
  clip-path: polygon(50% 83%, 50% 83%, 50% 100%, 50% 100%);
}
.galery {
  width: 100%;
  height: 100vh;
  background-color: $color-black;
  color: $color-white;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(50% 83%, 50.2% 83%, 50.2% 100%, 50% 100%);
  &__container{
  margin-top: 80px;
  }
}
.lines {
  position: absolute;
  bottom: 0%;
  left: 50%;
  width: 2px;
  height: 100px;
  border-left: 2px solid;
}
.page__home {
  position: relative;
  display: flex;
  // width: 100vw;
  height: 100vh;
  &__container {
    margin: auto;
  }
  .title {
    // margin: auto;
    text-align: center;
    &__primary {
      font-size: 25rem;
    }
    &__secondary {
      font-size: 2rem;
      letter-spacing: 22px;
    }
  }
  .btn-work {
    text-align: center;
    margin-top: 50px;
    position: relative;
    &__title {
      border: 1px solid;
      position: absolute;
      display: flex;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: auto;
      width: 90px;
      height: 30px;
      border-radius: 25px;
      font-size: 1.8rem;
      cursor: pointer;
      transition-duration: 0.3s;
      a {
        margin: auto;
        color: $color-black;
        text-decoration: none;
      }
      span {
        margin: auto;
        color: $color-black;
        text-decoration: none;
      }
      &:hover {
        transition-duration: 0.3s;
        width: 63px;
        height: 63px;
        border-radius: 50%;
        background-color: $color-black;
        a {
          color: $color-white;
        }
        span {
          color: $color-white;
        }
      }
    }
  }
}
// animation
@keyframes loader {
  0% {
    clip-path: polygon(50% 83%, 50% 83%, 50% 100%, 50% 100%);
  }
  50% {
    clip-path: polygon(0% 83%, 100% 83%, 100% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
}
</style>
