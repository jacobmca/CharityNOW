import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
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
        email
      }
    }
  }
`;

export const ADD_CHARITY = gql`
  mutation addCharity($name: String!, $description: String!, $address: String!, $image: String) {
    addCharity(name: $name, description: $description, address: $address, image: $image) {
      _id
      name
      description
      address
      image
      amountContributed
    }
  }
`;

export const ADD_DONATION = gql`
  mutation addDonation($charityId: ID!, $amount: Float!) {
    addDonation(charityId: $charityId, amount: $amount) {
      _id
      amount
      charity {
        _id
        name
      }
      user {
        _id
        username
      }
    }
  }
`;
