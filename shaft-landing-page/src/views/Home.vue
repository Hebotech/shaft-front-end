<template>
  <div class="home">
   <nav-bar/>
   <hero-header/>
   <product-experience/>
   <business-map
    :apiKey='AIzaSyC7XGjvP6DWzLIpV1AkMnN6irKS1xmkb-U'
   />
   <contact-form/>
  </div>
</template>

<script>
import NavBar from '@/components/ui/NavBar.vue';
import HeroHeader from '@/components/sections/HeroHeader.vue';
import ProductExperience from '@/components/sections/ProductExperience.vue';
import businessMap from '@/components/sections/map/map.vue';
import ContactForm from '@/components/sections/Form.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    HeroHeader,
    ProductExperience,
    businessMap,
    ContactForm,
  },
};
</script>

<style lang="scss">

</style>
