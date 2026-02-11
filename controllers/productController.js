import Product from "../models/product.js";
import { isAdmin } from "./userController.js";
export function createProduct(req, res) {

    if (!isAdmin(req)) {
        res.json({
            message: "please login as adminstrator to add products"

        })
    }
    const newProductDate = req.body

    const product = new Product(newProductDate)

    product.save().then(() => {
        res.json({

            message: "Product crated"
        })
    }).catch((error) => {
        res.json({
            message: error
        })
    })
}

export function getProducts(req, res) {
    Product.find({}).then((products) => {
        res.json(products)
    })
}