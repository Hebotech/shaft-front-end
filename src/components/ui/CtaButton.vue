<template>
<div class="row m-0 justify-content-center">
    <a
      @click="ctaAction({ category: 'Contigo', tag: 'CTA Home' })"
      href="https://irvingdev.typeform.com/to/wXtpWP"
      class="animate__animated animate__wobble animate__delay-2s cta text-center"
      target="_blank"
    >
     ¡Distribuye Shaft!
    </a>
</div>
</template>

<script>
export default {
  name: 'CtaButton',
  methods: {
    ctaAction({ category, tag }) {
      this.$ga.event(category, 'click', tag);
    },
  },
};
</script>

<style lang='scss' scoped>
.cta{
    position: fixed;
    color: #253A5F;
    box-shadow: 10px 9.69px 30px rgba(0, 0, 0, 0.365);
    border:0px;
    font-family: MensuraBold;
    border-radius:8px;
    font-size: 1.5em;
    background-color:$alpha;
    // background-color:#253A5F;
    padding: .3em 2em;
    z-index: 100;
    bottom:3vw;
  transition:cubic-bezier(0.075, 0.82, 0.165, 1) 3s;
    // right: 3vw;
}
.cta:hover{
  text-decoration: underline;
  transition:cubic-bezier(0.075, 0.82, 0.165, 1) .7s;
  color:black;
  box-shadow: 10px 9.69px 25px rgba(0, 0, 0, 0.755);
  cursor: pointer;
}
</style>
