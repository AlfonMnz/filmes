import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//TODO Examinar módulos para separar el estado en distintos namespaces https://vuex.vuejs.org/guide/modules.html#module-local-state
export default new Vuex.Store({
	state: {
		userData: {}
	},
	mutations: {
		setUserData: (state, payload) => {
			state.userData = payload
		}
	},
	actions: {},
	modules: {}
})
