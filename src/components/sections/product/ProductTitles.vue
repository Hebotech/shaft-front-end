<template>
<div class="col-md-3 col-sm-12 d-flex flex-column justify-content-around">
  <img
    v-for="(certificate, certificateIndex) in activeProduct.certificates"
    :key="certificateIndex"
    :src="certificate"
    class="img-fluid"
  >
</div>
</template>

<script>
export default {
  name: 'ProductTitles',
  computed: {
    activeProduct() {
      return this.$store.getters.activeProduct;
    },
  },
};
</script>

<style lang='scss' scoped>
img{
  width:35%;
}
</style>
