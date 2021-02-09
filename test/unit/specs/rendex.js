// tests/render.js
export function render (ui) {
    const store = getDefaultStore()
  
    // reset/override default store here
    store.modules.covid.state.data = []
  
    return r(ui, { store })
}