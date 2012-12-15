module.exports = function(grunt) {
  'use strict';

  var validate = require('jassi'),
      readJSON = grunt.file.readJSON,
      fileExists = grunt.file.exists;

  grunt.registerMultiTask('jassi', 'Validate JSON documents with Jassi.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
          schema: ''
        }),
        schema = options.schema ? readJSON(options.schema) : {},
        src = this.file.src,
        errors, pass = true;

    // Check all source files for existence
    if (src.some(function(file) {
      if (!fileExists(file)) {
        grunt.log.error('Source file "' + file + '" was not found.');
        return true;
      }
    })) return false;

    // Validate each source file
    src.forEach(function(file) {
      grunt.log.write(file + ' ');
      errors = validate(readJSON(file), schema);

      if (!errors.length) grunt.log.ok();
      else errors.forEach(function(err) {
        grunt.log.error(err.property + ': ' + err.message);
        pass = false;
      });
    });

    return pass;
  });

};
