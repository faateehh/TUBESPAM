const router = require('express').Router();
const { api } = require('../controllers');
const { produk, validate } = require('../lib/validator.js');

//endpoint management Artikel
router.get('/get_all_produk', api.produk.getAll);
router.get('/get_produk_by_id/:id', api.produk.getById);
router.post('/add_produk',produk(), validate, api.produk.add);
router.delete('/delete_produk/:id', api.produk.delete);
router.put('/update_produk/:id',produk(), validate, api.produk.update);

module.exports = router;