const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input BookInput {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
    }
    
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
    }
    
    type Mutation {
        loginUser(
            email: String!
            password: String!): Auth
        createUser(
            username: String!
            email: String!
            password: String!): Auth
        saveBook(
            input: BookInput): User
        deleteBook(
            bookId: ID!
            input: BookInput): User
    }`;

    module.exports = typeDefs;