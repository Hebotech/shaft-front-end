<template>
  <div class="bg-circle">
    <img
      src="@/assets/ActiveHelmet.png"
      class="img-fluid active-product"
      alt=""
    >
  </div>
</template>

<script>
export default {
  name: 'ProductCircle',
};
</script>

<style lang='scss' scoped>
.active-product{
}
.bg-circle{
    border:1px solid black;
    border-radius: 50%;
}
</style>
