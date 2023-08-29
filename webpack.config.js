const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
        devServer: {
            port: 3000,
            historyApiFallback: true
        },
        entry: "./src/index.js",
        output: {
            path: path.join(__dirname, "/build"),
            filename: "[name].script.min.js?[fullhash]",
        },
        resolve: {
            alias: {
                Components: path.resolve(__dirname, 'src/components'),
                Contexts: path.resolve(__dirname, 'src/contexts'),
                Utils: path.resolve(__dirname, 'src/utils'),
                Hooks: path.resolve(__dirname, 'src/hooks'),
                Services: path.resolve(__dirname, 'src/services'),
                Pages: path.resolve(__dirname, 'src/pages'),
                Actions: path.resolve(__dirname, 'src/store'),
                Main: path.resolve(__dirname, 'src'),

            },
            extensions: [".js"]
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                automaticNameDelimiter: '~',
                enforceSizeThreshold: 50000,
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true,
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                },
            },
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        babelrc: true
                    }
                },
                {
                    test: /\.(css)$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(scss)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[folder]__[local]--[hash:base64:3]'
                                }
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    ident: 'postcss',
                                    plugins: [
                                        require('autoprefixer')()
                                    ]
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                additionalData: `@import "src/styles/global.scss";`
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            }),
            new MiniCssExtractPlugin({
                filename: '[name].style.min.css?[contenthash]',
            }),
            new CopyPlugin({
                patterns: [
                    "robots.txt",
                    { from: 'src/images', to: 'images' }
                ],
            }),
            new ImageminWebpWebpackPlugin({
                config: [
                    {
                        test: /\.(jpe?g|png)/,
                        options: {
                            quality: 90,
                        },
                    },
                ],
                overrideExtension: true,
                detailedLogs: false,
                silent: false,
                strict: true,
            }),
        ],
};
