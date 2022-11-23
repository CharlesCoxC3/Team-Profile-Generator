const Employee = require('./Employee')




class Manager extends Employee {
    constructor(nameInput, id, email, officeNumber){
        super(nameInput, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager"
    }
}

//const manager = new Manager(getName(n), getId(i), getEmail(e), getOfficeNumber(o));
module.exports = Manager
