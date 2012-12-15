# grunt-jassi
Validate JSON documents with [Jassi](https://github.com/iclanzan/jassi).

## Getting Started
Install this grunt plugin next to your project's `Gruntfile.js` with this command:

```js
npm install grunt-jassi
```

Then add this line to the `Gruntfile.js` file:

```js
grunt.loadNpmTasks('grunt-jassi');
```

## Jassi task
Run this task with the `grunt jassi` command.

_This task is a multi task so any targets, files and options should be specified according to the [multi task documentation](https://github.com/gruntjs/grunt/wiki/Configuring-tasks)._

### Options

#### schema
Type: `String`
Default: empty string

Specifies the path to a file containing the [JSON schema](http://json-schema.org/) needed to validate the data against.

### Usage example

In this example, running `grunt uglify:my_target` (or `grunt uglify` because `uglify` is a [multi task][]) will mangle and compress the input files using the default options.

```js
// Project configuration.
grunt.initConfig({
  jassi: {
  	options: {
  		schema: 'src/schema.json'
  	}
    src: 'src/data.json'
  }
});
```
