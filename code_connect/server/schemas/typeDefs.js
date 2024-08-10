const typeDefs = `
  type Profile {
    bio: String
    years_of_experience: Int
    companies: [String]
    job_title: String
    education: String
    languages: [String]
    niche: String
    unique_characteristic: String
    images: [String]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    profile: Profile
    friends: [User]
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFriend(friendId: ID!): User
    removeFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
