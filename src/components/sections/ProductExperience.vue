<template>
  <div
    class="d-flex flex-column justify-content-around justify-content-md-between container-fluid"
  >
      <svg-bg/>
    <h1 class="text-lg-left text-center helmet-title">{{ activeProduct.name }}</h1>
    <div class="productSection flex-column">
      <product-circle />
      <product-description />
    </div>
  </div>
</template>

<script>
import { productHelmetMixin } from '@/mixins/productHelmetsMixin';

import ProductCircle from '@/components/sections/product/ProductCircle.vue';
import ProductTitles from '@/components/sections/product/ProductTitles.vue';
import ProductDescription from '@/components/sections/product/ProductDescription.vue';
import SvgBg from '@/components/ui/products/SvgBg.vue';

export default {
  name: 'ProductExperience',
  components: {
    ProductCircle,
    ProductDescription,
    SvgBg
  },
  mixins: [productHelmetMixin],
};
</script>

<style lang="scss" scoped>
h1 {
  @extend .title;
  font-size: 6em;
  color: $alpha;
  margin-bottom: -1.2em;
}
.container-fluid {
  background-color: $navy-color;
  background-blend-mode: lighten;
  z-index: 20;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transition: all ease-in-out 0.3s;
  //padding-top: 3.5em;
  overflow-x: hidden;
}
.productSection {
  display: flex;
  z-index: 3;
  position: relative;
}

@media screen and (min-width: 1441px) {
  .bg-svg {
    top: 115%;
    padding: 12% 0;
  }
}

@media (max-width: 768px) {
  .container-fluid {
    height: auto;
    h1 {
      margin-bottom: 0em;
      font-size: 4em;
      color: white;
    }
    .bg-svg {
      top: 42em;
      right: 0;
      padding: 40% 0%;
      z-index: 0;
    }
  }
}
</style>
