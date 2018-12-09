<template>
  <div>
    <h1> {{ item.title }}</h1>
    <p>{{ item.clean_doc }}</p>
    <p>{{ item.keywords }}</p>
    <p>{{ item.topics }}</p>
    <p>
      <a :href="item.url" target="_blank">
      <Icon type="ios-globe" size="24"/>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ServiceDetail',
  props: {
    item: Object
  }
}
</script>
