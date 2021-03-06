const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: [{loader: 'babel-loader'}],
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
              }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]

}
