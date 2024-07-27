#!/usr/bin/env node

const fs = require('fs');
const inquirer = require('inquirer');

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
