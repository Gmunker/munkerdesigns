var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './app/components',
            './app/api'
        ],
        alias: {
            applicationStyles: 'app/styles/app.scss'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
            query: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['react-html-attrs']
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff)$/,
        loader: 'url-loader'
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname)
    ]
  },
    devtool: 'eval-source-map'
};