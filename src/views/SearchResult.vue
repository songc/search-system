<template>
  <div class="search">
    <div class="search-bar">
      <Row type="flex" align="middle">
        <Col span="3">
          <router-link :to="{name:'home'}"><h2>Service Search</h2></router-link>
        </Col>
        <Col span="7">
          <TheSearch></TheSearch>
        </Col>
        <Col span="3" offset="11">
          <TheAvatar @on-login="login"></TheAvatar>
        </Col>
      </Row>
    </div>
    <Row>
      <Col span="12" offset="3">
        <div class="search-result">
          <ServiceList :itemList="serviceList"></ServiceList>
        </div>
      </Col>
    </Row>
    <Row>
      <Col class="search-page" span="12" offset="3">
        <Page
          show-total
          :current="number"
          :total="total"
          :page-size="size"
        ></Page>
      </Col>
    </Row>
  </div>
</template>

<script>
import TheSearch from '@/components/TheSearch.vue'
import TheAvatar from '@/components/TheAvatar.vue'
import TheLogin from '@/components/TheLogin'
import TheRegister from '@/components/TheRegister'
import ServiceList from '@/components/ServiceList'

export default {
  name: 'SearchResult',
  components: {
    TheSearch,
    TheAvatar,
    TheLogin,
    TheRegister,
    ServiceList
  },
  data () {
    return {
      number: 1,
      total: 1,
      size: 1
    }
  },
  computed: {
    serviceList () {
      return this.$store.getters.serviceList
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
.search-result {
  margin-top: 30px;
  text-align: start;
}
.search-page {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
