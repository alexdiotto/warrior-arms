'use strict'

 module.exports = {
  sourceMap: true,
  plugins: [
    require('postcss-cssnext')({
      browsers: ['> 0%', 'IE 7']
    }),
    require('postcss-import')
  ]
}
