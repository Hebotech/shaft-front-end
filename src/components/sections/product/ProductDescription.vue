<template>
  <div
    class="
  description
  order-3
  order-sm-3
  order-md-3
  col-md-3
  col-sm-12
  text-md-right
  "
  >
    <h3 :style="{ color: `${fontColor[activeProduct.index]}` }">
      {{ activeProduct.model }}
    </h3>
    <div
      class="
      mr-3
      ml-3
      arrows-container
      justify-content-around
      justify-content-md-end
    "
      :style="{ color: `${fontColor[activeProduct.index]}` }"
    >
      <div class="arrowContainer d-md-none" @click="lastProduct">
        <fontawesome class="animated fadeInRight fa fa-arrow-down" />
      </div>
      <div class="arrowContainer" @click="lastImage">
        <fontawesome class="animated fadeInLeft mr-md-3 fa fa-arrow-left" />
      </div>
      <div class="arrowContainer" @click="nextImage">
        <fontawesome class="animated fadeInRight ml-md-3 fa fa-arrow-right" />
      </div>
      <div class="arrowContainer d-md-none" @click="lastProduct">
        <fontawesome class="animated fadeInRight fa fa-arrow-up" />
      </div>
    </div>
  </div>
</template>

<script>
import { productHelmetMixin } from '@/mixins/productHelmetsMixin';

export default {
  name: 'ProductDescription',
  data() {
    return {
      fontColor: ['white', 'white', 'white', 'white', '#333333', '#121211', 'white', 'white'],
    };
  },
  mixins: [productHelmetMixin],
  methods: {
    nextImage() {
      if (this.counter <= this.activeProduct.images.length - 2) {
        this.$store.commit('ADDING_COUNTER');
      } else {
        this.$store.commit('RESTART_COUNTER');
      }
    },
    lastImage() {
      if (this.counter !== 0) {
        this.$store.commit('SUBSTRACTING_COUNTER');
      } else {
        this.$store.commit('IMAGES_LENGTH', this.activeProduct.images.length - 1);
      }
    },
    nextProduct() {
      this.$store.dispatch('nextProduct');
    },
    lastProduct() {
      this.$store.dispatch('lastProduct');
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  * {
    color: #333 !important;
  }
  h3 {
    font-size: 3em !important;
  }
  p {
    font-size: 1em !important;
  }
}
h3 {
  @extend .h4-font;
  font-size: 5em;
  color: white;
}
.arrows-container {
  @extend .h6-font;
  font-stretch: expanded;
  font-size: 3em;
  display: flex;
  justify-content: flex-end;
}
.arrowContainer:hover {
  cursor: pointer !important;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
