'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack/dev.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true }
}).listen(3000, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log('Lietening on http://localhost:3000')
})
