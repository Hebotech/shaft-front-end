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
          :class="{activing:products[4].active}"
          :style="`background-image:url(${products[4].images[0]})`"
          @click="setActiveProduct(4)"
        />
        <div
          class="non-active-products animated FadeInUp"
          :class="{activing:products[3].active}"
          :style="`background-image:url(${products[3].images[0]})`"
          @click="setActiveProduct(3)"
        />
    </div>
    <div
      class="non-active-products center animated FadeInUp"
      :class="{activing:products[2].active}"
      :style="`background-image:url(${products[2].images[0]})`"
      @click="setActiveProduct(2)"
    />
    <div
      class="non-active-bottom h-25 justify-content-around d-flex flex-column"
    >
        <div
          class="non-active-products animated FadeInUp"
          :class="{activing:products[1].active}"
          :style="`background-image:url(${products[1].images[0]})`"
          @click="setActiveProduct(1)"
        />
        <div
          class="non-active-products animated FadeInUp"
          :class="{activing:products[0].active}"
          :style="`background-image:url(${products[0].images[0]})`"
          @click="setActiveProduct(0)"
        />
    </div>
    </div>
</template>

<script>
export default {
  name: 'NonActiveProduct',
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    async setActiveProduct(index) {
      await this.$store.commit('DEACTIVATE_PRODUCTS');
      await this.$store.commit('SELECT_ACTIVE_PRODUCT', index);
    },
  },
};
</script>

<style lang='scss' scoped>
.center{
position: relative;
right: 55%;
}
.center::before{
      content: "";
        background-color: rgb(205, 205, 205);
        width:16px;
        height:16px;
        position: absolute!important;
        border-radius:50%;
        left:135%!important;
        top:49%!important;
    }
.activing{
  filter:drop-shadow(14px 5px 7px rgba(222, 255, 0, 0.3))!important;
  width: 80px!important;
  height: 80px!important;
  transition:cubic-bezier(0.075, 0.82, 0.165, 1) .3s;
  right:100%;
}
.activing::before{
  background-color: black!important;
}
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
    transition:cubic-bezier(0.075, 0.82, 0.165, 1) .3s;
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
