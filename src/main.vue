<template>
  <div id="app">
    <preloader></preloader>
    <Navi></Navi>
    <router-view></router-view>
  </div>
</template>
<script>
import preloader from "@/components/preloader.vue";
import Navi from "@/components/Header.vue";
export default {
  components: {
    preloader,
    Navi
  }
};
</script>
<style lang="scss">
@import "assets/css/_variable.scss";
@import "assets/css/_font.scss";
html {
  font-size: 52.5%;
}
body {
  margin: 0;
  padding: 0;
  line-height: 1.2;
  font-family: "bebas";
}
</style>
