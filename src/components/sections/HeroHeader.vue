<template>
  <div
    class="container-fluid align-items-center d-flex flex-column justify-content-center"
    :style="[lazyLoad === true ? { 'background-image': 'url(' + require('@/assets/bg-header.svg') + ')' } : '']"
  >
    <div class="intro-website align-self-center d-flex flex-column align-items-center">
      <h2>Nueva colección</h2>
      <h1 class="animate__animated animate__zoomInDown">Descubrela ahora</h1>
      <img
        src="@/assets/shaft-logo.svg"
        alt="shaft mexico"
        width="500px"
        class="img-fluid text-center d-block w-25 mt-3 logo animate__zoomInUp animate__animated"
      />
    </div>
    <img class="feature-product img-fluid" :src="featureHelmet" alt="newHewlmet" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HeroHeader',

  created() {
    this.lazyLoad = true;
  },

  data() {
    return {
      lazyLoad: false,
    };
  },

  computed: {
    ...mapGetters({
      featureHelmet: 'firstProduct',
    }),
  },
};
</script>

<style lang="scss" scoped>
.feature-product {
  position: relative;
  max-height: 40em;
  margin-top: -80%;
  right: -50%;
  z-index: 0;
  @media screen and (min-width: 800px) {
    max-height: 40em;
    margin-top: -30%;
    right: -50%;
  }
}

.intro-website {
  z-index: 2;
  transform: rotate(-10deg);

  h2 {
    font-family: mensurabold;
    font-size: 1.5em;
    color: $background-light;
  }
  h1 {
    font-family: shaft-h1;
    // color:#333;
    color: $alpha;
    font-size: 4.5em;
    text-anchor: middle;
    display: inline-block;
    z-index: 2;
  }
  .logo {
    filter: drop-shadow(14px 5px 7px rgba(0, 0, 0, 0.3));
    z-index: 5;
    transform: rotate(10deg);
  }
  @media screen and (min-width: 800px) {
    h2 {
      font-family: mensurabold;
      font-size: 3em;
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
  }
}

.pt {
  z-index: 2;
}
.container-fluid {
  // background-color: $beta;
  background-color: #253a5f;
  min-height: 100vh;
  max-width: 100vw;
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
  .container-fluid {
    height: 100vh !important;
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
