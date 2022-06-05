var Generator=require('yeoman-generator');

//Prompting priority is > writing priority
// module.exports = class extends Generator {
// async prompting() {
//     const answers = await this.prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "Enter project Name:",
//         default: this.appname
//       },
//       {
//         type: "confirm",//(y/n)
//         name: "style",
//         message: "Would you like to enable the sass feature?"
//       }
//     ]);

//     this.log("app name", answers.name);
//     this.log("cool feature", answers.style);
//   }
// module.exports = class extends Generator {
//     initializing() {
//         this.log('hi');
//       this.composeWith(require.resolve('../turbo'));
//       this.composeWith(require.resolve('../electric'));
//     }
  //};

  module.exports=class extends Generator{
      initializing(){
          this.log('Hi Amrutha');

      }
      async prompting(){
          const {componentName}= await this.prompt([
              {name:'componentName',
            message:'What is your component name?',
        },

          ]);
          this.componentName=componentName;
      }
        writing() {
        this.fs.copyTpl(
          this.templatePath('Component.html'),
          this.destinationPath(`${this.componentName}.html`),
          { componentName:this.componentName } 
        );
      }
  }

// module.exports=class extends Generator {
//     async prompting() {
//       this.answers = await this.prompt([{
//         type    : 'input',
//         name    : 'title',
//         message : 'Your project title',
//       }]);
//     }
  
//     writing() {
//       this.fs.copyTpl(
//         this.templatePath('index.html'),
//         this.destinationPath('public/index.html'),
//         { title: this.answers.title } // user answer `title` used
//       );
//     }
//   };