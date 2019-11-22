const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => {
  return {
    mode: 'production',
    entry: ['./src/main.js'],
    output: {
      path: path.resolve(process.cwd(), 'dist')
    },
    optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin()]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'index.html',
        template: path.resolve('./src/index.html')
      }),
      new HtmlWebpackPlugin({
        filename: 'who-are-we.html',
        template: path.resolve('./src/who-are-we.html')
      }),
      new HtmlWebpackPlugin({
        filename: 'join-us.html',
        template: path.resolve('./src/join-us.html')
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery',
        WOW: 'wow.js'
      }),
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
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(pdf|doc|docx|xls|xlsx|txt|csv|tsv)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: './files'
              }
            }
          ]
        },
        {
          test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: './img'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                gifsicle: {
                  interlaced: true,
                  optimizationLevel: 3
                },
                mozjpeg: {
                  progressive: false,
                  quality: 45
                },
                optipng: {
                  enabled: true
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4
                },
                webp: {
                  quality: 20
                }
              }
            }
          ]
        },
        {
          test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
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
}
