module.exports = {
  entry: {
    app: __dirname + '/src',
    components: [__dirname + '/src/components/App/App.js']
  },
  output: {
    path: 'bundles',
    filename: '[name].js',
    publicPath: '/bundles/'
  },
  module: {
    loaders: [
      {
        test: /.js/,
        loader: 'babel',
        include: __dirname + '/src'
      }
      ,{
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass' ]
      }
    ]
  }
}
