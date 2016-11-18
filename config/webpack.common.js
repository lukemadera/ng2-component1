var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WatchIgnorePlugin = webpack.WatchIgnorePlugin;
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts',
    'styles': './src/app/common/less/main.less',
  },

  resolve: {
    extensions: ['.js', '.ts', '.less']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        use: [ {
            loader: 'html',
            options: {
                minimize: false, // workaround for ng2
            },
        } ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: [ { loader: 'file?name=assets/[name].[hash].[ext]' } ]
      },
      {
        test: /\.less$/,
        loaders: [ 'raw-loader', 'less-loader' ],
        exclude: [
            helpers.root('src', 'app', 'common'),
        ]
      },
      {
        test: /\.less$/,
        include: [
            helpers.root('src', 'app', 'common'),
        ],
        use: [ { loader:
            // ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader!less-loader",
                // loaders: ["css-loader", "less-loader"]
                // loader: "css?sourceMap",
                // loader: "css-loader!raw-loader!less-loader",
                // loader: [
                //     {
                //         loader: "css-loader",
                //     },
                //     {
                //         loader: "less-loader",
                //     },
                // ],
            }),
        } ]
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        use: [ { loader:
            ExtractTextPlugin.extract({
                fallbackLoader: "style",
                loader: "css?sourceMap",
            })
        } ]
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        use: [ { loader: 'raw' } ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ]
};
