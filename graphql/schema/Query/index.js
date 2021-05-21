const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    ping: String
    users: [User]
    loginUser: User
    posts(filter: String, page: Int, limit: Int, area: String, season: String, lat: Float, lng: Float, year: String): PostWithPage
    myPosts(page: Int, limit: Int, area: String, lat: Float, lng: Float): PostWithPage
    areas: [Area]
    myArea(lat: Float, lng: Float): Area
  }
`;

module.exports = typeDefs;
