var Generator=require('yeoman-generator');
module.exports = class extends Generator {
    prompting() {
      this.log('prompting - 1');
    }
  
    writing() {
      this.log('writing - 1');
    }
  };
