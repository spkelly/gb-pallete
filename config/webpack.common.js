const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
  entry: './src/main.js',
  devServer:{
    stats: "errors-only",
    host: process.env.HOST,
    port: process.env.PORT,
    overlay: true,
    historyApiFallback: true
  },
  output:{
    path: Path.resolve(__dirname,'../dist'),
    filename:'bundle.js',
    publicPath: '/'
  },
  module:{
    rules:[
      {
        test:/.js$/,
        exclude: /node_modules/,
        use:['babel-loader']
      },
      {
        test:/.vue$/,
        use:['vue-loader']
      },
      {
        test:/.css$/,
        use:['vue-style-loader','css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "GB Pallete",
      template: 'public/index.html'
    }),
    new VueLoaderPlugin()
  ]
};
