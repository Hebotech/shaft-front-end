<template>
<div class="description col-md-3">
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
