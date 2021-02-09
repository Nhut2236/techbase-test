const getData = (state) => {
  let data = {}
  if (state.data) {
    if (state.filter && state.filter.length) {
      data = state.data.filter((v) => {
        return state.filter.indexOf(v.Country) > -1
      })
    }
    else {
      data = state.data
    }
    data.total = state.total
    data.data = data
  }
  return data
}

const getCountries = (state) => {
  let data = []
  if (state.countries) {
    data = state.countries.map((v) => {
      v.value = v.Country
      v.text = v.Country
      return v
    })
  }
  return data
}

export default {
  getData,
  getCountries
}
