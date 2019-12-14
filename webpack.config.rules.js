module.exports = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { cacheDirectory: true }
    },
    {
        test: /\.hbs/,
        loader: 'handlebars-loader'
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name = images/[hash].[ext]',    
        },
    {
        test: /\.(eot|ttf|woff|woff2)$/i,
        loader: 'file-loader?name = fonts/[hash].[ext]',
    }
];
