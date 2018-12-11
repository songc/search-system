<template>
  <div class="item">
    <h1> {{ item.title }}</h1>
    <p class="words">Keywprds: {{ item.keywords }}</p>
    <p class="words">Topics: {{ item.topics }}</p>
    <Input
      v-model="item.clean_doc"
      type="textarea"
      :readonly="true"
      :autosize="true"
      class="text"/>
    <p>
      <Button type="text" :to="item.url" target="_blank">
      <Icon type="ios-globe" size="24"/> Raw Page
      </Button>
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

<style scoped>
.item {
  text-align: start
}

.words {
  font-size: 18px;
  margin: 5px;
  padding-left: 20px;
}

.text {
  font-size: 18px;
  /* margin:10px; */
  padding-left: 20px;
  padding-right: 20px;
}

h1 {
  margin: 20px;
}
</style>
