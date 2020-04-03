<template>
  <div
    class="
        non-active-container
        d-flex
        h-100
        flex-column
        justify-content-around
    "
    >
    <div
        class="non-active-top h-25 justify-content-around d-flex flex-column"
    >
        <div
            class="non-active-products animated FadeInUp"
            :style="`background-image:url(${nonActiveProducts[0].images[0]})`"
        />
        <div
            class="non-active-products animated FadeInUp"
            :style="`background-image:url(${nonActiveProducts[1].images[0]})`"
        />
    </div>
    <div
        class="non-active-bottom h-25 justify-content-around d-flex flex-column"
    >
        <div
            class="non-active-products animated FadeInDown"
            :style="`background-image:url(${nonActiveProducts[2].images[0]})`"
        />
        <div
            class="non-active-products animated FadeInDown"
            :style="`background-image:url(${nonActiveProducts[3].images[0]})`"
        />
    </div>
    </div>
</template>

<script>
export default {
  name: 'NonActiveProduct',
  computed: {
    nonActiveProducts() {
      return this.$store.getters.nonActiveProducts;
    },
  },
};
</script>

<style lang='scss' scoped>
.non-active-container{
  position:absolute;
  top:-3%;
  left: -4%;
  .non-active-products::before{
      content: "";
        background-color: rgb(205, 205, 205);
        width:16px;
        height:16px;
        position:absolute;
        border-radius:50%;
        left:105%;
        top:25%;
    }
  .non-active-products{
    background-size: cover;
    width: 40px;
    height: 40px;
  }
  .non-active-top{
      position: relative;
      :nth-of-type(1){
        position: relative;
        right: -190%;
      }
      :nth-of-type(2){
        position: relative;
        left: 30%;
      }
  }
  .non-active-bottom{
      position: relative;
      right: 10%;
      :nth-of-type(2){
        position: relative;
        left: 100%;
      }
      :nth-of-type(1){
        position: relative;
        left: -10%;
      }
  }
}
</style>
