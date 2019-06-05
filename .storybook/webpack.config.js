const path = require('path');
// const webpack = require('webpack');
//
// module.exports = {
//     entry: {
//         application: './src/client/index.js'
//     },
//     output: {
//         path: path.resolve(__dirname) + '/public/scripts',
//         filename: '[name].js',
//     },
//     plugins: [
//         new webpack.DefinePlugin({
//             __IMAGE_SERVER__: JSON.stringify('http://localhost:8000')
//         }),
//     ],
//     module: {
//         loaders: [
//             {
//                 test: /.jsx?$/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['es2015', 'react', 'stage-2', ],
//                 },
//             },
//         ],
//         rules: [
//             {
//                 test: /\.s?css$/,
//                 include: path.resolve(__dirname, '../'),
//                 use: [{
//                     loader: "style-loader" // creates style nodes from JS strings
//                 }, {
//                     loader: "css-loader" // translates CSS into CommonJS
//                 }, {
//                     loader: "sass-loader" // compiles Sass to CSS
//                 }]
//             },
//         ],
//     },
// };
//
//
//

// const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");
//
// module.exports = (baseConfig, env, defaultConfig) => {
//     const config = genDefaultConfig(baseConfig, env);
//     config.module.rules = [
//         {
//             test: /\.tsx?$/,
//             use: 'ts-loader',
//             exclude: /node_modules/,
//         },
//         {
//             test: /\.scss$/,
//             use: [
//                 "style-loader", // creates style nodes from JS strings
//                 "css-loader", // translates CSS into CommonJS
//                 "sass-loader" // compiles Sass to CSS
//             ]
//         }
//     ];
//
//     config.resolve.extensions.push(".tsx");
//     config.resolve.extensions.push(".ts");
//     config.resolve.extensions.push(".js");
//     config.resolve.extensions.push(".jsx");
//
//     return config;
// };


module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(sa|sc|c)ss$/,
        include: path.resolve(__dirname, '../'),
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ],
    });
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('awesome-typescript-loader'),
            },
            // Optional
            // {
            //     loader: require.resolve('react-docgen-typescript-loader'),
            // },
        ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
