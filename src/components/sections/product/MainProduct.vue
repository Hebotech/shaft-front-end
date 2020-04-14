<template>
<div>
  <transition
    mode="out-in"
    enter-active-class="animated zoomIn faster"
    before-leave-class="animated zoomOutDown"
    leave-class="animated zoomOutDown"
  >
    <slot v-if="!activeProduct"></slot>
    <img
      :alt="`shaft mexico casco ${activeProduct.name}`"
      v-else
      :src="`${activeProduct.images[counter]}`"
      class="main-product"
    />
  </transition>
    <div class="circle"/>
</div>
</template>

<script>
export default {
  name: 'MainProduct',
  computed: {
    activeProduct() {
      return this.$store.getters.activeProduct;
    },
  },
  props: {
    counter: Number,
  },
};
</script>

<style lang='scss' scoped>
@media (max-width: 576px) {
   .main-product{
    height: 250px!important;
    width: 250px!important;
  }
  .circle{
        position: absolute;
        top:10%!important;
        left:15%!important;
        width: 0px!important;
        height: 0px!important;
        align-self: center;
        padding:35%;
      }
      img{
        max-width:40%;
      }
 }
@media (max-width: 768px) {
  .main-product{
    height: 250px!important;
    width: 250px!important;
  }
  img{
    max-width:90%!important;
  }
 }
.main-product{
    background-position: center!important;
    background-size:contain;
    align-content:center;
    background-attachment: scroll;
    height: 600px;
    width: 600px;
    filter:drop-shadow(4px 9.69px 20px rgba(0, 0, 0, 0.2));
    }
</style>
