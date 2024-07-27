#!/usr/bin/env node

const fs = require('fs');
const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const argv = require('yargs').argv;

const sourceAppTW = argv.source || path.join(__dirname, 'src/AppTW');
const destinationAppTW = argv.destination || path.join(process.cwd(), 'src/');

async function RunReactLoginSignInTW() {
  try {
      await fs.copy(sourceAppTW, destinationAppTW);
      console.log('The Login and SignUp templete Successfully Createed');
  } catch (err) {
      console.error('Error copying folder:', err);
  }
}

async function main() {
  try {
    // Prompt the user to select an option from the list
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'selection',
        message: 'Select an option:',
        choices: ['AppTW', 'App'],
      }
    ]);

    const { selection } = answers;

    // Handle the user's selection
    switch (selection) {
      case 'AppTW':
        await RunReactLoginSignInTW();
        break;
      case 'App':
        console.log('Selected App. Implement function here.');
        // Implement other functions or logic for 'App' here
        break;
      default:
        console.log('Invalid selection.');
    }
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

main();
