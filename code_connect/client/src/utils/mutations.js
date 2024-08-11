import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
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
    friends {
      _id
    }
    username
    profile {
      bio
      years_of_experience
      companies
      job_title
      education
      languages
      niche
      unique_characteristic
      images
    }
  }
}
`;

export const REMOVE_FRIEND = gql`
mutation removeFriend($friendId: ID!) {
  removeFriend(friendId: $friendId) {
    _id
    email
    username
    friends {
      _id
    }
    profile {
      bio
      years_of_experience
      companies
      job_title
      education
      languages
      niche
      unique_characteristic
      images
    }
  }
}
`;
