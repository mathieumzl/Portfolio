module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/', // Remplace "Portfolio" par le nom de ton repo
    devServer: {
      historyApiFallback: true // Permet d'éviter les erreurs 404
    }
  };
  