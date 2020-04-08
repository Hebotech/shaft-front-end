<template>
<div>
<div
  :style="`background-image:url(${activeProduct.images[counter]})`"
  class="main-product"
>
    <!-- <img
        :src="activeProduct.images[counter]"
        class="
            img-fluid
            active-product
            animated
            slideInDown
        "
    > -->
</div>
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
  // .circle{
  //       position: absolute;
  //       top:1%!important;
  //       left:9%!important;
  //       width: 0px!important;
  //       height: 0px!important;
  //       align-self: center;
  //       padding:15%;
  //     }
      img{
        max-width:90%!important;
      }
 }
 .circle{
        position: absolute;
        top:5%;
        left:14%;
        box-shadow: 3px 3px 9px #0000002b;
        // width: 550px;
        padding:35%;
        // height: 550px;
        background-color:white;
        border-radius: 50%;
        overflow:visible;
        z-index: -1;
      }
.main-product{
    background-position: center!important;
    background-size:contain;
    align-content:center;
    background-attachment: scroll;
    height: 550px;
    width: 550px;

    }
</style>
