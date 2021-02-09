<template>
    <div class="container-fluid">
        <div class="mt-4 mb-4">
            <InputSearch :tags="countries" v-model="description" :filter="filter" />
        </div>
        <div class="mt-4">
            <Table :data="list.data" :total="list.total" :columns="constants.columns" />
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import constants from '@/commons/constants'
import Table from '@/components/table'
import InputSearch from '@/components/inputSearch'
export default {
  components: {
    Table,
    InputSearch
  },
  data () {
    return {
      constants,
      description: ''
    }
  },
  computed: {
    ...mapGetters({
      list: '$_covid/getData',
      countries: '$_covid/getCountries'
    })
  },
  async created () {
    let _this = this
    await _this.$store.dispatch('$_covid/getAll')
    await _this.$store.dispatch('$_covid/getCountries')
  },
  methods: {
    async filter (array) {
      let _this = this
      await _this.$store.dispatch('$_covid/setFilter', array)
    }
  }
}
</script>
