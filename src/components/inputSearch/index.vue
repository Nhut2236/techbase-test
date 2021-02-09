<template>
  <a-form-item label='Quốc gia' v-bind="value">
    <a-select
      @change="select"
      mode='tags'
      :allowClear="true"
      style='width: 100%'
      v-decorator="['tag',{rules: [{ required: true, message: 'Please select a label' }]}]">
      <a-select-option v-for="t in tags" :key="t.value">{{t.value}}</a-select-option>
    </a-select>
  </a-form-item>
</template>
<script>
export default {
  methods: {
    select (value) {
      let _this = this
      _this.filter(value)
    }
  },
  props: ['tags', 'value', 'filter'],
  model: {
    prop: 'value',
    event: 'update'
  }
}
</script>
