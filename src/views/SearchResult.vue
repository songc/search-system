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
          @on-change="changeNum"
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
      size: 8
    }
  },
  watch: {
    'number': 'getRes'
  },
  computed: {
    total () {
      return this.$store.state.elasticRes.hits.total
    },
    serviceList () {
      return this.$store.getters.serviceList
    }
  },
  methods: {
    login () {
      this.$store.commit('changeLogin', true)
    },
    changeNum (num) {
      this.number = num
    },
    getRes () {
      this.$store.dispatch('getServiceList', {
        q: this.$route.query.q,
        size: this.size,
        from: this.number - 1
      }).then(res => {
        this.$router.push({
          name: 'search',
          query: {
            q: this.$route.query.q,
            size: 8,
            from: this.number - 1
          }
        })
      })
        .catch(err => {
          this.$Message.error(err.message)
        })
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
