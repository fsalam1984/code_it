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
<<<<<<< HEAD
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
=======
  mutation addFriend($friendId: ID!) {
    addFriend(friendId: $friendId) {
      _id
      email
      username
>>>>>>> 6efdf7e62d22f51d9d4af4635c19e4f47a59b996
    }
  }
`;

export const REMOVE_FRIEND = gql`
<<<<<<< HEAD
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
=======
  mutation removeFriend($friendId: ID!) {
    removeFriend(friendId: $friendId) {
      _id
      email
      username
>>>>>>> 6efdf7e62d22f51d9d4af4635c19e4f47a59b996
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