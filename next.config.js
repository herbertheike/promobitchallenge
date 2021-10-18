module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/cors/:slug',
          destination: 'https://api.themoviedb.org/3/:slug*'
        }
      ]
    }
  }