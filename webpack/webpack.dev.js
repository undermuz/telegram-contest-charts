const webpack = require('webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const path = require('path');
const commonPaths = require('./paths');

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: commonPaths.outputPath,
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
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
    devServer: {
        contentBase: commonPaths.outputPath,
        compress: true,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ErrorOverlayPlugin()
    ],
};