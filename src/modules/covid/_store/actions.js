import api from '../_api'

const getAll = async (context) => {
  let res = await api.getAll()
  context.commit('SET_DATA', res.data)
}

const getCountries = async (context) => {
  let res = await api.getCountries()
  context.commit('SET_COUNTRIES', res.data)
}

const setFilter = (context, req) => {
  context.commit('SET_FILTER', req)
}

export default {
  getAll,
  setFilter,
  getCountries
}
