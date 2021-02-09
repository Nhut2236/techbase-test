<template>
  <a-table :columns="columns" :data-source="data" rowKey='ID'>
    <a slot="action" :slot-scope="slotScope"><a-icon type='eye' /></a>
  </a-table>
</template>

<script>
export default {
  data () {
    return {
      slotScope: 'text'
    }
  },
  methods: {
  },
  props: ['data', 'total', 'columns']
}
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
