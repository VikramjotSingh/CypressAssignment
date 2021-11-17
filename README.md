This document is for installing Cypress and placing simple order on following website "http://automationpractice.com/index.php"

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

- Install Cypress
- Fork this repo
  - If you want to experiment with running this project in Continous Integration, you'll need to fork it first.
  - After forking this project in Github, run these commands:
  - Clone this repo to a local directory
    `git clone https://github.com/VikramjotSingh/CypressAssignment.git`
  - cd into the cloned repo `cd CypressAssignment`
  - install the node_modules `npm install`
  - start the local webserver `npm start`
  - The npm start script will spawn a webserver on port 8888 which hosts the TodoMVC app.
  - You can verify this by opening your browser and navigating to: http://localhost:8888
  - You should see the TodoMVC app up and running. We are now ready to run Cypress tests.
  - launch the cypress test runner
    `npm run cy:open` shortcut: you can use command npm run local:open that uses start-server-and-test to start local server and open Cypress. When you close Cypress, the local server is stopped automatically. Similarly you can use npm run local:run to start the server, run Cypress tests headlessly and close the server.