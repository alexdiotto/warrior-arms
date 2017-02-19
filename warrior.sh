#!/bin/bash

DEV_LIST="autoprefixer babel-core babel-jest babel-loader babel-preset-es2015
babel-preset-react babel-preset-stage-0 chai cross-env css-loader
extract-text-webpack-plugin@beta html-webpack-plugin jest-cli postcss-cssnext postcss-import postcss-loader react-hot-loader@3.0.0-beta.6 standard standard-loader style-loader webpack webpack-dashboard webpack-dev-server webpack-validator"

PROD_LIST="react react-dom"

yarn add --dev $DEV_LIST
yarn add $PROD_LIST

