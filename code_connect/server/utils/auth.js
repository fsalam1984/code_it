// const graphql = require('graphql')

// // const { GraphQLError, GraphQLString } = require('graphql');

// const jwt = require('jsonwebtoken');

// const secret = 'mysecretssshhhhhhh';
// const expiration = '2h';

// module.exports = {
//   AuthenticationError: new GraphQLError('Could not authenticate user.', {
//     extensions: {
//       code: 'UNAUTHENTICATED',
//     },
//   }),

  
//   authMiddleware: function ({ req }) {
//     // let token = req.body.token || req.query.token || req.headers.authorization;
//     let token = req.headers.authorization || '';


//     if (token.startsWith('Bearer ')) {
//             token = token.slice(7).trim(); // Remove 'Bearer ' from the token string
//           }
//     if (req.headers.authorization) {
//       token = token.split(' ').pop().trim();
//     }

//     if (!token) {
//       return req;
//     }

//     try {
//       const { data } = jwt.verify(token, secret, { maxAge: expiration });
//       req.user = data;
//     } catch (err){
//       console.log('Invalid token');
//     }

//     return req;
//   },
//   signToken: function ({ email, username, _id }) {
//     const payload = { email, username, _id };
//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   },
// };



//Updated code 

const { AuthenticationError } = require('apollo-server-express'); // Use this for error handling in Apollo Server
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'mysecretssshhhhhhh'; // Use environment variable for secret
const expiration = '2h';

module.exports = {
  AuthenticationError: new AuthenticationError('Could not authenticate user.'),
  
  authMiddleware: function ({ req }) {
    let token = req.headers.authorization || '';

    // Ensure the token starts with 'Bearer '
    if (token.startsWith('Bearer ')) {
      token = token.slice(7).trim(); // Remove 'Bearer ' from the token string
    } else if (req.headers.authorization) {
      token = req.headers.authorization.split(' ').pop().trim();
    }

    // If no token is found, return the request object
    if (!token) {
      return req;
    }

    try {
      // Verify the token and attach user data to request
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (err) {
      console.log('Invalid token', err);
      req.user = null; // Ensure `req.user` is null if the token is invalid
    }

    return req;
  },

  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
