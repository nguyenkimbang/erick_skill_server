const path = require('path');
const devMode = 1;
module.exports = {
  mode: 'development',
  entry: {
    client: './src-client-react/client.js',
    bundle: './src-client-react/bundle.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
              sourceMap: true
            }
          }, {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}
