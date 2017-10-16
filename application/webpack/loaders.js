
const path = require('path');
module.exports = {
        rules: [
          {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            use: [{ loader: 'url-loader' }]
          },
          {
            test: /\.woff2$/,
            use: [{ loader: 'url-loader?mimetype=application/font-woff2' }]
          },
               {
            test: /\.(es|es6|jsx?)$/,
            include: [
              path.resolve(__dirname, "node_modules/@hg/")
            ],
            use: ['babel-loader']
          },
          {
            test: /\.(es|es6|jsx?)$/,
            exclude: [/node_modules/, /tools/],
            use: ['babel-loader']
          },
          {
            test: /\.css$/,
            use: ['style-loader', { loader: 'css-loader' }, { loader: 'postcss-loader' }]
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
          }
        ]
      }