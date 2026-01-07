import express from 'express';

/*const productRouter = express.Router();

productRouter.get("/",(req,res) =>{

   // console.log("This is get request for student router ")

    res.json({
        message :"This is get request for products router"
    })
})

productRouter.post("/",(req,res) =>{

    //console.log("This is post request for student router ")

    res.json({
        message :"This is post request for products router"
    })
})

export default productRouter;
*/

import { createProduct, deleteProduct, getProduct, getproductByName } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/',getProduct);
productRouter.get("/:name", getproductByName);
productRouter.post('/',createProduct);
productRouter.delete('/',deleteProduct);

export default productRouter;