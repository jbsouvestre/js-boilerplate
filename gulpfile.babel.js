import fs from 'fs';
import path from 'path';
import assign from 'object-assign';
import gulp from 'gulp';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import makeConfig from './make-webpack-config';

const devConfig = makeConfig({dev: true});

const compiler = webpack(devConfig);

gulp.task('dev', () => {
    let devServerCompiler = assign({}, devConfig);
    devServerCompiler.entry = [
        'webpack-dev-server/client?http://localhost:8080/',
        devServerCompiler.entry
    ];
    let server = new WebpackDevServer(webpack(devServerCompiler));
    server.listen(8080);
});

gulp.task('run-dev', (done) => {
    compiler.run(done);
});