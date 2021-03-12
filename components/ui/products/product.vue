<template>
  <vs-card type="1" class="text-center">
    <template #title>
      <h3>{{ product.name }}</h3>
    </template>
    <template #img>
      <img :src="images[0]" alt="" />
    </template>

    <template #text>
      <p class="h5-font" v-html="product.description" />
      <div class="row m-0 overflow-auto d-flex flex-nowrap">
        <span
          class="col-3"
          v-for="certificate in product.certificates"
          :key="certificate"
        >
          <img :src="certificate" class="img-fluid" alt="" />
        </span>
      </div>
    </template>
    <template #interactions>
      <vs-button class="btn-chat" shadow>
        {{ product.model }}
      </vs-button>
    </template>
  </vs-card>
</template>

<script>
export default {
  name: 'product',
  props: {
    product: {
      type: Object,
      required: true,
    },
    images: Array,
    productIndex: Number,
    active: Boolean,
    name: String,
  },

  methods: {
    async setActiveProduct(index) {
      this.$ga.event('Productos', 'click', `${this.name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-chat {
  background-color: $navy-color !important;
  color: $alpha !important;
}
h3 {
  color: $navy-color !important;
  font-family: Shaft-h1;
  font-size: 3rem;
}
</style>
