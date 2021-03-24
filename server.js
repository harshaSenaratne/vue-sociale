const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});
const fs = require("fs");
const path = require("path");
const  User = require('./models/User');
const  Post = require('./models/Post');

const  resolvers = require('./resolvers');
const MONGO_DB_USER = "HarshaSenaratne";
const MONGO_DB_PASSWORD = "Abc123@3";
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");


mongoose.connect(process.env.DATABASE_URL, {
  auth: {
    user: MONGO_DB_USER,
    password: MONGO_DB_PASSWORD
  },
  useUnifiedTopology: true,
   useNewUrlParser: true 

}
  ).then(
()=> console.log("Database connected")
).catch( err => console.error(err));



const server = new ApolloServer({typeDefs:typeDefs,resolvers:resolvers,context:{User,Post}});

server.listen().then(({url})=>{
    console.log(`Server is running on ${url}`);
});