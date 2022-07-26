import { makeExecutableSchema } from '@graphql-tools/schema'

import userModel from './users/index.js'
import categoryModel from './categories/index.js'
import subCategoryModel from './subCategories/index.js'
import productModel from './products/index.js'

const schema =  makeExecutableSchema({
    typeDefs: [
        userModel.typeDefs,
        categoryModel.typeDefs,
        subCategoryModel.typeDefs,
        productModel.typeDefs
    ],
    resolvers: [
        userModel.resolvers,
        categoryModel.resolvers,
        subCategoryModel.resolvers,
        productModel.resolvers
    ]
})

export default schema