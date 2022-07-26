import categories from "../../database/categories.js"
import subCategories from "../../database/subCategories.js"
import jwt from "../../utils/jwt.js"
import { write, read} from  "../../utils/model.js"
export default {
    Query: {
        categories: (_, {categoryId}) =>  !categoryId ?  categories  : categories.filter(x => x.category_id == categoryId) ,
        subCategories: () => subCategories
    },
    Categories: {
        categoryId: (categories) => {
            return categories.category_id
        },
        categoryName: (categories) => {
            return categories.category_name
        },
        subCategories: (parent) => {
            let arr = subCategories.filter(x => x.category_id == parent.category_id)
            return arr
        }
    },
    subCategories: {
        subCategoryId: (parent) => {
            return parent.sub_category_id
        },
        categoryId: (parent) => parent.category_id,
        subCategoryName: (parent) => {
            return parent.sub_category_name
        },
    },

     Mutation: {
        postCategory: (_, {categoryName}) => {
            let newCtg = {
                category_id: categories.length ? categories.at(-1).category_id +1 : 1,
                category_name: categoryName
            }
            categories.push(newCtg)
            write('categories', categories)
            return {
                status: 200,
                message: "new category added",
                data: newCtg
            }
        }
     }
}