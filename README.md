This document is for installing Cypress and placing simple order on following website "http://automationpractice.com/index.php"

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

- Install Cypress [Use following link for Installing Cypress "https://docs.cypress.io/guides/getting-started/installing-cypress#Switching-browsers"]
- Clone this repo to a local directory `git clone https://github.com/VikramjotSingh/CypressAssignment.git`
- cd into the cloned repo `cd CypressAssignment`
- install the node_modules `npm install`
- launch the cypress test runner `npx cypress open`
  - This will open a cypress window [Or you can use `npx cypress run` command, which will run the test in headless mode.]
- Click on `placeOrder.js` to execute the test order
- The test execution html report will be generated in reports folder.