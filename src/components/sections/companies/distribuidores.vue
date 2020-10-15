<template>
  <intersect @enter="enter">
    <div class="distribuidores" id="distribuidores">
      <h2 class="text-center">Tiendas Oficiales</h2>
      <div class="row p-lg-5 m-0 justify-content-center">
        <div class="col-12 justify-content-center">
        </div>
        <div
          class="col-md-6 col-sm-6 col-12 m-0 company-for"
          v-for="(favCompany, favCompanyIndex) in favCompanies"
          :key="favCompany.companyId"
        >
          <websites
            :id="`company-website-${favCompanyIndex}`"
            class="main-company"
            :isFav="true"
            :company="favCompany"
          />
        </div>
      </div>
      <div class="row m-0" id="regular-company-row">
        <div
          class="col-md-4 col-sm-5 col-12 text-align-center company-regular"
          v-for="regularCompany in shaftCompanies"
          :key="regularCompany.companyId"
        >
          <websites :company="regularCompany" />
        </div>
      </div>
    </div>
  </intersect>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

import Intersect from 'vue-intersect';
import websites from '@/components/ui/companies/websites.vue';

export default {
  name: 'distribuidoress',

  components: {
    websites,
    Intersect,
  },

  computed: {
    countries() {
      return [...this.shaftCompanies, ...this.favCompanies].map(company => {
        console.log(company.properties);
        if (company.properties.country) {
          return company.properties.country.value;
        } else {
          return company;
        }
      });
    },
  },

  methods: {
    async enter() {
      this.mountComponents();
    },

    async mountComponents() {
      if (!this.entered) {
        await this.$store.dispatch('fetchCompanies');
        this.favCompanies = this.$store.getters.favCompanies;
        this.shaftCompanies = this.$store.getters.shaftCompanies;
        this.scrollAnimation();
        this.entered = true;
      }
    },

    scrollAnimation() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#distribuidores',
          start: '10% bottom',
          end: '9% top',
          scrub: true,
        },
      });

      tl.addLabel('Start').from('#distribuidores .company-for', {
        duration: 3,
        opacity: 0.7,
        transform: 'translateY(3.5em)',
        scale: 0.9,
        filter: 'grayscale(100%)',
        ease: 'power2.in',
        stagger: {
          each: 0.5,
          from: 'top',
        },
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '#regular-company-row',
          start: '5% bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      tl2.addLabel('regular-company').from('#distribuidores .company-regular', {
        duration: 2,
        opacity: 0.7,
        scale: 0.9,
        ease: 'ease-in',
        stagger: {
          each: 1,
          from: 'top',
        },
      });
    },
  },

  data() {
    return {
      favCompanies: [],
      shaftCompanies: [],
      entered: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.distribuidores {
  background-color: $navy-color;
  padding-top: 3em;
  h2 {
    font-family: shaft-h1;
    font-size: 4em;
    color: #e9e2e2;
    @media screen and (min-width: 800px) {
      font-size: 6em;
    }
  }
  img {
    position: relative;
    z-index: 3;
  }
}
</style>
