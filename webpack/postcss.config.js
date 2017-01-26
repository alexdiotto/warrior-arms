'use strict'

 module.exports = {
  config: [
    require('postcss-cssnext')({
      browsers: ['> 0%', 'IE 7']
    }),
    require('postcss-import')
  ]
}
