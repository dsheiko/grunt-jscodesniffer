/*
* grunt-jscs
* https://github.com/dsheiko/grunt-jscs
*
* Copyright (c) 2013 Dmitry Sheiko
* Licensed under the MIT license.
* @jscs standard:Jquery
*/
"use strict";

// External libs.
var path = require( "path" ),
		exec = require( "child_process" ).exec;

exports.init = function( grunt ) {
	var exports = {},
		defaults = {
			// Default options
			standard: false,
			report: false,
			reportFile: false
		},
		argv = [ "node", "jscs" ],
		config = {},
		/**
		* Builds phpunit command
		* @param {string} fileDest
		* @return string
		*/
		buildArgv = function( fileDest ) {

			if ( grunt.option( "standard" ) || config.standard ) {
				// Define the code sniffer standard.
				argv.push( " --standard=" + config.standard );
			}

			if ( grunt.option( "report" ) || config.report ) {
				argv.push( " --report=" + config.report );
			}

			if ( grunt.option( "report-file" ) || config.reportFile ) {
				argv.push( " --report-file=" + config.reportFile );
			}

			argv.push( fileDest );

			return argv;
		};

	/**
	* Setup task before running it
	* @link http://gruntjs.com/configuring-tasks#files-object-format
	* @param Object runner
	*/
	exports.setup = function( runner ) {

		var cmd, where;

			// e.g. { files: { src: [ 'tasks' ] }, options: { standard: 'Jquery' } }
			if ( runner.data.files && runner.data.files.src )  {
				where = runner.data.files.src.join( " " );
				config = runner.data.options;
			} else {
				where = runner.data.join( " " );
				config = runner.options( defaults );
			}

		buildArgv( where );
		cmd = argv.join( " " );

		grunt.log.writeln( "Starting jscs on " + where );
		grunt.verbose.writeln( "Exec: " + cmd );
	};

	/**
	* Runs phpunit command with options
	*
	*/
	exports.run = function() {
		var jscodesniffer = require( "jscodesniffer" );
		jscodesniffer( argv, process.cwd() );
	};

	return exports;
};