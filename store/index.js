import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
const urlBase = 'http://localhost:9000/shaft';

export const state = () => ({
  allCompanies: [],

  activeCompany: {},

  activeProduct: {},

  counter: 0,

  mapMarkers: [],

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

  SET_MAP_MARKERS(state, markersArray, index) {
    state.mapMarkers.push(markersArray);
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

  async fetchCompanies({ commit, state, dispatch }) {
    const allCompanies = await axios.get(`${urlBase}/companies`);
    commit('SET_ALL_COMPANIES', allCompanies.data.data.companies);
    dispatch('setMapMarkets');
  },

  async setMapMarkets({ commit, state }) {
    const coordinates = await state.allCompanies
      .filter((c) => c.properties.address && c.properties.address.value !== '')
      .flatMap(async ({ properties: company }, index) => {
        let coordinatesArray = await company.address.value
          .split(',')
          .map(async (address) => {
            const params = {
              access_key: 'b071e0c0614ca392cde10f38e3bf51f2',
              query: address,
              country: 'mx',
              limit: 1,
              fields: ['results.longitude', 'results.latitude'],
            };
            let {
              data: { data: response },
            } = await axios.get('http://api.positionstack.com/v1/forward', {
              params,
            });

            let coordinates = response[0]
              ? [response[0].longitude, response[0].latitude]
              : null;

            let finalObject = {
              name: company.name.value,
              website: company.website ? company.website.value : null,
              description: company.description
                ? company.description.value
                : null,
              fav: company.fav ? company.fav.value : false,
              coordinates,
            };

            if (coordinates && coordinates[0])
              commit('SET_MAP_MARKERS', finalObject);

            return finalObject;
          });
        return coordinatesArray;
      });
    return coordinates;
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
