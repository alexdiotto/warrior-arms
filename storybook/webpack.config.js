'use strict'

const path = require('path')

module.exports = {
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'standard'
    }],

    loaders: [{
      test: /\.css$/,
      exclude: /node_modules/,
      include: /src/,
      loaders: [
        'style-loader',
        'css-loader?sourceMap&modules!postcss-loader?sourceMap'
      ]
    }]
  },

  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src', 'components')
    }
  },

  postcss: () => {
    return [
      require('postcss-cssnext')({browsers: ['> 0%', 'IE 7']}),
      require('postcss-import')
    ]
}}
