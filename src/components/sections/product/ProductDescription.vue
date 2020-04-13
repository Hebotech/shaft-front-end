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

  <h3
  :style="{'color': `${fontColor[activeProduct.index]}`}"
  >
    {{activeProduct.model}}
  </h3>
  <p
  :style="{'color': `${fontColor[activeProduct.index]}`}"
  >
    <!-- {{activeProduct.description}} -->
  </p>

</div>
</template>

<script>
export default {
  name: 'ProductDescription',
  data() {
    return {
      fontColor: [
        'white',
        'white',
        '#333333',
        'white',
        '#333333',
        'white',
        'white',
        'white',
      ],
    };
  },
  computed: {
    activeProduct() {
      return this.$store.getters.activeProduct;
    },
  },
};
</script>

<style lang='scss' scoped>
@media (max-width: 768px) {
  *{color:#333!important;}
  h3{
    font-size:2em!important;
  }
  p{
    font-size:1em!important;
  }
}
h3{
  @extend .h4-font;
  font-size:3em;
  color:white;
}
p{
  @extend .h6-font;
  font-stretch: expanded;
  font-size:1.5em;
    color:white;
}
.description{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
