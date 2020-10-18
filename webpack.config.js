const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

const PATH = {
  src: path.join(__dirname, './src/'),
  dist: path.join(__dirname, './dist/'),
  assets: 'assets/'
}

console.log('DIST', PATH.dist);


module.exports = {
  entry: './src/index.js',
  output: {
    path: PATH.dist,
    filename: `${PATH.assets}js/[name].js`,
  },
  devServer: {
    inline: true,
    port: 8080,
    host: '192.168.31.232',
  },
  module: {
    rules: [
      {
        test: /\.(img|png)$/,
        loader: 'file-loader',
        options: {
          name: `[name].[ext]`,
          outputPath: 'assets/img'
        }
      },
      {
        test: /\.sass$/,
        use: [
            process.env.NODE_ENV !== 'production'
            ? 'style-loader' 
            : MiniCssExtractPlugin.loader,
            'css-loader', 
            'sass-loader']
      },
      {
        test: /\.(eot|woff|ttf)$/,
        loader: 'file-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
    }),
    new copyWebpackPlugin({
      patterns: [
        {from: `${PATH.src}assets/img/`, to: `${PATH.assets}img`},
      ]
    })
  ]
}