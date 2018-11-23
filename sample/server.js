const express = require('express');
const app = express();
const port = 3000;


/**
 * Mongo db
 */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/demo');


/**
 * Body parser
 */

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/**
 * Route
 */

const productRoute = require('./routes/product.route');

app.use('/products', productRoute);

app.use(express.static('public'));

app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render('index');
});

/**
 * Listen
 */

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});