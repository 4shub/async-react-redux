const path = require('path');

module.exports = {
    context: __dirname,
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 8100
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minChunks: 1,
            automaticNameDelimiter: '~',
            name: true,
        }
    }
};
