import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  data: null,
  total: 0,
  countries: null,
  filter: []
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
