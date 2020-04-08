<template>
<div class="
  description
  order-3
  order-sm-3
  order-md-3
  col-md-3
  col-sm-12
  text-center
  text-md-right
  "
>
  <h3>
    {{activeProduct.model}}
  </h3>
  <p>
    {{activeProduct.description}}
  </p>

</div>
</template>

<script>
export default {
  name: 'ProductDescription',
  computed: {
    activeProduct() {
      return this.$store.getters.activeProduct;
    },
  },
};
</script>

<style lang='scss' scoped>
h3{
  @extend .h4-font;
  font-size:3em;
  color:#333;
}
p{
  @extend .h6-font;
  font-size:1.5em;
}
.description{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
