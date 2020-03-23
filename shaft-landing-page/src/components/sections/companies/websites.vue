<template>
  <div class='company'>
    <div class="card mb-3 border-0">
      <div class="card-body">
        <h5 class="card-title">{{company.properties.name.value}}</h5>
        <p class="card-text">{{company.properties.website.value}}</p>
        <a
          :href="`http://${company.properties.website.value}`"
          class="btn btn-primary"
        >
          Ver sitio web
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'websites',
  components: {
  },
  props: {
    company: Object,
  },
};
</script>

<style lang='scss' scoped>
.card{
    border-radius: 12px;
    box-shadow: 5px 5px 10px #00000038;
    border:0px;
    margin-bottom:3em;
}
</style>
