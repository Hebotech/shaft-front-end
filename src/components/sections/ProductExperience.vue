<template>
<div
  class="container-fluid"
>
  <h1>
    {{activeProduct.name}}
  </h1>
  <div class="productSection row">
    <product-titles class="pt"/>
    <product-circle/>
    <product-description/>
  </div>
</div>
</template>

<script>
import ProductCircle from '@/components/sections/product/ProductCircle.vue';
import ProductTitles from '@/components/sections/product/ProductTitles.vue';
import ProductDescription from '@/components/sections/product/ProductDescription.vue';

export default {
  name: 'ProductExperience',
  components: {
    ProductCircle,
    ProductTitles,
    ProductDescription,
  },
  computed: {
    nonActiveProducts() {
      return this.$store.getters.nonActiveProducts;
    },
    activeProduct() {
      return this.$store.getters.activeProduct;
    },
  },
};
</script>

<style lang='scss' scoped>
.container-fluid{
  background-color:$background-light!important;
  height:100vh!important;
}
.productSection{
  display: flex;
  z-index: 3;
  position: relative;
}
</style>
