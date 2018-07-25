import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tracks: []
  },
  mutations: {
    removeTrack(state, track) {
      const index = state.tracks.indexOf(track);
      if (index !== -1) state.tracks.splice(index, 1);
    },
    addTrack(state, track) {
      state.tracks.push(track);
    }
  },
  actions: {
    removeTrack: ({ commit }, track) => {
      commit("removeTrack", track);
    },
    addTrack: ({ commit }, track) => {
      commit("addTrack", track);
    }
  }
});
