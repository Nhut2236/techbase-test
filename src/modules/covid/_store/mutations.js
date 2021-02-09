
const SET_DATA = (state, messages) => {
  state.data = messages.Countries
  state.total = messages.Countries.length || 0
}

const SET_COUNTRIES = (state, messages) => {
  state.countries = messages
}

const SET_FILTER = (state, messages) => {
  state.filter = messages
}

export default {
  SET_DATA,
  SET_FILTER,
  SET_COUNTRIES
}
