import Vue from 'vue'
import Vuex from 'vuex'
import signInStore from '../store/SignIn/signInStore.js'
import Register from '../store/SignUp/Register.js'
import UserStore from '../store/User/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ListingData: [],
    totalCount: 0,

  },
  getters: {
    getListingData: (state) => state.ListingData,
    getCount: (state) => state.totalCount,

  },
  mutations: {
    setListingData(state, payload) {
      state.ListingData = payload;
    },
    setTotalCount(state, payload) {
      state.totalCount = payload;
    },
  },
  actions: {
    fetchListingData(
      { commit }, data
    ) {
      return new Promise((resolve, reject) => {
        axios
          .get('http://localhost:3000/students')
          .then(
            (response) => {
              commit("setListingData", response.data.students);
              commit("setTotalCount", parseInt(response.headers['x-total-count']));
              resolve(response);
            },
            (error) => {
              console.log(error);
              reject(error);
            }
          );
      });
    },

  },
  modules: {
    signInStore,
    Register,
    UserStore,
  }
})
