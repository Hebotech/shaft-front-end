<template>
  <!-- v-for="(product, productIndex) in products"
          :key="productIndex" -->
  <div
    class="non-active-products animated FadeInRight"
    :class="{ activing: active }"
    :style="`background-image:url(${images[0]})`"
    @click="setActiveProduct(productIndex)"
  ></div>
</template>

<script>
export default {
  name: 'product',
  props: {
    images: Array,
    productIndex: Number,
    active: Boolean,
    name: String,
  },

  methods: {
    async setActiveProduct(index) {
      await this.$store.commit('DEACTIVATE_PRODUCTS');
      await this.$store.commit('SELECT_ACTIVE_PRODUCT', index);
      this.$ga.event('Productos', 'click', `${this.name}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
