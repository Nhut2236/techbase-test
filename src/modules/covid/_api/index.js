import Vue from 'vue'

const getAll = async () => {
  return Vue.prototype.$http.get(`https://api.covid19api.com/summary`)
}

const getCountries = async () => {
  return Vue.prototype.$http.get(`https://api.covid19api.com/countries`)
}

export default {
  getAll,
  getCountries
}
