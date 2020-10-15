<template>
  <div class="svg-bgg container p-0">
    <keep-alive>
      <component
        ref="currentBackground"
        :is="activeProduct"
      />
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'Svg-bg',

    components:{
		SH211: () =>
			import(
				/* webpackChunkName: "SH-211" */ '@/components/SVG/SH-211.vue'
      ),
      
		SH227FLOW: () =>
			import(
				/* webpackChunkName: "SH227FLOW" */ '@/components/SVG/SH-227-FLOW.vue'
      ),
      
		SH502CAMO: () =>
			import(
				/* webpackChunkName: "SH502CAMO" */ '@/components/SVG/SH-502-CAMO.vue'
      ),
      
		SH502RUBBER: () =>
			import(
				/* webpackChunkName: "SH502RUBBER" */ '@/components/SVG/SH-502-RUBBER.vue'
      ),
      
		SH581PREDATOR: () =>
			import(
				/* webpackChunkName: "SH581PREDATOR" */ '@/components/SVG/SH-581-PREDATOR.vue'
      ),
      
		SH581LIBERTY: () =>
			import(
				/* webpackChunkName: "SH581LIBERTY" */ '@/components/SVG/SH-3690-LIBERTY.vue'
      ),
      
		SH581PATRIOT: () =>
			import(
				/* webpackChunkName: "SH581PATRIOT" */ '@/components/SVG/SH-3690-PATRIOT.vue'
			),
      
		SH581SHINNER: () =>
			import(
				/* webpackChunkName: "SH581SHINNER" */ '@/components/SVG/SH-3690-SHINNER.vue'
			),
      
		SHPRO610ASTUTE: () =>
			import(
				/* webpackChunkName: "SHPRO610ASTUTE" */ '@/components/SVG/SH-PRO-610-ASTUTE.vue'
			),
      
		SHPRO610NEOTRADE: () =>
			import(
				/* webpackChunkName: "SHPRO610NEOTRADE" */ '@/components/SVG/SH-PRO-610-NEOTRADE.vue'
			),
      
		SHPRO610SOLID: () =>
			import(
				/* webpackChunkName: "SHPRO610SOLID" */ '@/components/SVG/SH-PRO-610-SOLID.vue'
			),
    }
  }
</script>

<style lang="scss" scoped>
.svg-bgg{
  z-index: 1;
  background-color:red;
  position: absolute;
  left:0;
  min-height: 100%;
  min-width:100%;
}
</style>