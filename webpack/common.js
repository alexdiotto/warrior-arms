'use strict'

const { join } = require('path')
const postCssConf =require('./postcss.config.js')

const paths = {
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist')
}

module.exports = {
  paths,

  entry: {
    main: join(__dirname, '..', 'src', 'index')
  },

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
    include: join(__dirname, '..', 'src'),
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['env', { modules: false }], 'stage-0', 'react'],
        plugins: [
          'react-hot-loader/babel',
          ['transform-runtime', {
            helpers: false,
            polyfill: false,
            regenerator: true
          }]
        ]
      }
    }
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
          localIdentName: '[name]_[local]__[hash:8]'
        }
      },
      {
        loader: 'postcss-loader',
        options: postCssConf
      }
    ]
  },

  fileLoader: {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
    include: join(__dirname, '..', 'src'),
    use: {
      loader: 'file-loader',
      options: {
        name: 'media/[name].[hash:8].[ext]'
      }
    }
  },

  urlLoader: {
    test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    include: join(__dirname, '..', 'src'),
    use: {
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]'
      }
    }
  },

  resolve: {
    alias: {
      src: join(__dirname, '..', 'src'),
      components: join(__dirname, '..', 'src', 'components'),
      containers: join(__dirname, '..', 'src', 'containers'),
      utils: join(__dirname, '..', 'src', 'utils')
    }
  }
}
