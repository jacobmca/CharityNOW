const jwt = require('jsonwebtoken');
const { GraphQLError } = require('graphql');
// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user.', {
        extensions: {
          code: 'UNAUTHENTICATED',
        },
      }),
  // function for our authenticated routes
  authMiddleware: function ({req}) {
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
// Bypass authentication in development
    if (process.env.NODE_ENV === 'development') {
      req.user = { _id: '66e25ab343b1cfcd28f42381' }; // Mock user for testing
      return req;
    }

    if (!token) {
      req.user = { _id: '66e25ab343b1cfcd28f42381' }; // Mock user for testing
      return req
    }
    if (!token) {
      return req
    }
    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
      
    }
    return req

 
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
