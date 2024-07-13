#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";


// ======================== USER NAME ====================
let quiz: boolean = true
while (quiz) {
    let userName = await inquirer.prompt({
        name: "name",
        type: "input",
        message: "Enter Your Name First : "
    })
    console.log(chalk.blueBright("***************************************************************************"))
    console.log(chalk.magentaBright.bold.underline("\n\t\t\t\tTYPESCRIPT QUIZ\n"))
    console.log(chalk.blueBright("***************************************************************************"))
    let player = ` \n${userName.name} Start your Quiz\n `;
    console.log(chalk.blackBright.bold(player))

    // ============== QUESTION 01=================
    let points: number = 0
    while (points <= 1) {
        let question1 = await inquirer.prompt({
            name: "qno1",
            type: "list",
            message: "What is TypeScript?",
            choices: [{ value: `A) A JavaScript framework` },
            { value: `B) A JavaScript library` },
            { value: `C) A superset of JavaScript that adds static typing` },
            { value: `D) A CSS preprocessor` }]
        })

        if (question1.qno1 === `C) A superset of JavaScript that adds static typing`) {
            console.log(chalk.yellow.bold.underline("\nCorrect Answer\n"));
            points++
        } else {
            console.log(chalk.red.underline.bold("\nIncorrect Answer\n"))
        }

        // ============== QUESTION 02=================
        let question2 = await inquirer.prompt(
            {
                name: "qno2",
                type: "list",
                message: "How do you define a variable with a specific type in TypeScript?",
                choices: [{ value: `A) let name: string = "John";` },
                { value: `B) var name = "John";` },
                { value: `C) name: string = "John";` },
                { value: `D) string name = "John";` }]
            })


        if (question2.qno2 === `A) let name: string = "John";`) {
            console.log(chalk.yellow.bold.underline("\nCorrect Answer\n"));
            points++
        } else {
            console.log(chalk.red.underline.bold("\nIncorrect Answer\n"))
        }
        // ============== QUESTION 03=================
        let question3 = await inquirer.prompt(
            {
                name: "qno3",
                type: "list",
                message: "What does the ? symbol mean in TypeScript when used in a type declaration?",
                choices: [{ value: "A) The property is optional" },
                { value: "B) The property is required" },
                { value: "C) The property is a number" },
                { value: "D) The property is a string" }]
            })

        if (question3.qno3 === "A) The property is optional") {
            console.log(chalk.yellow.bold.underline("\nCorrect Answer\n"));
            points++
        } else {
            console.log(chalk.red.underline.bold("\nIncorrect Answer\n"))
        }

        // ============== QUESTION 04=================
        let question4 = await inquirer.prompt(
            {
                name: "qno4",
                type: "list",
                message: "How do you declare a function that takes a number and returns a string in TypeScript?",
                choices: [{ value: "A) function convert(num: number): string { return num.toString(); }" },
                { value: "B) function convert(num): string { return num.toString(); }" },
                { value: "C) function convert(num: number) { return num.toString(); }" },
                { value: "D) function convert(num: string): number { return num.toString(); }" }]
            })


        if (question4.qno4 === "A) function convert(num: number): string { return num.toString(); }") {
            console.log(chalk.yellow.bold.underline("\nCorrect Answer\n"));
            points++
        } else {
            console.log(chalk.red.underline.bold("\nIncorrect Answer\n"))
        }

        // ============== QUESTION 05=================
        let question5 = await inquirer.prompt(
            {
                name: "qno5",
                type: "list",
                message: "Which of the following is a correct way to define an interface in TypeScript?",
                choices: [{ value: `A) interface Person { name: string; age: number; }` },
                { value: `B) type Person { name: string; age: number; }` },
                { value: `C) struct Person { name: string; age: number; }` },
                { value: `D) class Person { name: string; age: number; }` }]
            })


        if (question5.qno5 === `A) interface Person { name: string; age: number; }`) {
            console.log(chalk.yellow.bold.underline("\nCorrect Answer\n"));
            points++
        } else {
            console.log(chalk.red.underline.bold("\nIncorrect Answer\n"))
        }

        // ============== QUESTION 06=================
        let question6 = await inquirer.prompt(
            {
                name: "qno6",
                type: "list",
                message: "How do you create an array of numbers in TypeScript?",
                choices: [{ value: "A) let numbers: number[] = [1, 2, 3];" },
                { value: "B) let numbers: [number] = [1, 2, 3];" },
                { value: "C) let numbers: Array[number] = [1, 2, 3];" },
                { value: "D) let numbers: (number)[] = [1, 2, 3];" }]
            })

        if (question6.qno6 === "A) let numbers: number[] = [1, 2, 3];") {
            console.log(chalk.yellow.bold.underline("\nCorrect Answer\n"));
            points++
        } else {
            console.log(chalk.red.underline.bold("\nIncorrect Answer\n"))
        }

        // ============== QUESTION 07=================
        let question7 = await inquirer.prompt(
            {
                name: "qno7",
                type: "list",
                message: "What is the purpose of TypeScript's never type?",
                choices: [{ value: "A) It represents a value that is always true" },
                { value: "B) It represents a value that is always false" },
                { value: "C) It represents a value that will never occur" },
                { value: "D) It represents a value that can be any type" }]
            })


        if (question7.qno7 === "C) It represents a value that will never occur") {
            console.log(chalk.yellow.bold.underline("\nCorrect Answer\n"));
            points++
        } else {
            console.log(chalk.red.underline.bold("\nIncorrect Answer\n"))
        }

        // ============== QUESTION 08=================
        let question8 = await inquirer.prompt(
            {
                name: "qno8",
                type: "list",
                message: "How do you define a tuple in TypeScript?",
                choices: [{ value: `A) let person: [string, number] = ["John", 30];` },
                { value: `B) let person: { string, number } = ["John", 30];` },
                { value: `C) let person: (string, number) = ["John", 30];` },
                { value: `D) let person: [string, number] = ["John", "30"];` }]
            })

        if (question8.qno8 === `A) let person: [string, number] = ["John", 30];`) {
            console.log(chalk.yellow.bold.underline("\nCorrect Answer\n"));
            points++
        } else {
            console.log(chalk.red.underline.bold("\nIncorrect Answer\n"))
        }


        // ============== QUESTION 09=================
        let question9 = await inquirer.prompt(
            {
                name: "qno9",
                type: "list",
                message: "Which of the following is the correct way to import a module in TypeScript?",
                choices: [{ value: `A) import { ModuleName } from "module";` },
                { value: `B) include { ModuleName } from "module";` },
                { value: `C) require { ModuleName } from "module";` },
                { value: `D) use { ModuleName } from "module` }]
            })

        if (question9.qno9 === `A) import { ModuleName } from "module";`) {
            console.log(chalk.yellow.bold.underline("\nCorrect Answer\n"));
            points++
        } else {
            console.log(chalk.red.underline.bold("\nIncorrect Answer\n"))
        }

        // ============== QUESTION 10=================
        let question10 = await inquirer.prompt(
            {
                name: "qno10",
                type: "list",
                message: "When a code is compiled in TS, what does it check?",
                choices: [{ value: "A) Type Checking" },
                { value: "B) Syntax Error" },
                { value: "C) Error" },
                { value: "D) All of the above" }]
            })

        if (question10.qno10 === "D) All of the above") {
            console.log(chalk.yellow.bold.underline("\nCorrect Answer\n"));
            points++
        } else {
            console.log(chalk.red.underline.bold("\nIncorrect Answer\n"))
        }

    }
    // =====================Score==================  
    console.log(chalk.magentaBright.bold.underline("Score:"))
    console.log(chalk.greenBright.bold(`Your Total points : ${points} out of 10`));

    if (points >= 10) {
        console.log(chalk.magenta.bold.italic("Congratulations!! You Achieved Full Marks In this quiz "))
        break;
    }
    // ====================confimation ==================

    if (points < 10) {
        const confrim = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "Do you want to play quiz again ?",
            choices: [{ value: "Continue" }, { value: "Exit" }]
        })
        if (confrim.ans === "Continue") {
            console.log(chalk.cyanBright.bold("\nt\t\t YOU START YOUR QUIZ AGAIN\t\t\t\n"));
            continue;
        } else {
            console.log(chalk.greenBright.italic("\n\t\t\tYou successfully exit from the Quiz\n"))
            break;
        }
    }
}
