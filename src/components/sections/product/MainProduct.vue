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
            mr-3
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
.main-product{
    align-content:center;
      .circle{
        position: absolute;
        top:6%;
        left:11%;
        box-shadow: 3px 3px 9px #0000002b;
        width: 550px;
        height: 550px;
        background-color:white;
        border-radius: 50%;
        overflow:visible;
      }
      img{
        width:95%;
      }
    }
</style>
