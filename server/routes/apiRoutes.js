const express = require('express');
const apiRouter = express.Router();
const apiController = require('../controllers/apiController');

apiRouter.get('/card', apiController.getAllCards);
apiRouter.post('/card', apiController.createCard);
//apiRouter.post('/card', apiController.createCard);


apiRouter.get('/ilustrator', apiController.getAllIlus);
apiRouter.post('/ilustrator', apiController.createIlust);




module.exports = apiRouter