const path = require('path');
const loaders = require('./webpack/loaders');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets/js'),
        filename: 'bundle.js',
        publicPath : '/dist/assets'
    },
    module: loaders,
    resolve: {
        alias: {
          
        },
        modules: ['node_modules', path.resolve(__dirname, 'src')],
        extensions: ['.js', '.es6', '.es', '.json', '.jsx', '.css', '.less']
      },
    plugins: [
        new CopyWebpackPlugin([{from: 'src/index.html', to: '../'}]), //naturaly starts where the output of the bundle.js file is generated.
        new webpack.LoaderOptionsPlugin({
            options: {
                context: path.root,
                postcss: [ // <---- postcss configs go here under LoadOptionsPlugin({ options: { ??? } })
                    require('postcss-cssnext'),
                    require('postcss-reporter')()
                ]
            }
        })
    ]
}