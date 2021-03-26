const path = require('path'); 
const entries = require('./entries');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: entries,
    output: { 
        path: path.resolve(__dirname, 'dist'), 
        filename: 'js/[name].js',
    }, 
    plugins: [
        new MiniCssExtractPlugin({
                filename: '[name].css',
        }),
        new HtmlWebpackPlugin({ 
          filename: 'index.html',
          template: 'src/assets/index.html'
        }),
        new HtmlWebpackPlugin({ 
            filename: 'our_reviews.html',
            template: 'src/assets/our_reviews.html'
          })
      ],
    module: {
        rules: [
            {
                test: /\.js$/i, 
                include: path.resolve(__dirname, 'src/js'), 
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            }, 
            { 
                test: /\.css$/i, 
                //include: path.resolve(__dirname, 'src/css'), 
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: './dist/css',
                        },
                      },
/*                     MiniCssExtractPlugin.loader, */
                    /* 'style-loader',  */
                    'css-loader', 
                    'postcss-loader'], 
            },
        ],
    }, 
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        watchContentBase: true,
    },

};