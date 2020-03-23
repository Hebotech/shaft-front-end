<template>
  <div class="home">
   <nav-bar/>
   <hero-header/>
   <product-experience/>
   <contact-form/>
   <div class="row">
     <div
      class="col-md-4"
      v-for="(company,companyIndex) in companies"
      :key="companyIndex"
     >
      <websites
        :company="company"
      />
     </div>
   </div>
  </div>
</template>

<script>
import NavBar from '@/components/ui/NavBar.vue';
import HeroHeader from '@/components/sections/HeroHeader.vue';
import ProductExperience from '@/components/sections/ProductExperience.vue';
import ContactForm from '@/components/sections/Form.vue';
import websites from '@/components/sections/companies/websites.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    HeroHeader,
    ProductExperience,
    ContactForm,
    websites,
  },
  mounted() {
    this.$store.dispatch('fetchCompanies');
  },
  computed: {
    companies() {
      return this.$store.state.allCompanies;
    },
  },
};
</script>

<style lang="scss">

</style>
