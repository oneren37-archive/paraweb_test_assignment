const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    target: ['web', 'es5'],
    entry: {
        main: ['whatwg-fetch', path.resolve(__dirname, './src/index.jsx')],
    },
    output: {
        publicPath: '',
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: 'entry',
                                    corejs: 3,
                                },
                            ],
                        ],
                        plugins: [
                            [
                                '@babel/plugin-transform-react-jsx',
                                {
                                    pragma: 'window.createElement',
                                    pragmaFrag: "'fragment'",
                                },
                            ],
                        ],
                        comments: false,
                    },
                },
            },
            {
                test: /\.s?[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    externalsPresets: {
        node: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
