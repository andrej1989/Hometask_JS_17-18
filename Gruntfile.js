module.exports = function(grunt) {

  grunt.initConfig({

   pkg: grunt.file.readJSON('package.json'),

   concat:{
    option:{
      separator:';'
    },
    dist:{
      src:['js/*.js'],
      dest: 'js/dist/script.main.js'
    }
   },
   concat:{
    option:{
      separator:';'
    },
    dist:{
      src:['css/*.css'],
      dest: 'css/dist/stile.main.css'
    }
   },
   uglify:{
    dist:{
      src:['js/dist/script.main.js'],
      dest: 'js/dist/script.main.min.js'
    }
   },
   cssmin:{
    dist:{
      src:['css/dist/stile.main.css'],
      dest: 'css/dist/stile.main.min.css'
    }
   }

  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};