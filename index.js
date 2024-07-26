const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'fileName',
    message: 'Enter the file name:',
  },
];

inquirer.prompt(questions).then((answers) => {
  const { fileName } = answers;
  fs.writeFile(fileName, '', (err) => {
    if (err) {
      console.error('Error creating file:', err);
    } else {
      console.log(`File ${fileName} created successfully!`);
    }
  });
});
