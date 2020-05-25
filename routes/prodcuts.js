const express = require('express')
const router = express.Router()
const { getProdcuts, addProdcut, deleteProdcut }  = require('../controllers/prodcuts') 

router.route('/')
.get(getProdcuts)
.post(addProdcut)

router.route('/:id').delete(deleteProdcut)


module.exports = router