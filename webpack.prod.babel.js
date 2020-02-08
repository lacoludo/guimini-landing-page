import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import merge from 'webpack-merge'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MinifyPlugin from 'babel-minify-webpack-plugin'

import common from './webpack.common.js'

export default merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new MinifyPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin()]
  },
  output: {
    path: path.resolve('./public')
  }
})
