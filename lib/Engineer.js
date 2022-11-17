const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
      
        console.log(`Your github is https://github.com/${this.github}`)
    }
    
}

const engineer = new Engineer ('aaa', 'nddd', 'ananan', 'c3')

console.log("This is for the Engineer")
engineer.super.getRole()
engineer.getGithub()