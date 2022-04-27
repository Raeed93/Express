const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all('/promotions', (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

.get('/promotions', (req, res, next) => {
    res.end('Will send all the promotions to you!');
})

.post('/promotions', (req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})

.put('/promotions', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})

.delete('/promotions', (req, res, next) => {
    res.end('Deleting all promotions');
})

.get('/promotions/:promoId', (req, res, next) => {
    res.end('Will send details of the promotion: ' + req.params.promoId + ' to you!');
})

.post('/promotions/:promoId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/' + req.params.promoId);
})

.put('/promotions/:promoId', (req, res, next) => {
    res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end('Will update the promotion: ' + req.body.name +
        ' with details: ' + req.body.description);
})

.delete('/promotions/:promoId', (req, res, next) => {
    res.end('Deleting promotion: ' + req.params.promoId);
});




module.exports = promoRouter;