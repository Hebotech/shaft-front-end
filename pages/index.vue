<template>
  <div class="home" :class="$route.name === 'product-modal' ? 'blurIn' : ''">
    <hero-header />
    <cta-button />
    <product-experience />
    <transition
      mode="out-in"
      enter-active-class="animated animate__fadeIn animate__animated"
      leave-active-class="animate__animated animated animate__fadeOut"
    >
      <router-view :key="$route.path" />
    </transition>
    <distribuidores />
  </div>
</template>

<script>
export default {
  name: 'Home',

  components: {
    HeroHeader: () => import('@/components/sections/HeroHeader.vue'),

    ProductExperience: () =>
      import('@/components/sections/ProductExperience.vue'),

    Distribuidores: () =>
      import('@/components/sections/companies/distribuidores.vue'),

    CtaButton: () => import('@/components/ui/CtaButton.vue'),
  },

  created() {
    this.$store.dispatch('fetchProducts', this.$route.params);
  },

  data() {
    return {
      enterProducts: false,
    };
  },
};
</script>

<style lang="scss">
.home {
  overflow-x: hidden;
  transition: filter 0.5s ease-in;
  &.blurIn {
    & > *:not(.modal-product) {
      transition: all 0.5s ease-out;
      filter: blur(8px);
    }
  }
}
</style>
