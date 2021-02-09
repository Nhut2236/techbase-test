import CovidDetails from '@/views/covid/details'
import CovidList from '@/views/covid/list'

export const routes = [
  { name: 'CovidList', path: '/', component: CovidList },
  { name: 'CovidDetails', path: '/:id', component: CovidDetails }
]
