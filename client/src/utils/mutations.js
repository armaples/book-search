import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
     mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
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
     mutation removeBook($savedBooks: [Book!]!, $bookId: String!) {
        removeBook(savedBooks: $savedBooks) {
            token
            user {
                _id
                savedBooks {
                    bookId
                }
            }
        }
     })
`