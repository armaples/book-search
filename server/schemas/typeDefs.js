const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book!]!
    }

    type Book {
        bookId: ID!
        authors: [String]
        description: String!
        title: String!
        image: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        getUser: User
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
            savedBooks: [String]
            bookId: ID!
            authors: [String]
            description: String!
            title: String!
            image: String): User
        deleteBook(
            savedBooks: [String]
            bookId: ID!): User
    }`;

    module.exports = typeDefs;