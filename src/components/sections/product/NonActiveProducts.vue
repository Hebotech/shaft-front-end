<template>
  <div
    class="
        non-active-container
        d-flex
        h-100
        flex-column
        justify-content-center
        justify-content-md-around
    "
    >
    <div
      class="non-active-top justify-content-center justify-content-md-around d-flex flex-column"
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
    <!-- <div
      class="non-active-products center animated FadeInUp"
      :class="{activing:products[2].active}"
      :style="`background-image:url(${products[2].images[0]})`"
      @click="setActiveProduct(2)"
    /> -->
    <div
      class="non-active-bottom justify-content-around d-flex flex-column"
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
@media (max-width: 768px) {
  .activing{
    left: 0%!important;
    width: 80px!important;
    height: 80px!important;
    }
    ::before{
      content: "";
        height:0px!important;
    }
    .non-active-bottom, .non-active-top{
      position:unset!important;
    }
  .non-active-container{
    top:0%!important;
    left: -10%!important;
  .non-active-products{
    position: static!important;
    width: 40px!important;
    height: 40px!important;
    margin-bottom: 1em;
  }
}
}
.center{
position: relative;
right: 30%;
top:1.5%;
}
.activing{
  filter:drop-shadow(14px 5px 7px rgba(222, 255, 0, 0.3))!important;
  width: 120px!important;
  height: 120px!important;
  transition:cubic-bezier(0.075, 0.82, 0.165, 1) .3s;
  left:-10%!important;
}
.center.activing{
  left:-71%!important;
}
.activing::before{
  background-color: black!important;
  content: "";
  width:16px;
  height:16px;
  position: absolute;
  border-radius:50%;
  left:40%;
  top:90%;
}
.non-active-container{
  position:absolute;
  bottom:13%;
  left: -4%;
  .non-active-products{
    transition:cubic-bezier(0.075, 0.82, 0.165, 1) .3s;
    background-size: cover;
    width: 80px;
    height: 80px;
    z-index: 0;
  }
  .non-active-top{
      position: relative;
      bottom:10%;
      right: -80%;
      :nth-of-type(1){
        position: relative;
        left: 110%;
        top: 17%;
      }
      :nth-of-type(2){
        position: relative;
        left:10%;
        top:5%;
      }
      :nth-of-type(1).activing{
        left: 50%!important;
      }
      :nth-of-type(2).activing{
        left: -40%!important;
      }
  }
  .non-active-bottom{
      position: relative;
      bottom:35%;
      right: 10%;
      :nth-of-type(2){
        position: relative;
        right: 20%;
        top:25%;
      }
      :nth-of-type(1){
        position: relative;
        right: 0%;
        top: 20%;
      }
      :nth-of-type(2).activing{
        left: -60%!important;
      }
      :nth-of-type(1).activing{
        top:10%!important;
        left: -10%!important;
      }
  }
}
</style>
