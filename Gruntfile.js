var browserify = require('browserify')
    , remapify = require('remapify')

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dist: {
                files: {
                    'dst/ChakraTest.js': ['src/**/*.js'],
                    'dst/static/game.js':['static/**/*.js']
                },
                options: {
                    transform: ["babelify"]
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: './dst/results.txt', // Optionally capture the reporter output to a file
                    quiet: false, // Optionally suppress output to standard out (defaults to false)
                    clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
                },
                src: ['./dst/**/*Test.js']
            }
        },
        clean: {
            build: {
                src: ["./dst"]
            }
        },
        copy: {
            main: {
                expand: true,
                src: "src/**/test.js",
                dest: "dst/"
            },
            static: {
                expand: true,
                src: 'static/**/*.html',
                dest: 'dst'
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');

// Default task(s).
    grunt.registerTask('default', ['clean', 'browserify', 'copy', 'mochaTest']);

}
;