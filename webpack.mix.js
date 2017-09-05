/*
 |--------------------------------------------------------------------------
 | Mix for Cartalyst extensions
 |--------------------------------------------------------------------------
 */

let mix = require('laravel-mix');
const fs = require('fs');

const extensionsDir = `${__dirname}/extensions`;
const namespaces = fs.readdirSync(extensionsDir);
let extensionDirs = [];

for (let i in namespaces) {
    const extensions = fs.readdirSync(`${extensionsDir}/${namespaces[i]}`);
    for (let y in extensions) {
        extensionDirs.push(`${extensionsDir}/${namespaces[i]}/${extensions[y]}`);
    }
}

extensionDirs.forEach((extensionDir) => {
    mix.react(extensionDir + 'resources/assets/js/app.jsx', 'public/js')
        .sass(extensionDir + 'resources/assets/sass/app.scss', 'public/css');
})

mix.react('resources/assets/js/app.jsx', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
