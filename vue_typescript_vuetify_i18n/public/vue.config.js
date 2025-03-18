module.exports = {
    publicPath: '/', // Puisque tu utilises un domaine personnalisé, c'est "/"
    devServer: {
      historyApiFallback: true // Permet d'éviter les erreurs 404 en local
    }
  };
  