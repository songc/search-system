<template>
  <Card dis-hover class="serviceItem">
    <p slot="title">
      <Icon type="ios-film-outline"></Icon>
      {{ item.title }}
    </p>
    <a :href="item.url" slot="extra" target="_blank">
      <Icon></Icon>Source
    </a>
    <p>{{ item.label }}</p>
  </Card>
</template>

<script>
export default {
  name: 'ServiceItem',
  props: {
    item: Object
  }
}
</script>

<style scoped>
.serviceItem{
  text-align: start;
  margin-bottom: 3px
}
</style>
