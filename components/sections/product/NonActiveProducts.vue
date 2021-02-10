<template>
  <div
    class="
        non-active-container
        d-flex
        h-100
        flex-row
        justify-content-center
        mx-md-0
    "
  >
    <div class="justify-content-center justify-content-md-around row mx-md-5">
      <product
        v-for="(product, productIndex) in products"
        v-bind="product"
        :productIndex="productIndex"
        :key="productIndex"
        :class="{ activing: products[productIndex].active }"
        class="non-active-products animated FadeInUp"
      />
    </div>
  </div>
</template>

<script>
import { productHelmetMixin } from '@/mixins/productHelmetsMixin';
import product from '@/components/ui/products/product.vue';

export default {
  name: 'NonActiveProduct',
  components: {
    product,
  },
  mixins: [productHelmetMixin],
};
</script>

<style lang="scss" scoped>
.non-active-container {
  z-index: 100;
  margin-right: 3em;
  transform-origin: top;

  .non-active-products {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 70px;
    height: 70px;
    cursor: pointer;
    margin: 0.5em;
    transition: cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s;
  }
  .activing {
    filter: drop-shadow(14px 5px 7px rgba(222, 255, 0, 0.3));
    transform: translateY(-1em);
    width: 85px;
    height: 85px;
    transition: cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s;
  }
}

@media (max-width: 768px) {
  .non-active-container {
    margin-top: 1em;
    .non-active-products {
        width: 35px;
    }
    .activing {
      width: 45px;
      height: 45px;
    }
  }
}
</style>
