const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: {
        main: path.resolve(__dirname, './src/index.jsx'),
    },
    output: {
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
                test: /\.s[ac]ss$/i,
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
    externals: [nodeExternals()],
    externalsPresets: {
        node: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
