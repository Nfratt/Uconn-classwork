// Load the NPM Package inquirer
// this is all done beause of inquirer
const inquirer = require('inquirer');


// Create a "Prompt" with a series of questions.
inquirer
    .prompt([
    // Here we create a basic text prompt.
      {
        type: 'input',
        message: 'What is your name?',
        name: 'username',
      },
      // Here we create a basic password-protected text prompt.
      {
        type: 'password',
        message: 'Set your password',
        name: 'password',
      },
      // Here we give the user a list to choose from.
      {
        type: 'list',
        message: 'what Pokemon do you choose',
        choices: ['Bulbasaur', 'Squirtle', 'Charmander'],
        name: 'pokemon',
      },
      {
        type: 'checkbox',
        message: 'are you a boy or a girl?',
        choices: ['boy', 'girl', 'neither'],
        name: 'gender',
        default: ['neither'],
      },
      // Here we ask the user to confirm.
      {
        type: 'confirm',
        message: 'Are you sure:',
        name: 'confirm',
        default: true,
      },
    ])
    .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's
    // username and pokemon from the answers.
      if (inquirerResponse.confirm) {
        console.log(`\nWelcome ${inquirerResponse.username}`);
        console.log(`you are a ${inquirerResponse.gender}`);
        console.log(`Your ${inquirerResponse.pokemon} is ready for battle!\n`);
      } else {
        console.log(`
\nThat's okay ${inquirerResponse.username},
come again when you are more sure.\n
`);
      }
    });//
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// eslint-disable-next-line max-len
// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
