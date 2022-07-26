import {gql} from "apollo-server"
import path from "path"
import fs from "fs"

import resolvers from "./resolvers.js"
let schema = fs.readFileSync(path.join(process.cwd(), 'src', 'modules/products',  'schema.gql'))
export default {
    resolvers,
    typeDefs: gql`${schema}`
}