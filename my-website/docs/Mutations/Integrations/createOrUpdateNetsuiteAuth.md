# createOrUpdateNetsuiteAuth

## Description
Creates or updates Netsuite authentication information.

## GraphQL Schema
```graphql
schema {
  mutation: CreateOrUpdateNetsuiteAuthMutation
}

mutation {
  createOrUpdateNetsuiteAuth(netsuiteAuth: NetsuiteAuthInputType!): CreateUpdateNetsuiteAuth
}

type CreateUpdateNetsuiteAuth {
  netsuiteAuth: NetsuiteAuthObjectType
}

type NetsuiteAuthObjectType {
  clientId: String!
  clientSecret: String!
  tokenId: String!
  tokenSecret: String!
  subsidiaryId: String!
  account: String!
}

input NetsuiteAuthInputType {
  clientId: String!
  clientSecret: String!
  tokenId: String!
  tokenSecret: String!
  subsidiaryId: String!
  account: String!
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| netsuiteAuth | NetsuiteAuthInputType! | Input object containing Netsuite authentication details including client credentials, token details, subsidiary ID and account information |