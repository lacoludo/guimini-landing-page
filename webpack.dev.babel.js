import webpack from 'webpack'
import merge from 'webpack-merge'

import common from './webpack.common.js'

export default merge(common, {
  mode: 'development',
  devtool: 'source-maps',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
})
