let webpack = require('webpack');
let HtmlPlugin = require('html-webpack-plugin');
// let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let rules = require('./webpack.config.rules')();
let path = require('path');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

rules.push({
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
    })
},
{
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        publicPath: './',
        use: ['css-loader', 'sass-loader'],
    })    
}         
);

module.exports = {
    entry: {
        index: './src/index.js'
    },
    devServer: {
        index: 'index.html'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('dist')
    },
    devtool: 'source-map',
    module: { rules },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                drop_debugger: false,
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name].css'),
        new HtmlPlugin({
            title: 'Geo-Review',
            template: 'index.hbs',
            filename: 'index.html',
            chunks: ['index']
        }),
        // new CleanWebpackPlugin(['dist'])
    ]
};
