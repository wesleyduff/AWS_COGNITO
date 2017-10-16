var path = require('path');
module.exports = {
    plugins: [
        // UglifyJSPlugin mangles valid css during minfication. It is a known issue and this fix was obtained from: https://github.com/webpack/webpack/issues/666#issuecomment-184319770
        require('postcss-import')({
          path: [ path.join(__dirname, './src/public/css')]
        }),
        require('postcss-url'),
        require('postcss-cssnext')({
            browsers: ['last 2 versions', 'ie >= 9', 'iOS >= 9']
        }),
        require('cssnano')({zindex: false})
            // end UglifyJSPlugin fix
    ]
}