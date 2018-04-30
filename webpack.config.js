const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


// 多进一出：index、index2进bundle出
module.exports = {
    entry: ['./src/index.js', './src/index2.js'], // 入口文件：传入数组相当于将多个文件都打包到一个出口，只会输出一个js
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