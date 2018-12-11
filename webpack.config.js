const DefinePlugin = require('webpack').DefinePlugin;
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    name: 'althingi-ql',
    entry: {
        application: './src/client/index.tsx',
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'javascripts/[name].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {},
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                }),
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js',],
    },
    plugins: [
        new ExtractTextPlugin('./stylesheets/application.css'),
        new DefinePlugin({
            __GRAPHQL_SERVER__: JSON.stringify(process.env.GRAPHQL_SERVER || 'http://localhost:3000/graphql'),
        })
    ],
    // devServer: {
    //     contentBase: path.join(__dirname, 'public'),
    //     port: 3001,
    //     hot: false,
    //     inline: false,
    //     historyApiFallback: true,
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //     },
    // },
};
