const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


// 多进多出
module.exports = {
    entry: { // 入口文件，定义不同的chunk（如app, utils）
        app: './src/index.js', 
        utils: './src/utils.js'
    },
    output: {
        // filename: 'bundle.js', // 打包输出文件名:此时因为有多个chunk，因此不能只定义一个输出文件，否则报错
        filename: '[name].js[query]', // 打包输出文件名：中括号+chunkname作为占位符，具体参考文档：https://doc.webpack-china.org/configuration/output#output-filename
        path: path.join(__dirname, './dist') // 打包输出路径（必须绝对路径，否则报错）
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'entry.html', // 生成的html文件名
            template: './src/index.html' // 以哪个文件作为模板，不指定的话用默认的空模板
        })
    ]
};