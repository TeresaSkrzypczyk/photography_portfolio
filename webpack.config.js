const path = require("path");
const entryFile = "index.js";

module.exports = {
    entry: {
        bundle: [`./js/${entryFile}`, `./scss/main.scss`]
    },
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build"),
        library: 'DayPicker',
    },
    devServer: {
        contentBase: path.join(__dirname, "/"),
        publicPath: "/build/",
        compress: true,
        port: 3001,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            }
        ]
    }
};
