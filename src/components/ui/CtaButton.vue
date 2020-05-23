<template>
<div class="row m-0 justify-content-center">
    <a
      @click="addNewClick({ category: 'Hot sale', tag: 'CTA Formulario' })"
      class="animated tada delay-2s cta text-center"
    >
      <!-- target="_blank" -->
      <!-- href="https://irvingdev.typeform.com/to/wXtpWP" -->
        Ir al Hot Sale 🔥
    </a>
</div>
</template>

<script>
export default {
  name: 'CtaButton',
  methods: {
    addNewClick({ category, tag }) {
      this.$router.push({
        name: 'HotSale',
      });
      this.$ga.event(category, 'click', tag);
    },
  },
};
</script>

<style lang='scss' scoped>
.cta{
    position: fixed;
    color: white;
    box-shadow: 10px 9.69px 30px rgba(0, 0, 0, 0.365);
    border:0px;
    font-family: MensuraBold;
    border-radius:8px;
    font-size: 1.5em;
    // background-color:$alpha;
    background-color:#DF2831;
    padding: .3em 2em;
    z-index: 100;
    bottom:3vw;
    // right: 3vw;
}
</style>
