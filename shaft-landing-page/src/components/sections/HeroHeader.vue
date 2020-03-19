<template>
<div class="container-fluid">
  <div class="d-flex flex-column justify-content-center">
    <h1>
      Bienvenido a la nueva experiencia
    </h1>
    <img
      src="@/assets/brand/logo.png"
      alt=""
      width="500px"
      class="img-fluid text-center"
    >
  </div>
</div>
</template>

<script>
export default {
  name: 'HeroHeader',
};
</script>

<style lang='scss' scoped>
.container-fluid{
  background-color: $beta!important;
}

</style>
