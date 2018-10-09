<template>
  <div>
    <ServiceItem v-for="item in itemList" :key="item.id" :item="item"></ServiceItem>
  </div>
</template>

<script>
import ServiceItem from './ServiceItem'
export default {
  name: 'ServiceList',
  props: {
    itemList: Array
  },
  components: {
    ServiceItem
  }
}
</script>
