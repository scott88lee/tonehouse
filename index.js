// IMPORTS
const express = require('express');
const handlebars = require('express-handlebars');
const controller = require('./server/controller');
const app = express();

// Set Handlebars to be the default view engine
const handlebarsConfig = {
   extname: '.handlebars',
   layoutsDir: 'views',
   defaultLayout: 'layout'
};

app.engine('handlebars', handlebars.create(handlebarsConfig).engine);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// Public Folder and Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get('/', controller.getHome);
app.get('*', (req,res) => {res.send('404 not found')});

app.listen(3000, () => console.log('Listen port: 3000'))