const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    setOfficeNumber() {

        this.officeNumber += 1
        console.log(`Your office number is ${this.officeNumber}`)
    }
}

    
const manager = new Manager ('aaa', 'nddd', 'ananan', 0)

console.log("This is for the Manager")
manager.getRole()
manager.setOfficeNumber()

