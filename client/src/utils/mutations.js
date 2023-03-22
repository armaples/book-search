import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
                user {
                    _id
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
            }
        }
     }
`;

// not sure about this one
export const SAVE_BOOK = gql`
     mutation saveBook($input: BookInput) {
            saveBook(input: $input) {
                _id
                savedBooks {
                    bookId
                    authors
                    title
                    description
                    image
                }
            }
        }
`

// not sure about this either
export const REMOVE_BOOK = gql`
     mutation deleteBook($input: BookInput) {
        deleteBook(input: $input) {
            _id
            savedBooks {
                bookId
                authors
                title
                description
                image
            }
        }
    }
`

