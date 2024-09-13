import { gql } from '@apollo/client';
export const QUERY_DONATIONS = gql`
    query donations {
        donations {
            _id
            title
            description
            amount
            date
        }
    }
`;
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      donations {
        _id
        amount
        createdAt
        message
      }
    }
  }
`;
export const QUERY_ORGANIZATIONS = gql`
  query getOrganizations {
    organizations {
      _id
      name
    }
  }
`;