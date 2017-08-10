module.exports = {
    devtool: 'eval-source-map', //配置生成source maps，如果是生产环境，请换为source-map
    entry: __dirname + "/index.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build", //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css?modules', //添加对样式表的处理
            include: './src/css',
            exclude: './node_modules'
        }]
    },
    devServer: {
        contentBase: __dirname, //本地服务器所加载的页面所有目录
        port: 8080, //默认监听端口，8080
        colors: true, //终端输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    }
}