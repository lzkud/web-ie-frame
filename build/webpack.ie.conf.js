const webpackConfig = require('./webpack.base.ie.conf')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const env = require('../config/dev.ie')
const cmnode = require('../src/plugins/cmnode');

// webpackConfig.module.rules = [
//     // ...webpackConfig.module.rules,
//     {
//         test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
//         loader: 'file-loader'
//     },
//     {
//         test: /\.css|less$/,
//         use: [
//             'style-loader',
//             'css-loader',
//             'postcss-loader',
//             'less-loader'
//         ]
//     }
// ]

webpackConfig.plugins = [
    // ...webpackConfig.plugins,
    new DefinePlugin({
        'process.env': env
    })
]

webpackConfig.devServer = {
    port: env.PORT,
    host: cmnode.getIP(),
    historyApiFallback: false,
    disableHostCheck: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    contentBase: './dist',
    open: false
}

webpackConfig.devtool = 'inline-source-map'

module.exports = webpackConfig