<template>
  <div>
    <Collapse>
      <Panel v-for="item in serviceList" :key="item.id" :name="item.id">
        {{item.title}}
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
