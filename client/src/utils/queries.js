import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      charities {
        _id
        name
        description
        address
        image
        amountContributed
      }
      donations {
        _id
        amount
        charity {
          _id
          name
        }
      }
    }
  }
`;

export const GET_ALL_CHARITIES = gql`
  query allCharities {
    allCharities {
      _id
      name
      description
      address
      image
      amountContributed
      users {
        _id
        username
      }
      donations {
        _id
        amount
      }
    }
  }
`;

export const GET_CHARITY = gql`
  query charity($id: ID!) {
    charity(_id: $id) {
      _id
      name
      description
      address
      image
      amountContributed
      users {
        _id
        username
      }
      donations {
        _id
        amount
      }
    }
  }
`;
