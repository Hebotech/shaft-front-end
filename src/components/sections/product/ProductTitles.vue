<template>
<div class="
  order-2
  order-sm-2
  order-xl-1
  col-md-2
  col-sm-12
  d-flex
  flex-md-column
  flex-sm-row
  justify-content-around
  justify-content-md-center"
>
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
@media (max-width: 768px) {
  .container-fluid{
  background-color:$background-light!important;
  height:auto!important;
  h1{
    font-size: 3em;
  }
  img{
    width:17%;
  }
}
}
img{
  width:60%;
}
</style>
