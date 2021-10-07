const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: paths.dist,
        filename: '[name].[contenthash].js',
        publicPath: '',
        clean: true
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader', 'less-loader'],
                test: /\.(css|less)$/
            },
            {
                type: 'asset',
                test: /\.(png|svg|jpg|jpeg|gif)$/i
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
        alias: {
            '@': paths.src
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
