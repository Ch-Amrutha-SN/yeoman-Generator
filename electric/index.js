 // In my-generator/generators/electric/index.js
 var Generator=require('yeoman-generator');
 module.exports = class extends Generator {
    prompting() {
      this.log('prompting -2');
    }
  
    writing() {
      this.log('writing - 2');
    }
  };
