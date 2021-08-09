// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const util = require('util')
const generateMardown = require('./utils/generateMarkdown')
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
         type: 'input',
         name: 'github',
         message: 'What is your GitHub user name?'

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
   
           },
           {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?'
   
           },
           {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project?'
   
           },
           {
            type: 'list',
            name: 'license',
            message: 'Which license should your project?',
            choices: ['MIT','APACHE 2.0', 'GPL 3.0', 'BSD 3'],  
   
           },
           {
            type: 'input',
            name: 'test',
            message: 'what command should be run to run test?',
            default: 'npm test',
             
   
           },
           {
           type: 'input',
           name: 'installation',
           message: 'what command should be run to install dependencies?',
           default: 'npm i'
           }

           




    ])};

    const init = () => {
        questions()
          .then((answers) => writeFileAsync('readme.md', generateMardown(answers)))
          .then(() => console.log('Successfully wrote to ReadMe.md'))
          .catch((err) => console.error(err));
      };
      

// Function call to initialize ap

init();
