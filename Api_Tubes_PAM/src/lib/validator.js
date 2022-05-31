const { body, validationResult } = require('express-validator');


const produk = () => {
  return [
    body('namaProduk', 'Nama Produk tidak boleh kosong').isLength({ min: 1 }).trim(),
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(400).json({ errors: extractedErrors })
}


module.exports = {
  produk,
  validate,
}