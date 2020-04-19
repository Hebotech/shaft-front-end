import Vue from 'vue';
import Vuex from 'vuex';
const axios = require('axios');
const urlBase='https://backend-shaft.herokuapp.com'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allCompanies:[],
    activeCompany:{},
    activeProduct:{},
    counter:0,
    products:[
      {
        name:'Border',
        color: '#DC3969',
        description:'Ésta es la súper descripción del producto 1',
        active:true,
        model:'SH-PRO600',
        certificates:[
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/09/9-compressor-300x300.png',
        ],
        images:[
          '../products/SHPRO600/BORDER/1.webp',
          '../products/SHPRO600/BORDER/2.webp',
          '../products/SHPRO600/BORDER/3.webp',
          '../products/SHPRO600/BORDER/4.webp',
          '../products/SHPRO600/BORDER/5.webp',
          '../products/SHPRO600/BORDER/6.webp',
          '../products/SHPRO600/BORDER/7.webp',
        ],
        index:0
      },
      {
        name:'Frontier',
        color: '#1B1B1B',
        description:'Ésta es la súper descripción del producto 2',
        active:false,
        model:'SH-PRO600',
        certificates:[
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/09/9-compressor-300x300.png',
        ],
        images:[
          '../products/SHPRO600/FRONTIER/1.webp',
          '../products/SHPRO600/FRONTIER/2.webp',
        ],
        index:1
      },
      {
        name:'Kapital',
        color: '#DDE949',
        description:'Ésta es la súper descripción del producto 3',
        active:false,
        model:'SH-211',
        certificates:[
          '../certificates/3.png',
          '../certificates/1.png',
          '../certificates/2.png',
        ],
        images:[
          '../products/SH211/KAPITAL/1.webp',
          '../products/SH211/KAPITAL/2.webp',
          '../products/SH211/KAPITAL/3.webp',
          '../products/SH211/KAPITAL/4.webp',
          '../products/SH211/KAPITAL/5.webp',
        ],
        index:2
      },
      {
        name:'Speedy',
        color: '#1548C2',
        description:'Ésta es la súper descripción del producto 4',
        active:false,
        model:'SH-211',
        certificates:[
          '../certificates/3.png',
          '../certificates/1.png',
          '../certificates/2.png',
        ],
        images:[
          '../products/SH211/SPEEDY/1.webp',
          '../products/SH211/SPEEDY/2.webp',
          '../products/SH211/SPEEDY/3.webp',
          '../products/SH211/SPEEDY/4.webp',
          '../products/SH211/SPEEDY/5.webp',
          '../products/SH211/SPEEDY/6.webp',
          '../products/SH211/SPEEDY/7.webp',
        ],
        index:3
      },
      {
        name:'Pika Zombie',
        color: '#E1EA4A',
        description:'Ésta es la súper descripción del 5',
        active:false,
        model:'SH-591',
        certificates:[
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/08/2-5-300x300.png',
        ],
        images:[
          '../products/SH591/PIKA/1.webp',
          '../products/SH591/PIKA/2.webp',
          '../products/SH591/PIKA/3.webp',
          '../products/SH591/PIKA/4.webp',
          '../products/SH591/PIKA/5.webp',
          '../products/SH591/PIKA/6.webp',
        ],
        index:4
      },
      {
        name:'Zeta',
        color: '#4D514E',
        description:'Ésta es la súper descripción del 5',
        active:false,
        model:'SH-591',
        certificates:[
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/08/2-5-300x300.png',
        ],
        images:[
          '../products/SH591/ZETA/1.webp',
          '../products/SH591/ZETA/2.webp',
          '../products/SH591/ZETA/3.webp',
        ],
        index:5
      },
      {
        name:'Demon Z',
        color: '#2B367F',
        description:'Ésta es la súper descripción del 5',
        active:false,
        model:'SH-591',
        certificates:[
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/08/2-5-300x300.png',
        ],
        images:[
          '../products/SH591/DEMON/1.webp',
          '../products/SH591/DEMON/2.webp',
          '../products/SH591/DEMON/3.webp',
          '../products/SH591/DEMON/4.webp',
          '../products/SH591/DEMON/5.webp',
          '../products/SH591/DEMON/6.webp',
          '../products/SH591/DEMON/7.webp',
        ],
        index:6
      },
      {
        name:'SH3690',
        color: '#232222',
        description:'Ésta es la súper descripción del 5',
        active:false,
        model:'SH-3690',
        certificates:[
          'https://shafthelmets.com/wp-content/uploads/2016/09/SAT-compressor.png',
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-1-300x300.png',
          'https://shafthelmets.com/wp-content/uploads/2016/08/3-2-300x300.png',
        ],
        images:[
          '../products/SH3690/1.webp',
          '../products/SH3690/2.webp',
        ],
        index:7
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
    SELECT_ACTIVE_PRODUCT(state ,index) {
      state.products[index].active=true
    },
    ADDING_COUNTER(state) {
      state.counter += 1;
    }, 
    SUBSTRACTING_COUNTER(state){
      state.counter -= 1;
    },
    RESTART_COUNTER(state) {
      state.counter = 0;
    },
    IMAGES_LENGTH(state, length) {
      state.counter = length;
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
    commit('RESTART_COUNTER');
  },
  async lastProduct({commit,state,getters}){
    const indexProduct=getters.activeProduct.index
    await commit('DEACTIVATE_PRODUCTS');
    if (indexProduct-1 >= 0 ) {
      commit('SET_ACTIVE_PRODUCT',indexProduct-1);
    } else {
      commit('SET_ACTIVE_PRODUCT',state.products.length-1);
    };
    commit('RESTART_COUNTER');
  },
  },
});
