# grunt-jscodesniffer

A grunt task for running jscodesniffer validator

> Note: This used to be called 'grunt-contrib-jscs' in the npm registry, but as of version 0.1.10 it has taken over the 'grunt-jscodesniffer' name.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jscodesniffer --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks( "grunt-jscodesniffer" );
```

## The "jscs" task

### Overview
In your project's Gruntfile, add a section named `jscs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
	jscs: {
		all: {
			options: {
				// Task-specific options go here.
			},
			files: {
				src: [ "dir", "file", "dir" ] // Target-specific file/directory goes here.
			}
		}
	}
})
```

### Options

#### options.standard
Type: `String`
Default Idiomatic

- apply specified standard (Idiomatic, Jquery)

#### options.reportFull
Type: `Boolean`
Default 'false'

full report with source codes


#### options.reportFile
Type: `String`
Default 'Undefined'

write the report to the specified file path


#### options.report
Type: `String`
Default 'Undefined'

xml for printing an XML report
checkstyle for printing Jenkins-friendly checkstyle report

### Usage Examples

#### Default Options

```js
grunt.initConfig({
   jscs: {
			all: {
				options: {
					"standard": "Jquery"
				},
				files: {
					src: [ "tasks" ]
				}
			}
    }
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

[![Analytics](https://ga-beacon.appspot.com/UA-1150677-13/dsheiko/grunt-jscodesniffer)](http://githalytics.com/dsheiko/grunt-jscodesniffer)