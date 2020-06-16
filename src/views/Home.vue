<template>
  <div class="home">
    <hero-header/>
    <cta-button/>
    <product-experience/>
    <distribuidores/>
    <splash/>
    <contact-form/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    HeroHeader: () => import('@/components/sections/HeroHeader.vue'),
    ProductExperience: () => import('@/components/sections/ProductExperience.vue'),
    Distribuidores: () => import('@/components/sections/companies/distribuidores.vue'),
    CtaButton: () => import('@/components/ui/CtaButton.vue'),
    Splash: () => import('@/components/ui/Splash.vue'),
  },
  mounted() {
    window.addEventListener('keydown', (e) => {
      if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
      }
    }, false);
  },
};
</script>

<style lang="scss" scoped>

</style>
