<template>
  <Card dis-hover class="serviceItem">
    <p slot="title">
      <Icon type="ios-list-box" />
      {{ item.title }}
    </p>
    <p slot="extra" target="_blank">
      <Icon type="md-podium" /> {{ item.score }}
    </p>
    <p class="item-keyword">
      <Icon type="ios-pricetags" />
      {{ item.keywords }}
    </p>
    <p>
      <a :href="item.url" target="_blank">
      <Icon type="ios-globe" size="24"/>
    </a>
    </p>
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

.item-keyword {
  margin: 20px;
}
</style>
