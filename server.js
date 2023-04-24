 // require dependencies
    const express = require('express');
    const logger = require('morgan');
    const methodOverride = require('method-override');
    const homeRoutes = require('./routes/home');
    const bookRoutes = require('./routes/books');


    // initialize express application
    const app = express();

    // configure application settings
    //  this sets the default view engine to be "ejs"
    app.set('view engine', 'ejs');
    //expose envirmonent variables
    require('dotenv').config();
    require('./config/database')

    // mount middlware
    app.use(logger('dev'));
    app.use(express.urlencoded({extended: false}));
    app.use(methodOverride('_method'));
    // http logger middleware
    app.use(express.static('public'));
    // express static middleware - makes static assets available to the client

    // mount routes (we'll add these shortly)
    app.use('/', homeRoutes)
    app.use('/books', bookRoutes)

    // tell the application to listen for requests
    app.listen(3005, () => {
        console.log('express is listening on port:3005');
    });
