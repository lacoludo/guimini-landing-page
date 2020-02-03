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
      },
      {
        test: /\.(gif|jpe?g|png|svg|webp)$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve('./public')
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin()]
  }
})
