<template>
  <div>
    <h1>Similary Services:</h1>
    <Collapse>
      <Panel v-for="item in serviceList" :key="item.id" :name="item.id">
        {{item.title | substr }}
        <div slot="content">
          <p class="item info">
            <Icon type="ios-pricetags" />
            {{ item.keywords }}
          </p>
          <p class="item info">
            <Icon type="ios-text"/>
            {{ item.topics }}
          </p>
          <p class="item url" @click="goDetail(item.id)">
            <Icon type="ios-globe" size="24"/>
          </p>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
export default {
  name: 'ServiceRecommender',
  props: {
    serviceList: Array
  },
  filters: {
    substr: function (str) {
      if (str.length < 45) {
        return str
      } else {
        return str.substring(0, 45) + '...'
      }
    }
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
