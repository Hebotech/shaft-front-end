<template>
  <div>
    <transition
      mode="out-in"
      enter-active-class="animated animate__backInRight animate__animated"
      leave-active-class="animate__animated animated animate__backOutLeft"
    >
      <slot v-if="!activeProduct"/>
      <img
        :alt="`shaft mexico casco ${activeProduct.name}`"
        v-else
        :src="`${activeProduct.images[counter]}`"
        class="main-product"
        loading="lazy"
      />
    </transition>
    <div class="circle"/>
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
  cursor: pointer;
  background-position: center;
  background-size: cover;
  align-content: center;
  background-attachment: scroll;
  height: 450px;
  width: 450px;
  filter: drop-shadow(4px 9.69px 20px rgba(0, 0, 0, 0.452));
}
@media (max-width: 576px) {
  .main-product {
    height: auto;
    width: 350px;
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

    width: 350px;
  }
  img {
    max-width: 90%;
  }
}
</style>
