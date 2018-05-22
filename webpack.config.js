const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./ClientApp/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devServer: {
        contentBase: "./dist",
        compress: true,
        watchContentBase: true,
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", '.css']
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
};