<template>
<div class="container-fluid">
  <img src="@/assets/dondecomprar.png" alt="" class="img-fluid">
</div>
</template>

<script>
export default {
  name: 'map',
  components: {
  },
};
</script>

<style lang='scss' scoped>
.map {
  width: 100%;
  height: 300px;
}
.h1{
    @extend .h1-font;
}
.container-fluid{
  background-color:$background-light!important;
}
</style>
