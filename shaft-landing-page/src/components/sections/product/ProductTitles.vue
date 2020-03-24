<template>
<div>
<div class='titles'>
  <h1 class='inactiveModel'>
    SH520
  </h1>
  <h1
    class="animated fadeInLeft faster activeModel"
  >
    SH530
  </h1>
  <h1 class='inactiveModel'>
    SH540
  </h1>
</div>
</div>
</template>

<script>
export default {
  name: 'ProductTitles',
};
</script>

<style lang='scss' scoped>
.titles{
transform:rotate(-90deg);
}
.activeModel{
  color:black;
  text-shadow: 1px 1px 3px #deff00d1;
}
h1{
    margin-left: 1em;
}
.activeModel{
    font-size: 3em;
}
.inactiveModel{
    font-size:2.2em;
    filter:blur(3px);
    font-weight: 400;
}
</style>
