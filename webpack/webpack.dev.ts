import BaseCfg from './webpack.base';

const webpackCfg = Object.assign({}, BaseCfg, {
    devServer:{
        port:9009,
        hot:true,
        open:true,
        historyApiFallback:true,
    },
    mode:"development",
    devtool:"inline-source-map",
});

export default webpackCfg;