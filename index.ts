#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let yourBalance = 10000;
let yourPin = 1980;

console.log(chalk.bgWhite.black("Hello welcome to Bank Al Habib Limited"));

let pinAnswer = await inquirer.prompt([
  { name: "pin", type: "number", message: "please enter your Pin:" },
]);

if (pinAnswer.pin === yourPin)
{
  {
    console.log(chalk.blue.bold("Welcome to your Account"));
  }
  
  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "select your operation",
      choices: ["withdraw", "check balance", "exit"],
    },
  ]);
  if (operationAnswer.operation === "withdraw")
   {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter the amount you want to withdraw:",
      },
    ]);
    if (amountAns.amount > yourBalance) {
      console.log (chalk.red.bold("Insufficient Balance!"));
    } else {
      yourBalance -= amountAns.amount;
      console.log(`You have withdrawn ${amountAns.amount}$ Successfully!`);
      console.log(`Your remaining balance is ${yourBalance}$`);
    }
   }
   else if (operationAnswer.operation === "check balance")
    {console.log("Your current Balance is" + " " + chalk.green ( `${yourBalance}`) + "$")}
   else if (operationAnswer.operation === "exit")
    {console.log(chalk.bgMagentaBright.black("Thank You for choosing Bank Al Habib!"))}
}
   
   else{console.log(chalk.red.bold("Incorrect Pin !!!")) };

