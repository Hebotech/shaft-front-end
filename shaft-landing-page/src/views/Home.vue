<template>
  <div class="home">
    <hero-header/>
    <product-experience/>
    <distribuidores/>
    <splash/>
    <contact-form/>
  </div>
</template>

<script>
import HeroHeader from '@/components/sections/HeroHeader.vue';
import ProductExperience from '@/components/sections/ProductExperience.vue';
import ContactForm from '@/components/sections/Form.vue';
import Distribuidores from '@/components/sections/companies/distribuidores.vue';
import Splash from '@/components/ui/Splash.vue';

export default {
  name: 'Home',
  components: {
    HeroHeader,
    ProductExperience,
    ContactForm,
    Distribuidores,
    Splash,
  },
};
</script>

<style lang="scss">

</style>
