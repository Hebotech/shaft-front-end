<template>
  <div class="pattern-wrapper">
    <img
      src="@/assets/pattern.svg"
      alt=""
      class="pattern img-fluid w-100"
      :style="{'mask-image': 'url('+require('@/assets/splash.svg')+')'}"
    >
      <!-- :style="{'mask': 'url('+require('@/assets/splash.svg')+')'}" -->
  </div>
</template>

<script>
export default {
  name: 'Splash',
};
</script>

<style lang='scss' scoped>
.pattern-wrapper{
  // overflow:hidden;
  // z-index:-1;
  top: 150%;
  position: absolute;
  left: -90%;
}
.pattern{
  z-index: 0;
  position:sticky;
  top:0;
  // mask:url(http://localhost:8081/img/splash.aef018d5.svg);
  mask-position: left;
  mask-size:contain;
  background-color:$beta;
}
</style>
