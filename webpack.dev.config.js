const { join } = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlPlugin= require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: join(__dirname, 'src', 'index.js')
  },

  devtool: 'source-map',

  devServer: {
    contentBase: join(__dirname, 'dist'),
    hot: true,
    port: 3000,
    historyApiFallback: true,
    overlay: true
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    new HtmlPlugin({
      title: 'Warrior Arms FTW',
      template: join(__dirname, 'src', 'html', 'main.html')
    },)
  ],

  output: {
    filename: '[name].bundle.js',
    path: join(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', { modules: false }], 'stage-0', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
