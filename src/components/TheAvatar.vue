<template>
  <div>
    <div v-if="isLogin">
      <Dropdown trigger="hover" placement="bottom" @on-click="resolveClick">
        <Avatar icon="md-person" class="menu-avatar">
        </Avatar>
        <Icon type="arrow-down-b"></Icon>
        <DropdownMenu slot="list">
          <DropdownItem name="profile">Your profile</DropdownItem>
          <DropdownItem name="setting" divided>Setting</DropdownItem>
          <DropdownItem name="logout" divided>Sign out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <div v-else>
      <Button @click="login" size="small">Login in</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheAvatar',
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    login () {
      this.$emit('on-login')
    },
    resolveClick(name) {
      if (name === 'logout') {
        this.$store.commit('changeLoginStatus', false)
        this.$router.push({ name: 'home' })
      }
      if (name === 'setting') {
        this.$router.push(`/user/${this.userId}/setting`)
      }
      if (name === 'profile') {
        this.$router.push(`/user/${this.userId}/profile`)
      }
    }
  }
}
</script>
