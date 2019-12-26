<template>
  <div id="my-navbar" class="header-container">
    <div class="logo">Lorem Ipsum</div>
    <ul class="menu-group">
      <li>menu 1</li>
      <li>menu 2</li>
      <li>menu 3</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/css/_variable.scss";
.header-container {
  position: fixed;
  width: 100%;
  // height: 60px;
  padding: 15px 20px;
  display: flex;
  background-color: $color-white; 
  z-index: 9999;
  .logo {
    margin: auto;
    margin-left: 20px;
    font-size: 2.5rem;
  }
  ul {
    margin: auto;
    margin-right: 50px;
    display: flex;
    font-size: 2rem;
    list-style-type: none;
    li {
      margin: auto;
      padding: 10px;
    }
  }
}
</style>
