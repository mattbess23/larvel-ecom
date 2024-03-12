const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .babelConfig({
       presets: [
           ['@babel/preset-env', { targets: { node: 'current' } }]
       ]
   })
   .sass('resources/sass/app.scss', 'public/css');
