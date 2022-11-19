const Employee = require('./Employee')
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    
    async init(){
        console.log("This is for the Manager");
    await super.getName();
    await super.getEmail();

        }

    setOfficeNumber() {
        inquirer
        .prompt([
            {
                type: "input",
                name: "office",
                message: "What is your office number?"
            }
        ])
        .then(valoffice => {
            this.officeNumber = valoffice
            console.log(`Your office number is ${this.officeNumber}`)
        })
    }
}

    

module.exports = Manager