function createHtml(managerCard, engineerCards, internCards) {
    const htmlTemplate = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="./src/css/style.css">
    </head>
    <body>
        <nav>
            <h1>My Team</h1>
        </nav>
        <main>
            <div class="manager">
                <div class="manager-card">
                    <h2>Manager</h2>
                    ${managerCard}
                </div>
            </div>
            <div class="employees">
                <div class="engineers">
                    <h2>Engineers</h2>
                    <div class="engineer-cards">
                        ${engineerCards}
                    </div>
                </div>
                <div class="interns">
                    <h2>Interns</h2>
                    <div class="intern-cards">
                        ${internCards}
                    </div>
                </div>
            </div>
        </main>
    </body>
    </html>`
    return htmlTemplate
}

module.exports = createHtml