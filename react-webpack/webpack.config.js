const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce:"pre",
                test:/\.js$/,
                loader:'source-map-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ],

    devtool: "source-map"
}