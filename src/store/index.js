import { createStore } from "vuex";

export default createStore({
	state: {
		user: JSON.parse(localStorage.getItem("user")) || null,
	},
	mutations: {
		SET_USER(state, user) {
			state.user = user;
			localStorage.setItem("user", JSON.stringify(user));
		},
		LOGOUT(state) {
			state.user = null;
			localStorage.removeItem("user");
		},
	},
	actions: {
		setUser({ commit }, user) {
			commit("SET_USER", user);
		},
		logout({ commit }) {
			commit("LOGOUT");
		},
	},
	getters: {
		user: (state) => state.user,
	},
});
