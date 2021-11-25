class webBuilding {
    constructor(manager, engineer, intern) {
        this.manager = manager;
        this.engineer = engineer;
        this.intern = intern;
    }

    webTest() {
        console.log(this.manager);
        console.log(this.engineer);
        console.log(this.intern);
    }

    // Generate card for each team members
    generateTeamCards() {
        var teamCards = `<div class="row teamContent">`;
        teamCards = teamCards + this.generateCard(this.manager);
        teamCards = teamCards + `            </div>
            <div class="row teamContent">`;
        for (var i = 0; i < this.engineer.length; i++) {
            teamCards = teamCards + this.generateCard(this.engineer[i]);
        }
        teamCards = teamCards + `            </div>
            <div class="row teamContent">`;
        for (var i = 0; i < this.intern.length; i++) {
            teamCards = teamCards + this.generateCard(this.intern[i]);
        }
        teamCards = teamCards + `            </div>`;
        return teamCards;
    }

    // Generate a Card div containing a single team member's info
    generateCard(teamMember) {
        var specialInfo = '';
        if (teamMember.getRole() == 'Manager') {
            specialInfo = `Office # : ${teamMember.getOfficeNumber()}`;
        } else {
            if (teamMember.getRole() == 'Engineer') {
                specialInfo = `GitHub : <a href='https://github.com/${teamMember.getGithub()}' target="_blank">${teamMember.getGithub()}</a>`;
            } else {
                specialInfo = `School : ${teamMember.getSchool()}`;
            }
        }
        return `
                <div class="card">
                    <div class="cardHeader ${teamMember.getRole()}">
                        <h2 class="MemberName">${teamMember.getName()}</h2>
                        <h2 class="MemberRole">${teamMember.getRole()}</h2>
                    </div>
                    <div class="cardBody">
                        <h3 class="ID">ID : ${teamMember.getID()}</h3>
                        <h3 class="Email">Email : <a href='mailto:${teamMember.getEmail()}'>${teamMember.getEmail()}</a></h3>
                        <h3 class="SpecialInfo">${specialInfo}</h3>
                    </div>
                </div>
`;
    }

    // Generate the content for index.html
    generatePage() {
        return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile</title>
    </head>

    <body>
        <header class="jumbotron text-center banner">
            <h1 class="title">My Team</h1>
        </header>

        <main>
            ${this.generateTeamCards()}
        </main>
    </body>
</html>
`;
    }
}

module.exports = webBuilding;