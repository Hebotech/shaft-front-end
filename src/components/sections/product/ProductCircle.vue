<template>
<div class="
  bg-circle
  col-md-7
  col-sm-10
  col-12
  mb-3
  mt-3
  d-flex
  flex-row-reverse
  justify-content-between
  items-center
  order-1
  order-sm-1
  order-md-2
  order-xl-2
"
>
  <main-product
    :counter="counter"
  />
  <div class="products-around">
    <non-active-products/>
  </div>
</div>
</template>

<script>
import { productHelmetMixin } from '@/mixins/productHelmetsMixin';
import nonActiveProducts from './NonActiveProducts.vue';
import MainProduct from './MainProduct.vue';

export default {
  name: 'ProductCircle',
  components: {
    nonActiveProducts,
    MainProduct,
  },
  mixins: [productHelmetMixin],
  mounted() {
    window.addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        case 37:
          this.lastImage();
          break;
        case 38:
          this.lastProduct();
          break;
        case 39:
          this.nextImage();
          break;
        case 40:
          this.nextProduct();
          break;
        // no default
      }
    });
  },
};
</script>

<style lang='scss' scoped>

</style>
