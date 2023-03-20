import { gql } from '@apollo/client';

export const GET_ME = gql`
    query getUser {
        user {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                title
                description
                image
                link
            }
        }
    }`