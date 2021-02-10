<template>
  <div
    class="
  bg-circle
  col-md-12
  col-12
  mb-3
  mt-5
  d-flex
  justify-content-center
  flex-column
  align-items-center
  order-2
  order-lg-2
"
  >
    <main-product @click.native="$router.push({
      name: 'product-modal',
      params: {
        model: activeProduct.model,
        graphic: activeProduct.name
      }
    })" :counter="counter" />
    <div class="products-around" >
      <non-active-products />
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
    window.addEventListener('keyup', event => {
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

<style lang="scss" scoped></style>
