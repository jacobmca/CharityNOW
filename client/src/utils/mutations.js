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

export const ADD_DONATION = gql`
  mutation addDonation($organizationId: ID!, $amount: Float!, $message: String) {
    addDonation(organizationId: $organizationId, amount: $amount, message: $message) {
      _id
      amount
      createdAt
      message
      organization {
        _id
        name
      }
    }
  }
`;

