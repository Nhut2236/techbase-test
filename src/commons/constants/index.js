const columns = [
  {
    title: 'Country',
    dataIndex: 'Country',
    key: 'Country',
    width: '25%',
    scopedSlots: { customRender: 'Country' }
  },
  {
    title: 'New Confirmed',
    dataIndex: 'NewConfirmed',
    key: 'NewConfirmed',
    scopedSlots: { customRender: 'NewConfirmed' }
  },
  {
    title: 'New Deaths',
    dataIndex: 'NewDeaths',
    key: 'NewDeaths',
    scopedSlots: { customRender: 'NewDeaths' }
  },
  {
    title: 'New Recovered',
    dataIndex: 'NewRecovered',
    key: 'NewRecovered',
    scopedSlots: { customRender: 'NewRecovered' }
  },
  {
    title: 'Total Confirmed',
    dataIndex: 'TotalConfirmed',
    key: 'TotalConfirmed',
    scopedSlots: { customRender: 'TotalConfirmed' }
  },
  {
    title: 'Total Deaths',
    dataIndex: 'TotalDeaths',
    key: 'TotalDeaths',
    scopedSlots: { customRender: 'TotalDeaths' }
  },
  {
    title: 'Total Recovered',
    dataIndex: 'TotalRecovered',
    key: 'TotalRecovered',
    scopedSlots: { customRender: 'TotalRecovered' }
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  columns
}
