<template>
<div class="main-product">
    <div class="circle"/>
    <img
        :src="activeProduct.images[counter]"
        class="
            img-fluid
            active-product
            animated
            slideInDown
            slower
        "
    >
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
  .circle{
        position: absolute;
        top:2%!important;
        left:10%!important;
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
  .circle{
        position: absolute;
        top:1%!important;
        left:9%!important;
        width: 0px!important;
        height: 0px!important;
        align-self: center;
        padding:15%;
      }
      img{
        max-width:90%!important;
      }
 }
.main-product{
    align-content:center;
      .circle{
        position: absolute;
        top:6%;
        left:11%;
        box-shadow: 3px 3px 9px #0000002b;
        // width: 550px;
        padding:40%;
        // height: 550px;
        background-color:white;
        border-radius: 50%;
        overflow:visible;
      }
      img{
        width:90%;
      }
    }
</style>
