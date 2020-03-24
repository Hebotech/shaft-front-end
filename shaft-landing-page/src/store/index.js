import Vue from 'vue';
import Vuex from 'vuex';
const axios = require('axios');
const urlBase='http://localhost:8080'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allCompanies:[],
    activeCompany:{}
  },
  mutations: {
    SET_ALL_COMPANIES(state,allCompanies){
      state.allCompanies=allCompanies
  },
  SET_ACTIVE_COMPANY(state, company){
    state.activeCompany=company
  }

  },
  actions: {
    async fetchCompanies({commit,state}){
      console.log(axios)
      const allCompanies = await axios.get(`${urlBase}/companies`)
      console.log(allCompanies)
      commit('SET_ALL_COMPANIES',allCompanies.data.data.companies)
    },
    async clickCounter(context,toUpdate,clicks){
      console.log(toUpdate)
      if(clicks){
        const updateCompany= await axios.put(`${urlBase}/companies/${toUpdate}`,{
          "properties": [
            {
              "name": "clics_de_hebotech",
              "value": clicks++
            }
          ]
        })
        console.log(updateCompany)
      }
      else {
        const firstClickUpdate= await axios.put(`${urlBase}/companies/${toUpdate}`,{
          "properties": [
            {
              "name": "clics_de_hebotech",
              "value": 1
            }
          ]
        })
        console.log(firstClickUpdate)
      }
      
    }
  },
  modules: {

  },
});
