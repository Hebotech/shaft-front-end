<template>
<div class="container-fluid">
<h1>
    Donde comprar
</h1>
<baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
</baidu-map>
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
