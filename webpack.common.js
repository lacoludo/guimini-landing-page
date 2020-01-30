import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: ['./src/index'],
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'join-us.html',
      template: './src/join-us.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
      WOW: 'wow.js'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(eot|otf|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
              outputPath: './fonts'
            }
          }
        ]
      },
      {
        test: /\.(gif|jpe?g|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
              outputPath: './img'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':src'],
            interpolate: true
          }
        }
      }
    ]
  }
}
