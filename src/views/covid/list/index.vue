<template>
    <div>
        <CovidList />
    </div>
</template>

<script>
import CovidList from '@/modules/covid/_pages/list'
export default {
  name: 'List',
  components: {
    CovidList
  }
}
</script>
