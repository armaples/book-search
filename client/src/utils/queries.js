import { gql } from '@apollo/client';

export const GET_ME = gql`
    query user {
        user {
            _id
            username
            email
            password
            savedBooks {
                _id
                bookId
                authors
                title
                image
                link
            }
        }
    }`