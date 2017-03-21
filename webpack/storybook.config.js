'use strict'

const common = require('./common')
const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = (config, env) => {
  const newConfig = webpackConfig(config, env)

  const preloaders = Object.assign({}, common.standardPreLoader, {
    use: undefined,
    loader: common.standardPreLoader.use.loader + '?' +
    common.standardPreLoader.use.options.parser
  })

  // const cssloaders = Object.assign({}, common.cssLoader, {
  //   use: undefined,
  //   loaders: [
  //     common.cssLoader.use[0].loader + '?' +
  //     common.cssLoader.use[0].options.sourceMap,
  //     common.cssLoader.use[1].loader + '?' +
  //     common.cssLoader.use[1].options.sourceMap + '&' +
  //     common.cssLoader.use[1].options.importLoaders + '&' +
  //     common.cssLoader.use[1].options.modules + '&' +
  //     common.cssLoader.use[1].options.localIdentName,
  //     common.cssLoader.use[2].loader
  //   ]
  // })

  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat(preloaders)
  // newConfig.module.loaders = (newConfig.moduleloaders || []).concat(cssloaders)
  newConfig.resolve = common.resolve
  newConfig.postcss = common.cssLoader.use[2].options

  return newConfig
}
