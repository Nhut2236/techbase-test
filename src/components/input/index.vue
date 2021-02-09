<template>
    <div>
        <a-input-search :value="value" @input="$emit('update', $event.target.value)" placeholder="input search text" enter-button @search="search" />
    </div>
</template>
<script>
export default {
  props: ['value', 'search'],
  model: {
    prop: "value",
    event: "update"
  }
}
</script>
