<template>
  <div
    class="container-fluid align-items-center d-flex flex-column justify-content-center"
  >
    <div
      class="intro-website align-self-center d-flex flex-column align-items-center"
    >
      <h2>Nueva colección</h2>
      <h1 class="animate__animated animate__zoomInDown">Descubrela ahora</h1>
      <img
        src="/shaft-logo.svg"
        alt="shaft mexico"
        width="500px"
        class="img-fluid text-center d-block w-25 mt-3 logo animate__zoomInUp animate__animated"
      />
    </div>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped></style>
