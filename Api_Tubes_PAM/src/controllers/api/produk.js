const { Produk } = require('../../../models');

module.exports = {
  getAll: (req, res) => {
    Produk.findAll()
      .then((produks) => res.json(produks))
      .catch((err) => res.json(err));
  },

  add: (req, res) => {
    Produk.addProduk(req.body)
      .then((produk) =>
        res.json(produk))
      .catch((err) => res.json(err));
  },

  delete: (req, res) => {
    Produk.deleteProduk(req.params.id)
      .then(() => res.json({ msg: `Produk berhasil dihapus` }))
      .catch((err) => res.json(err));
  },

  update: (req, res) => {
    Produk.updateProduk(req.body, req.params.id)
      .then(() => res.json({ msg: "Update data Produk berhasil" }))
      .catch((err) => res.json(err));
  },

  getById: (req, res) => {
    Produk.getProdukById(req.params.id)
      .then((produk) => res.json(produk))
      .catch((err) => res.json(err));
  },

};