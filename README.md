# grunt-contrib-jscs

> A grunt task for running js-codesniffer validator

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-jscs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks( "grunt-contrib-jscs" );
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

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/7ddc139636e39e227c9eb4b80a2d7743 "githalytics.com")](http://githalytics.com/dsheiko/grunt-contrib-jscs)