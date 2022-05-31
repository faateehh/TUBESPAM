const { Produk } = require('../../models');

module.exports = {
  home: async (req, res) => {
    const produks = await Produk.findAll(); 
    res.render('pages/home', {produks: produks});
  },
  
  api: require('./api'),
}