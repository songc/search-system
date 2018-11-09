<template>
  <div id="app">
    <router-view></router-view>
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
import TheLogin from '@/components/TheLogin'
import TheRegister from '@/components/TheRegister'

export default {
  name: 'app',
  components: {
    TheLogin,
    TheRegister
  },
  computed: {
    login: {
      get: function () {
        return this.$store.state.login
      },
      set: function (value) {
        this.$store.commit('changeLogin', value)
      }
    },
    register: {
      get: function () {
        return this.$store.state.register
      },
      set: function (value) {
        this.$store.commit('changeRegister', value)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
