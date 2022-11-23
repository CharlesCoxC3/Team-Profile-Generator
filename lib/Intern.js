const Employee = require('./Employee');
const inquirer = require("inquirer");
const Manager = require("./Manager");



class Intern extends Employee {
    constructor(nameInput, id, email, school){
        super(nameInput, id, email);
        this.school = school;
    }

    getSchool() {
        return this.getSchool
    }


    getRole(){
        return "Intern"
    }
}

module.exports = Intern