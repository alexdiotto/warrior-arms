'use strict'

const common = require('./common')
const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = (config, env) => {
  const newConfig = webpackConfig(config, env)

  const preloaders = Object.assign({}, common.standardPreLoader, {
    use: undefined,
    loader: common.standardPreLoader.use.loader
  })

  const cssloaders = Object.assign({}, common.cssLoader, {
    use: undefined,
    loaders: [
      'style-loader',
      'css-loader?sourceMap&modules!postcss-loader?sourceMap'
    ]
  })

    console.log('loaders: ', cssloaders)

  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat(preloaders)
  newConfig.module.loaders = (newConfig.module.loaders || []).concat(cssloaders)
  newConfig.resolve = common.resolve
  newConfig.postcss = () => {
    return [
      require('postcss-cssnext')({
        browsers: ['> 0%', 'IE 7']
      }),
      require('postcss-import')
    ]
  }

  // console.log('postcss: ', newConfig)
  return newConfig
}
