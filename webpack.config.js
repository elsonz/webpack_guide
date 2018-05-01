const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// css抽离
const extractCSS = new ExtractTextPlugin({
    disable: true,
    filename: 'index.css',
    // allChunks: true
});
const extractLESS = new ExtractTextPlugin({
    filename: 'less.css',
    // allChunks: true
});

// 多进多出
module.exports = {
    entry: { // 入口文件，定义不同的chunk（如app, utils）
        utils: './src/utils.js',
        app: './src/index.js',
    },
    output: {
        // filename: 'bundle.js', // 打包输出文件名:此时因为有多个chunk，因此不能只定义一个输出文件，否则报错
        filename: '[name].js', // 打包输出文件名：中括号+chunkname作为占位符，具体参考文档：https://doc.webpack-china.org/configuration/output#output-filename
        path: path.join(__dirname, './dist') // 打包输出路径（必须绝对路径，否则报错）
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    // fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.less$/,
                use: extractLESS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    },
    plugins: [
        extractCSS,
        // extractLESS,
        new HtmlWebpackPlugin({
            filename: 'html/page1.html', 
            template: './src/index.html',
            chunks: ['utils', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: 'html/page2.html', 
            template: './src/index2.html',
            chunks: ['app'],
            minify: {
                removeComments: true
            },
            hash: true
        })
    ]
};