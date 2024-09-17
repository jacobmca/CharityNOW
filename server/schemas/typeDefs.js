const typeDefs =`
  type User {
    _id: ID!
    username: String!
    email:String!
    password:String!
    charities: [Charity]
    donations: [Donation]
  }
  
  type Charity {
    _id: ID!
    name: String!
    description: String!
    address: String!
    image: String
    amountContributed: Float
    users: [User]
    donations: [Donation]
  }

 type Donation {
    _id: ID!
    amount: Float!
    user: User!
    charity: Charity!
  }

  type Auth{
    token: ID!
    user :User
  }

  type Query {
    me: User
    allCharities: [Charity]
    charity(_id: ID!): Charity

  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCharity(name: String!, description: String!, address: String!, image: String): Charity
    addDonation(charityId: ID!, amount: Float!): Donation
  }
`;

module.exports = typeDefs;
