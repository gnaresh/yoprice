#!/usr/bin/env node

var pluginlist = ["com.ionic.keyboard","cordova-plugin-console","cordova-plugin-device","cordova-plugin-splashscreen","cordova-plugin-whitelist"];

var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
    console.log(stdout);
}

pluginlist.forEach(function(plug) {
    exec("cordova plugin add " + plug, puts);
});
