module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jassi: {
      'Validate schema against schema-core': {
        options: {
          schema: 'test/schema-core.json'
        },
        src: 'test/schema.json'
      },

      'Validate data against schema': {
        options: {
          schema: 'test/schema.json'
        },
        src: 'test/data.json'
      }
    }
  });

  // Load this plugin's task(s).
  grunt.loadTasks('tasks');

  grunt.registerTask('default', 'jassi');
};
