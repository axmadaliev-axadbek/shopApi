import products from "../../database/products.js"
// import { write, read} from  "../../utils/model.js"
export default {
    Query: {
       products: (_, {productId, model, color, price, productName}) =>  {
            return products.filter( product => {
                let byId = productId ?  product.product_id == productId : true 
                let byModel = model ?   product.model == model : true 
                let byColor = color ?   product.color == color : true 
                let byPrice = price ?   product.price == price : true 
                let byProductName = productName ?  product.product_name == productName : true 
                return byId && byColor && byModel && byPrice && byProductName
            })
       }
    },
    Products: {
        productId: (parent) => {      
            return parent.product_id
        },
        productName: (parent) => {          
            return parent.product_name
        },
        model: (parent) => {          
            return parent.model
        },
        color: (parent) => {          
            return parent.color
        },
        price: (parent) => {          
            return parent.price
        },
        subCategoryId: (parent) => {          
            return parent.sub_category_id
        },

    },

     Mutation: {
        postProduct: (_, {subCategoryId, model, color, price, productName}) => {
            let newPr = {
                product_id: products.length ? products.at(-1).product_id +1 : 1,
                sub_category_id: subCategoryId,
                model,
                color,
                price,
                product_name: productName
            }
            products.push(newPr)
            // write('products', products)
            return {
                status: 200,
                message: "new subCategory added",
                data: newPr
            }
        }
     }
}