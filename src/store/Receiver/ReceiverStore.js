import axios from 'axios'
//import config from "@/config.js";
const state = {
    ReceiversData: [],
};

const getters = {
    getReceiversData: (state) => state.ReceiversData,
};

const actions = {
    getReceiver({
        commit
    }) {
        return new Promise((resolve, reject) => {
            // Do something here... lets say, a http call using vue-resource
            axios
                .get("http://localhost:1333/listreceivers", )
                .then(
                    (response) => {
                        console.log("Receiver response", response);
                        commit("getReceiver", response.data);
                        // http success, call the mutator and change something in state
                        resolve(response); // Let the calling function know that http is done. You may send some data back
                    },
                    (error) => {
                        // http failed, let the calling function know that action did not work out
                        console.log(error);
                        reject(error);
                    }
                );
        });
    },
    addReceiver({
        commit
    }, userData) {
        //let token = localStorage.getItem("token");
        commit("addNewReceiver", userData);
        console.log("new userData::", userData);
        axios
            .post("http://localhost:1333/listreceivers", userData, {
                //headers: { Authorization: `Bearer ${token}` },
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
        state.ReceiversData.push(payload);
    },
    getReceiver(state, payload) {
        state.ReceiversData = payload;
    },
};

export default {
    state,
    getters,
    mutations,
    actions
};