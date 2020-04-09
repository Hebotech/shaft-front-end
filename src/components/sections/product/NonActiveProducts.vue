<template>
  <div
    class="
        non-active-container
        d-flex
        h-100
        flex-column
        justify-content-center
    "
    >
    <div
      class="non-active-top justify-content-center justify-content-md-between d-flex flex-column"
    >
        <div
          v-for="(product, productIndex) in products"
          :key="productIndex"
          class="non-active-products animated FadeInUp"
          :class="{activing:products[productIndex].active}"
          :style="`background-image:url(${products[productIndex].images[0]})`"
          @click="setActiveProduct(productIndex)"
        />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NonActiveProduct',
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    async setActiveProduct(index) {
      await this.$store.commit('DEACTIVATE_PRODUCTS');
      await this.$store.commit('SELECT_ACTIVE_PRODUCT', index);
    },
  },
};
</script>

<style lang='scss' scoped>
@media (max-width: 768px) {
  .activing{
    left: 0%!important;
    width: 80px!important;
    height: 80px!important;
    }
    ::before{
      content: "";
        height:0px!important;
    }
  .non-active-container{
    top:0%!important;
    // left: -10%!important;
  .non-active-products{
      position: static!important;
      width: 25px!important;
      height: 25px!important;
      margin-bottom:.1em;
    }
  }
}
.activing{
  filter:drop-shadow(14px 5px 7px rgba(222, 255, 0, 0.3))!important;
  width: 90px!important;
  height: 90px!important;
  transition:cubic-bezier(0.075, 0.82, 0.165, 1) .9s;
}
// .activing::before{
//   background-color: black!important;
//   content: "";
//   width:16px;
//   height:16px;
//   position: absolute;
//   border-radius:50%;
//   left:100%;
//   top:30%;
// }
.non-active-container{
  transform: rotate(-16deg);
  margin-right:3em;
  transform-origin: top;
  .non-active-products{
    transition:cubic-bezier(0.075, 0.82, 0.165, 1) .3s;
    background-size: cover;
    width: 50px;
    height: 50px;
    z-index: 0;
  }
}
</style>
