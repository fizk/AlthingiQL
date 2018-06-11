const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: 'stylesheets/[name].css',
    disable: false
});

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
        path: path.resolve(__dirname) + '/public',
        filename: 'scripts/[name].js',
    },
    plugins: [
        new webpack.DefinePlugin({
            __GRAPHQL_SERVER__: JSON.stringify(
                `${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/graphql`
            ),
            __IMAGE_SERVER__: JSON.stringify('http://localhost:8000')
        }),
        extractSass
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react', 'stage-2', ],
                        plugins: ['replace-env-vars']
                    },
                }
            }, {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ],
    },
};
