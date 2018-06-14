// // const DefinePlugin = require('webpack').DefinePlugin;
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
//         // new DefinePlugin({
//         //     __GRAPHQL_SERVER__: JSON.stringify(
//         //         `${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/graphql`
//         //     ),
//         //     __IMAGE_SERVER__: JSON.stringify('http://localhost:8000'),
//         //     __API_URL__: JSON.stringify(
//         //         process.env.NODE_ENV === 'production'
//         //             ? 'https://us-central1-reactscales.cloudfunctions.net'
//         //             : 'http://localhost:3000'
//         //     ),
//         // })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3001,
        hot: false,
        inline: false,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
};
