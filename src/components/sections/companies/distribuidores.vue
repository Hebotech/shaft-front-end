<template>
<intersect @enter="enter">
  <div class="distribuidores">
  <img
    src="@/assets/DONDECOMPRAR.webp"
    alt="donde comprar shaft"
    class="w-75 img-fluid mb-3 animated fadeInDown"
  >
    <div class="row m-0">
        <websites
          :company="company"
          v-for="(company,companyIndex) in companies"
          :key="companyIndex"
        />
    </div>
  </div>
</intersect>
</template>

<script>
import Intersect from 'vue-intersect';
import websites from '@/components/sections/companies/websites.vue';

export default {
  name: 'Home',
  components: {
    websites,
    Intersect,
  },
  methods: {
    async enter() {
      await this.$store.dispatch('fetchCompanies');
      this.companies = this.$store.state.allCompanies;
    },
  },
  data() {
    return {
      companies: [],
    };
  },
};
</script>

<style lang='scss' scoped>
.distribuidores{
  // z-index:;
  padding-top:8%;
  // position:relative;
  background-color:#F7F7F7;
  img{
    position:relative;
  z-index:3;
  }
}
</style>
