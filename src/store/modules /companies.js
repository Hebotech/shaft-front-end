import axios from '@axios'
const urlBase='https://backend-shaft.herokuapp.com'

const state = {
    allCompanies:[],
}

const getters = {
    favCompanies: state => {
        return state.allCompanies.filter(company =>  company.properties.fav.value===true ? company : console.log(company))
      }
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