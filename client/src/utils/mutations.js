import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
                user {
                    _id
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
     mutation saveBook($savedBooks: [Book], $bookId: ID!) {
            saveBook(savedBooks: $savedBooks, bookId: $bookId) {
                token
                    user {
                        _id
                        savedBooks {
                            bookId
                            authors
                            title
                            description
                            image
                            link
                        }
                    }
            }
        }
`

// not sure about this either
export const REMOVE_BOOK = gql`
     mutation deleteBook($savedBooks: [Book], $bookId: ID!) {
        deleteBook(savedBooks: $savedBooks, bookId: $bookId) {
            token
                user {
                    savedBooks {
                        bookId
                    }
                }
        }
    }
`

