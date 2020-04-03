<template>
  <div class="distribuidores">
  <img src="@/assets/DONDECOMPRAR.png" alt="" class="w-75 img-fluid mb-3 animated fadeInDown">
    <div class="row m-0">
        <websites
          :company="company"
          v-for="(company,companyIndex) in companies"
          :key="companyIndex"
        />
    </div>
  </div>
</template>

<script>
import websites from '@/components/sections/companies/websites.vue';

export default {
  name: 'Home',
  components: {
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

<style lang='scss' scoped>
.distribuidores{
  // z-index:;
  // position:relative;
  background-color:#F7F7F7;
  img{
    position:relative;
  z-index:3;
  }
}
</style>
