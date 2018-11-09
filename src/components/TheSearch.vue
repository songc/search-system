<template>
  <div>
    <Input
      v-model="query"
      @on-search="sentQuery"
      search
      size="large"
      enter-button="Search"
      placeholder="Enter something..."
    />
  </div>
</template>

<script>
export default {
  name: 'TheSearch',
  data () {
    return {
      query: ''
    }
  },
  mounted () {
    for (let i in this.$route.query) {
      this.query = this.$route.query.q
    }
  },
  methods: {
    sentQuery () {
      if (this.query !== '') {
        this.$store.dispatch('getServiceList', this.query)
          .then(res => {
            this.$router.push({
              name: 'search',
              query: {
                q: this.query
              }
            })
          })
          .catch(err => {
            this.$Message.error(err.message)
          })
      } else {
        this.$Message.error('Please Input Something !')
      }
    }
  }
}
</script>
