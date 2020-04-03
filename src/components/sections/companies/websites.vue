<template>
 <div
      class="col-md-4 col-sm-6"
     >
  <div class='company'>
    <div class="card mb-3 border-0 animated zoomIn faster">
      <div class="card-body">
        <h5
          class="card-title animated fadeInUp slower"
        >
          {{company.properties.name.value}}
        </h5>
        <p class="card-text animated fadeIn faster delay-1s">
          {{company.properties.website.value}}
        </p>
        <a
          :href="`http://${company.properties.website.value}`"
          class="btn border-0 animated fadeInDown slower "
          target="_blank"
          @click='addNewClick(company.companyId)'
        >
          Ver sitio web
        </a>
      </div>
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
  methods: {
    addNewClick(id) {
      if (this.company.properties.clics_de_hebotech.value === undefined) {
        this.$store.dispatch('clickCounter', id, this.company.properties.clics_de_hebotech.value);
      } else {
        this.$store.dispatch('clickCounter', id);
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.company{
  position:relative;
  z-index: 2;
}
.btn{
  background-color:$alpha;
  color:$title-dark;
  font-size: .95em;
  transition:ease-in .2s;
  box-shadow: 5px 5px 10px #00000038;
}
.btn:hover{
  font-size: .9em;
  box-shadow: 5px 5px 7px #0000007b;
  transition:ease-in-out .4s;
}
.card{
    border-radius: 12px;
    box-shadow: 5px 5px 10px #00000038;
    border:0px;
    margin-bottom:3em;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1.2s;
  h5{
      border-radius:0px;
      transition:cubic-bezier(0.175, 0.885, 0.32, 1.275) .9s;
    }
}
.card:hover{
    box-shadow: 5px 5px 15px $alpha;
    border:0px;
    margin-bottom:3em;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) .5s;
    h5{
      background-color:$alpha;
      padding: 2%;
      border-radius:8px;
      transition:cubic-bezier(0,.92,.78,.63) .4s;
      @extend .animated !optional;
      @extend .rubberBand !optional;
    }
}
</style>
