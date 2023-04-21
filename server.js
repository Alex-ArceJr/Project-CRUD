 // require dependencies
    const express = require('express');
    const logger = require('morgan');

    // initialize express application
    const app = express();

    // configure application settings
    app.set('view engine', 'ejs');
    //  this sets the default view engine to be "ejs"

    // mount middlware
    app.use(logger('dev'));
    // http logger middleware
    app.use(express.static('public'));
    // express static middleware - makes static assets available to the client

    // mount routes (we'll add these shortly)

    // tell the application to listen for requests
    app.listen(3005, () => {
        console.log('express is listening on port:3005');
    });
