const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require("dotenv")
const webpack = require('webpack');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) =>{
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev; 
}, {});

module.exports ={
    entry:'./src/app/index.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin(envKeys)
    ]


};