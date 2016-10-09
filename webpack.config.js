module.exports = {
  entry: [
    './client/src/main.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename:'./client/public/bundle.js'
  },
  devserver: {
    inline: true,
    port:8080
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query:{
        presets: ['es2015', 'react',]
      },
      test: /\.jsx$/,  
    }]
  },
  resolve: {
    extensions: ['', '.js', 'jsx'],
  },
  devtool: '#source-map',
}