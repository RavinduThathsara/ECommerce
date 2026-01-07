import Product from "../models/product.js";
//import productRouter from "../routes/productRouter.js";

export async function getProduct (req,res){

    try{
          const productList = await Product.find()

        res.json({

             list :productList
             })

    }catch(e){
        res.json({
            message :"Error"
        })
    }
  
}
export function createProduct(req,res) {

    console.log(req.user)
    if(req.user == null){
        res.json({
            message: "you are not logged in "
        })
        return 
    }
     if(req.user.type !="admin"){
        res.json({
            message: "you are not a Admin"
        })
        return 
    }

    const product = new Product(req.body)

    product.save().then(()=>{
        res.json({
            message: "Product Creaated"
         })
    }).catch(()=>{
        res.json({
            message : "Product not Created"
      })
    })
}

export function deleteProduct(req,res){
    Product.deleteOne({name : req.body.name}).then(()=>{
    res.json(
    {
        message : "Student deleted succussfuly"
    })
 }).catch(()=>{
        res.json({
            message : "Student is Delete error"
      })
    })
}
export function getproductByName(req,res){

    const name = req.params.name ;
    Product.find({name :name}).then(
        (productList)=>{
            res.json({
                list :productList
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Error"
            })
        }
    )

}