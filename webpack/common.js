'use strict'

const { join } = require('path')
const postCssConf =require('./postcss.config.js')

module.exports = {
  entry: join(__dirname, '..', 'src', 'index'),

  output: {
    path: join(__dirname, '..', 'dist'),
    filename: '[name]-[hash].js'
  },

  htmlPluginConfig: {
    title: 'My app',
    template: join(__dirname, '..', 'src', 'html', 'template.html')
  },

  standardPreLoader: {
    test: /\.js$/,
    enforce: 'pre',
    exclude: /node_modules/,
    include: join(__dirname, '..', 'src'),
    use: {
      loader: 'standard-loader',
      options: {
        parser: 'babel-eslint'
      }
    }
  },

  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: join(__dirname, '..', 'src'),
    use: 'babel-loader'
  },

  cssLoader: {
    test: /\.css$/,
    exclude: /node_modules/,
    include: join(__dirname, '..', 'src'),
    use: [
      {
        loader: 'style-loader',
        options: {
          sourceMap: true
        }
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]_[local]__[hash:base64:5]'
        }
      },
      {
        loader: 'postcss-loader',
        options: postCssConf
      }
    ]
  },

  resolve: {
    alias: {
      src: join(__dirname, '..', 'src'),
      components: join(__dirname, '..', 'src', 'components'),
      utils: join(__dirname, '..', 'src', 'utils')
    }
  }
}
