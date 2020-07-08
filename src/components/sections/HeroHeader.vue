<template>
  <div class="container-fluid">
    <!-- :style="{'background-image': 'url('+require('@/assets/bg-hero-header.webp')+')'}" -->
    <div
      class="
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
    >
      <h2>Nueva colección disponible 👇🏻</h2>
      <h1
        class="animate__animated
      animate__zoomInDown"
      >
        NUEVA TEMPORADA
      </h1>
      <div class="bg-bottom">
        <!-- <img
          alt="shaft mexico"
          src="@/assets/header-bottom.webp"
          class="img-fluid"
        > -->
      </div>
      <img
        src="@/assets/brand/logo.webp"
        alt="shaft mexico"
        width="500px"
        class="img-fluid text-center w-25 mt-3 logo  animate__zoomInUp animate__animated"
      />
      <img src="@/assets/bg-image-hero.png" alt="" class="img-fluid w-100 hero-header-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroHeader',
};
</script>

<style lang="scss" scoped>
h2 {
  font-family: mensurabold;
  font-size: 4em;
  color: $alpha;
}
h1 {
  font-family: shaft-h1;
  // color:#333;
  color: $alpha;
  font-size: 5em;
  text-anchor: middle;
  display: inline-block;
  z-index: 2;
}
.logo {
  filter: drop-shadow(14px 5px 7px rgba(0, 0, 0, 0.3));
  z-index: 2;
}
.pt {
  z-index: 2;
}
.container-fluid {
  // background-color: $beta;
  background-color: #253a5f;
  overflow: hidden;
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
}
.bg-bottom {
  position: absolute;
  min-width: 100%;
  left: 0;
  z-index: 0;
  bottom: 0%;
}
.d-flex:first-child {
  padding-top: 5%;
}
@media (max-width: 1100px) {
  h1 {
    font-size: 3em !important;
  }
  .container-fluid {
    height: 70vh !important;
  }
  .d-flex h1 {
    min-width: 100% !important;
  }
  .bg-bottom {
    position: sticky !important;
  }
  .bg-bottom img {
    // position: relative!important;
    height: 450px;
    min-width: 100vh;
    z-index: 0;
  }
}
</style>
