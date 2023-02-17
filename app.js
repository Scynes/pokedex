/**
 * Imports the express server.
 */
const EXPRESS = require('express');

/**
 * Application variables for running the application.
 */
const ENV = require('dotenv').config();

/**
 * References the express server running.
 */
const WEB_SERVER = EXPRESS();

/**
 * Imports the body parser middleware handler.
 */
const BODY_PARSER = require('body-parser');

/**
 * Imports the database of pokemon for use.
 */
const POKE_DATABASE = require('./models/pokemon.js');

/**
 * Imports the types of pokemon (for color mapping).
 */
const POKE_TYPES = require('./models/types.js')

/**
 * Default application listening port.
 */
const LISTENING_PORT = process.env.PORT || process.env.LISTENING_PORT;

/**
 * Listens for connections on the specified port and builds
 * intial application handlers.
 */
WEB_SERVER.listen(LISTENING_PORT, () => {
    WEB_SERVER.use(BODY_PARSER.json());
    WEB_SERVER.use(EXPRESS.static('public'));
    WEB_SERVER.use(EXPRESS.static('controllers'));
    WEB_SERVER.set('view engine', 'ejs');
    console.log(`Express server is now listening on ${LISTENING_PORT}`);
})

WEB_SERVER.get('/', (request, response) => {

    // Redner default page
    response.render('landing', {
        pageTitle: 'Landing'
    });
});

WEB_SERVER.get('/pokemon/:poke_index', (request, response) => {
    const POKE_DATA = POKE_DATABASE[request.params.poke_index];

    response.render('show-pokemon', {
        data: POKE_DATA,
        type: POKE_DATA.type[0].toLowerCase(),
        pageTitle: `${POKE_DATA.name} ID: ${POKE_DATA.id}`
    })
});