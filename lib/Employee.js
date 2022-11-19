const inquirer = require("inquirer");

class Employee {

    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }

    getName(){
        inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?"
            }
        ])
        .then(valName => {
            console.log(Object.entries(valName))
            for (let [key, value] of Object.entries(valName)){
            console.log(`Your name is ${value}`)}
        })
            

        
    }

    getId(){
        inquirer
        .prompt([
            {
                type: "input",
                name: "id",
                message: "What is your ID number?"
            }
        ])
        .then(valId => {
            console.log(Object.entries(valId))
            for (let [key, value] of Object.entries(valId)){
            console.log(`Your Id number is ${value}`)}
        })


    }

    getEmail(){
        inquirer
        .prompt([
            {
                type: "input",
                name: "email",
                message: "What is your Email?"
            }
        ])
        .then(valEmail => {
            console.log(Object.entries(valEmail))
            for (let [key, value] of Object.entries(valEmail)){
            console.log(`Your email will be set to ${value}`)}
        })

    }

    getRole(){
        inquirer
        .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is your role on the team?',
            choices: ['Manager','Engineer', 'Intern']
        },
        ])
        .then(valRole => {
            console.log(Object.entries(valRole))
            for (let [key, value] of Object.entries(valRole)){
            console.log(`Your role will be switched to ${value}`)}
        })
        
    }
}

module.exports = Employee;