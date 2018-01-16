'use strict'

const common = require('./common')
const webpackConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (config, env) => {
  const newConfig = webpackConfig(config, env)

  newConfig.plugins.push({
    ExtractTextPlugin.extract({
      fallbackLoader: "style-loader",
      loader: [
        { loader: 'css-loader', query: {sourceMap: true} },
        { loader: 'postcss-loader' }
      ]
    })
  })
  newConfig.module.rules.push(common.standardPreLoader)
  newConfig.module.rules.push(common.cssLoader)
  newConfig.resolve = common.resolve

  return newConfig
}
