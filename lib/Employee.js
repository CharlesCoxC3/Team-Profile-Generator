const inquirer = require("inquirer");

class Employee {

    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }

    getName(){
        console.log(this.name)
    }

    getId(){
        console.log(this.id)
    }

    getEmail(){
        console.log(this.email)
    }

    getRole(){
        console.log("You are an Employee") 
        console.log(`Your name is ${this.name}`)
        console.log(`Your id is ${this.id}`)
        console.log(`Your email is ${this.email}`)
    }
}

module.exports = Employee;