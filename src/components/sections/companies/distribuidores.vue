<template>
  <intersect @enter="enter">
    <div class="distribuidores" id="distribuidores">
      <h2 class="text-center">Tiendas Oficiales</h2>
      <div class="row p-lg-5 m-0 justify-content-center">
        <div
          class="col-md-6 col-sm-6 col-12 m-0"
          v-for="favCompany in favCompanies"
          :key="favCompany.companyId"
        >
          <websites :isFav="true" :company="favCompany" />
        </div>
      </div>
      <div class="row m-0">
        <div
          class="col-md-4 col-sm-5 col-12 text-align-center"
          v-for="regularCompany in shaftCompanies"
          :key="regularCompany.companyId"
        >
          <websites :company="regularCompany" />
        </div>
      </div>
    </div>
  </intersect>
</template>

<script>
import Intersect from 'vue-intersect';
import websites from '@/components/ui/companies/websites.vue';

export default {
  name: 'distribuidoress',
  components: {
    websites,
    Intersect,
  },
  methods: {
    async enter() {
      await this.$store.dispatch('fetchCompanies');
      this.favCompanies = this.$store.getters.favCompanies;
      this.shaftCompanies = this.$store.getters.shaftCompanies;
    },
  },
  data() {
    return {
      favCompanies: [],
      shaftCompanies: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.distribuidores {
  background-color: $navy-color;
  padding-top: 3em;
  h2 {
    font-family: shaft-h1;
    font-size: 4em;
    color: #e9e2e2;
    @media screen and (min-width: 800px) {
      font-size: 6em;
    }
  }
  img {
    position: relative;
    z-index: 3;
  }
}
</style>
