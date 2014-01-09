/*
 * grunt-jscs
 * https://github.com/dsheiko/grunt-jscs
 *
 * Copyright (c) 2013 Dmitry Sheiko
 * Licensed under the MIT license.
 * @jscs standard:Jquery
 */
'use strict';

// External libs.
var path = require('path');
var exec = require('child_process').exec;

exports.init = function( grunt ) {
    var exports = {},
        defaults = {
            // Default options
            bin: 'node ./node_modules/grunt-contrib-jscs/node_modules/jscodesniffer/jscs.js',
            standard: false,
            report: false,
            reportFile: false
        },
        cmd = null,
        done = null,
        config = {};

    /**
     * Builds phpunit command
     *
     * @return string
     */
    var buildCommand = function() {

        var cmd = path.normalize( config.bin );

        if ( grunt.option('standard') || config.standard ) {
            // Define the code sniffer standard.
            cmd += ' --standard=' + config.standard;
        }

        if ( grunt.option('report') || config.report ) {
            cmd += ' --report=' + config.report;
        }

        if ( grunt.option('report-file') || config.reportFile ) {
            cmd += ' --report-file=' + config.reportFile;
        }

        return cmd;
    };

    /**
     * Setup task before running it
     *
     * @param Object runner
     */
    exports.setup = function( runner ) {

        var where = runner.data.join(" ");
        config = runner.options( defaults );

        cmd = buildCommand() + ' ' + where;

        grunt.log.writeln( 'Starting jscs on ' + where );
        grunt.verbose.writeln( 'Exec: ' + cmd );

        done = runner.async();
    };

    /**
     * Runs phpunit command with options
     *
     */
    exports.run = function() {

        exec( cmd, function( err, stdout, stderr ) {

            if ( stdout ) {
                grunt.log.write( stdout );
            }

            if ( err ) {
                grunt.fatal( err );
            }
            done();
        });
    };

    return exports;
};