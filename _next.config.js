module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/cors/:path*',
          destination: 'https://api.themoviedb.org/3/:path*'
        }
      ]
    }
  }