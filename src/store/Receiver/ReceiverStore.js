import axios from 'axios'
import config from "@/config.js";
const state = {
  ReceiverData: [],
};

const getters = {
  getReceiverData: (state) => state.ReceiverData,
};

const actions = {
  getReceiverData({ commit }) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("token");
      // Do something here... lets say, a http call using vue-resource
      axios
        .get(config.API_ROOT_URL + "customer", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(
          (response) => {
            console.log("customer response", response);
            commit("ReceiverData", response.data.data);
            // http success, call the mutator and change something in state
            resolve(response); // Let the calling function know that http is done. You may send some data back
          },
          (error) => {
            // http failed, let the calling function know that action did not work out
            reject(error);
          }
        );
    });
  },
  addUser({ commit }, userData) {
    let token = localStorage.getItem("token");
    commit("addNewUser", userData);
    //console.log("new userData::", userData);
    axios
      .post(config.API_ROOT_URL + "customer", userData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        alert(error);
      });
  },
};
const mutations = {
  addNewUser(state, payload) {
    state.ReceiverData.push(payload);
  },
  getReceiverData(state, payload) {
    state.ReceiverData = payload;
  },
};

export default { state, getters, mutations, actions };
