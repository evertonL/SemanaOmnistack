const {Router} = require('express');
const DevControlller = require('./controllers/DevControllers');
const SearchController = require('./controllers/SearchController');
// const PointSchema = require('./models/utils/PointSchema');

const routes = Router();

routes.get('/devs', DevControlller.index);
routes.post('/devs', DevControlller.store);

routes.get('/search', SearchController.index)

module.exports = routes;