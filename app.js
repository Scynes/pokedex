const EXPRESS = require('express');

const ENV = require('dotenv');

const WEB_SERVER = EXPRESS();

const LISTENING_PORT = process.env.LISTENING_PORT || 3000;

WEB_SERVER.listen(LISTENING_PORT, () => {

    WEB_SERVER.set('view engine', 'ejs');
    WEB_SERVER.use(EXPRESS.static('public'));
    console.log(`Express server is now listening on ${LISTENING_PORT}`);

})

WEB_SERVER.get('/', (request, response) => {

    // Redner default page
    response.render('landing', {
        pageTitle: 'Landing'
    });
});

