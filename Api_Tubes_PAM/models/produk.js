'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    //fungsi untuk menambahkan produk
    static addProduk({namaProduk, deskripsiProduk, hargaProduk, urlGambar}){
     return this.create({ nama_produk: namaProduk, deskripsi_produk: deskripsiProduk, harga_produk: hargaProduk, url_gambar: urlGambar }); 
    }

    //fungsi untuk delete produk
    static deleteProduk(id){
      return this.destroy({ where: { id: id } })
    }

    //fungsi untuk update produk
    static updateProduk({ namaProduk, deskripsiProduk, hargaProduk, urlGambar },id){
      return this.update({ nama_produk: namaProduk, deskripsi_produk: deskripsiProduk, harga_produk: hargaProduk, url_gambar: urlGambar }, { where:{id: id} })
    }

    //fungsi untuk mengambil data produk berdasarkan id
    static getProdukById(id){
      return this.findOne({ where: { id: id } });
    }
  };
  Produk.init({
    nama_produk: DataTypes.STRING,
    deskripsi_produk: DataTypes.TEXT,
    harga_produk: DataTypes.STRING,
    url_gambar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produk',
  });
  return Produk;
};