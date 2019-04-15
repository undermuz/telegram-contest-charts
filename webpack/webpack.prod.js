const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const commonPaths = require('./paths');
const path = require('path');

module.exports = {
    mode: 'production',
    optimization: {
        minimize: false
    },
    output: {
        filename: `${commonPaths.jsFolder}/[name].[hash].js`,
        path: commonPaths.outputPath,
        chunkFilename: '[name].[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[local]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.resolve(__dirname, './postcss.config.js')
                            }
                        }
                    }
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `${commonPaths.cssFolder}/[name].css`,
            chunkFilename: '[id].css',
        }),
    ],
    devtool: 'source-map',
};