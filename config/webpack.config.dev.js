const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.base');

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: 'development',
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    // 注意：这里要设置 target: 'web' 才会有热更新效果
    target: 'web',
    plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
    devtool: 'eval-cheap-module-source-map',
};

module.exports = merge(common, devConfig);