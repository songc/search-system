
module.exports = {
  baseUrl: '/',
  devServer: {
    proxy: 'http://localhost:9200/rest/myrestful/'
  }
}
