'use strict'

const webpack = require('webpack')
const validate = require('webpack-validator')

const common = require('./common')
const postcssConfig = require('./postcss.config')

const HtmlPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = validate({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    common.entry
  ],

  output: Object.assign({}, common.output, {
    publicPath: ''
  }),

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),

    new HtmlPlugin(common.htmlPluginConfig)
  ],

  module: {
    preLoaders: [common.standardPreLoader],
    loaders: [common.jsLoader, common.cssLoader]
  },

  resolve: common.resolve,

  postcss: () => {
    return postcssConfig.config
  }
})
