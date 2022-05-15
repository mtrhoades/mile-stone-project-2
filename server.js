// IMPORTS/DEPENDENCIES
const express = require('express'); // require express to use in node.
const cors = require('cors'); // require cors to use for making API requests.


// CONFIGURATION
const app = express(); // make variable for using express in node.js
require('dotenv').config(); // use the .env file for PORT #
const PORT = process.env.PORT; // make variable for the PORT # in the .env file


// MIDDLEWARE
app.use(cors()); // uses cors for all API requests between requests and responses.
app.use(express.json()); // retrieves data through express in JSON format between requests and responses.
app.set('views', __dirname + '/views'); // used to show files from views folder (all the jsx)
app.set('view engine', 'jsx'); // setting the view engine in JSX.
app.engine('jsx', require('express-react-views').createEngine()); // ^ pulling from REACT 



// ROOT ROUTE
app.get('/', (req, res) => { // intial stub route for intro page.
    res.send('Welcome to my amazing STOCK PORTFOLIO MANAGER application!!!')
});


// CONTROLLER ROUTE
const stocksController = require('./controllers/stock_portfolio_controller'); // route for controller to use all CRUD operations.
app.use('/stocks', stocksController);


// SERVER LISTENER
app.listen(PORT, () => { // connecting to server and console logging in terminal 
    console.log('We out here on PORT', PORT)
});

