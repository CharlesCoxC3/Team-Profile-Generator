const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs")
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))

const { createManagerCard, createEngineerCards, createInternCards } = require("./src/cards") 
const createHtml = require("./src/html")

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the managers ID number?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
    },
    {
        type: 'input',
        name: 'officeNum',
        message: "What is the managers office number?",
    },
    {
        type: 'loop',
        name: "employees",
        message: "Do you want to add another employee?",
        questions: [
            {
                type: 'list',
                name: 'type',
                message: 'What type of employee do you want to add?',
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the employees ID number?',
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the employees email address?",
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the employees github username?',
                when: (employee) => employee.type === 'Engineer'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the name of the employees school?',
                when: (employee) => employee.type === 'Intern'
            },
        ]
    }
])
.then((value) => {
    const manager = new Manager(value.nameinput, value.id, value.email, value.officeNum)
    const employees = value.employees
    const engineers = []
    const interns = []

    for(let i = 0; i < employees.length; i++) {
        const e = employees[i]
        if (e.type === "Engineer") {
            const engineer = new Engineer(e.name, e.id, e.email, e.github)
            engineers.push(engineer)
        } else if (e.type === "Intern") {
            const intern = new Intern(e.name, e.id, e.email, e.school)
            interns.push(intern)
        }
    }

    const managerCard = createManagerCard(manager)
    const engineerCards = createEngineerCards(engineers)
    const internCards = createInternCards(interns)
    const html = createHtml(managerCard, engineerCards, internCards)


    fs.writeFile('index.html', html, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
})

