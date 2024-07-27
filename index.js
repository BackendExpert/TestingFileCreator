#!/usr/bin/env node

const fs = require('fs');
const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const argv = require('yargs').argv;

async function RunReactLoginSignInTW() {
  try {
      await fs.copy(sourceTW, destinationTW);
      await fs.copy(sourceAppTW, destinationAppTW);
      await fs.copy(sourcePR, destinationPR);
      await fs.copy(sourceDash, destinationDash);
      console.log('The Login and SignUp templete Successfully Createed');
  } catch (err) {
      console.error('Error copying folder:', err);
  }
}

async function main() {
  try {
    // Prompt the user for a filename
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'filename',
        message: 'Enter the filename to create:',
        validate: (input) => {
          if (!input.trim()) {
            return 'Filename cannot be empty.';
          }
          return true;
        }
      }
    ]);

    const { filename } = answers;

    // Create the file
    fs.writeFile(filename, '', (err) => {
      if (err) {
        console.error(`Error creating file: ${err.message}`);
      } else {
        console.log(`File ${filename} created successfully.`);
      }
    });
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

main();
