const router = require('express').Router();

const controller = require('../controllers');
const api = require('./api');

router.get('/', controller.home);

router.use('/api', api);

module.exports = router;
