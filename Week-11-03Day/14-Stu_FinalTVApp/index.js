/* eslint-disable require-jsdoc */
const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
inquirer
    .prompt([
      {
        type: 'list',
        message: 'Chose an action',
        choices: ['Show', 'Actor'],
        name: 'choice',
      },
    ])
    .then(function(inquirerResponse) {
      console.log(inquirerResponse.choice);
      function getUserResponse(inquirerResponse) {
        switch (inquirerResponse) {
          case 'Show':
            getShow();
            break;
          case 'Actor':
            getActor();
            break;
        }
      }
      getUserResponse(inquirerResponse.choice);
    });
function getShow() {
  inquirer
      .prompt([
        {
          type: 'input',
          message: 'Enter the name of the show:',
          name: 'showname',
        },
      ])
      .then(function(inquirerResponse) {
        console.log(inquirerResponse.showname);
        const queryURL = 'http://api.tvmaze.com/singlesearch/shows?q=' + inquirerResponse.showname;
        axios.get(queryURL).then(
            function(showResponse) {
              console.log('Show ' + showResponse.data.name);
              console.log('Genre(s) ' + showResponse.data.genres);
              console.log('Rating: ' + showResponse.data.rating.average);
              console.log('Network: ' + showResponse.data.network.name);
              console.log('Summary: ' + showResponse.data.summary);
              fs.appendFile('show.txt', 'utf8',
                  'Show ' + showResponse.data.name + 'Genre(s) ' +
            showResponse.data.genres +
            'Rating: ' + showResponse.data.rating.average +
            'Network: ' + showResponse.data.network.name +
            'Summary: ' + showResponse.data.summary,
              );
            });
      }
      );
};

