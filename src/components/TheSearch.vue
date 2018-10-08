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
  methods: {
    sentQuery () {
      if (this.query !== '') {
        this.$store.dispatch('getServiceList', this.query)
          .then(err => {
            this.$Message.error(err.message)
          })
      } else {
        this.$Message.error('Please Input Something !')
      }
    }
  }
}
</script>
