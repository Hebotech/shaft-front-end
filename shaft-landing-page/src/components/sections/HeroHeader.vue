<template>
<div class="container-fluid">
  <div
    class="
      d-flex
      flex-column
      justify-content-center
      items-center
    "
  >
      <img
        src="@/assets/header-title.png"
        alt=""
        class="w-50 img-fluid pt"
      />
      <img
        src="@/assets/brand/logo.png"
        alt=""
        width="500px"
        class="img-fluid text-center pt logo"
      >
      <div class="bg-bottom">
        <img
          src="@/assets/header-bottom.png"
          alt=""
          class="img-fluid"
        >
      </div>
      <!-- <img
        src="@/assets/bg-hero-header.svg"
        alt=""
        class="img-fluid bg-pattern"
      > -->
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
  height: 200vh;
  // position: sticky;
  background-image: url('http://localhost:8081/img/bg-hero-header.2974f635.svg');
  background-size:contain;
  background-attachment: fixed;
}
// .bg-pattern
//   position: fixed;
//   z-index: 0;
//   top:0;
//   overflow: hidden;
//   left:0;
//
.bg-bottom{
  position: sticky;
  // top: 0px;
  bottom:0px;
  // position: -webkit-sticky;
}

</style>
