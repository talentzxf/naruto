var path = require('path');
var webpack = require('webpack');

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webpack: {
            Chakra: {
                entry: "./src/Chakra/Exports.js",
                output: {
                    path: __dirname + "\\dst\\",
                    filename: "bundle.js"
                },
                resolve: {
                    root: path.resolve("./src/"),
                    extensions: ['', 'js']
                },
                module: {
                    loaders: [
                        {test: /\.css$/, loader: "style!css"}
                    ]
                },
                plugins: [
                    new webpack.BannerPlugin('This file is created by VincentZhang. For fun!')
                    // TODO: Add predefined variables.
                    // 1. Math validation mode.
                ]
            },
            ChakraTest: {
                entry: "./src/Chakra/test/test.js",
                output: {
                    path: __dirname + "\\dst\\",
                    filename: "ChakraTest.js"
                },
                resolve: {
                    root: path.resolve("./src/"),
                    extensions: ['', 'js']
                },
                module: {
                    loaders: [
                        {test: /\.css$/, loader: "style!css"}
                    ]
                },
                plugins: [
                    new webpack.BannerPlugin('This file is created by VincentZhang. For fun!')
                    // TODO: Add predefined variables.
                    // 1. Math validation mode.
                ]
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'results.txt', // Optionally capture the reporter output to a file
                    quiet: false, // Optionally suppress output to standard out (defaults to false)
                    clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
                },
                src: ['./dst/**/*Test.js']
            }
        },
        clean:{
            build: {
                src: ["./dst"]
            }
        },
        copy:{
            main:{
                expand: true,
                src:"src/**/test.js",
                dest:"dst/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['clean','webpack', 'mochaTest']);

};