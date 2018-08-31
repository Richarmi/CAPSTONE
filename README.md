# CAPSTONE

This is the Giffy Bank. This server program allows the user
to search for gifs and to select and add them to their collection.
The user can also edit the description, title, and rating of his/her
selected gifs, and delete any of the selected gifs.

The difficulties I faced were being unable to cover the entire
selected gif's modal. This will make the edit form's text describing
the text boxes unable to render as they are made colored white to contrast
the modal's dark background, and the modal's background ends are also white.
This occurs for when the gif's picture size is too big.

Another challenge I faced was being unable to make multiple commits in
the project since the entire project was made of two smaller projects.
This required me to have to always delete the repository and remake it in
order to make a new commit to the project every time.

Technologies Used:
1.) Node Express
    - body parser
    - express session
    - cors
2.) Mongoose & MongoDB

Installation:
First navigate to the project's folder (gifs-json-api)
that will contain the express server.

Then type each of the following commands:

npm install express
npm install ejs
npm install cors
npm install body-parser
npm install express-session
npm install mongo
npm install mongod
npm install mongodb

Run the express server by typing "node server.js"
on your command line.

You can also run the server by typing "nodemon" if
you have installed Nodemon.

Navigate to your folder containing the ReactJS project (react-todo-frontend).
Start the ReactJS server by typing "npm start."


Plan of Action:
1.) Research the Giphy API
2.) Implement the SearchBar and the searching of gifs using the API
3.) Implement the modals for the selected search results and the selected gifs
4.) integrate the the edit form into the selected gifs modal
