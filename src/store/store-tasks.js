import Vue from 'vue';
import { uid } from 'quasar';

const state = {
  tasks: {},
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id);
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task);
  },
};

const actions = {
  updateTask({ commit }, payload) {
    commit('updateTask', payload);
  },
  deleteTask({ commit }, id) {
    commit('deleteTask', id);
  },
  addTask({ commit }, task) {
    const taskId = uid();
    const payload = {
      id: taskId,
      task,
    };
    commit('addTask', payload);
  }
};

const getters = {
  tasks (state) {
    return state.tasks;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};