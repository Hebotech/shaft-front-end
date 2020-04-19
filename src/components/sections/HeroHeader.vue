<template>
<div
  class="container-fluid"
  :style="{'background-image': 'url('+require('@/assets/bg-hero-header.webp')+')'}"
>
  <div
    class="
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
  >
      <h1>
        Bienvenido a la nueva<br>
         experiencia
      </h1>
      <img
        src="@/assets/brand/logo.webp"
        alt="shaft mexico"
        width="500px"
        class="img-fluid text-center mt-3 logo"
      >
      <div class="bg-bottom">
        <img
          alt="shaft mexico"
          src="@/assets/header-bottom.webp"
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
h1{
  font-family: shaft-h1;
  color:#333;
  font-size:6em;
  text-anchor: middle;
  display:inline-block;
  z-index:2;
}
.logo{
  filter:drop-shadow(14px 5px 7px rgba(0, 0, 0, 0.3));
  z-index:2;
}
.pt{
  z-index:2;
}
.container-fluid{
  background-color: $beta;
  overflow: hidden;
  height: 100vh;
  background-size:cover;
  background-attachment: fixed;
}
.bg-bottom{
  position:absolute;
  min-width: 100%;
  left:0;
  z-index:0;
  bottom:0%;
}
.d-flex:first-child{
  padding-top:5%;
}
@media  (max-width: 1100px) {
  h1{
    font-size:3em!important;
  }
  .container-fluid{
    height:70vh!important;
  }
  .d-flex h1{
    min-width:100%!important;
  }
  .bg-bottom{
    position: sticky!important;
  }
  .bg-bottom img{
    // position: relative!important;
    height: 450px;
    min-width:100vh;
    z-index:0;
  }
 }
</style>
