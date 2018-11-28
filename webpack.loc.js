import webpack from 'webpack';
import path from 'path';

export default {
    mode: 'development',
    devtool: 'cheap-source-map',
    entry: {
        'home-app': [ 'webpack/hot/dev-server', 'eventsource-polyfill', 'webpack-hot-middleware/client?reload=true', './public/javascript/App.js']
    },
    target: 'web',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            { test: /\.js$/, include: path.resolve(__dirname, 'public'), use: ['babel-loader'] },
            { 
                test: /(\.css)$/, 
                use: [ 'style-loader', 'css-loader' ] 
            }
        ]
    }
};
