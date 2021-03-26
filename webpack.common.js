const path = require('path'); 
const entries = require('./entries');
module.exports = {
    entry: entries,
    output: { 
        path: path.resolve(__dirname, 'dist'), 
        filename: 'js/[name].js',
        clean: true,
    }, 
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
                include: path.resolve(__dirname, 'src/css'), 
                use: ['style-loader', 'css-loader', 'postcss-loader'], 
            },
        ],
    }, 
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        watchContentBase: true,
    },

};