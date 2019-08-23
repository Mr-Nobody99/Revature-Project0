const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },

    entry:{
        main: './src/main.js'
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
            
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },

    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // }
};