const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(nameInput, id, email, github){
        super(nameInput, id, email);
        this.github = github;
    }

    getGitHub() {
        return this.github
    }
        
    getRole(){
        return "Engineer"
    }
    
}


module.exports = Engineer