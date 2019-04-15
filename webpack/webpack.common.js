const webpack = require('webpack');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
    entry: commonPaths.entryPath,
    context: commonPaths.root,
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/,
                options: {
                    emitWarning: process.env.NODE_ENV !== 'production',
                },
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: commonPaths.imagesFolder,
                            name: '[name].[hash].[ext]'
                        },
                    },
                ],
            },
            {
                test: /\.(woff2|ttf|woff|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: commonPaths.fontsFolder,
                            publicPath: "../fonts",
                            name: '[name].[hash].[ext]'
                        },
                    },
                ],
            },
        ],
    },
    serve: {
        add: app => {
            app.use(convert(history()));
        },
        content: commonPaths.entryPath,
        dev: {
            publicPath: commonPaths.outputPath,
        },
        open: true,
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.css', '.scss'],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: commonPaths.templatePath,
        }),
        new HtmlWebpackPlugin({
            filename: "stage1.html",
            template: "src/html/stage-1.html",
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'async',
        }),
    ],
};