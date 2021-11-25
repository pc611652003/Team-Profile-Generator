const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const webBuilding = require('./webBuilding');

class teamBuilding {
    constructor() {
        this.manager;
        this.engineer = [];
        this.intern = [];
    }

    initializeTeam() {
        inquirer
            .prompt([{
                type: "text",
                name: "managerName",
                message: "What is the team manager's name?",
                validate: managerName => {
                    if (managerName) {
                        return true;
                    } else {
                        console.log("Please enter the team manager's name!");
                        return false;
                    }
                }
            },
            {
                type: "text",
                name: "employeeID",
                message: "What is the team manager's employee ID?",
                validate: employeeID => {
                    if (employeeID) {
                        return true;
                    } else {
                        console.log("Please enter the team manager's employee ID!");
                        return false;
                    }
                }
            },
            {
                type: "text",
                name: "email",
                message: "What is the team manager's email?",
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log("Please enter the team manager's email!");
                        return false;
                    }
                }
            },
            {
                type: "text",
                name: "officeNumber",
                message: "What is the team manager's office number",
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log("Please enter the team manager's office number!");
                        return false;
                    }
                }
            }])
            .then(managerData => {
                this.manager = new Manager(managerData.managerName, 
                                            managerData.employeeID, 
                                            managerData.email,
                                            managerData.officeNumber);
                console.log(this.manager);
                this.confirmAddMember();                   
            })
    }

    confirmAddMember() {
        inquirer.prompt({
            type: "list",
            name: "nextMember",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "Done"]
        })
        .then(teammateChoice => {
            if (teammateChoice.nextMember == "Engineer") {
                console.log("Engineer");
                this.addEngineer();
            } else if (teammateChoice.nextMember == "Intern") {
                console.log("Intern");
                this.addIntern();
            } else {
                console.log("Done");
                new webBuilding(this.manager, this.engineer, this.intern).webTest();
            }
        })        
    }

    addEngineer() {
        inquirer.prompt([{
            type: "text",
            name: "engineerName",
            message: "What is the engineer's name?",
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name!");
                    return false;
                }
            }
        },
        {
            type: "text",
            name: "employeeID",
            message: "What is the engineer's employee ID?",
            validate: employeeID => {
                if (employeeID) {
                    return true;
                } else {
                    console.log("Please enter the engineer's employee ID!");
                    return false;
                }
            }
        },
        {
            type: "text",
            name: "email",
            message: "What is the engineer's email?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email!");
                    return false;
                }
            }
        },
        {
            type: "text",
            name: "gitHubusername",
            message: "What is the engineer's GitHub username?",
            validate: gitHubusername => {
                if (gitHubusername) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub username!");
                    return false;
                }
            }
        }])
        .then(engineerData => {
            const newMember = new Engineer(engineerData.engineerName, 
                                            engineerData.employeeID, 
                                            engineerData.email,
                                            engineerData.gitHubusername);
            this.engineer.push(newMember);
            console.log(this.engineer);

            this.confirmAddMember();
        })
    }

    addIntern() {
        inquirer.prompt([{
            type: "text",
            name: "internName",
            message: "What is the Intern's name?",
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log("Please enter the Intern's name!");
                    return false;
                }
            }
        },
        {
            type: "text",
            name: "employeeID",
            message: "What is the intern's employee ID?",
            validate: employeeID => {
                if (employeeID) {
                    return true;
                } else {
                    console.log("Please enter the intern's employee ID!");
                    return false;
                }
            }
        },
        {
            type: "text",
            name: "email",
            message: "What is the intern's email?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter the intern's email!");
                    return false;
                }
            }
        },
        {
            type: "text",
            name: "school",
            message: "What is the intern's school?",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        }])
        .then(internData => {
            const newMember = new Intern(internData.internName, 
                                            internData.employeeID, 
                                            internData.email,
                                            internData.school);
            this.intern.push(newMember);
            console.log(this.intern);

            this.confirmAddMember();
        })
    }
}

module.exports = teamBuilding;