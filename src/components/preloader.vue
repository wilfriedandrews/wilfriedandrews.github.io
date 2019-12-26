<template>
  <div class="preloader">
    <div class="preloader__loader"></div>
  </div>
</template>
<script>
export default {
  methods:
    window.addEventListener("load", function() {
    const loader = document.querySelector(".preloader");
    loader.className += " hidden";
  })
};
</script>
<style lang="scss" scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  z-index: 9999;
  &__loader {
    position: absolute;
    top: 46%;
    left: 46%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border: 2px solid;
    border-radius: 50%;
    border-top-color: #cecece;
    animation: spin 0.8s infinite;
  }
}
.hidden {
  animation: fadeOut 1s;
  animation-fill-mode: forwards;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes fadeOut {
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
