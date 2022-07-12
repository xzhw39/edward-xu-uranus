// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// TODO: Create an array of questions for user input


const generatehtml = ({name, email, github, linkedin}) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${email}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>
`;


inquirer.prompt([
  {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
  {
  type: 'input',
  name: 'email',
  message: 'What is your GitHub email address?',
  },
  {
  type: 'input',
  name: 'linkedin',
  message: 'What is your linkedin?',
  },
  {
      type: 'input',
      name: 'employeeID',
      message: 'What is your employeeID?',
      },
  ]).then((answers) => { 
    const htmlPageContent = generatehtml(answers);

      fs.writeFile('index.html', htmlPageContent, (err) => err ? console.log(error) : console.log('successfully created a HTML file'))
  })
  




