module.exports = function(grunt) {
  'use strict';

  var PATH_ASSETS = 'www/src';
  var PATH_BUILD_ASSETS = 'www/public';
  var PRECOMPILED_TPL_PATH = PATH_BUILD_ASSETS + '/js/app/templates.js';

  // ==========================================================================
  // Project configuration
  // ==========================================================================
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // clean build directory
    clean: [PATH_BUILD_ASSETS],

    copy: {
      main: {
        expand: true,
        cwd: PATH_ASSETS,
        src: '**',
        dest: PATH_BUILD_ASSETS
      }
    },

    requirejs: {
      compile: {
        options: {
          appDir: PATH_ASSETS,
          dir: PATH_BUILD_ASSETS,
          baseUrl: './js',
          //configuration file
          mainConfigFile: PATH_ASSETS + '/js/main.js',
          // optimize javascript files with uglifyjs
          optimize: 'uglify',
          // define dependencies
          modules: [
            {
              name: 'main'
            }
          ]
        }
      }
    },

    // js linting options
    jshint: {
      all: ['Gruntfile.js', PATH_ASSETS + '/js/main.js', PATH_ASSETS + '/js/app/**/*.js',
      '!' + PATH_ASSETS + '/js/app/templates.js']
    },

    concat: {
      css: {
        src: [PATH_ASSETS + '/css/*.css'],
        dest: PATH_BUILD_ASSETS + '/css/<%= pkg.name %>-<%= pkg.version %>.concat.css'
      }
    },

    cssmin: {
      my_target: {
        src: PATH_BUILD_ASSETS + '/css/<%= pkg.name %>-<%= pkg.version %>.concat.css',
        dest: PATH_BUILD_ASSETS + '/css/<%= pkg.name %>.min-<%= pkg.version %>.css'
      }
    },

    arialinter: {
      files: [
        PATH_ASSETS + '/js/app/**/*.hbs'
      ],
      options: {
        templates: true,
        levels: 'A'
      }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-css');
  // grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-arialinter');

  // default build task
  grunt.registerTask('default', 'build:dev');

  //build tasks
  grunt.registerTask('build:prod', ['clean', 'arialinter', 'jshint:all', 'requirejs', 'concat', 'cssmin']);
  grunt.registerTask('build:dev', ['clean', 'copy', 'arialinter', 'jshint:all', 'concat', 'cssmin']);
};
