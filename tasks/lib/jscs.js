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
		config = {},
		/**
		* Builds phpunit command
		* @param {string[]} fileDestArr
		* @return string argv
		*/
		buildArgv = function( fileDestArr ) {
			var argv = [ "node", "jscs" ];
			if ( config.standard ) {
				// Define the code sniffer standard.
				argv.push( " --standard=" + config.standard );
			}

			if ( config.reportFull ) {
				argv.push( " --report-full" );
			}

			if ( config.report ) {
				argv.push( " --report=" + config.report );
			}

			if ( config.reportFile ) {
				argv.push( " --report-file=" + config.reportFile );
			}

			return argv.concat( fileDestArr );
		},

		/**
		* Setup task before running it
		* @link http://gruntjs.com/configuring-tasks#files-object-format
		* @param {Object} runner
		*/
		setup = function( runner ) {
			var where;

				// e.g. { files: { src: [ 'tasks' ] }, options: { standard: 'Jquery' } }
				if ( runner.data.files && runner.data.files.src )  {
					where = runner.data.files.src;
					config = runner.data.options;
				} else {
					where = [ runner.data ];
					config = runner.options( defaults );
				}
			return where;

		};

	/**
	* Runs phpunit command with options
	* @param {Object} runner
	*/
	exports.run = function( runner ) {
		var jscodesniffer = require( "jscodesniffer" ),
				where = setup( runner ),
				argv = buildArgv( where ),
				cmd = argv.join( " " );
		grunt.log.writeln( "Starting jscs on " + where );
		grunt.verbose.writeln( "Exec: " + cmd );
		jscodesniffer( argv, process.cwd() );
	};

	return exports;
};