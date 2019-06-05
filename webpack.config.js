const webpack = require("webpack");
const DefinePlugin = require('webpack').DefinePlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: "./src/client/index.tsx",
    },
    output: {
        filename: "bundle.js",
        path: __dirname + "/public"
    },

    mode: "development",

    // Enable sourcemaps for debugging webpack's output.
    // devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", '.mjs']
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css'
        }),
        new DefinePlugin({
            __GRAPHQL_SERVER__: JSON.stringify(process.env.GRAPHQL_SERVER || 'http://localhost:3000/graphql'),
        })
    ],
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
            },

            // // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },

    // // When importing a module whose path matches one of the following, just
    // // assume a corresponding global variable exists and use that instead.
    // // This is important because it allows us to avoid bundling all of our
    // // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};



// const DefinePlugin = require('webpack').DefinePlugin;
// const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
//
// module.exports = {
//     name: 'althingi-ql',
//     entry: {
//         application: './src/client/index.tsx',
//     },
//     output: {
//         path: path.join(__dirname, 'public'),
//         filename: 'javascripts/[name].js',
//         publicPath: '/',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/,
//             },
//             {
//                 test: /\.scss$/,
//                 use: ExtractTextPlugin.extract({
//                     fallback: 'style-loader',
//                     use: [
//                         {
//                             loader: 'css-loader',
//                             options: {},
//                         },
//                         {
//                             loader: 'sass-loader',
//                         },
//                     ],
//                 }),
//             },
//         ],
//     },
//     resolve: {
//         extensions: ['.tsx', '.ts', '.js',],
//     },
//     plugins: [
//         new ExtractTextPlugin('./stylesheets/application.css'),
//         new DefinePlugin({
//             __GRAPHQL_SERVER__: JSON.stringify(process.env.GRAPHQL_SERVER || 'http://localhost:3000/graphql'),
//         })
//     ],
//     // devServer: {
//     //     contentBase: path.join(__dirname, 'public'),
//     //     port: 3001,
//     //     hot: false,
//     //     inline: false,
//     //     historyApiFallback: true,
//     //     headers: {
//     //         'Access-Control-Allow-Origin': '*',
//     //     },
//     // },
// };
