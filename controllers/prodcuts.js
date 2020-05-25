const Product = require('./../models/products')
// @desc Get all prodcuts
// @route GET /api/v1/prodcuts
// @access Public
exports.getProdcuts = async (req, res, next) => {
    const prodcuts = await Product.find()
    res.send(prodcuts)
}

// @desc Add prodcut
// @route POST /api/v1/prodcuts
// @access Public
exports.addProdcut = async (req, res, next) => {
    const { name, price } = req.body
    const prodcut = await Product.create(req.body)

    res.send(prodcut)
}

// @desc Delete prodcut
// @route DELETE /api/v1/prodcuts/:id
// @access Public
exports.deleteProdcut = async (req, res, next) => {
    console.log(req.params.id)
    const product = await Product.findById(req.params.id)
    if(!product){
       return res.send('Prodcut not found')  
    }
    await product.remove()
    return res.send('Prodcut Deleted')
}