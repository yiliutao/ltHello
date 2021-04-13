import path from 'path';
import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';

const webpackCfg:Configuration = {
    entry:{
        index: "./src/index.tsx",
        risk:"./src/risk.tsx",
    },
    output:{
        path: path.resolve(__dirname, "../dist"),
        filename: "./js/[name].[fullhash].js",
    },
    module:{
        rules:[
            {test:/\.tsx?$/, use:"ts-loader", exclude:/node_modules/},
            {test:/\.html?$/, use:"html-loader"},
            {test:/\.css?$/, use:"css-loader"},
            {test:/\.less?$/,use:"less-loader"},
            {test:/\.(png|jpe?g|gif)?$/i, use:{loader:"file-loader", options:{publicPath:"image", outputPath:"./image"}}}
        ],
    },
    resolve:{
        extensions:[".tsx", ".ts", ".js"]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject:"body",
            chunks:["index"],
            template:"./html/index.html",
            filename:"index.html",
        }),
        new HtmlWebpackPlugin({
            inject:"body",
            chunks:["risk"],
            template:"./html/risk.html",
            filename:"risk.html",
        }),
    ],
};

export default webpackCfg;