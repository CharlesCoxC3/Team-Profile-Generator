const Employee = require('./Employee')
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    
    init(){
        console.log("This is for the Manager");
        super.getName();
        super.getId();
        super.getEmail();
        this.setOfficeNumber();

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