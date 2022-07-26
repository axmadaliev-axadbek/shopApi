import { ApolloServer, gql } from "apollo-server";
import fs from 'fs'
import path from 'path'
import schema from "./modules/index.js"
import { ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
const PORT = process.env.PORT || 7000



const server = new ApolloServer({
    schema,
    introspection: true

})


server.listen(PORT).then(({url}) => console.log(url))