const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


// 一进一出：index进bundle出
module.exports = {
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'bundle.js', // 打包输出文件名
        path: path.join(__dirname, './dist') // 打包输出路径（必须绝对路径，否则报错）
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'entry.html', // 生成的html文件名
            template: './src/index.html' // 以哪个文件作为模板，不指定的话用默认的空模板
        })
    ]
};