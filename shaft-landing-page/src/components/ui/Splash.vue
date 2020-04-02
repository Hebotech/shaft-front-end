<template>
  <div class="pattern-wrapper">
    <img
      src="@/assets/pattern.svg"
      alt=""
      class="pattern img-fluid w-100"
      style="mask: url(http://localhost:8081/img/splash.aef018d5.svg);"
    >
  </div>
</template>

<script>
export default {
  name: 'Splash',
};
</script>

<style lang='scss' scoped>
.pattern-wrapper{
  overflow:hidden;
  // z-index:-1;
}
.pattern{
  z-index: 0;
  top: 127%;
  position: absolute;
  left: -47%;
  mask:url(http://localhost:8081/img/splash.aef018d5.svg);
  mask-position: center center;
  mask-size: cover;
  background-color:$beta;
}
</style>
