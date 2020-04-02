<template>
<div class="container-fluid">
  <h1>
    Cascos para moto
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
};
</script>

<style lang='scss' scoped>
.container-fluid{
  background-color:$background-light!important;
  height:100vh!important;
}
.pt{
    // display: flex;
    // position:relative;
    // right: 0%!important;
    // left: 4%;
}
.productSection{
  display: flex;
  z-index: 3;
  position: relative;
}
</style>
