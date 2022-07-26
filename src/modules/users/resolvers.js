import users from "#users"
import jwt from "../../utils/jwt.js"
import { write, read} from  "../../utils/model.js"

export default {
    Query: {
        users: (_, {userId}) => userId ? users.filter(x => x.userId == userId) : users  
    },
    User: {
        userId: (users) => {
            console.log('users')
            return users.userId
        }
    },
     Mutation: {
        postUser: (_, {username, password, email}) => {
            let newUser = {
                userId: users.length ? users.at(-1).userId +1 : 1,
                username: username,
                password: jwt.sign(password),
                email
            }
            users.push(newUser)
            write('users', users)
            return {
                status: 200,
                message: "new user added",
                data: newUser
            }
        }
     }
}