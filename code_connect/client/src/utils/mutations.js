import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($friendId: ID!) {
    addFriend(friendId: $friendId) {
      _id
      email
      username
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($friendId: ID!) {
    removeFriend(friendId: $friendId) {
      _id
      email
      username
    }
  }
`;
export const UPDATE_BIO = gql
`mutation UpdateBio($bioinfo: String!) {
  updateBio(bioinfo: $bioinfo) {
    email
    _id
    profile {
      bio
    }
  }
}`
;