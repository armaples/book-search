import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                password
            }
        }
    }
`;

export const ADD_USER = gql`
     mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                password
            }
        }
     }
`;

// not sure about this one
export const SAVE_BOOK = gql`
     mutation saveBook($savedBooks: [Book!]!, $bookId: String!) {
        saveBook(savedBooks: $savedBooks) {
            token
            user {
                _id
                savedBooks {
                    bookId
                }
            }
        }
     }
`

// not sure about this either
export const REMOVE_BOOK = gql`
     mutation deleteBook($savedBooks: [Book!]!, $bookId: String!) {
        deleteBook(savedBooks: $savedBooks) {
            token
            user {
                _id
                savedBooks {
                    bookId
                }
            }
        }
     }
`

