const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email:String!
    charityContributions: [CharityContribution]
  }
  input CharityContributionInput {
    charityId: ID!
    amount: Float!
    dateContributed: String!
  }
  type Charity {
    _id: ID!
    name: String!
    description: String!
    image: String!
  }
  type Auth{
  token:ID!
  user:User
  }
  type Query {
    me:User
    allCharity:Charity
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCharityContribution(charityId: ID!, amount: Float!, dateContributed: String!): User
    addCharity(name: String!, description: String!, image: String!): Charity
     }
`;

module.exports = typeDefs;
