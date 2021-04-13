import webpack, {Stats} from 'webpack';
import BaseCfg from './webpack.base';

const webpackCfg = Object.assign({}, BaseCfg, {
    mode:"production",
});

const compiler = webpack(webpackCfg);
compiler.run((err:Error, stats:Stats)=>{
    if(err || stats.hasErrors()){
        err && console.log(err);
        stats.hasErrors() && console.log(stats.toJson({colors:true, all:false, errors:true, errorsCount:true, errorStack:true, errorDetails:true}));
        return;
    }
    if(stats.hasWarnings()){
        console.log(stats.toJson({
            colors:true, all:false, errors:true, errorStack:true, errorDetails:true, errorsCount:true,
            warnings:true, warningsCount:true
        }));
    }
});