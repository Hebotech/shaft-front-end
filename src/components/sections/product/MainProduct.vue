<template>
  <div>
    <transition
      mode="out-in"
      enter-active-class="animated animate__backInRight animate__animated"
      leave-active-class="animate__animated animated animate__backOutLeft"
    >
      <slot v-if="!activeProduct"></slot>
      <img
        :alt="`shaft mexico casco ${activeProduct.name}`"
        v-else
        :src="`${activeProduct.images[counter]}`"
        class="main-product"
      />
    </transition>
    <div class="circle" />
  </div>
</template>

<script>
import { productHelmetMixin } from '@/mixins/productHelmetsMixin';

export default {
  name: 'MainProduct',
  mixins: [productHelmetMixin],
};
</script>

<style lang="scss" scoped>
.main-product {
  background-position: center;
  background-size: contain;
  align-content: center;
  background-attachment: scroll;
  height: 580px;
  width: 580px;
  filter: drop-shadow(4px 9.69px 20px rgba(0, 0, 0, 0.452));
}
@media (max-width: 576px) {
  .main-product {
    height: 250px;
    width: 250px;
  }
  .circle {
    position: absolute;
    top: 10%;
    left: 15%;
    width: 0px;
    height: 0px;
    align-self: center;
    padding: 35%;
  }
  img {
    max-width: 40%;
  }
}
@media (max-width: 768px) {
  .main-product {
    height: 250px;
    width: 250px;
  }
  img {
    max-width: 90%;
  }
}
</style>
