import { gql } from '@apollo/client';

export const GET_ME = gql`
    query getUser {
        user {
            token
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