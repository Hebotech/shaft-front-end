import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
const urlBase = 'https://www.api.shaft.mx';

export const state = () => ({
  allCompanies: [],

  activeCompany: {},

  activeProduct: {},

  counter: 0,

  products: null,
});

export const getters = {
  firstProduct: (state) =>
    state.products ? state.products[2].images[0] : '/products/SH211/3.png',

  nonActiveProducts: (state) => {
    return state.products.filter((product) => product.active === false);
  },

  activeProduct: (state) => {
    return state.products
      ? state.products.find((product) => product.active === true)
      : null;
  },

  favPropertyCompanies: (state) => {
    return state.allCompanies.filter(
      (company) =>
        company.properties.fav !== undefined &&
        company.properties.name !== undefined
    );
  },

  favCompanies: (state, getters) => {
    return getters.favPropertyCompanies.filter(
      (company) => company.properties.fav.value === 'true'
    );
  },

  shaftPropertyCompanies: (state) => {
    return state.allCompanies.filter(
      (company) =>
        company.properties.shaft !== undefined &&
        company.properties.name !== undefined
    );
  },

  shaftCompanies: (state, getters) => {
    return getters.shaftPropertyCompanies.filter(
      (company) =>
        company.properties.shaft.value === 'true' &&
        company.properties.fav &&
        company.properties.fav.value !== 'true'
    );
  },
};

export const mutations = {
  SET_ALL_COMPANIES(state, allCompanies) {
    state.allCompanies = allCompanies;
  },

  SET_ACTIVE_COMPANY(state, company) {
    state.activeCompany = company;
  },

  SET_FETCHED_PRODUCTS(state, allProducts) {
    state.products = allProducts;
  },

  SET_ACTIVE_PRODUCT(state, indexProduct) {
    state.products[indexProduct].active = true;
  },

  DEACTIVATE_PRODUCTS(state) {
    state.products.forEach((product) => {
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
};
export const actions = {
  async fetchProducts({ commit, state }, helmet) {
    let {
      data: { data: allProducts },
    } = await axios.get(`${urlBase}/`);
    console.log(allProducts);

    let products = allProducts.map(
      ({ images: imagesArray, meta_data }, index) => {
        let images = imagesArray.map((image) => image.src);

        let certificates = meta_data
          .find((d) => d.key === 'certificados_shaft')
          .value.split('|');

        let model = meta_data.find((d) => d.key === 'modelo_shaft').value;

        let name = meta_data.find((d) => d.key === 'grafico_shaft').value;

        let isActive = () => {
          if (Object.keys(helmet).length !== 0) {
            console.log(helmet);
            return name === helmet.graphic && model === helmet.model;
          } else {
            console.log(index, helmet);
            return index === 0;
          }
        };

        return {
          name,
          active: isActive(),
          index,
          images,
          certificates,
          model,
        };
      }
    );

    console.log('{All products}', products);

    commit('SET_FETCHED_PRODUCTS', products);
  },

  async fetchCompanies({ commit, state }) {
    const allCompanies = await axios.get(`${urlBase}/companies`);
    commit('SET_ALL_COMPANIES', allCompanies.data.data.companies);
  },

  async findAndActivateProduct(
    { state, commit, dispatch },
    { model, graphic: name }
  ) {
    let routerProduct = state.products
      .filter((product) => product.model === model)
      .find((product) => product.name === name);

    if (routerProduct) {
      commit('DEACTIVATE_PRODUCTS');
      commit('SET_ACTIVE_PRODUCT', routerProduct.index);
    }
  },

  async clickCounter(context, toUpdate, clicks) {
    if (clicks) {
      const updateCompany = await axios.put(
        `${urlBase}/companies/${toUpdate}`,
        {
          properties: [
            {
              name: 'clics_de_hebotech',
              value: clicks++,
            },
          ],
        }
      );
    } else {
      const firstClickUpdate = await axios.put(
        `${urlBase}/companies/${toUpdate}`,
        {
          properties: [
            {
              name: 'clics_de_hebotech',
              value: 1,
            },
          ],
        }
      );
    }
  },

  nextProduct({ commit, state, getters }) {
    commit('RESTART_COUNTER');
    const indexProduct = getters.activeProduct.index;
    commit('DEACTIVATE_PRODUCTS');

    if (indexProduct + 1 <= state.products.length - 1) {
      commit('SET_ACTIVE_PRODUCT', indexProduct + 1);
    } else {
      commit('SET_ACTIVE_PRODUCT', 0);
    }
  },

  lastProduct({ commit, state, getters }) {
    commit('RESTART_COUNTER');
    const indexProduct = getters.activeProduct.index;

    commit('DEACTIVATE_PRODUCTS');

    if (indexProduct - 1 >= 0) {
      commit('SET_ACTIVE_PRODUCT', indexProduct - 1);
    } else {
      commit('SET_ACTIVE_PRODUCT', state.products.length - 1);
    }
  },
};
