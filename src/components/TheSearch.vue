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
    if (Object.keys(this.$route.query).length !== 0) {
      this.query = this.$route.query.q
    }
  },
  methods: {
    sentQuery () {
      if (this.query !== '') {
        this.$store.dispatch('getServiceList', {
          q: this.query,
          size: 8,
          from: 0
        }).then(res => {
          this.$router.push({
            name: 'search',
            query: {
              q: this.query,
              size: 8,
              from: 0
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
