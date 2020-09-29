<template>
  <div class="home">
    <hero-header />
    <cta-button />
    <product-experience v-if="enterProducts" />

    <distribuidores />
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
  },

  created() {
    this.enterProducts = true;
  },

  data() {
    return {
      enterProducts: false,
    };
  },

  mounted() {
    window.addEventListener(
      'keydown',
      // eslint-disable-next-line arrow-parens
      e => {
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault();
        }
      },
      false,
    );
  },
};
</script>

<style lang="scss" scoped>
.home {
  overflow-x: hidden;
}
</style>
