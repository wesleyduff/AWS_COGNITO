const path = require('path');
const loaders = require('./webpack/loaders');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath : '/dist/'
    },
    module: loaders,
    resolve: {
        alias: {
          
        },
        modules: ['node_modules', path.resolve(__dirname, 'src')],
        extensions: ['.js', '.es6', '.es', '.json', '.jsx', '.css', '.less']
      },
    plugins: [
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