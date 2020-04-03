import Vue from 'vue';
import Vuex from 'vuex';
const axios = require('axios');
const urlBase='http://localhost:8080'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allCompanies:[],
    activeCompany:{},
    activeProduct:{},
    products:[
      {
        name:'Producto 1',
        description:'Ésta es la súper descripción del producto 1',
        active:true,
        model:'SH-520',
        certificates:[
          '../certificates/1.png',
          '../certificates/2.png',
          '../certificates/3.png',
        ],
        images:[
          '../products/1/1.png',
          '../products/1/2.png'
        ],
        index:0
      },
      {
        name:'Producto 2',
        description:'Ésta es la súper descripción del producto 2',
        active:false,
        model:'SH-520',
        certificates:[],
        images:[
          '../products/2/1.png',
          '../products/2/2.png',
        ],
        index:1
      },
      {
        name:'Producto 3',
        description:'Ésta es la súper descripción del producto 3',
        active:false,
        model:'SH-520',
        certificates:[],
        images:[
          '../products/3/1.png',
          '../products/3/2.png',
        ],
        index:2
      },
      {
        name:'Producto 4',
        description:'Ésta es la súper descripción del producto 4',
        active:false,
        model:'SH-520',
        certificates:[],
        images:[
          '../products/4/1.png',
          '../products/4/2.png',
        ],
        index:3
      },
      {
        name:'5',
        description:'Ésta es la súper descripción del 5',
        active:false,
        model:'SH-520',
        certificates:[],
        images:[
          '../products/5/1.png',
          '../products/5/2.png',
        ],
        index:4
      },
    ], 
  },
  getters:{
    nonActiveProducts: state  => {
      return state.products.filter(product => product.active===false)
    },
    activeProduct: state  => {
      return state.products.find(product => product.active===true)
    },
  },
  mutations: {
    SET_ALL_COMPANIES(state,allCompanies){
      state.allCompanies=allCompanies
    },
    SET_ACTIVE_COMPANY(state, company){
      state.activeCompany=company
    },
    SET_ACTIVE_PRODUCT(state, indexProduct) {
      state.products[indexProduct].active=true
    },
    DEACTIVATE_PRODUCTS(state){
      state.products.forEach(product=>{
          product.active=false;
      })
   },
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
    },
  async nextProduct({commit,state,getters}){
  const indexProduct=getters.activeProduct.index
  await commit('DEACTIVATE_PRODUCTS');
  //  await state.products.forEach(product=>{
  //       console.log(product)
  //       product.active=false;
  //   });
    if (indexProduct+1 <= state.products.length-1 ) {
      commit('SET_ACTIVE_PRODUCT',indexProduct+1);
    } else {
      commit('SET_ACTIVE_PRODUCT',0);
    };
  },
  async lastProduct({commit,state,getters}){
    const indexProduct=getters.activeProduct.index
    await commit('DEACTIVATE_PRODUCTS');
    if (indexProduct-1 >= 0 ) {
      commit('SET_ACTIVE_PRODUCT',indexProduct-1);
    } else {
      commit('SET_ACTIVE_PRODUCT',state.products.length-1);
    };
  },
  },
});
