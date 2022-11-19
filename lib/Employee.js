const inquirer = require("inquirer");

class Employee {

    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }

/*    init() {

        inquirer.prompt([
    
            {
                type: 'list',
                name: 'role',
                message: 'What is your role on the team?',
                choices: ['Manager','Engineer', 'Intern']

            },
    
        ]).then((responses)=>{
            console.log(Object.entries(responses))
            this.getRole()
            for (const [key, value] of Object.entries(responses)){

            } 

        
        //    let contents = fs.readFileSync("template.README.md", "utf8")
    
        
            //console.log(Object.entries(responses))
        //    for (const[key, value] of Object.entries(responses)){
        //        contents = contents.replaceAll(`{${key}}`, value)
        //    }
            
        //    fs.writeFileSync("README.md", contents)
        })
    
    
    } */

    async getName(){
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
            return(`Your name is ${value}`)}
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
            this.id = valEmail
            console.log(`Your id is ${this.id}`)
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
            this.email = valEmail
            console.log(`Your email is ${this.email}`)
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
            for (const [key, value] of Object.entries(valRole)){
                return `Your role will be switched from employee to ${value}`
            } 
        })
        
    }
}

module.exports = Employee;