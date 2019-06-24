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
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
mix.webpackConfig({
    plugins: [
    new SWPrecacheWebpackPlugin({
        cacheId: 'pwa',
        filename: 'service-worker.js',
        staticFileGlobs:  ['public/**/*.{css,html,png,jpg}'],
        minify: true,
        stripPrefix: 'public/',
        handleFetch: true,
        dynamicUrlToDependencies: { 
            //you should add the path to your blade files here so they can be cached
               //and have full support for offline first (example below)
            '/': ['resources/views/frontend/index.blade.php'],
            '/contact': ['resources/views/frontend/contact.blade.php'],
            '/riderequests': ['resources/views/frontend/requestedRides.blade.php'],
            '/openrides': ['resources/views/frontend/requestedRides.blade.php'],
            '/account': ['resources/views/frontend/user/account/index.blade.php'],
            '/account/settings': ['resources/views/frontend/user/account/settings.blade.php'],
            '/user/cars': ['resources/views/frontend/user/account/cars.blade.php'],
            '/booking': ['resources/views/frontend/user/account/ride.blade.php'],
            '/login': ['resources/views/frontend/auth/login.blade.php'],
            '/register': ['resources/views/frontend/auth/register.blade.php'],
            '/phone/confirm/form': ['resources/views/frontend/auth/verification/phone.blade.php']
            

            // '/posts': ['resources/views/posts.blade.php']
        },
        staticFileGlobsIgnorePatterns: [/\.map$/, /mix-manifest\.json$/, /manifest\.json$/, /service-worker\.js$/],
        navigateFallback: '/',
        runtimeCaching: [
            {
                urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
                handler: 'cacheFirst'
            },
            {
                urlPattern: /^https:\/\/www\.thecocktaildb\.com\/images\/media\/drink\/(\w+)\.jpg/,
                handler: 'cacheFirst'
            }
        ],
        // importScripts: ['./js/push_message.js']
    })
    ]
});
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


