import axios from '@axios'
const urlBase='localhost:8080'

const state = {
    allCompanies:[],
}

const getters = {
    
}

const actions = {
    async fetchCompanies({commit,state}){
        const allCompanies = await axios.post(`${urlBase}/companies`)
        commit('SET_ALL_COMPANIES',allCompanies.data.data.companies)
    }
}

const mutations = {
   SET_ALL_COMPANIES(state,allCompanies){
       state.allCompanies=allCompanies
   }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}