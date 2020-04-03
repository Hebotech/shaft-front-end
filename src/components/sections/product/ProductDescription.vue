<template>
<div class="
  description
  order-3
  order-sm-3
  order-md-3
  col-md-3
  col-sm-12
  "
>
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
.description{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
