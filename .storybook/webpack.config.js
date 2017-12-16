const path = require('path');
const webpack = require('webpack');

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
            __IMAGE_SERVER__: JSON.stringify('http://localhost:8000')
        }),
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
        rules: [
            {
                test: /\.s?css$/,
                include: path.resolve(__dirname, '../'),
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            // {
            //     test: /\.js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         query: {
            //             presets: ['es2015', 'react', 'stage-2', ],
            //         },
            //     }
            // }
        ],
    },
};



