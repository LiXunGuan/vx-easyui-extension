const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    runtimeCompiler: true,
    chainWebpack: (config)=>{
        config.resolve.alias.set('@', resolve('src'));
    },
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html',
        }
    }
}