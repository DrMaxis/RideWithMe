const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public')
    .setResourceRoot('../') // turns assets paths in css relative to css file
    .sass('resources/sass/frontend/app_a.scss', 'css/frontend_a.css')
    .sass('resources/sass/frontend/app_b.scss', 'css/frontend_b.css')
  /*   .sass('resources/sass/frontend/partials.scss', 'css/partials.css') */
    .sass('resources/sass/backend/app.scss', 'css/backend.css')
    .js('resources/js/frontend/app_a.js', 'js/frontend_a.js')
    .js('resources/js/frontend/app_b.js', 'js/frontend_b.js')
    .js([
        'resources/js/backend/before.js',
        'resources/js/backend/app.js',
        'resources/js/backend/after.js'
    ], 'js/backend.js')
    .extract([
        /* Extract packages from node_modules, only those used by front and
        backend, to vendor.js */
        'jquery',
        'bootstrap',
        'popper.js',
        'axios',
        'sweetalert2',
        'lodash'
    ])
    .sourceMaps();

if (mix.inProduction()) {

    mix.version()
        .options({
            // optimize js minification process
            terser: {
                cache: true,
                parallel: true,
                sourceMap: true
            }
        });
} else {
    // Uses inline source-maps on development
    mix.webpackConfig({ devtool: 'inline-source-map' });
}


