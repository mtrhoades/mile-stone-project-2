// IMPORTS
const express = require('express'); // require express ... again
// require database here:
const pool = require('../models/db');


// VARIABLES
const portfolio = express.Router(); // make variable for using the router.


// ROUTES

// create portfolio route



// read portfolio route
portfolio.get('/', async (req, res) => {
    try {
        const allStocks = await pool.query(
            "SELECT * FROM stocks"
        );

            res.json(allStocks.rows)

    } catch (err) {
        res.status(404).send(err.message)
    }
});


// update portfolio route



// delete portfolio route


module.exports = portfolio;