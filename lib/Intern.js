const Employee = require('./Employee')
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        
    }

    getRole(){
        super.getRole()
        return "Intern"
    }
}

console.log("this is an intern")

module.exports = Intern