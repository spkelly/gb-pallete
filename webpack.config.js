const devConfig = require('./config/webpack.dev');
const commonConfig = require('./config/webpack.common');
const prodConfig = require('./config/webpack.prod');
const merge = require('webpack-merge');

module.exports = merge(devConfig,commonConfig)
