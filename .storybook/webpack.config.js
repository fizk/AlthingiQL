const path = require('path');

module.exports = {
    entry: {
        application: './src/client/index.js'
    },
    output: {
        path: path.resolve(__dirname) + '/public/scripts',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"],
                include: path.resolve(__dirname, '../')
            }
        ],
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
