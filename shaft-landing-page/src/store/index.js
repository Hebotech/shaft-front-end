import Vue from 'vue';
import Vuex from 'vuex';
const axios = require('axios');
const urlBase='http://localhost:8080'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allCompanies:[],
  },
  mutations: {
    SET_ALL_COMPANIES(state,allCompanies){
      state.allCompanies=allCompanies
  }
  },
  actions: {
    async fetchCompanies({commit,state}){
      console.log(axios)
      const allCompanies = await axios.get(`${urlBase}/companies`)
      console.log(allCompanies)
      commit('SET_ALL_COMPANIES',allCompanies.data.data.companies)
  }
  },
  modules: {
  },
});
