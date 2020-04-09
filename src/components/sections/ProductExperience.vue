<template>
<div
  class="
  d-flex
  flex-column
  justify-content-around
  justify-content-md-between
  container-fluid"
>
  <transition
      mode="out-in"
      enter-active-class="animated flip"
  >
    <slot v-if="!activeProduct"></slot>
    <div
      v-else
      :style="{'background-color': `${activeProduct.color}`}"
      class="bg-svg"
    ></div>
  </transition>
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
  background-position-x: 100px!important;
  background-position-y:70px!important;
  height:auto!important;
  h1{
    font-size: 4em;
  }
  .bg-svg{
    top: 70%;
    right: 0;
    padding: 57% 42%!important;
    z-index: 0;
  }
}
}
.bg-svg{
  // overflow: hidden;
  position: absolute;
  top:40%;
  right:0;
  padding:60% 35%;
  z-index:0;
  mask-image: url('~@/assets/bg-product.svg');
  mask-size: contain;
  mask-position: right;
  mask-repeat: no-repeat;
  background-size: cover;
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
