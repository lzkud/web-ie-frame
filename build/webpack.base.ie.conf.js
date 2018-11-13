const helpers = require('./helpers')
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const merge = require('webpack-merge')
const webpackConfig = {
    entry: {
        // app: ["./dist/static/index.js"]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.html', '.css']
    },
    output: {
        path: helpers.root('/dist'),
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath: '/dist'
    },
    plugins: [
        new NamedModulesPlugin()
    ]
}

webpackConfig.entry['es5-polyfill'] = './static/js/es5-polyfill.js';
webpackConfig.entry = merge(webpackConfig.entry);

module.exports = webpackConfig