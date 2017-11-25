const webpack = require('webpack');
const path = require('path');

const serverConfig = {
    protocol: process.env.SERVER_PROTOCOL || 'http',
    host: process.env.SERVER_HOST || 'localhost',
    port: process.env.PORT || 3000,
};

module.exports = {
    entry: {
        application: './src/client/index.js'
    },
    output: {
        path: path.resolve(__dirname) + '/public/scripts',
        filename: '[name].js',
    },
    plugins: [
        new webpack.DefinePlugin({
            __GRAPHQL_SERVER__: JSON.stringify(
                `${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/graphql`
            ),
        })
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2', ],
                },
            },
        ],
    },
};
