const path = require('path');

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'eval-source-map',
  mode: 'development',
  optimization: {
    minimize: false, // see comment: https://github.com/getinsomnia/insomnia/blob/develop/packages/insomnia-app/webpack/webpack.config.production.babel.js
  },
};
