import products from "../../database/products.js"
import subCategories from "../../database/subCategories.js"
// import { write, read} from  "../../utils/model.js"
export default {
    Query: {
       subCategories: (_, {subCategoryId}) =>  !subCategoryId ? subCategories : subCategories.filter(x => x.sub_category_id == subCategoryId) ,
    },
    subCategories: {
        subCategoryId: (parent) => {
            return parent.sub_category_id
        },
        categoryId: (parent) => {
            return parent.category_id
        },
        subCategoryName: (parent) => {
            return parent.sub_category_name
        },
        products: (parent) => {
            let arr = products.filter(x => x.sub_category_id == parent.sub_category_id)
            return arr
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
        postSubCategory: (_, {subCategoryName, categoryId}) => {
            let newSubCtg = {
                sub_category_id:subCategories.length ? subCategories.at(-1).sub_category_id +1 : 1,
                sub_category_name: subCategoryName,
                category_id: categoryId
            }
            subCategories.push(newSubCtg)
            // write('subCategories', subCategories)
            return {
                status: 200,
                message: "new subCategory added",
                data: newSubCtg
            }
        }
     }
}