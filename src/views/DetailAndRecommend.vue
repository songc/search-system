<template>
  <div>
    <div class="search-bar">
      <Row type="flex" align="middle" justify="end">
        <Col span="3">
          <router-link :to="{name:'home'}"><h2>Service Search</h2></router-link>
        </Col>
        <Col span="7">
          <TheSearch></TheSearch>
        </Col>
        <Col span="3">
          <TheAvatar @on-login="login"></TheAvatar>
        </Col>
      </Row>
    </div>
    <Row
      class="reconmmender"
      type="flex"
      align="top"
      justify="start">
      <Col span="14" offset="2">
        <ServiceDetail :item="targetService"></ServiceDetail>
      </Col>
      <Col span="6">
        <ServiceRecommender :serviceList="recommenderList"></ServiceRecommender>
      </Col>
    </Row>
  </div>
</template>

<script>
import ServiceDetail from '@/components/ServiceDetail'
import TheSearch from '../components/TheSearch'
import TheAvatar from '../components/TheAvatar'
import ServiceRecommender from '../components/ServiceRecommender'
export default {
  name: 'DetailAndRecommend',
  components: {
    ServiceDetail,
    TheSearch,
    TheAvatar,
    ServiceRecommender
  },
  computed: {
    targetService () {
      return this.$store.getters.serviceList.find(x => x.id === this.$route.params.id)
    },
    recommenderList () {
      return this.$store.getters.recommenderList
    }
  },
  methods: {
    login () {
      this.$store.commit('changeLogin', true)
    }
  }
}
</script>

<style scoped>
.search-bar {
  padding-top: 30px;
  min-height: 80px;
  background-color: #f1ecec;
}
.reconmmender {
  margin-top: 30px;
  text-align: start;
}
.search-page {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
