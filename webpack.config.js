const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'app.js',
        assetModuleFilename: 'images/[hash][ext][query]'
    },

    devServer: {
        static: {
            directory: path.join(__dirname, '/app'),
        },

        port: 8081,
        devMiddleware: {
            writeToDisk: true,
        },
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.(svg|eot|woff|woff2|ttf)$/i,
                exclude: /images/,
                // type: 'asset/resource',
                generator: {
                    filename: "./fonts/[name][ext]"
                }
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                exclude: /fonts/,
                // type: 'asset/resource',
                generator: {
                    filename: "./images/[name][ext]"
                }
            },
        ]
    },

    performance: {
        hints: false,
    },

    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

        new CssMinimizerPlugin({}),

        new MiniCssExtractPlugin({
            filename: "assets/css/style.css"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),

        new HtmlWebpackPlugin({
            filename: 'distributors.html',
            template: './src/distributors.html',
        }),

        new HtmlWebpackPlugin({
            filename: 'about-us.html',
            template: './src/about-us.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/contact.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'products.html',
            template: './src/products.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'cappuccino.html',
            template: './src/cappuccino.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'black-caffee.html',
            template: './src/black-caffee.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'turkish-coffee.html',
            template: './src/turkish-coffee.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'services.html',
            template: './src/services.html',
        })
    ]
}