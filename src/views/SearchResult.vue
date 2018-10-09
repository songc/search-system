<template>
  <div class="search">
    <div class="search-bar">
      <Row type="flex" align="middle">
        <Col span="2">
          <h2>SearchSer</h2>
        </Col>
        <Col span="7">
          <TheSearch></TheSearch>
        </Col>
        <Col span="3" offset="12">
          <TheAvatar @on-login="login=true"></TheAvatar>
        </Col>
      </Row>
    </div>
    <Row>
      <Col span="12" offset="2">
        <div class="search-result">
          <ServiceList :itemList="serviceList"></ServiceList>
        </div>
      </Col>
    </Row>
    <Row>
      <Col class="search-page" span="12" offset="2">
        <Page
          show-total
          :current="number"
          :total="total"
          :page-size="size"
          @on-change="changePageNum"
        ></Page>
      </Col>
    </Row>
    <Modal v-model="login" title="Login in" ok-text='' cancel-text=''>
      <TheLogin @on-success="login=false"></TheLogin>
      <div slot="footer">
        <Button type="primary" long @click="login=false,register=true">New to The Site? Create Accout</Button>
      </div>
    </Modal>
    <Modal v-model="register" title="register" ok-text='' cancel-text=''>
      <TheRegister @on-success="register=false"></TheRegister>
      <div slot="footer">
        <Button type="primary" long @click="register=false,login=true">Have Account? Sign Up</Button>
      </div>
    </Modal>
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
      login: false,
      register: false,
      number: 1,
      total: 1,
      size: 1
    }
  },
  beforeCreate: function () {
    this.$store.dispatch('getServiceList')
  },
  computed: {
    serviceList () {
      return this.$store.state.serviceList
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
}
.search-page {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
