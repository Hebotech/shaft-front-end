<template>
<div
  class="
  d-flex
  flex-column
  justify-content-around
  container-fluid"
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
h1{
  @extend .title;
  font-size:6em;
  color:#333333;
}
@media (max-width: 768px) {
  .container-fluid{
  background-color:$background-light!important;
  height:auto!important;
  h1{
    font-size: 3em;
  }
}
}
.container-fluid{
  background-color:$background-light!important;
  height:100vh;
}
.productSection{
  display: flex;
  z-index: 3;
  position: relative;
}
</style>
