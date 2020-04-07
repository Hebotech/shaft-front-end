<template>
<div
  class="container-fluid"
  :style="{'background-image': 'url('+require('@/assets/bg-hero-header.svg')+')'}"
>
  <div
    class="
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
  >
      <img
        src="@/assets/header-title.png"
        alt=""
        class="w-50 img-fluid"
      />
      <img
        src="@/assets/brand/logo.png"
        alt=""
        width="500px"
        class="img-fluid text-center mt-3 logo"
      >
      <div class="bg-bottom">
        <img
          src="@/assets/header-bottom.png"
          class="img-fluid"
        >
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HeroHeader',
};
</script>

<style lang='scss' scoped>
.logo{
  filter:drop-shadow(14px 5px 7px rgba(0, 0, 0, 0.3));
}
.pt{
  z-index:2;
}
.container-fluid{
  background-color: $beta;
  overflow: hidden;
  height: 100vh;
  background-size:contain;
  background-attachment: fixed;
}
.bg-bottom{
  position:absolute;
  min-width: 100%;
  left:0;
  bottom:0%;
}
.d-flex:first-child{
  padding-top:5%;
}
@media  (max-width: 1100px) {
  .d-flex img:nth-of-type(1){
    min-width:100%!important;
    padding-top:35%;
  }
  .bg-bottom img{
    height:500px;
  }
 }
</style>
