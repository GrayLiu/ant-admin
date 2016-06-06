module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: __dirname,
        filename: "src/js/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: ['babel'],
            query: {
                presets: ['react', 'es2015'],
                plugins: ['transform-runtime']
            }
        },{
            test: /\.scss$/, 
            loader: 'style!css!sass?sourceMap'
        },{
            test: /\.less$/,
            loader: 'style!css!less-loader'
        }]
    }
};