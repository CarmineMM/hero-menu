const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const production = false; // Configurar si esta en producción o desarrollo

module.exports = {
    devtool: production ? 'source-map' : 'inline-source-map',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: production ? 'js/hero-menu.min.js' : 'js/hero-menu.js'
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }, 
    module: {
        rules: [
            // Javscript
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },


            // Stylesheets
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: production ? 'css/hero-menu.min.css' : 'css/hero-menu.css'
        })
    ]
}