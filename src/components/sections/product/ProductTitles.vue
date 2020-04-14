<template>
<div class="
  order-2
  order-sm-2
  order-xl-1
  col-md-2
  col-sm-12
  d-flex
  flex-md-column
  flex-sm-row
  justify-content-around
  justify-content-md-center"
>
  <transition
    mode="out-in"
    enter-active-class="animated jackInTheBox faster"
    leave-active-class="animated rollOut"
  >
      <slot v-if="!activeProduct"></slot>
  <div
      v-else
  >
      <img
        v-for="(certificate, certificateIndex) in activeProduct.certificates"
        :key="certificateIndex"
        :src="certificate"
        alt="shaft mexico certificado"
        class="img-fluid"
      >
  </div>
  </transition>
</div>
</template>

<script>
export default {
  name: 'ProductTitles',
  computed: {
    activeProduct() {
      return this.$store.getters.activeProduct;
    },
  },
};
</script>

<style lang='scss' scoped>
@media (max-width: 768px) {
  .container-fluid{
  background-color:$background-light!important;
  height:auto!important;
  h1{
    font-size: 3em;
  }
  img{
    width:17%;
  }
}
}
img{
  width:60%;
}
</style>
