module.exports = {
  entry: './client/src/index.jsx',


  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      }
    ]
  },


  output: {
    filename: './client/dist/bundle.js'
  }
};