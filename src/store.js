import Vue from 'vue'
import Vuex from 'vuex'
import {
  stat
} from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    role: '',
    accountId: '',
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    getRole(state) {
      return state.role;
    },
    getAccountId(state){
      return state.accountId;
    }
  },
  mutations: {
    changeToken(state, token) {
      state.token = token;
    },
    changeRole(state, role) {
      state.role = role;
    },
    changeAccountId(state, id){
      state.accountId = id;
    },
    logout(state, any) {
      state.token = '';
      state.role = '';
      state.accountId = '';
    }
  },
  actions: {
    changeToken(context, token) {
      context.commit('changeToken', token);
    },
    changeRole(context, role) {
      context.commit('changeRole', role);
    },
    changeAccountId(context, id) {
      context.commit('changeAccountId', id);
    },
    logout(context, any){
      context.commit('logout', any);
    }
  }
})