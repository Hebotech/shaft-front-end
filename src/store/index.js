import Vue from 'vue';
import Vuex from 'vuex';
const axios = require('axios');
const urlBase = 'https://backend-shaft.herokuapp.com';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allCompanies: [],
    activeCompany: {},
    activeProduct: {},
    counter: 0,
    products: [
      {
        name: 'Billy',
        color: '../bgs/4.png',
        description: 'Ésta es la súper descripción del producto 1',
        active: true,
        model: 'SH-581',
        certificates: [
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/09/9-compressor-300x300.png',
        ],
        images: [
          '../products/SH-581/billy/1.png',
          '../products/SH-581/billy/2.png',
          '../products/SH-581/billy/3.png',
          '../products/SH-581/billy/4.png',
        ],
        index: 0,
      },
      {
        name: 'Coxmos',
        color: '../bgs/8.png',
        description: 'Ésta es la súper descripción del producto 2',
        active: false,
        model: 'SH-581',
        certificates: [
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/09/9-compressor-300x300.png',
        ],
        images: [
          '../products/SH-581/coxmos/1.png',
          '../products/SH-581/coxmos/2.png',
          '../products/SH-581/coxmos/3.png',
          '../products/SH-581/coxmos/5.png',
          '../products/SH-581/coxmos/6.png',
          '../products/SH-581/coxmos/7.png',
          '../products/SH-581/coxmos/8.png',
        ],
        index: 1,
      },
      {
        name: 'Devide',
        color: '../bgs/9.png',
        description: 'Ésta es la súper descripción del producto 3',
        active: false,
        model: 'SH-581',
        certificates: ['../certificates/3.png', '../certificates/1.png', '../certificates/2.png'],
        images: [
          '../products/SH-581/devide/1.png',
          '../products/SH-581/devide/2.png',
          '../products/SH-581/devide/3.png',
        ],
        index: 2,
      },
      {
        name: 'Rebel',
        color: '../bgs/10.png',
        description: 'Ésta es la súper descripción del producto 4',
        active: false,
        model: 'SH-581',
        certificates: ['../certificates/3.png', '../certificates/1.png', '../certificates/2.png'],
        images: [
          '../products/SH-581/rebel/1.png',
          '../products/SH-581/rebel/2.png',
          '../products/SH-581/rebel/3.png',
          '../products/SH-581/rebel/4.png',
          '../products/SH-581/rebel/5.png',
        ],
        index: 3,
      },
      {
        name: 'Revenger',
        color: '../bgs/11.png',
        description: 'Ésta es la súper descripción del 5',
        active: false,
        model: 'SH-3700',
        certificates: [
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/08/2-5-300x300.png',
        ],
        images: [
          '../products/SH-3700/revenger/1.png',
          '../products/SH-3700/revenger/2.png',
          '../products/SH-3700/revenger/3.png',
          '../products/SH-3700/revenger/4.png',
          '../products/SH-3700/revenger/5.png',
          '../products/SH-3700/revenger/6.png',
        ],
        index: 4,
      },
      {
        name: 'Tempo',
        color: '../bgs/12.png',
        description: 'Ésta es la súper descripción del 5',
        active: false,
        model: 'SH-589',
        certificates: [
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/08/2-5-300x300.png',
        ],
        images: ['../products/SH-3700/tempo/1.png', '../products/SH-3700/tempo/2.png'],
        index: 5,
      },
      // {
      //   name: 'Nepto',
      //   color: '../bgs/8.png',
      //   description: 'Ésta es la súper descripción del 5',
      //   active: false,
      //   model: 'SH-589',
      //   certificates: [
      //     'https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png',
      //     'https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png',
      //     'https://shafthelmets.com/wp-content/uploads/2016/08/2-5-300x300.png',
      //   ],
      //   images: ['../products/SH-589/nepto/1.png'],
      //   index: 6,
      // },
      // {
      //   name: 'PILOT',
      //   color: '../bgs/7.png',
      //   description: 'Ésta es la súper descripción del 5',
      //   active: false,
      //   model: 'SH-225',
      //   certificates: [
      //     'https://shafthelmets.com/wp-content/uploads/2016/09/SAT-compressor.png',
      //     'https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png',
      //     'https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png',
      //   ],
      //   images: [
      //     '../products/SH-225/1.png',
      //     '../products/SH-225/2.png',
      //     '../products/SH-225/3.png',
      //   ],
      //   index: 7,
      // },
    ],
  },
  getters: {
    nonActiveProducts: state => {
      return state.products.filter(product => product.active === false);
    },
    activeProduct: state => {
      return state.products.find(product => product.active === true);
    },
    favPropertyCompanies: state => {
      return state.allCompanies.filter(
        company => company.properties.fav !== undefined && company.properties.name !== undefined,
      );
    },
    favCompanies: (state, getters) => {
      return getters.favPropertyCompanies.filter(
        company => company.properties.fav.value === 'true',
      );
    },
    shaftPropertyCompanies: state => {
      return state.allCompanies.filter(
        company => company.properties.shaft !== undefined && company.properties.name !== undefined,
      );
    },
    shaftCompanies: (state, getters) => {
      return getters.shaftPropertyCompanies.filter(
        company => company.properties.shaft.value === 'true',
      );
    },
  },
  mutations: {
    SET_ALL_COMPANIES(state, allCompanies) {
      state.allCompanies = allCompanies;
    },
    SET_ACTIVE_COMPANY(state, company) {
      state.activeCompany = company;
    },
    SET_ACTIVE_PRODUCT(state, indexProduct) {
      state.products[indexProduct].active = true;
    },
    DEACTIVATE_PRODUCTS(state) {
      state.products.forEach(product => {
        product.active = false;
      });
    },
    SELECT_ACTIVE_PRODUCT(state, index) {
      state.products[index].active = true;
    },
    ADDING_COUNTER(state) {
      state.counter += 1;
    },
    SUBSTRACTING_COUNTER(state) {
      state.counter -= 1;
    },
    RESTART_COUNTER(state) {
      state.counter = 0;
    },
    IMAGES_LENGTH(state, length) {
      state.counter = length;
    },
  },
  actions: {
    async fetchCompanies({ commit, state }) {
      console.log(axios);
      const allCompanies = await axios.get(`${urlBase}/companies`);
      console.log(allCompanies);
      commit('SET_ALL_COMPANIES', allCompanies.data.data.companies);
    },
    async clickCounter(context, toUpdate, clicks) {
      console.log(toUpdate);
      if (clicks) {
        const updateCompany = await axios.put(`${urlBase}/companies/${toUpdate}`, {
          properties: [
            {
              name: 'clics_de_hebotech',
              value: clicks++,
            },
          ],
        });
        console.log(updateCompany);
      } else {
        const firstClickUpdate = await axios.put(`${urlBase}/companies/${toUpdate}`, {
          properties: [
            {
              name: 'clics_de_hebotech',
              value: 1,
            },
          ],
        });
        console.log(firstClickUpdate);
      }
    },
    async nextProduct({ commit, state, getters }) {
      const indexProduct = getters.activeProduct.index;
      await commit('DEACTIVATE_PRODUCTS');
      //  await state.products.forEach(product=>{
      //       console.log(product)
      //       product.active=false;
      //   });
      if (indexProduct + 1 <= state.products.length - 1) {
        commit('SET_ACTIVE_PRODUCT', indexProduct + 1);
      } else {
        commit('SET_ACTIVE_PRODUCT', 0);
      }
      commit('RESTART_COUNTER');
    },
    async lastProduct({ commit, state, getters }) {
      const indexProduct = getters.activeProduct.index;
      await commit('DEACTIVATE_PRODUCTS');
      if (indexProduct - 1 >= 0) {
        commit('SET_ACTIVE_PRODUCT', indexProduct - 1);
      } else {
        commit('SET_ACTIVE_PRODUCT', state.products.length - 1);
      }
      commit('RESTART_COUNTER');
    },
  },
});
