#! /usr/bin/env node

import inquirer from "inquirer";

let input = await inquirer.prompt([
  {
    name: "Paragraph",
    type: "input",
    message: "Enter text here",
  },
]);

let words = input.Paragraph.split(" ");

console.log(`The number of total words is equal to ${words.length}`);
