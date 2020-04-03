<template>
<div class="
  bg-circle
  col-md-6
  mb-3
  d-flex
  justify-content-center
  items-center
"
  @keyup.up="nextProduct"
  @keyup.down="lastProduct"
  v-hammer:swipe.right="nextImage"
  v-hammer:swipe.left="lastImage"
  v-hammer:swipe.up="nextProduct"
  v-hammer:swipe.down="lastProduct"
>
  <main-product
    :counter="counter"
  />
  <div class="products-around">
    <non-active-products/>
  </div>
</div>
</template>

<script>
import nonActiveProducts from './NonActiveProducts.vue';
import MainProduct from './MainProduct.vue';

export default {
  name: 'ProductCircle',
  components: {
    nonActiveProducts,
    MainProduct,
  },
  computed: {
    activeProduct() {
      return this.$store.getters.activeProduct;
    },
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    nextProduct() {
      this.counter = 0;
      this.$store.dispatch('nextProduct');
    },
    lastProduct() {
      this.counter = 0;
      this.$store.dispatch('lastProduct');
    },
    nextImage() {
      if (this.counter <= this.activeProduct.images.length - 2) {
        this.counter += 1;
      } else {
        this.counter = 0;
      }
    },
    lastImage() {
      if (this.counter >= this.activeProduct.images.length - 1) {
        this.counter -= 1;
      } else {
        this.counter = this.activeProduct.images.length - 1;
      }
    },
  },
  mounted() {
    window.addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        case 37:
          this.lastImage();
          break;
        case 38:
          this.nextProduct();
          break;
        case 39:
          this.nextImage();
          break;
        case 40:
          this.lastProduct();
          break;
        // no default
      }
    });
  },
};
</script>

<style lang='scss' scoped>
.bg-circle{
    border:1px solid #B5B5B5;
    border-radius: 50%;
    height: 650px;
    align-items: center;
    // .products-around{
    //   .active-producto{
    //       // background:url('http://localhost:8081/img/ActiveHelmet.a29584c2.png');
    //       background-size: cover;
    //       position:absolute;
    //       top:40%;
    //       filter:drop-shadow(14px 5px 7px rgba(222, 255, 0, 0.3));
    //       right:101%;
    //       width: 100px;
    //       height: 100px;
    //   }
    //   .active-producto::before{
    //     content: "";
    //     background-color: black;
    //     width:20px;
    //     height:20px;
    //     position:absolute;
    //     border-radius:50%;
    //     left:100%;
    //     top:30%;
    //   }
    // }
}
</style>
