import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Your Name: '
    }
])