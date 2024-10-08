import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
  query allUsers {
  users {
    _id
    email
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
    username
  }
}
`;

export const QUERY_ME = gql`
  query getMe {
  me {
    _id
    email
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
    friends {
      _id
      email
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
      username
    }
  }
}
`;
