<template>
  <div>
    <Divider />
    <Button class="title" type="text" @click="goDetail(item.id)">
      <Icon type="ios-list-box" />
      {{ item.title }}
    </Button>
    <p class="item score">
      <Icon type="md-podium" /> {{ item.score }}
    </p>
    <p class="item info">
      <Icon type="ios-pricetags" />
      {{ item.keywords }}
    </p>
    <p class="item info">
      <Icon type="ios-text"/>
      {{ item.topics }}
    </p>
    <p class="item url">
      <a :href="item.url" target="_blank">
      <Icon type="ios-globe" size="24"/>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ServiceItem',
  props: {
    item: Object
  },
  methods: {
    goDetail (id) {
      this.$store.dispatch('getRecommenderRes', id)
        .then(res => {
          this.$router.push({
            name: 'service',
            params: {
              id: id
            }
          })
        })
    }
  }
}
</script>

<style scoped>
.serviceItem{
  text-align: start;
  margin-bottom: 3px
}

.item {
  margin: 20px;
}

.title {
  font-size: 20px;
}
</style>
