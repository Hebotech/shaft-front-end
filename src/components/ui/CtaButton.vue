<template>
<div>
    <a
        @click='addNewClick()'
        class="animated tada delay-2s"
        target="_blank"
        href="https://irvingdev.typeform.com/to/wXtpWP"
    >
        Vende Shaft
    </a>
</div>
</template>

<script>
export default {
  name: 'CtaButton',
  methods: {
    addNewClick() {
      this.$ga.event('Leads', 'click', 'CTA Formulario');
    },
  },
};
</script>

<style lang='scss' scoped>
div{
    justify-content: center;
    display:flex;
}
a{
    color:$title-dark;
    box-shadow: 10px 9.69px 30px rgba(0, 0, 0, 0.365);
    border:0px;
    font-family: MensuraBold;
    border-radius:8px;
    font-size: 1.5em;
    background-color:$alpha;
    padding: .3em 2em;
    z-index: 100;
    position: fixed;
    bottom:3vw;
    // right: 3vw;
}
</style>
