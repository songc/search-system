<template>
  <div class="home">
    <Row type="flex" justify="end">
      <Col span="3">
        <TheAvatar @on-login="login=true"></TheAvatar>
      </Col>
    </Row>
    <router-link :to="{name:'home'}"><h1 class="home-title">Service Search</h1></router-link>
    <Row type="flex" justify="center" align="top">
      <Col span="8">
        <TheSearch></TheSearch>
      </Col>
    </Row>
    <Row type="flex" justify="center">
      <Col span="12">
        <Card dis-hover class="recommend">
          <p slot="title">Hot Topic</p>
          <ServiceList :itemList="serviceList"></ServiceList>
        </Card>
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
// @ is an alias to /src
import TheSearch from '@/components/TheSearch.vue'
import TheAvatar from '@/components/TheAvatar.vue'
import TheLogin from '@/components/TheLogin'
import TheRegister from '@/components/TheRegister'
import ServiceList from '@/components/ServiceList'

export default {
  name: 'home',
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
      register: false
    }
  },
  created: function () {
    this.$store.dispatch('getPersonServiceList')
  },
  computed: {
    serviceList () {
      return this.$store.getters.serviceList
    }
  }
}
</script>

<style scoped>
.home {
  padding-top: 30px
}

.recommend {
  margin-top: 60px;
  text-align: start
}

.home-title {
  margin-top: 100px;
  margin-bottom: 40px;
}
</style>
