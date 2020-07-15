const profileDataArgs = process.argv.slice(2, process.argv.length)
const [name, github] = profileDataArgs
//const fs = require('fs')
//const generatePage = require('./src/page-template.js');
//profileDataArr.forEach(profileItem => console.log(profileItem));

  //fs.writeFile('index.html', generatePage(name, github), err => {
    // if (err) throw err;
  
    //console.log('Portfolio complete! Check out index.html to see the output!');
  // });

  const inquirer = require('inquirer')

  inquirer 
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));